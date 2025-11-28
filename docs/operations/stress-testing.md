# Stress Testing Documentation

## Overview

This application includes 100 additional GraphQL models specifically designed for stress testing AWS Amplify infrastructure at scale. These models test Amplify's ability to handle large-scale deployments, complex CloudFormation stacks, and high resource counts.

## Stress Test Models

### Model Structure

The stress test includes **100 models** (StressTest1 through StressTest100) organized in three groups:

#### Group 1: Standalone Models (StressTest1-80)
Simple, independent models for testing basic resource creation:

```graphql
type StressTest1 @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, operations: [create, read, update, delete] }
]) {
  id: ID!
  name: String!
  data: String
  value: Int
  active: Boolean
  timestamp: AWSDateTime
}
```

**Purpose**: Test DynamoDB table creation, AppSync resolver generation, and IAM policy creation at scale.

#### Group 2: Relationship Models (StressTest81-90)
Models with `@hasMany` relationships for testing connections:

```graphql
type StressTest81 @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, operations: [create, read, update, delete] }
]) {
  id: ID!
  name: String!
  data: String
  value: Int
  active: Boolean
  timestamp: AWSDateTime
  relatedItems: [StressTest82] @hasMany
}

type StressTest82 @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, operations: [create, read, update, delete] }
]) {
  id: ID!
  name: String!
  data: String
  value: Int
  active: Boolean
  timestamp: AWSDateTime
  stressTest81ID: ID
}
```

**Purpose**: Test relationship resolver generation and connection table creation.

#### Group 3: Complex Models (StressTest91-100)
Models with enum types for additional complexity:

```graphql
enum StressTestStatus {
  PENDING
  ACTIVE
  COMPLETED
  FAILED
}

enum StressTestPriority {
  LOW
  MEDIUM
  HIGH
  CRITICAL
}

type StressTest91 @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, operations: [create, read, update, delete] }
]) {
  id: ID!
  name: String!
  data: String
  value: Int
  active: Boolean
  timestamp: AWSDateTime
  status: StressTestStatus
  priority: StressTestPriority
}
```

**Purpose**: Test enum type handling and additional schema complexity.

## AWS Resources Created

When deployed via `amplify push`, these 100 models create:

### DynamoDB Resources
- **100 DynamoDB tables** (one per model)
- Each table with:
  - Primary key (id)
  - Global Secondary Indexes for queries
  - Owner field index for authorization
  - Provisioned billing mode (PAY_PER_REQUEST)

### AppSync Resources
- **~500+ GraphQL resolvers**:
  - Create, Read, Update, Delete operations per model
  - List operations with filtering
  - Subscription resolvers for real-time updates
  - Authorization resolvers

### IAM Resources
- **100 IAM roles** (one per table)
- **100 IAM policies** for table access
- Service roles for AppSync-DynamoDB connections

### CloudFormation Resources
- Large nested stack structure
- Parent stack with 100+ child stacks
- ~400+ total CloudFormation resources

## Deployment Metrics

### Typical Deployment Times
- **Schema compilation**: ~30 seconds
- **File upload**: ~1-2 minutes
- **CloudFormation execution**: ~15-25 minutes
- **Total deployment time**: ~20-30 minutes

### Resource Limits Tested
- CloudFormation stack resources: ~400 (limit: 500 per stack)
- DynamoDB tables per region: 100 (default limit: 256)
- AppSync resolvers: 500+ (limit: 2000 per API)
- IAM roles/policies: 200+ (account limits apply)

### Deployment Phases
1. **Build Phase**: Schema transformation and validation
2. **Upload Phase**: Uploading CloudFormation templates
3. **Stack Creation**: Parent and child stack deployment
4. **Resource Creation**: Parallel creation of DynamoDB tables
5. **Resolver Deployment**: Sequential resolver creation
6. **IAM Setup**: Role and policy creation

## Running Stress Tests

### Initial Deployment

```bash
# Deploy all 100 models
amplify push
```

**Expected behavior**:
- Warnings about owner reassignment (expected)
- Socket capacity warnings (normal for large deployments)
- Progress updates for each model stack

### Monitoring Deployment

```bash
# Check deployment status
amplify status

# View CloudFormation events
# Navigate to AWS Console > CloudFormation
# Monitor parent stack: amplify-stresstestapp-{env}-{id}
```

### Verifying Deployment

```bash
# Check created resources in AWS Console:
# 1. DynamoDB: Should show 102 tables (2 original + 100 stress test)
# 2. AppSync: Check resolver count in API settings
# 3. CloudFormation: Verify all nested stacks completed
# 4. IAM: Check roles created (search for "StressTest")
```

