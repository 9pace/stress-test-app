# API Documentation

## Overview

The Project Boards application uses a GraphQL API powered by AWS AppSync. The API provides operations for managing projects, todos, and generating inspirational quotes. All data operations use GraphQL queries and mutations with automatic type generation.

## Authentication

The API supports two authentication modes:

### Public Access (Unauthenticated)
- **Operations:** Read-only access to all projects and todos
- **Auth Mode:** Default (API Key)
- **Use Case:** Viewing content without signing in

### Authenticated Access
- **Operations:** Full CRUD operations on owned resources
- **Auth Mode:** User Pool (Cognito JWT)
- **Use Case:** Creating, updating, and deleting own projects and todos

## GraphQL Schema

### Types

#### Project
Represents a project board that can contain multiple todos.

```graphql
type Project {
  id: ID!
  title: String!
  description: String
  status: ProjectStatus!
  deadline: AWSDateTime
  color: String
  owner: String
  todos: [Todo]
  createdAt: AWSDateTime!
  updatedAt: AWSDateTime!
}
```

**Fields:**
- `id`: Unique identifier (auto-generated)
- `title`: Project name (required)
- `description`: Optional project description
- `status`: Current status (ACTIVE, COMPLETED, ON_HOLD, ARCHIVED)
- `deadline`: Optional deadline timestamp
- `color`: Optional hex color for board customization (e.g., "#007bff")
- `owner`: Username of the creator (auto-populated by Cognito)
- `todos`: Array of associated todos
- `createdAt`: Timestamp of creation (auto-generated)
- `updatedAt`: Timestamp of last update (auto-generated)

#### Todo
Represents an individual task that can optionally belong to a project.

```graphql
type Todo {
  id: ID!
  name: String!
  description: String
  images: [String]
  projectID: ID
  owner: String
  createdAt: AWSDateTime!
  updatedAt: AWSDateTime!
}
```

**Fields:**
- `id`: Unique identifier (auto-generated)
- `name`: Todo title (required)
- `description`: Optional detailed description
- `images`: Array of S3 image paths
- `projectID`: Optional ID of parent project
- `owner`: Username of the creator (auto-populated by Cognito)
- `createdAt`: Timestamp of creation (auto-generated)
- `updatedAt`: Timestamp of last update (auto-generated)

#### ProjectStatus
Enum representing possible project states.

```graphql
enum ProjectStatus {
  ACTIVE
  COMPLETED
  ON_HOLD
  ARCHIVED
}
```

#### QuoteResponse
Response type for the quote generator function.

```graphql
type QuoteResponse {
  message: String!
  quote: String!
  author: String!
  timestamp: String!
  totalQuotes: Int!
}
```

## Queries

### listProjects
Retrieve all projects with pagination support.

**Query:**
```graphql
query ListProjects($limit: Int, $nextToken: String) {
  listProjects(limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      status
      deadline
      color
      owner
      createdAt
      updatedAt
    }
    nextToken
  }
}
```

**Variables:**
```json
{
  "limit": 100,
  "nextToken": null
}
```

**Response:**
```json
{
  "data": {
    "listProjects": {
      "items": [
        {
          "id": "abc123",
          "title": "Website Redesign",
          "description": "Modernize company website",
          "status": "ACTIVE",
          "deadline": "2025-12-31T00:00:00.000Z",
          "color": "#007bff",
          "owner": "user@example.com",
          "createdAt": "2025-11-26T12:00:00.000Z",
          "updatedAt": "2025-11-26T12:00:00.000Z"
        }
      ],
      "nextToken": null
    }
  }
}
```

**Authorization:** Public (read-only)

### getProject
Retrieve a single project by ID.

**Query:**
```graphql
query GetProject($id: ID!) {
  getProject(id: $id) {
    id
    title
    description
    status
    deadline
    color
    owner
    todos {
      items {
        id
        name
        description
        images
      }
    }
    createdAt
    updatedAt
  }
}
```

**Variables:**
```json
{
  "id": "abc123"
}
```

**Authorization:** Public (read-only)

