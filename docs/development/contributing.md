# Contributing Guidelines

## Welcome

Thank you for your interest in contributing to Project Boards! This document provides guidelines and best practices for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the project
- Show empathy towards other contributors

## Getting Started

1. Read the [Development Setup Guide](./setup.md)
2. Review the [Architecture Documentation](../architecture/README.md)
3. Familiarize yourself with the [API Documentation](../api/README.md)
4. Check the `/AGENTS.md` file for project-specific rules

## Development Process

### 1. Find or Create an Issue

- Check existing issues before starting work
- Create a new issue if one doesn't exist
- Discuss major changes before implementing
- Get approval for significant architectural changes

### 2. Fork and Branch

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/stress-test-app.git
cd stress-test-app

# Add upstream remote
git remote add upstream https://github.com/ORIGINAL_OWNER/stress-test-app.git

# Create a feature branch
git checkout -b feature/your-feature-name
```

### 3. Make Changes

Follow these guidelines when making changes:

#### Code Style

**TypeScript/React:**
- Use functional components with hooks
- Use TypeScript types for all props and state
- Prefer `const` and `let`, never `var`
- Use async/await for asynchronous operations
- Add proper error handling with try-catch blocks

**Example:**
```typescript
// Good
const MyComponent: React.FC<{ title: string }> = ({ title }) => {
  const [data, setData] = useState<Data[]>([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await publicClient.graphql({ query: listItems });
        setData(result.data.listItems.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  
  return <div>{title}</div>;
};

// Bad
var MyComponent = function(props) {
  // Missing types, using var, no error handling
  const [data, setData] = useState([]);
  
  useEffect(() => {
    publicClient.graphql({ query: listItems }).then(result => {
      setData(result.data.listItems.items);
    });
  }, []);
  
  return <div>{props.title}</div>;
};
```

#### Naming Conventions

- **Components:** PascalCase (e.g., `ProjectBoard`, `TodoCard`)
- **Functions:** camelCase (e.g., `fetchProjects`, `handleSubmit`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `MAX_FILE_SIZE`)
- **Types/Interfaces:** PascalCase (e.g., `Project`, `TodoInput`)
- **Files:** Match component name (e.g., `ProjectBoard.tsx`)

#### File Organization

```
src/
├── components/          # Reusable components
│   ├── ProjectBoard.tsx
│   └── TodoCard.tsx
├── hooks/              # Custom React hooks
│   └── useAuth.ts
├── utils/              # Utility functions
│   └── formatDate.ts
├── types/              # Shared TypeScript types
│   └── index.ts
├── graphql/            # GraphQL operations
│   ├── queries.ts
│   └── mutations.ts
└── App.tsx             # Main application
```

#### Comments

Add comments for:
- Complex logic that isn't immediately obvious
- GraphQL operations explaining what they do
- Workarounds or temporary solutions
- Public APIs and component props

```typescript
/**
 * Uploads multiple images to S3 and returns their paths.
 * Images are stored with timestamp-based filenames to avoid collisions.
 * 
 * @param files - Array of File objects to upload
 * @returns Array of S3 paths for uploaded images
 */
async function uploadImages(files: File[]): Promise<string[]> {
  const imageKeys: string[] = [];
  
  for (const file of files) {
    // Generate unique filename with timestamp and random string
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${file.name.split('.').pop()}`;
    
    const result = await uploadData({
      path: `public/images/${fileName}`,
      data: file,
      options: { contentType: file.type },
    }).result;
    
    imageKeys.push(result.path);
  }
  
  return imageKeys;
}
```

### 4. Test Your Changes

Before committing, ensure:

#### Linting
```bash
npm run lint
```

Fix all linting errors and warnings.

#### Type Checking
```bash
tsc -b
```

Ensure no TypeScript errors.

#### Build
```bash
npm run build
```

Verify the project builds successfully.

#### Manual Testing

Test your changes thoroughly:

1. **Authentication States:**
   - Test as unauthenticated user (read-only mode)
   - Test as authenticated user (full CRUD)
   - Test sign in/sign out flows

2. **Theme Support:**
   - Test in light mode
   - Test in dark mode
   - Verify theme persistence

3. **Responsive Design:**
   - Test on desktop (1920x1080)
   - Test on tablet (768x1024)
   - Test on mobile (375x667)

4. **GraphQL Operations:**
   - Test create operations
   - Test read operations
   - Test update operations
   - Test delete operations
   - Verify error handling

5. **Image Upload:**
   - Test single image upload
   - Test multiple image upload
   - Test image display
   - Test image download

### 5. Commit Your Changes

Follow the commit message format specified in `/AGENTS.md`:

```
[Single sentence summary - max 72 characters]

[Detailed explanation paragraph describing what was changed,
why it was changed, and how it was tested. Each line must be
word-wrapped at exactly 72 columns. This section can be multiple
paragraphs if needed.]

---
Prompt: [The original user prompt that triggered this work,
also word-wrapped at exactly 72 columns]
```

**Example:**
```
Add project board color customization feature

Implemented color picker in project creation and edit forms
allowing users to customize the left border color of project
boards. Updated Project type to include optional color field.
Modified ProjectBoard component to use custom color or fall back
to status-based colors. Tested with multiple projects and color
values in both light and dark modes.

---
Prompt: Add ability for users to customize the color of their
project boards
```

**Commit Commands:**
```bash
git add .
git commit -m "Your commit message"
```

### 6. Push and Create Pull Request

```bash
# Push to your fork
git push origin feature/your-feature-name
```

Then create a pull request on GitHub:

1. Go to your fork on GitHub
2. Click "Pull Request"
3. Select your feature branch
4. Fill out the PR template
5. Submit for review

## Pull Request Guidelines

### PR Title

Use a clear, descriptive title:
- ✅ "Add project color customization"
- ✅ "Fix image upload error handling"
- ❌ "Update code"
- ❌ "Fix bug"

### PR Description

Include:

1. **What:** What changes were made
2. **Why:** Why these changes were necessary
3. **How:** How the changes were implemented
4. **Testing:** How the changes were tested

**Template:**
```markdown
## Description
Brief description of the changes.

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
- [ ] Tested in light mode
- [ ] Tested in dark mode
- [ ] Tested as authenticated user
- [ ] Tested as unauthenticated user
- [ ] Linting passes
- [ ] Build succeeds
- [ ] No TypeScript errors

## Screenshots (if applicable)
Add screenshots showing the changes.

## Related Issues
Closes #123
```

### Review Process

1. **Automated Checks:** Ensure all CI checks pass
2. **Code Review:** Address reviewer feedback
3. **Testing:** Verify changes work as expected
4. **Documentation:** Update docs if needed
5. **Approval:** Get approval from maintainers
6. **Merge:** Maintainer will merge when ready

## Code Review Checklist

When reviewing code, check for:

### Functionality
- [ ] Code works as intended
- [ ] Edge cases are handled
- [ ] Error handling is appropriate
- [ ] No console errors or warnings

### Code Quality
- [ ] Follows existing patterns
- [ ] Uses TypeScript types properly
- [ ] No unnecessary complexity
- [ ] Functions are focused and small
- [ ] Variable names are descriptive

### Testing
- [ ] Changes are tested manually
- [ ] Works in both light and dark modes
- [ ] Works for authenticated and unauthenticated users
- [ ] Responsive design is maintained

### Documentation
- [ ] Code comments where needed
- [ ] Documentation updated if needed
- [ ] README updated if needed
- [ ] API docs updated if schema changed

### Security
- [ ] No sensitive data exposed
- [ ] Proper authentication checks
- [ ] Input validation where needed
- [ ] No SQL injection or XSS vulnerabilities

### Performance
- [ ] No unnecessary re-renders
- [ ] GraphQL queries are optimized
- [ ] Images are optimized
- [ ] No memory leaks

## Specific Contribution Areas

### Frontend (React/TypeScript)

When working on the frontend:

1. **Use the theme system:**
   ```typescript
   const { theme } = useTheme();
   const themedStyles = getThemedStyles(theme);
   ```

2. **Use appropriate GraphQL client:**
   ```typescript
   // For authenticated operations
   const result = await authenticatedClient.graphql({ query: createProject });
   
   // For public read operations
   const result = await publicClient.graphql({ query: listProjects });
   ```

3. **Handle loading states:**
   ```typescript
   const [loading, setLoading] = useState(false);
   
   async function handleSubmit() {
     setLoading(true);
     try {
       // Operation
     } finally {
       setLoading(false);
     }
   }
   ```

### Backend (GraphQL/Lambda)

When working on the backend:

1. **Update GraphQL schema:**
   - Edit `amplify/backend/api/stresstestapp/schema.graphql`
   - Run `amplify push` to deploy
   - Test in AppSync console

2. **Add Lambda functions:**
   - Use `amplify add function`
   - Implement in `amplify/backend/function/<name>/src/index.js`
   - Add to schema with `@function` directive
   - Deploy with `amplify push`

3. **Modify auth rules:**
   - Update `@auth` directives in schema
   - Test with both authenticated and unauthenticated users
   - Verify owner-based access control

### Documentation

When updating documentation:

1. **Keep it current:** Update docs when code changes
2. **Be clear:** Use simple, direct language
3. **Add examples:** Include code examples where helpful
4. **Test commands:** Verify all commands work
5. **Update links:** Ensure all links are valid

## Common Pitfalls to Avoid

### 1. Wrong GraphQL Client
❌ **Don't:**
```typescript
// Using wrong client for mutation
const result = await publicClient.graphql({
  query: createProject,
  variables: { input: projectData }
});
```

✅ **Do:**
```typescript
// Use authenticated client for mutations
const result = await authenticatedClient.graphql({
  query: createProject,
  variables: { input: projectData }
});
```

### 2. Missing Error Handling
❌ **Don't:**
```typescript
async function fetchData() {
  const result = await publicClient.graphql({ query: listProjects });
  setProjects(result.data.listProjects.items);
}
```

✅ **Do:**
```typescript
async function fetchData() {
  try {
    const result = await publicClient.graphql({ query: listProjects });
    setProjects(result.data.listProjects.items);
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Handle error appropriately
  }
}
```

### 3. Ignoring Theme
❌ **Don't:**
```typescript
<div style={{ backgroundColor: '#ffffff', color: '#000000' }}>
  Content
</div>
```

✅ **Do:**
```typescript
const { theme } = useTheme();
const themedStyles = getThemedStyles(theme);

<div style={themedStyles.container}>
  Content
</div>
```

### 4. Not Testing Both Auth States
Always test:
- ✅ As authenticated user
- ✅ As unauthenticated user
- ✅ Sign in flow
- ✅ Sign out flow

### 5. Forgetting to Update Types
After schema changes:
```bash
amplify push  # Regenerates src/API.ts
```

## Getting Help

If you need help:

1. Check existing documentation
2. Search closed issues
3. Ask in discussions
4. Create a new issue with details

## Recognition

Contributors will be recognized in:
- Project README
- Release notes
- Contributor list

Thank you for contributing to Project Boards! 🎉
