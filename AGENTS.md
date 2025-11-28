# Rules for AI Assistants

**IF YOU ARE AN AI ASSISTANT YOU MUST FOLLOW THESE RULES**

## Standard Development Workflow

1. Always read this document first before any task
2. Check for service-specific AGENTS.md files in subdirectories
3. Review relevant documentation in docs/ directory
4. Understand the existing code structure before making changes
5. Run tests before committing any changes
6. Update documentation when making changes that affect it
7. Follow the commit message format specified below

## Repository Overview

**Primary Language:** TypeScript/JavaScript
**Build System:** Vite + npm
**Architecture:** Full-stack web application (React frontend + AWS Amplify backend)
**Main Components:** 
- React frontend with TypeScript
- AWS Amplify Gen1 backend (GraphQL API, Auth, Storage, Lambda)
- DynamoDB for data persistence
- S3 for image storage
- Cognito for authentication

## Build and Test Commands

### Setting Up Development Environment
```bash
# Install dependencies
npm install

# Initialize Amplify (first time only)
amplify init
# Select all default options except Distribution Directory Path: use 'dist' (not 'build')
# Choose AWS profile with appropriate permissions
```

### Building the Project
```bash
# Build for production
npm run build

# Type check
tsc -b
```

### Running Tests
```bash
# Lint code
npm run lint
```

### Running the Application
```bash
# Development mode (with hot reload)
npm run dev

# Preview production build
npm run preview
```

### Amplify Commands
```bash
# Push backend changes to AWS
amplify push

# Add new backend resources
amplify add <category>  # api, auth, storage, function, hosting

# Publish to hosting
amplify publish

# Check backend status
amplify status

# Pull backend environment
amplify pull
```

## Project Structure

```
/
├── src/                   # Frontend source code
│   ├── App.tsx           # Main React application component
│   ├── main.tsx          # Application entry point
│   ├── API.ts            # Generated TypeScript types for GraphQL
│   └── graphql/          # GraphQL queries and mutations
├── amplify/              # AWS Amplify backend configuration
│   └── backend/          # Backend resource definitions
│       ├── api/          # GraphQL API schema and resolvers
│       ├── auth/         # Cognito authentication config
│       ├── storage/      # S3 storage configuration
│       └── function/     # Lambda functions
├── public/               # Static assets
├── docs/                 # Documentation (Mantle-style)
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite build configuration
└── tsconfig.json         # TypeScript configuration
```

## Commit Message Format

All commits must follow this exact format:

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

Example:
```
Add project board color customization feature

Implemented color picker in project creation and edit forms
allowing users to customize the left border color of project
boards. Updated Project type to include optional color field.
Modified ProjectBoard component to use custom color or fall back
to status-based colors. Tested with multiple projects and color
values.

---
Prompt: Add ability for users to customize the color of their
project boards
```

## Code Quality Standards

1. **Clear Naming**: Use descriptive variable and function names
2. **Error Handling**: Always handle errors with try-catch blocks and log appropriately
3. **Logging**: Use console.log for debugging, console.error for errors
4. **Comments**: Add comments for complex logic, especially in GraphQL operations
5. **Functions**: Keep functions small and focused on a single responsibility
6. **Testing**: Test all GraphQL operations and UI interactions manually
7. **Patterns**: Follow existing patterns in the codebase (see service docs)

## Language-Specific Guidelines

### TypeScript/React Guidelines
- Use functional components with hooks (useState, useEffect, useRef)
- Use TypeScript types for all props and state
- Prefer const/let, never var
- Use async/await for asynchronous operations
- Add proper error handling for all AWS Amplify operations
- Use the appropriate Amplify client (authenticatedClient vs publicClient)
- Follow existing styling patterns (inline styles with theme support)

### AWS Amplify Patterns
- Use `generateClient()` with appropriate authMode ('userPool' for authenticated, default for public)
- Always handle errors from GraphQL operations
- Use `uploadData` for S3 uploads with proper path structure
- Use `getUrl` to retrieve signed URLs for S3 objects
- Check authentication state before performing owner-based operations

## Common Tasks

### Adding a New GraphQL Model
1. Update `amplify/backend/api/stresstestapp/schema.graphql`
2. Run `amplify push` to deploy changes
3. Update frontend to use new types from generated `API.ts`
4. Add queries/mutations to `src/graphql/` if needed
5. Update UI components to work with new model

### Adding a New Lambda Function
1. Run `amplify add function`
2. Implement function in `amplify/backend/function/<name>/src/index.js`
3. Add function to GraphQL schema with `@function` directive
4. Run `amplify push` to deploy
5. Test function through GraphQL query/mutation

### Modifying Authentication Rules
1. Update `@auth` rules in GraphQL schema
2. Run `amplify push`
3. Update frontend to use correct client (authenticatedClient vs publicClient)
4. Test with both authenticated and unauthenticated users

### Adding Image Upload Functionality
1. Use `uploadData` from 'aws-amplify/storage'
2. Store path in DynamoDB via GraphQL mutation
3. Use `getUrl` to retrieve signed URL for display
4. Handle multiple images with array of paths
5. Implement proper error handling for upload failures

## Troubleshooting

### Build Failures
1. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
2. Check TypeScript errors: `tsc -b`
3. Verify all imports are correct
4. Check for missing dependencies in package.json

### Amplify Backend Issues
1. Check backend status: `amplify status`
2. Pull latest backend: `amplify pull`
3. Verify AWS credentials are configured
4. Check CloudFormation stack in AWS console for errors
5. Review CloudWatch logs for Lambda functions

### GraphQL Errors
1. Verify schema is valid and deployed
2. Check authentication mode matches operation requirements
3. Verify user has proper permissions (owner vs public)
4. Check CloudWatch logs for AppSync resolver errors
5. Test queries in AppSync console

### Storage/S3 Issues
1. Verify storage category is configured: `amplify status`
2. Check IAM permissions for authenticated/guest users
3. Verify file paths follow correct structure
4. Check S3 bucket CORS configuration
5. Ensure file size is within limits

## Important Notes

- Never commit AWS credentials or sensitive data
- Always test authentication flows with both authenticated and unauthenticated users
- Keep GraphQL schema in sync with frontend types
- Use proper auth modes for GraphQL operations (userPool vs public)
- Handle image uploads asynchronously with proper loading states
- Update documentation when adding new features or changing architecture
- Test dark mode compatibility for all UI changes
- Verify responsive design on different screen sizes

**ALWAYS FOLLOW THESE RULES WHEN WORKING IN THIS PROJECT**