### listTodos
Retrieve all todos with pagination support.

**Query:**
```graphql
query ListTodos($limit: Int, $nextToken: String) {
  listTodos(limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      images
      projectID
      owner
      createdAt
      updatedAt
    }
    nextToken
  }
}
```

**Authorization:** Public (read-only)

### getTodo
Retrieve a single todo by ID.

**Query:**
```graphql
query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    images
    projectID
    owner
    createdAt
    updatedAt
  }
}
```

**Authorization:** Public (read-only)

### getRandomQuote
Generate a random inspirational quote via Lambda function.

**Query:**
```graphql
query GetRandomQuote {
  getRandomQuote {
    message
    quote
    author
    timestamp
    totalQuotes
  }
}
```

**Response:**
```json
{
  "data": {
    "getRandomQuote": {
      "message": "Quote generated successfully! 🎯",
      "quote": "The only way to do great work is to love what you do.",
      "author": "Steve Jobs",
      "timestamp": "2025-11-26T16:30:00.000Z",
      "totalQuotes": 14
    }
  }
}
```

**Authorization:** Public

## Mutations

### createProject
Create a new project board.

**Mutation:**
```graphql
mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    id
    title
    description
    status
    deadline
    color
    owner
    createdAt
    updatedAt
  }
}
```

**Variables:**
```json
{
  "input": {
    "title": "New Project",
    "description": "Project description",
    "status": "ACTIVE",
    "color": "#28a745"
  }
}
```

**Authorization:** Authenticated (owner-based)

### updateProject
Update an existing project (owner only).

**Mutation:**
```graphql
mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
    id
    title
    description
    status
    deadline
    color
    owner
    updatedAt
  }
}
```

**Variables:**
```json
{
  "input": {
    "id": "abc123",
    "title": "Updated Title",
    "status": "COMPLETED"
  }
}
```

**Authorization:** Authenticated (owner only)

### deleteProject
Delete a project (owner only).

**Mutation:**
```graphql
mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
    id
  }
}
```

**Variables:**
```json
{
  "input": {
    "id": "abc123"
  }
}
```

**Authorization:** Authenticated (owner only)

### createTodo
Create a new todo.

**Mutation:**
```graphql
mutation CreateTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    id
    name
    description
    images
    projectID
    owner
    createdAt
    updatedAt
  }
}
```

**Variables:**
```json
{
  "input": {
    "name": "Implement feature",
    "description": "Add new functionality",
    "images": ["public/images/1234567890-abc.jpg"],
    "projectID": "abc123"
  }
}
```

**Authorization:** Authenticated (owner-based)

### updateTodo
Update an existing todo (owner only).

**Mutation:**
```graphql
mutation UpdateTodo($input: UpdateTodoInput!) {
  updateTodo(input: $input) {
    id
    name
    description
    images
    projectID
    owner
    updatedAt
  }
}
```

**Variables:**
```json
{
  "input": {
    "id": "todo123",
    "name": "Updated name",
    "projectID": "newProject456"
  }
}
```

**Authorization:** Authenticated (owner only)

### deleteTodo
Delete a todo (owner only).

**Mutation:**
```graphql
mutation DeleteTodo($input: DeleteTodoInput!) {
  deleteTodo(input: $input) {
    id
  }
}
```

**Variables:**
```json
{
  "input": {
    "id": "todo123"
  }
}
```

**Authorization:** Authenticated (owner only)

## Error Responses

### Common Error Types

#### Unauthorized
```json
{
  "errors": [
    {
      "errorType": "Unauthorized",
      "message": "Not Authorized to access updateProject on type Mutation"
    }
  ]
}
```

**Cause:** Attempting to modify a resource without proper authentication or ownership.

#### ValidationException
```json
{
  "errors": [
    {
      "errorType": "ValidationException",
      "message": "Variable 'input' has an invalid value: Field 'title' is required"
    }
  ]
}
```

**Cause:** Missing required fields or invalid input format.

#### DynamoDBException
```json
{
  "errors": [
    {
      "errorType": "DynamoDb:ConditionalCheckFailedException",
      "message": "The conditional request failed"
    }
  ]
}
```

