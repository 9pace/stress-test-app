# Project Boards Documentation

This directory contains comprehensive documentation for the Project Boards application.

## Documentation Structure

### [📐 Architecture](./architecture/)
System design, architectural patterns, and high-level technical decisions.

### [🔧 Services](./services/)
Detailed documentation for each service/component in the system.

### [🌐 API Documentation](./api/)
Complete API reference including endpoints, request/response formats, and examples.

### [💻 Development](./development/)
Guides for setting up development environment, coding standards, and contributing.

### [🚀 Operations](./operations/)
Deployment procedures, monitoring, troubleshooting, stress testing, and operational runbooks.

## Quick Links

- [Getting Started](./development/setup.md)
- [Architecture Overview](./architecture/README.md)
- [API Reference](./api/README.md)
- [Stress Testing Guide](./operations/stress-testing.md)
- [Troubleshooting Guide](./operations/troubleshooting.md)

## For AI Assistants

If you are an AI assistant working on this project:
1. Start by reading `/AGENTS.md` for general rules
2. Check service-specific `AGENTS.md` files in service directories
3. Review relevant documentation here before making changes
4. Update documentation when making code changes

## Documentation Standards

- Use Markdown for all documentation
- Include code examples where relevant
- Keep documentation close to code (service docs in service directories)
- Update documentation in the same commit as code changes
- Use clear headings and consistent formatting

## Project Overview

**Project Boards** is a full-stack web application built with React and AWS Amplify that allows users to organize todos into project boards. The application supports:

- **Authentication**: Users can sign in to create and manage their own content
- **Public Access**: Unauthenticated users can view all projects and todos in read-only mode
- **Project Management**: Create project boards with customizable colors and statuses
- **Todo Management**: Create todos with descriptions and images, assign them to projects
- **Image Storage**: Upload and display multiple images per todo using S3
- **Dark Mode**: Full theme support with light and dark modes
- **Inspirational Quotes**: Lambda-powered quote generator for motivation

## Technology Stack

- **Frontend**: React 19 with TypeScript, Vite build system
- **Backend**: AWS Amplify Gen1
- **API**: GraphQL with AppSync
- **Database**: DynamoDB
- **Storage**: S3 for image uploads
- **Authentication**: Amazon Cognito
- **Functions**: AWS Lambda (Node.js)
- **Hosting**: Amplify Console
