# Troubleshooting Guide

## Quick Diagnostics

### Check System Health

```bash
# Check Amplify backend status
amplify status

# Check Node.js version
node -v

# Check npm version
npm -v

# Verify AWS credentials
aws sts get-caller-identity

# Check if development server is running
lsof -i :5173
```

### Check Logs

**Browser Console:**
- Open Developer Tools (F12)
- Check Console tab for errors
- Check Network tab for failed requests

**CloudWatch Logs:**
```bash
# View Lambda function logs
aws logs tail /aws/lambda/quotegenerator --follow

# View AppSync logs (if enabled)
aws logs tail /aws/appsync/apis/<api-id> --follow
```

### Check Resources

```bash
# Check disk space
df -h

# Check memory usage
free -m  # Linux
vm_stat  # macOS

# Check running processes
ps aux | grep node
```

## Common Issues

### Application Won't Start

#### Symptom
Running `npm run dev` fails or application doesn't load in browser.

#### Possible Causes
1. Port 5173 is already in use
2. Node modules are corrupted
3. Syntax errors in code
4. Missing dependencies

#### Solutions

**1. Check if port is in use:**
```bash
# Find process using port 5173
lsof -i :5173

# Kill the process if needed
kill -9 <PID>

# Or use a different port
npm run dev -- --port 3000
```

**2. Reinstall dependencies:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**3. Check for syntax errors:**
```bash
npm run lint
tsc -b
```

**4. Clear Vite cache:**
```bash
rm -rf node_modules/.vite
npm run dev
```

### Build Failures

#### Symptom
`npm run build` fails with errors.

#### Possible Causes
1. TypeScript compilation errors
2. Missing dependencies
3. Import errors
4. Configuration issues

#### Solutions

**1. Check TypeScript errors:**
```bash
tsc -b
```

Fix all reported errors.

**2. Verify imports:**
```bash
# Check for missing imports
npm run lint
```

**3. Update dependencies:**
```bash
npm update
npm install
```

**4. Clear build cache:**
```bash
rm -rf dist
npm run build
```

### Authentication Issues

#### Symptom: Users can't sign in

**Possible Causes:**
1. Cognito user pool not configured
2. Incorrect credentials
3. User not confirmed
4. Network issues

**Solutions:**

**1. Verify Cognito configuration:**
```bash
amplify status
# Ensure Auth category shows "No Change"
```

**2. Check user status in AWS Console:**
- Go to Cognito User Pools
- Find your user pool
- Check user status (should be "CONFIRMED")

**3. Reset user password:**
```bash
aws cognito-idp admin-set-user-password \
  --user-pool-id <pool-id> \
  --username <username> \
  --password <new-password> \
  --permanent
```

**4. Check browser console for errors:**
- Look for authentication-related errors
- Verify network requests to Cognito

#### Symptom: "Unauthorized" errors on GraphQL operations

**Possible Causes:**
1. Using wrong GraphQL client
2. User not authenticated
3. Incorrect `@auth` rules
4. Token expired

**Solutions:**

**1. Verify correct client usage:**
```typescript
// For mutations (owner-based)
const result = await authenticatedClient.graphql({
  query: createProject,
  variables: { input: projectData }
});

// For public reads
const result = await publicClient.graphql({
  query: listProjects
});
```

**2. Check authentication state:**
```typescript
import { getCurrentUser } from 'aws-amplify/auth';

try {
  const user = await getCurrentUser();
  console.log('User authenticated:', user);
} catch (error) {
  console.log('User not authenticated');
}
```

**3. Verify `@auth` rules in schema:**
```graphql
type Project @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, operations: [create, read, update, delete] }
]) {
  # ...
}
```

**4. Sign out and sign in again:**
```typescript
import { signOut } from 'aws-amplify/auth';
await signOut();
// Then sign in again
```

### GraphQL Errors

#### Symptom: GraphQL queries/mutations fail

**Possible Causes:**
1. Schema not deployed
2. Invalid query syntax
3. Missing required fields
4. Network issues
5. AppSync API issues

**Solutions:**

**1. Verify schema is deployed:**
```bash
amplify status
# API should show "No Change"

# If changes pending:
amplify push
```

**2. Test query in AppSync console:**
- Go to AWS AppSync console
- Select your API
- Use Queries tab to test

**3. Check query syntax:**
```typescript
// Ensure query matches schema
const result = await publicClient.graphql({
  query: listProjects,
  variables: {
    limit: 100
  }
});
```