**Cause:** Database constraint violation or concurrent modification.

## Client Usage Examples

### TypeScript/React with Amplify

#### Setting Up Clients

```typescript
import { generateClient } from 'aws-amplify/api';

// For authenticated operations
const authenticatedClient = generateClient({
  authMode: 'userPool',
});

// For public read operations
const publicClient = generateClient();
```

#### Fetching Projects (Public)

```typescript
import { listProjects } from './graphql/queries';

async function fetchProjects() {
  try {
    const result = await publicClient.graphql({
      query: listProjects,
    });
    const projects = result.data.listProjects.items;
    console.log('Projects:', projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
}
```

#### Creating a Project (Authenticated)

```typescript
import { createProject } from './graphql/mutations';

async function createNewProject() {
  try {
    const result = await authenticatedClient.graphql({
      query: createProject,
      variables: {
        input: {
          title: 'My Project',
          description: 'Project description',
          status: 'ACTIVE',
          color: '#007bff',
        },
      },
    });
    const newProject = result.data.createProject;
    console.log('Created project:', newProject);
  } catch (error) {
    console.error('Error creating project:', error);
  }
}
```

#### Creating Todo with Images

```typescript
import { uploadData } from 'aws-amplify/storage';
import { createTodo } from './graphql/mutations';

async function createTodoWithImages(files: File[]) {
  try {
    // Upload images to S3
    const imageKeys: string[] = [];
    for (const file of files) {
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${file.name.split('.').pop()}`;
      const result = await uploadData({
        path: `public/images/${fileName}`,
        data: file,
        options: {
          contentType: file.type,
        },
      }).result;
      imageKeys.push(result.path);
    }

    // Create todo with image paths
    const result = await authenticatedClient.graphql({
      query: createTodo,
      variables: {
        input: {
          name: 'Todo with images',
          description: 'Description',
          images: imageKeys,
          projectID: 'project123',
        },
      },
    });
    console.log('Created todo:', result.data.createTodo);
  } catch (error) {
    console.error('Error creating todo:', error);
  }
}
```

#### Fetching Quote

```typescript
const getRandomQuote = `
  query GetRandomQuote {
    getRandomQuote {
      message
      quote
      author
      timestamp
      totalQuotes
    }
  }
`;

async function fetchQuote() {
  try {
    const result = await publicClient.graphql({
      query: getRandomQuote,
    });
    const quote = result.data.getRandomQuote;
    console.log(`"${quote.quote}" - ${quote.author}`);
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}
```

## Rate Limits

AWS AppSync has the following default limits:
- **Requests per second:** 1,000 per account per region
- **Concurrent connections:** 10,000 per account per region
- **Message size:** 256 KB maximum

For production applications requiring higher limits, contact AWS Support.

## Best Practices

1. **Use appropriate auth mode**: Always use `authenticatedClient` for mutations and `publicClient` for public reads
2. **Handle errors gracefully**: Wrap all GraphQL operations in try-catch blocks
3. **Optimize queries**: Only request fields you need to reduce payload size
4. **Batch operations**: Use GraphQL's ability to request multiple resources in a single query
5. **Cache responses**: Implement client-side caching for frequently accessed data
6. **Validate input**: Check required fields before making mutations
7. **Handle pagination**: Use `nextToken` for large result sets
8. **Monitor usage**: Track API calls and errors in CloudWatch

## Testing

### Using AppSync Console
1. Navigate to AWS AppSync console
2. Select your API
3. Go to "Queries" section
4. Test queries and mutations with the built-in editor

### Using Postman
1. Get your AppSync endpoint from Amplify configuration
2. Add `x-api-key` header for public operations
3. Add `Authorization` header with Cognito JWT for authenticated operations
4. Send POST requests with GraphQL query in body

## Related Documentation

- [Architecture Overview](../architecture/README.md)
- [Development Setup](../development/setup.md)
- [GraphQL Schema](../../amplify/backend/api/stresstestapp/schema.graphql)
