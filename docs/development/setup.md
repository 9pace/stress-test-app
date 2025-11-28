# Development Setup Guide

## Prerequisites

Before setting up the Project Boards application, ensure you have the following installed:

### Required Software

- **Node.js 25.x** (stable at time of writing)
  ```bash
  node -v
  # Should output: v25.2.1 or similar
  ```

- **npm** (comes with Node.js)
  ```bash
  npm -v
  ```

- **AWS CLI** (configured with appropriate credentials)
  ```bash
  aws --version
  ```

- **Amplify CLI**
  ```bash
  npm install -g @aws-amplify/cli
  amplify --version
  ```

### AWS Account Requirements

- Active AWS account with appropriate permissions
- IAM user or role with permissions for:
  - AWS Amplify
  - Amazon Cognito
  - AWS AppSync
  - Amazon DynamoDB
  - Amazon S3
  - AWS Lambda
  - AWS CloudFormation

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd stress-test-app
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React 19 and React DOM
- AWS Amplify SDK
- Amplify UI React components
- TypeScript and type definitions
- Vite build tool
- ESLint for code linting

### 3. Configure AWS Credentials

If you haven't already, configure your AWS credentials:

```bash
aws configure
```

Enter your:
- AWS Access Key ID
- AWS Secret Access Key
- Default region (e.g., us-east-1)
- Default output format (json)

Alternatively, set up a named profile:

```bash
aws configure --profile myprofile
```

### 4. Initialize Amplify Backend

**Important:** This step is only needed for first-time setup or when setting up a new environment.

```bash
amplify init
```

You'll be prompted with several questions:

```
? Enter a name for the environment: dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building: javascript
? What javascript framework are you using: react
? Source Directory Path: src
? Distribution Directory Path: dist  # IMPORTANT: Use 'dist', not 'build'
? Build Command: npm run-script build
? Start Command: npm run-script start
? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use: default (or your profile name)
```