**4. Verify required fields:**
```typescript
// All required fields must be provided
const result = await authenticatedClient.graphql({
  query: createProject,
  variables: {
    input: {
      title: 'Required field',
      status: 'ACTIVE'  // Required enum
    }
  }
});
```

**5. Check CloudWatch logs:**
```bash
# View AppSync resolver logs
aws logs tail /aws/appsync/apis/<api-id> --follow
```

### Image Upload/Display Issues

#### Symptom: Images won't upload

**Possible Causes:**
1. S3 bucket not configured
2. File size too large
3. Invalid file type
4. IAM permissions issue
5. CORS configuration

**Solutions:**

**1. Verify S3 configuration:**
```bash
amplify status
# Storage should show "No Change"
```

**2. Check file size:**
```typescript
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

if (file.size > MAX_FILE_SIZE) {
  console.error('File too large');
  return;
}
```

**3. Verify file type:**
```typescript
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif'];

if (!ALLOWED_TYPES.includes(file.type)) {
  console.error('Invalid file type');
  return;
}
```

**4. Check IAM permissions:**
- Go to IAM console
- Verify authenticated role has S3 permissions
- Check bucket policy

**5. Verify CORS configuration:**
```bash
aws s3api get-bucket-cors --bucket <bucket-name>
```

#### Symptom: Images won't display

**Possible Causes:**
1. Incorrect image path
2. Signed URL expired
3. S3 permissions issue
4. CORS error

**Solutions:**

**1. Verify image path format:**
```typescript
// Correct format
const imagePath = 'public/images/filename.jpg';

// Get URL
const url = await getUrl({ path: imagePath });
```

**2. Check browser console:**
- Look for CORS errors
- Check network tab for failed requests
- Verify URL is valid

**3. Test S3 access:**
```bash
aws s3 ls s3://<bucket-name>/public/images/
```

**4. Regenerate signed URL:**
```typescript
// Signed URLs expire after 15 minutes by default
const url = await getUrl({ 
  path: imagePath,
  options: {
    expiresIn: 3600 // 1 hour
  }
});
```

### Amplify Backend Issues

#### Symptom: `amplify push` fails

**Possible Causes:**
1. CloudFormation stack error
2. Resource limit exceeded
3. Invalid configuration
4. Network timeout

**Solutions:**

**1. Check CloudFormation console:**
- Go to CloudFormation in AWS Console
- Find your stack
- Check Events tab for errors

**2. Verify resource limits:**
```bash
# Check service quotas
aws service-quotas list-service-quotas \
  --service-code dynamodb
```

**3. Validate configuration:**
```bash
# Check for syntax errors in schema
cat amplify/backend/api/stresstestapp/schema.graphql
```

**4. Retry with verbose logging:**
```bash
amplify push --debug
```

**5. Delete and recreate if necessary:**
```bash
# Last resort - deletes all backend resources
amplify delete
amplify init
# Reconfigure all categories
```

#### Symptom: Backend out of sync

**Possible Causes:**
1. Local changes not pushed
2. Remote changes not pulled
3. Multiple developers working

**Solutions:**

**1. Check status:**
```bash
amplify status
```

**2. Pull latest changes:**
```bash
amplify pull
```

**3. Push local changes:**
```bash
amplify push
```

**4. Resolve conflicts:**
- Review differences
- Decide which changes to keep
- Push or pull as needed

### Performance Issues

#### Symptom: Application is slow

**Possible Causes:**
1. Large GraphQL queries
2. Too many re-renders
3. Unoptimized images
4. Memory leaks
5. Network latency

**Solutions:**

**1. Optimize GraphQL queries:**
```typescript
// Only request needed fields
const result = await publicClient.graphql({
  query: `
    query ListProjects {
      listProjects {
        items {
          id
          title
          status
          # Don't fetch todos if not needed
        }
      }
    }
  `
});
```

**2. Use React.memo:**
```typescript
const TodoCard = React.memo<TodoCardProps>(({ todo }) => {
  // Component implementation
});
```

**3. Optimize images:**
```typescript
// Compress images before upload
// Use appropriate image formats (WebP, JPEG)
// Implement lazy loading
```

**4. Check for memory leaks:**
```typescript
useEffect(() => {
  // Cleanup function
  return () => {
    // Cancel subscriptions
    // Clear timers
    // Remove event listeners
  };
}, []);
```

