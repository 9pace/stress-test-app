# 💪 Fitness Goal Tracker

A comprehensive fitness tracking application built with AWS Amplify Gen1, React, and TypeScript. Track your workout programs, exercises, and progress with photos while staying motivated with daily fitness quotes.

![Fitness Goal Tracker](https://img.shields.io/badge/Fitness-Goal%20Tracker-e85d04)
![AWS Amplify](https://img.shields.io/badge/AWS-Amplify-orange)
![React](https://img.shields.io/badge/React-19.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)

## 🎯 Features

### 💪 Workout Program Management
- Create and manage multiple workout programs
- Track program status: Active, Achieved, Paused, or Archived
- Customize program colors for visual organization
- Organize exercises within programs

### 🏋️ Exercise Tracking
- Add individual exercises with detailed descriptions
- Include sets, reps, and personal notes
- Upload progress photos to track your transformation
- Assign exercises to programs or keep them standalone

### 📸 Progress Photos
- Upload multiple photos per exercise
- View photos in an interactive gallery
- Download photos for your records
- Track visual progress over time

### 🔥 Daily Motivation
- Get inspired with fitness motivation quotes
- Lambda-powered quote generator
- 20+ motivational quotes from fitness experts

### 🌓 Dark Mode
- Comfortable viewing in any lighting
- Automatic theme persistence
- Fitness-themed color palette

### 🔐 Authentication & Security
- Read-only mode for unauthenticated users
- Full CRUD access for authenticated users
- Owner-based permissions
- Secure AWS Cognito authentication

## 🏗️ Architecture

### Backend (AWS Amplify Gen1)
- **GraphQL API**: AppSync with DynamoDB
- **Authentication**: Amazon Cognito
- **Storage**: Amazon S3 for progress photos
- **Serverless Functions**: AWS Lambda for quote generation
- **Hosting**: Amplify Console

### Frontend
- **Framework**: React 19.1 with TypeScript
- **Build Tool**: Vite
- **UI Components**: AWS Amplify UI React
- **State Management**: React Hooks
- **Styling**: Inline styles with theme support

## 📋 Prerequisites

- Node.js 25+ (stable)
- AWS Account with appropriate permissions
- AWS Amplify CLI

```bash
$ node -v
v25.2.1
```

[Amplify Gen1 Getting Started](https://docs.amplify.aws/gen1/react/start/getting-started/installation/)

## 🚀 Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Initialize Amplify

```bash
amplify init
```

Configuration:
- Select all default options except:
- **Distribution Directory Path**: `dist` (not `build`)
- Choose your AWS profile with Amplify permissions

```
? Initialize the project with the above configuration? No
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
✔ Choose the type of app that you're building · javascript
? What javascript framework are you using react
? Source Directory Path: src
? Distribution Directory Path: dist
? Build Command: npm run-script build
? Start Command: npm run-script start
Using default provider awscloudformation
? Select the authentication method you want to use: AWS profile
? Please choose the profile you want to use default
```

### 3. Add API

```bash
amplify add api
```

Settings:
- Choose: **GraphQL**
- Name: `stresstestapp`
- Authorization: **API key** (default, 7 days expiration)
- Conflict detection: **Disabled**
- Template: **Single object with fields**

The GraphQL schema defines:
- **Project** model: Workout programs with status tracking
- **Todo** model: Individual exercises with image support
- **QuoteResponse**: Motivational quotes from Lambda

### 4. Add Authentication

```bash
amplify add auth
```

```
? Do you want to use the default authentication and security configuration? Default configuration
? How do you want users to be able to sign in? Email
? Do you want to configure advanced settings? No, I am done.
```

### 5. Add Storage

```bash
amplify add storage
```

```
? Select from one of the below mentioned services: Content (Images, audio, video, etc.)
? Provide a friendly name: s3d40f26c3
? Provide bucket name: fitnesstrackerXXXXXXXX
? Who should have access: Auth and guest users
? What kind of access for Authenticated users? create/update, read, delete
? What kind of access for Guest users? create/update, read, delete
? Do you want to add a Lambda Trigger? No
```

### 6. Add Lambda Function

```bash
amplify add function
```

```
? Select which capability you want to add: Lambda function
? Provide an AWS Lambda function name: quotegenerator
? Choose the runtime: NodeJS
? Choose the function template: Hello World
? Do you want to configure advanced settings? Yes
? Do you want to access other resources? No
? Do you want to invoke this function on a recurring schedule? No
? Do you want to enable Lambda layers? No
? Do you want to configure environment variables? No
? Do you want to configure secret values? No
? Choose the package manager: NPM
? Do you want to edit the local lambda function now? Yes
```

The function is already configured with 20 fitness motivational quotes.

### 7. Deploy Backend

```bash
amplify push
```

Select **Y** for all prompts to deploy your backend infrastructure.

### 8. Add Hosting (Optional)

```bash
amplify add hosting  # Choose Amplify Console
amplify publish
```

## 💻 Development

### Run Development Server

```bash
npm run dev
```

Access the app at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 📊 Data Models

### Project (Workout Program)
```graphql
type Project {
  id: ID!
  title: String!
  description: String
  status: ProjectStatus!  # ACTIVE, COMPLETED, ON_HOLD, ARCHIVED
  deadline: AWSDateTime
  color: String
  todos: [Todo]
}
```

### Todo (Exercise)
```graphql
type Todo {
  id: ID!
  name: String!
  description: String
  images: [String]  # S3 paths to progress photos
  projectID: ID
}
```

## 🎨 Color Scheme

The fitness theme uses an energetic, motivating color palette:

- **Primary**: `#e85d04` (Energetic Orange)
- **Success**: `#2a9d8f` (Achievement Teal)
- **Warning**: `#f48c06` (Pause Amber)
- **Neutral**: `#6c757d` (Archive Gray)

## 🔒 Security & Permissions

### Authorization Rules

**Projects & Exercises**:
- **Public**: Read-only access
- **Owner**: Full CRUD operations

**Authentication**:
- Cognito-managed user pools
- Email-based sign-in
- Owner-based access control

## 📱 Features by User Type

### Unauthenticated Users
- ✅ View all workout programs
- ✅ View all exercises
- ✅ View progress photos
- ❌ Cannot create, edit, or delete

### Authenticated Users
- ✅ Everything unauthenticated users can do
- ✅ Create workout programs
- ✅ Add exercises to any program
- ✅ Upload progress photos
- ✅ Edit/delete own programs and exercises
- ✅ Get daily motivation quotes

## 🛠️ Troubleshooting

### Build Issues
```bash
rm -rf node_modules && npm install
tsc -b
```

### Amplify Backend Issues
```bash
amplify status
amplify pull
```

Check AWS CloudFormation console and CloudWatch logs for detailed errors.

### GraphQL Errors
- Verify schema deployment: `amplify status`
- Check AppSync console for resolver errors
- Confirm authentication mode matches operation requirements

## 📚 Documentation

See the `/docs` directory for detailed documentation:
- Architecture overview
- Development guidelines
- Deployment procedures
- Troubleshooting guide

## 🤝 Contributing

1. Follow the guidelines in `AGENTS.md`
2. Use the specified commit message format
3. Test all changes thoroughly
4. Update documentation as needed

## 📄 License

This project is private and not licensed for public use.

## 🙏 Acknowledgments

- Built with AWS Amplify Gen1
- Powered by React and TypeScript
- Fitness motivation quotes curated for inspiration

---

**Stay Strong! 💪 Track Your Progress! 📈 Achieve Your Goals! 🎯**