## Performance Characteristics

### CloudFormation Stack Size
- **Template size**: ~2-3 MB
- **Nested stacks**: 100+ child stacks
- **Update time**: Similar to creation (~20-30 min)

### API Performance
- **Schema size**: ~4000 lines
- **Generated types**: ~15,000 lines (API.ts)
- **Query/mutation files**: ~3000 lines each

### Common Warnings

```
⚠️ WARNING: your GraphQL API currently allows public create, 
read, update, and delete access to all models via an API Key.
```
**Status**: Expected for testing - not production-ready configuration

```
@smithy/node-http-handler:WARN - socket usage at capacity=50 
and 3954 additional requests are enqueued.
```
**Status**: Normal for large deployments - SDK throttling during parallel uploads

## Cleanup

### Removing Stress Test Models

To remove all stress test models and free up AWS resources:

1. **Edit schema.graphql**:
   - Remove all StressTest models (lines with `type StressTest`)
   - Remove enum definitions (StressTestStatus, StressTestPriority)

2. **Deploy changes**:
   ```bash
   amplify push
   ```

3. **Verify cleanup**:
   - Check DynamoDB tables deleted
   - Verify CloudFormation stacks removed
   - Confirm IAM roles cleaned up

### Partial Cleanup

To keep some models for testing:
- Edit schema.graphql to remove unwanted models
- Run `amplify push` to sync changes
- Amplify will automatically delete removed resources

## Use Cases

### Infrastructure Testing
- **Capacity planning**: Test account limits before production
- **Deployment time**: Measure infrastructure provisioning speed
- **Resource quotas**: Verify staying within AWS service limits

### Performance Testing
- **API latency**: Test GraphQL query performance with many models
- **Resolver execution**: Measure authorization and data access speed
- **Schema compilation**: Test Amplify transformer at scale

### DevOps Testing
- **CI/CD pipelines**: Test deployment automation with large stacks
- **Rollback procedures**: Test reverting large infrastructure changes
- **Monitoring**: Verify CloudWatch metrics for all resources

## Best Practices

### When to Use Stress Tests
- ✅ Pre-production environment validation
- ✅ Testing deployment automation
- ✅ Capacity planning exercises
- ✅ Performance baseline establishment

### When NOT to Use
- ❌ Production environments
- ❌ Shared development environments
- ❌ Cost-sensitive accounts (creates billable resources)
- ❌ Accounts near service limits

### Cost Considerations
- **DynamoDB**: PAY_PER_REQUEST billing - only pay for actual usage
- **AppSync**: First 1M requests/month free, then $4 per million
- **Lambda**: Minimal cost for occasional invocations
- **S3**: Storage and transfer costs for images

**Estimated monthly cost with minimal usage**: $1-5

### Monitoring Recommendations
1. **CloudWatch Alarms**: Set up billing alarms
2. **Cost Explorer**: Monitor DynamoDB and AppSync costs
3. **CloudFormation**: Watch for failed stack deployments
4. **AppSync Metrics**: Monitor resolver performance

## Troubleshooting

### Deployment Failures

**Issue**: CloudFormation stack fails during creation
```
Error: Resource creation cancelled
```
**Solution**: 
- Check CloudWatch logs for specific errors
- Verify account limits not exceeded
- Retry deployment after fixing issues

**Issue**: Socket timeout warnings
```
socket usage at capacity
```
**Solution**: 
- This is normal - wait for deployment to complete
- SDK will retry automatically
- No action needed

### Cleanup Issues

**Issue**: Some resources not deleted after model removal
**Solution**:
```bash
# Force refresh from cloud
amplify pull

# Try push again
amplify push
```

### Performance Issues

**Issue**: GraphQL queries slow with many models
**Solution**:
- Use specific queries instead of listing all
- Implement pagination
- Add indexes for frequently queried fields

## Future Enhancements

Potential additions to stress testing:
- [ ] Add 200-model test for extreme scale
- [ ] Include custom resolvers in stress tests
- [ ] Test with Lambda triggers on all models
- [ ] Add search/filtering complexity
- [ ] Include @connection directive testing
- [ ] Test with multiple environments

## References

- [AWS Amplify Limits](https://docs.aws.amazon.com/general/latest/gr/amplify.html)
- [DynamoDB Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html)
- [AppSync Quotas](https://docs.aws.amazon.com/appsync/latest/devguide/quotas.html)
- [CloudFormation Limits](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html)

---

**Last Updated**: November 28, 2025
**Models Count**: 100 (StressTest1-StressTest100)
**Deployment Status**: Successfully deployed and tested