**Key Configuration:**
- **Distribution Directory Path:** Must be `dist` (Vite's default output directory)
- **AWS Profile:** Choose the profile with appropriate permissions

### 5. Pull Backend Configuration (If Joining Existing Project)

If the Amplify backend already exists and you're joining the project:

```bash
amplify pull
```

This will download the backend configuration and generate necessary files like `src/API.ts`.

### 6. Verify Backend Status

Check that all backend resources are properly configured:

```bash
amplify status
```

You should see:
- API (GraphQL)
- Auth (Cognito)
- Storage (S3)
- Function (Lambda)

### 7. Build the Project

```bash
npm run build
```

This compiles TypeScript and builds the production bundle.

### 8. Run the Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173` (Vite's default port).

## IDE Setup

### Visual Studio Code (Recommended)

#### Recommended Extensions

Install these extensions for the best development experience:

1. **ESLint** (`dbaeumer.vscode-eslint`)
   - Provides real-time linting feedback

2. **TypeScript and JavaScript Language Features** (built-in)
   - Enhanced TypeScript support

3. **Prettier - Code formatter** (`esbenp.prettier-vscode`)
   - Consistent code formatting

4. **AWS Toolkit** (`amazonwebservices.aws-toolkit-vscode`)
   - AWS resource management from VS Code

5. **GraphQL** (`graphql.vscode-graphql`)
   - GraphQL syntax highlighting and validation

#### VS Code Settings

Create or update `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "files.associations": {
    "*.graphql": "graphql"
  }
}
```

### Other IDEs

The project works with any IDE that supports TypeScript and React. Ensure your IDE has:
- TypeScript language support
- ESLint integration
- React/JSX syntax highlighting

## Development Workflow

### 1. Start Development Server

```bash
npm run dev
```

This starts Vite's development server with:
- Hot Module Replacement (HMR)
- Fast refresh for React components
- TypeScript type checking
- Automatic browser reload

### 2. Make Changes

Edit files in the `src/` directory. Changes will automatically reload in the browser.

### 3. Run Linter

```bash
npm run lint
```

Fix any linting errors before committing.

### 4. Type Check

```bash
tsc -b
```

Verify TypeScript compilation without building.

### 5. Test Backend Changes

If you modify the GraphQL schema or backend configuration:

```bash
amplify push
```

This will:
- Deploy backend changes to AWS
- Update CloudFormation stacks
- Regenerate `src/API.ts` with new types

### 6. Preview Production Build

```bash
npm run build
npm run preview
```

This builds and serves the production bundle locally.

## Environment Configuration

### Amplify Configuration Files

After running `amplify init` or `amplify pull`, you'll have:

- `src/amplifyconfiguration.json` - Frontend configuration
- `amplify/` - Backend resource definitions
- `.amplifyrc` - Amplify CLI configuration

**Important:** Never commit `amplifyconfiguration.json` to version control if it contains sensitive data.

### Environment Variables

Create a `.env.local` file for local environment variables (if needed):

```bash
# Example environment variables
VITE_API_ENDPOINT=your-api-endpoint
VITE_REGION=us-east-1
```

Access in code:
```typescript
const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
```

## Common Development Tasks

### Adding a New Component

1. Create component file in `src/`:
   ```typescript
   // src/components/MyComponent.tsx
   import React from 'react';
   
   export const MyComponent: React.FC = () => {
     return <div>My Component</div>;
   };
   ```

2. Import and use in `App.tsx`:
   ```typescript
   import { MyComponent } from './components/MyComponent';
   ```

### Modifying GraphQL Schema

1. Edit `amplify/backend/api/stresstestapp/schema.graphql`
2. Run `amplify push` to deploy changes
3. Updated types will be generated in `src/API.ts`
4. Update frontend code to use new types

### Adding a New Lambda Function

1. Add function:
   ```bash
   amplify add function
   ```

2. Follow prompts to configure function

3. Implement function in `amplify/backend/function/<name>/src/index.js`

4. Add to GraphQL schema with `@function` directive

5. Deploy:
   ```bash
   amplify push
   ```

### Working with S3 Storage

Upload file:
```typescript
import { uploadData } from 'aws-amplify/storage';

const result = await uploadData({
  path: 'public/images/myfile.jpg',
  data: file,
  options: {
    contentType: 'image/jpeg',
  },
}).result;
```

Get file URL:
```typescript
import { getUrl } from 'aws-amplify/storage';

const url = await getUrl({ path: 'public/images/myfile.jpg' });
```

## Troubleshooting Setup Issues

### Issue: `amplify init` fails

**Solution:**
1. Verify AWS credentials are configured: `aws sts get-caller-identity`
2. Check IAM permissions include Amplify, CloudFormation, S3
3. Try with a different AWS profile
4. Clear Amplify cache: `rm -rf ~/.amplify`

### Issue: TypeScript errors after `amplify push`

**Solution:**
1. Ensure `src/API.ts` was regenerated
2. Run `npm install` to update dependencies
3. Restart TypeScript server in VS Code: `Cmd+Shift+P` → "TypeScript: Restart TS Server"

### Issue: `npm run dev` fails to start

**Solution:**
1. Check if port 5173 is already in use
2. Clear node_modules: `rm -rf node_modules && npm install`
3. Check for syntax errors: `npm run lint`
4. Verify Node.js version: `node -v` (should be 25.x)

### Issue: GraphQL queries fail with "Unauthorized"

**Solution:**
1. Check if user is authenticated
2. Verify using correct client (`authenticatedClient` vs `publicClient`)
3. Check `@auth` rules in GraphQL schema
4. Verify Cognito user pool is properly configured

### Issue: Images not displaying

**Solution:**
1. Verify S3 bucket is configured: `amplify status`
2. Check CORS configuration in S3 bucket
3. Ensure image paths are stored correctly (e.g., `public/images/file.jpg`)
4. Verify IAM permissions for S3 access
5. Check browser console for CORS errors

### Issue: Build fails with TypeScript errors

**Solution:**
1. Run `tsc -b` to see detailed errors
2. Check `tsconfig.json` configuration
3. Ensure all imports have correct types
4. Update `@types/*` packages: `npm update`

## Development Best Practices

### Code Organization

- Keep components small and focused
- Use TypeScript types for all props and state
- Follow existing patterns in the codebase
- Group related functionality together

### Git Workflow

1. Create feature branch: `git checkout -b feature/my-feature`
2. Make changes and commit frequently
3. Follow commit message format (see AGENTS.md)
4. Push and create pull request
5. Address review feedback
6. Merge when approved

### Testing Changes

Before committing:
1. Test in both light and dark modes
2. Test as authenticated and unauthenticated user
3. Verify responsive design on different screen sizes
4. Run linter: `npm run lint`
5. Build successfully: `npm run build`

### Performance Considerations

- Minimize GraphQL query payload (only request needed fields)
- Use React.memo for expensive components
- Implement loading states for async operations
- Optimize images before uploading
- Use pagination for large data sets

## Next Steps

After completing setup:

1. Review [Architecture Documentation](../architecture/README.md)
2. Explore [API Documentation](../api/README.md)
3. Read [Contributing Guidelines](./contributing.md)
4. Check [Troubleshooting Guide](../operations/troubleshooting.md)

## Getting Help

- Check [Troubleshooting Guide](../operations/troubleshooting.md)
- Review [AWS Amplify Documentation](https://docs.amplify.aws/)
- Check [Vite Documentation](https://vitejs.dev/)
- Review [React Documentation](https://react.dev/)

## Additional Resources

- [AWS Amplify Gen1 Getting Started](https://docs.amplify.aws/gen1/react/start/getting-started/installation/)
- [GraphQL Best Practices](https://graphql.org/learn/best-practices/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React Hooks Reference](https://react.dev/reference/react)