**5. Use pagination:**
```typescript
const result = await publicClient.graphql({
  query: listProjects,
  variables: {
    limit: 20,
    nextToken: currentToken
  }
});
```

### Theme Issues

#### Symptom: Theme not persisting

**Possible Causes:**
1. localStorage not working
2. Browser privacy settings
3. Code error

**Solutions:**

**1. Check localStorage:**
```javascript
// In browser console
localStorage.getItem('theme')
localStorage.setItem('theme', 'dark')
```

**2. Verify browser settings:**
- Check if cookies/storage are enabled
- Try in incognito mode
- Clear browser cache

**3. Check theme implementation:**
```typescript
const [theme, setTheme] = useState<Theme>(() => {
  try {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'light';
  } catch (error) {
    console.error('Error loading theme:', error);
    return 'light';
  }
});
```

### Deployment Issues

#### Symptom: `amplify publish` fails

**Possible Causes:**
1. Build errors
2. Hosting not configured
3. IAM permissions
4. Network issues

**Solutions:**

**1. Test build locally:**
```bash
npm run build
```

**2. Configure hosting:**
```bash
amplify add hosting
# Choose Amplify Console
amplify publish
```

**3. Check IAM permissions:**
- Verify user has Amplify hosting permissions
- Check CloudFormation permissions

**4. Use verbose logging:**
```bash
amplify publish --debug
```

## Debug Procedures

### Enable Debug Logging

**Frontend:**
```typescript
// Add to main.tsx
if (import.meta.env.DEV) {
  console.log('Development mode enabled');
}
```

**Amplify:**
```bash
# Run commands with debug flag
amplify push --debug
amplify status --debug
```

**AWS CLI:**
```bash
# Enable debug output
aws --debug s3 ls
```

### Trace Request Flow

**1. Browser Network Tab:**
- Open DevTools → Network
- Filter by "Fetch/XHR"
- Check request/response details

**2. GraphQL Operations:**
```typescript
// Add logging
const result = await publicClient.graphql({
  query: listProjects
});
console.log('GraphQL result:', result);
```

**3. CloudWatch Logs:**
```bash
# Lambda logs
aws logs tail /aws/lambda/quotegenerator --follow

# AppSync logs
aws logs tail /aws/appsync/apis/<api-id> --follow
```

### Performance Profiling

**React DevTools:**
1. Install React DevTools extension
2. Open Profiler tab
3. Record interaction
4. Analyze render times

**Chrome DevTools:**
1. Open Performance tab
2. Record page load
3. Analyze bottlenecks

## Getting Help

### Before Asking for Help

1. Check this troubleshooting guide
2. Search existing issues on GitHub
3. Review relevant documentation
4. Try to reproduce in isolation
5. Gather error messages and logs

### When Reporting Issues

Include:
1. **Environment:**
   - Node.js version
   - npm version
   - Operating system
   - Browser and version

2. **Steps to Reproduce:**
   - Exact steps taken
   - Expected behavior
   - Actual behavior

3. **Error Messages:**
   - Full error text
   - Stack traces
   - Console logs

4. **Code Samples:**
   - Relevant code snippets
   - Configuration files
   - GraphQL queries

5. **Screenshots:**
   - Error messages
   - Network tab
   - Console output

### Support Resources

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [AWS Support](https://aws.amazon.com/support/)
- [GitHub Issues](https://github.com/your-repo/issues)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/aws-amplify)

## Preventive Measures

### Regular Maintenance

```bash
# Update dependencies monthly
npm update

# Check for security vulnerabilities
npm audit
npm audit fix

# Clean up old resources
amplify env remove <old-env>
```

### Best Practices

1. **Version Control:**
   - Commit frequently
   - Use meaningful commit messages
   - Don't commit sensitive data

2. **Testing:**
   - Test before deploying
   - Test in multiple browsers
   - Test both auth states

3. **Monitoring:**
   - Set up CloudWatch alarms
   - Monitor error rates
   - Track performance metrics

4. **Backups:**
   - Export DynamoDB data regularly
   - Keep S3 versioning enabled
   - Document configuration

5. **Documentation:**
   - Keep docs updated
   - Document workarounds
   - Share knowledge with team

## Related Documentation

- [Development Setup](../development/setup.md)
- [Architecture Overview](../architecture/README.md)
- [API Documentation](../api/README.md)
- [Contributing Guidelines](../development/contributing.md)
