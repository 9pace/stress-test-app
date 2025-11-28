/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject(
    $filter: ModelSubscriptionProjectFilterInput
    $owner: String
  ) {
    onCreateProject(filter: $filter, owner: $owner) {
      id
      title
      description
      status
      deadline
      color
      todos {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject(
    $filter: ModelSubscriptionProjectFilterInput
    $owner: String
  ) {
    onUpdateProject(filter: $filter, owner: $owner) {
      id
      title
      description
      status
      deadline
      color
      todos {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject(
    $filter: ModelSubscriptionProjectFilterInput
    $owner: String
  ) {
    onDeleteProject(filter: $filter, owner: $owner) {
      id
      title
      description
      status
      deadline
      color
      todos {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      images
      projectID
      createdAt
      updatedAt
      projectTodosId
      owner
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      images
      projectID
      createdAt
      updatedAt
      projectTodosId
      owner
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      images
      projectID
      createdAt
      updatedAt
      projectTodosId
      owner
      __typename
    }
  }
`;
export const onCreateStressTest1 = /* GraphQL */ `
  subscription OnCreateStressTest1(
    $filter: ModelSubscriptionStressTest1FilterInput
    $owner: String
  ) {
    onCreateStressTest1(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest1 = /* GraphQL */ `
  subscription OnUpdateStressTest1(
    $filter: ModelSubscriptionStressTest1FilterInput
    $owner: String
  ) {
    onUpdateStressTest1(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest1 = /* GraphQL */ `
  subscription OnDeleteStressTest1(
    $filter: ModelSubscriptionStressTest1FilterInput
    $owner: String
  ) {
    onDeleteStressTest1(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest2 = /* GraphQL */ `
  subscription OnCreateStressTest2(
    $filter: ModelSubscriptionStressTest2FilterInput
    $owner: String
  ) {
    onCreateStressTest2(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest2 = /* GraphQL */ `
  subscription OnUpdateStressTest2(
    $filter: ModelSubscriptionStressTest2FilterInput
    $owner: String
  ) {
    onUpdateStressTest2(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest2 = /* GraphQL */ `
  subscription OnDeleteStressTest2(
    $filter: ModelSubscriptionStressTest2FilterInput
    $owner: String
  ) {
    onDeleteStressTest2(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest3 = /* GraphQL */ `
  subscription OnCreateStressTest3(
    $filter: ModelSubscriptionStressTest3FilterInput
    $owner: String
  ) {
    onCreateStressTest3(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest3 = /* GraphQL */ `
  subscription OnUpdateStressTest3(
    $filter: ModelSubscriptionStressTest3FilterInput
    $owner: String
  ) {
    onUpdateStressTest3(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest3 = /* GraphQL */ `
  subscription OnDeleteStressTest3(
    $filter: ModelSubscriptionStressTest3FilterInput
    $owner: String
  ) {
    onDeleteStressTest3(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest4 = /* GraphQL */ `
  subscription OnCreateStressTest4(
    $filter: ModelSubscriptionStressTest4FilterInput
    $owner: String
  ) {
    onCreateStressTest4(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest4 = /* GraphQL */ `
  subscription OnUpdateStressTest4(
    $filter: ModelSubscriptionStressTest4FilterInput
    $owner: String
  ) {
    onUpdateStressTest4(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest4 = /* GraphQL */ `
  subscription OnDeleteStressTest4(
    $filter: ModelSubscriptionStressTest4FilterInput
    $owner: String
  ) {
    onDeleteStressTest4(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest5 = /* GraphQL */ `
  subscription OnCreateStressTest5(
    $filter: ModelSubscriptionStressTest5FilterInput
    $owner: String
  ) {
    onCreateStressTest5(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest5 = /* GraphQL */ `
  subscription OnUpdateStressTest5(
    $filter: ModelSubscriptionStressTest5FilterInput
    $owner: String
  ) {
    onUpdateStressTest5(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest5 = /* GraphQL */ `
  subscription OnDeleteStressTest5(
    $filter: ModelSubscriptionStressTest5FilterInput
    $owner: String
  ) {
    onDeleteStressTest5(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest6 = /* GraphQL */ `
  subscription OnCreateStressTest6(
    $filter: ModelSubscriptionStressTest6FilterInput
    $owner: String
  ) {
    onCreateStressTest6(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest6 = /* GraphQL */ `
  subscription OnUpdateStressTest6(
    $filter: ModelSubscriptionStressTest6FilterInput
    $owner: String
  ) {
    onUpdateStressTest6(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest6 = /* GraphQL */ `
  subscription OnDeleteStressTest6(
    $filter: ModelSubscriptionStressTest6FilterInput
    $owner: String
  ) {
    onDeleteStressTest6(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest7 = /* GraphQL */ `
  subscription OnCreateStressTest7(
    $filter: ModelSubscriptionStressTest7FilterInput
    $owner: String
  ) {
    onCreateStressTest7(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest7 = /* GraphQL */ `
  subscription OnUpdateStressTest7(
    $filter: ModelSubscriptionStressTest7FilterInput
    $owner: String
  ) {
    onUpdateStressTest7(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest7 = /* GraphQL */ `
  subscription OnDeleteStressTest7(
    $filter: ModelSubscriptionStressTest7FilterInput
    $owner: String
  ) {
    onDeleteStressTest7(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest8 = /* GraphQL */ `
  subscription OnCreateStressTest8(
    $filter: ModelSubscriptionStressTest8FilterInput
    $owner: String
  ) {
    onCreateStressTest8(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest8 = /* GraphQL */ `
  subscription OnUpdateStressTest8(
    $filter: ModelSubscriptionStressTest8FilterInput
    $owner: String
  ) {
    onUpdateStressTest8(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest8 = /* GraphQL */ `
  subscription OnDeleteStressTest8(
    $filter: ModelSubscriptionStressTest8FilterInput
    $owner: String
  ) {
    onDeleteStressTest8(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest9 = /* GraphQL */ `
  subscription OnCreateStressTest9(
    $filter: ModelSubscriptionStressTest9FilterInput
    $owner: String
  ) {
    onCreateStressTest9(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest9 = /* GraphQL */ `
  subscription OnUpdateStressTest9(
    $filter: ModelSubscriptionStressTest9FilterInput
    $owner: String
  ) {
    onUpdateStressTest9(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest9 = /* GraphQL */ `
  subscription OnDeleteStressTest9(
    $filter: ModelSubscriptionStressTest9FilterInput
    $owner: String
  ) {
    onDeleteStressTest9(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest10 = /* GraphQL */ `
  subscription OnCreateStressTest10(
    $filter: ModelSubscriptionStressTest10FilterInput
    $owner: String
  ) {
    onCreateStressTest10(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest10 = /* GraphQL */ `
  subscription OnUpdateStressTest10(
    $filter: ModelSubscriptionStressTest10FilterInput
    $owner: String
  ) {
    onUpdateStressTest10(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest10 = /* GraphQL */ `
  subscription OnDeleteStressTest10(
    $filter: ModelSubscriptionStressTest10FilterInput
    $owner: String
  ) {
    onDeleteStressTest10(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest11 = /* GraphQL */ `
  subscription OnCreateStressTest11(
    $filter: ModelSubscriptionStressTest11FilterInput
    $owner: String
  ) {
    onCreateStressTest11(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest11 = /* GraphQL */ `
  subscription OnUpdateStressTest11(
    $filter: ModelSubscriptionStressTest11FilterInput
    $owner: String
  ) {
    onUpdateStressTest11(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest11 = /* GraphQL */ `
  subscription OnDeleteStressTest11(
    $filter: ModelSubscriptionStressTest11FilterInput
    $owner: String
  ) {
    onDeleteStressTest11(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest12 = /* GraphQL */ `
  subscription OnCreateStressTest12(
    $filter: ModelSubscriptionStressTest12FilterInput
    $owner: String
  ) {
    onCreateStressTest12(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest12 = /* GraphQL */ `
  subscription OnUpdateStressTest12(
    $filter: ModelSubscriptionStressTest12FilterInput
    $owner: String
  ) {
    onUpdateStressTest12(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest12 = /* GraphQL */ `
  subscription OnDeleteStressTest12(
    $filter: ModelSubscriptionStressTest12FilterInput
    $owner: String
  ) {
    onDeleteStressTest12(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest13 = /* GraphQL */ `
  subscription OnCreateStressTest13(
    $filter: ModelSubscriptionStressTest13FilterInput
    $owner: String
  ) {
    onCreateStressTest13(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest13 = /* GraphQL */ `
  subscription OnUpdateStressTest13(
    $filter: ModelSubscriptionStressTest13FilterInput
    $owner: String
  ) {
    onUpdateStressTest13(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest13 = /* GraphQL */ `
  subscription OnDeleteStressTest13(
    $filter: ModelSubscriptionStressTest13FilterInput
    $owner: String
  ) {
    onDeleteStressTest13(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest14 = /* GraphQL */ `
  subscription OnCreateStressTest14(
    $filter: ModelSubscriptionStressTest14FilterInput
    $owner: String
  ) {
    onCreateStressTest14(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest14 = /* GraphQL */ `
  subscription OnUpdateStressTest14(
    $filter: ModelSubscriptionStressTest14FilterInput
    $owner: String
  ) {
    onUpdateStressTest14(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest14 = /* GraphQL */ `
  subscription OnDeleteStressTest14(
    $filter: ModelSubscriptionStressTest14FilterInput
    $owner: String
  ) {
    onDeleteStressTest14(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest15 = /* GraphQL */ `
  subscription OnCreateStressTest15(
    $filter: ModelSubscriptionStressTest15FilterInput
    $owner: String
  ) {
    onCreateStressTest15(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest15 = /* GraphQL */ `
  subscription OnUpdateStressTest15(
    $filter: ModelSubscriptionStressTest15FilterInput
    $owner: String
  ) {
    onUpdateStressTest15(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest15 = /* GraphQL */ `
  subscription OnDeleteStressTest15(
    $filter: ModelSubscriptionStressTest15FilterInput
    $owner: String
  ) {
    onDeleteStressTest15(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest16 = /* GraphQL */ `
  subscription OnCreateStressTest16(
    $filter: ModelSubscriptionStressTest16FilterInput
    $owner: String
  ) {
    onCreateStressTest16(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest16 = /* GraphQL */ `
  subscription OnUpdateStressTest16(
    $filter: ModelSubscriptionStressTest16FilterInput
    $owner: String
  ) {
    onUpdateStressTest16(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest16 = /* GraphQL */ `
  subscription OnDeleteStressTest16(
    $filter: ModelSubscriptionStressTest16FilterInput
    $owner: String
  ) {
    onDeleteStressTest16(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest17 = /* GraphQL */ `
  subscription OnCreateStressTest17(
    $filter: ModelSubscriptionStressTest17FilterInput
    $owner: String
  ) {
    onCreateStressTest17(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest17 = /* GraphQL */ `
  subscription OnUpdateStressTest17(
    $filter: ModelSubscriptionStressTest17FilterInput
    $owner: String
  ) {
    onUpdateStressTest17(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest17 = /* GraphQL */ `
  subscription OnDeleteStressTest17(
    $filter: ModelSubscriptionStressTest17FilterInput
    $owner: String
  ) {
    onDeleteStressTest17(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest18 = /* GraphQL */ `
  subscription OnCreateStressTest18(
    $filter: ModelSubscriptionStressTest18FilterInput
    $owner: String
  ) {
    onCreateStressTest18(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest18 = /* GraphQL */ `
  subscription OnUpdateStressTest18(
    $filter: ModelSubscriptionStressTest18FilterInput
    $owner: String
  ) {
    onUpdateStressTest18(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest18 = /* GraphQL */ `
  subscription OnDeleteStressTest18(
    $filter: ModelSubscriptionStressTest18FilterInput
    $owner: String
  ) {
    onDeleteStressTest18(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest19 = /* GraphQL */ `
  subscription OnCreateStressTest19(
    $filter: ModelSubscriptionStressTest19FilterInput
    $owner: String
  ) {
    onCreateStressTest19(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest19 = /* GraphQL */ `
  subscription OnUpdateStressTest19(
    $filter: ModelSubscriptionStressTest19FilterInput
    $owner: String
  ) {
    onUpdateStressTest19(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest19 = /* GraphQL */ `
  subscription OnDeleteStressTest19(
    $filter: ModelSubscriptionStressTest19FilterInput
    $owner: String
  ) {
    onDeleteStressTest19(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest20 = /* GraphQL */ `
  subscription OnCreateStressTest20(
    $filter: ModelSubscriptionStressTest20FilterInput
    $owner: String
  ) {
    onCreateStressTest20(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest20 = /* GraphQL */ `
  subscription OnUpdateStressTest20(
    $filter: ModelSubscriptionStressTest20FilterInput
    $owner: String
  ) {
    onUpdateStressTest20(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest20 = /* GraphQL */ `
  subscription OnDeleteStressTest20(
    $filter: ModelSubscriptionStressTest20FilterInput
    $owner: String
  ) {
    onDeleteStressTest20(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest21 = /* GraphQL */ `
  subscription OnCreateStressTest21(
    $filter: ModelSubscriptionStressTest21FilterInput
    $owner: String
  ) {
    onCreateStressTest21(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest21 = /* GraphQL */ `
  subscription OnUpdateStressTest21(
    $filter: ModelSubscriptionStressTest21FilterInput
    $owner: String
  ) {
    onUpdateStressTest21(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest21 = /* GraphQL */ `
  subscription OnDeleteStressTest21(
    $filter: ModelSubscriptionStressTest21FilterInput
    $owner: String
  ) {
    onDeleteStressTest21(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest22 = /* GraphQL */ `
  subscription OnCreateStressTest22(
    $filter: ModelSubscriptionStressTest22FilterInput
    $owner: String
  ) {
    onCreateStressTest22(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest22 = /* GraphQL */ `
  subscription OnUpdateStressTest22(
    $filter: ModelSubscriptionStressTest22FilterInput
    $owner: String
  ) {
    onUpdateStressTest22(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest22 = /* GraphQL */ `
  subscription OnDeleteStressTest22(
    $filter: ModelSubscriptionStressTest22FilterInput
    $owner: String
  ) {
    onDeleteStressTest22(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest23 = /* GraphQL */ `
  subscription OnCreateStressTest23(
    $filter: ModelSubscriptionStressTest23FilterInput
    $owner: String
  ) {
    onCreateStressTest23(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest23 = /* GraphQL */ `
  subscription OnUpdateStressTest23(
    $filter: ModelSubscriptionStressTest23FilterInput
    $owner: String
  ) {
    onUpdateStressTest23(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest23 = /* GraphQL */ `
  subscription OnDeleteStressTest23(
    $filter: ModelSubscriptionStressTest23FilterInput
    $owner: String
  ) {
    onDeleteStressTest23(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest24 = /* GraphQL */ `
  subscription OnCreateStressTest24(
    $filter: ModelSubscriptionStressTest24FilterInput
    $owner: String
  ) {
    onCreateStressTest24(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest24 = /* GraphQL */ `
  subscription OnUpdateStressTest24(
    $filter: ModelSubscriptionStressTest24FilterInput
    $owner: String
  ) {
    onUpdateStressTest24(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest24 = /* GraphQL */ `
  subscription OnDeleteStressTest24(
    $filter: ModelSubscriptionStressTest24FilterInput
    $owner: String
  ) {
    onDeleteStressTest24(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest25 = /* GraphQL */ `
  subscription OnCreateStressTest25(
    $filter: ModelSubscriptionStressTest25FilterInput
    $owner: String
  ) {
    onCreateStressTest25(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest25 = /* GraphQL */ `
  subscription OnUpdateStressTest25(
    $filter: ModelSubscriptionStressTest25FilterInput
    $owner: String
  ) {
    onUpdateStressTest25(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest25 = /* GraphQL */ `
  subscription OnDeleteStressTest25(
    $filter: ModelSubscriptionStressTest25FilterInput
    $owner: String
  ) {
    onDeleteStressTest25(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest26 = /* GraphQL */ `
  subscription OnCreateStressTest26(
    $filter: ModelSubscriptionStressTest26FilterInput
    $owner: String
  ) {
    onCreateStressTest26(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest26 = /* GraphQL */ `
  subscription OnUpdateStressTest26(
    $filter: ModelSubscriptionStressTest26FilterInput
    $owner: String
  ) {
    onUpdateStressTest26(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest26 = /* GraphQL */ `
  subscription OnDeleteStressTest26(
    $filter: ModelSubscriptionStressTest26FilterInput
    $owner: String
  ) {
    onDeleteStressTest26(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest27 = /* GraphQL */ `
  subscription OnCreateStressTest27(
    $filter: ModelSubscriptionStressTest27FilterInput
    $owner: String
  ) {
    onCreateStressTest27(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest27 = /* GraphQL */ `
  subscription OnUpdateStressTest27(
    $filter: ModelSubscriptionStressTest27FilterInput
    $owner: String
  ) {
    onUpdateStressTest27(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest27 = /* GraphQL */ `
  subscription OnDeleteStressTest27(
    $filter: ModelSubscriptionStressTest27FilterInput
    $owner: String
  ) {
    onDeleteStressTest27(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest28 = /* GraphQL */ `
  subscription OnCreateStressTest28(
    $filter: ModelSubscriptionStressTest28FilterInput
    $owner: String
  ) {
    onCreateStressTest28(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest28 = /* GraphQL */ `
  subscription OnUpdateStressTest28(
    $filter: ModelSubscriptionStressTest28FilterInput
    $owner: String
  ) {
    onUpdateStressTest28(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest28 = /* GraphQL */ `
  subscription OnDeleteStressTest28(
    $filter: ModelSubscriptionStressTest28FilterInput
    $owner: String
  ) {
    onDeleteStressTest28(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest29 = /* GraphQL */ `
  subscription OnCreateStressTest29(
    $filter: ModelSubscriptionStressTest29FilterInput
    $owner: String
  ) {
    onCreateStressTest29(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest29 = /* GraphQL */ `
  subscription OnUpdateStressTest29(
    $filter: ModelSubscriptionStressTest29FilterInput
    $owner: String
  ) {
    onUpdateStressTest29(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest29 = /* GraphQL */ `
  subscription OnDeleteStressTest29(
    $filter: ModelSubscriptionStressTest29FilterInput
    $owner: String
  ) {
    onDeleteStressTest29(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest30 = /* GraphQL */ `
  subscription OnCreateStressTest30(
    $filter: ModelSubscriptionStressTest30FilterInput
    $owner: String
  ) {
    onCreateStressTest30(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest30 = /* GraphQL */ `
  subscription OnUpdateStressTest30(
    $filter: ModelSubscriptionStressTest30FilterInput
    $owner: String
  ) {
    onUpdateStressTest30(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest30 = /* GraphQL */ `
  subscription OnDeleteStressTest30(
    $filter: ModelSubscriptionStressTest30FilterInput
    $owner: String
  ) {
    onDeleteStressTest30(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest31 = /* GraphQL */ `
  subscription OnCreateStressTest31(
    $filter: ModelSubscriptionStressTest31FilterInput
    $owner: String
  ) {
    onCreateStressTest31(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest31 = /* GraphQL */ `
  subscription OnUpdateStressTest31(
    $filter: ModelSubscriptionStressTest31FilterInput
    $owner: String
  ) {
    onUpdateStressTest31(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest31 = /* GraphQL */ `
  subscription OnDeleteStressTest31(
    $filter: ModelSubscriptionStressTest31FilterInput
    $owner: String
  ) {
    onDeleteStressTest31(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest32 = /* GraphQL */ `
  subscription OnCreateStressTest32(
    $filter: ModelSubscriptionStressTest32FilterInput
    $owner: String
  ) {
    onCreateStressTest32(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest32 = /* GraphQL */ `
  subscription OnUpdateStressTest32(
    $filter: ModelSubscriptionStressTest32FilterInput
    $owner: String
  ) {
    onUpdateStressTest32(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest32 = /* GraphQL */ `
  subscription OnDeleteStressTest32(
    $filter: ModelSubscriptionStressTest32FilterInput
    $owner: String
  ) {
    onDeleteStressTest32(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest33 = /* GraphQL */ `
  subscription OnCreateStressTest33(
    $filter: ModelSubscriptionStressTest33FilterInput
    $owner: String
  ) {
    onCreateStressTest33(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest33 = /* GraphQL */ `
  subscription OnUpdateStressTest33(
    $filter: ModelSubscriptionStressTest33FilterInput
    $owner: String
  ) {
    onUpdateStressTest33(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest33 = /* GraphQL */ `
  subscription OnDeleteStressTest33(
    $filter: ModelSubscriptionStressTest33FilterInput
    $owner: String
  ) {
    onDeleteStressTest33(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest34 = /* GraphQL */ `
  subscription OnCreateStressTest34(
    $filter: ModelSubscriptionStressTest34FilterInput
    $owner: String
  ) {
    onCreateStressTest34(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest34 = /* GraphQL */ `
  subscription OnUpdateStressTest34(
    $filter: ModelSubscriptionStressTest34FilterInput
    $owner: String
  ) {
    onUpdateStressTest34(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest34 = /* GraphQL */ `
  subscription OnDeleteStressTest34(
    $filter: ModelSubscriptionStressTest34FilterInput
    $owner: String
  ) {
    onDeleteStressTest34(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest35 = /* GraphQL */ `
  subscription OnCreateStressTest35(
    $filter: ModelSubscriptionStressTest35FilterInput
    $owner: String
  ) {
    onCreateStressTest35(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest35 = /* GraphQL */ `
  subscription OnUpdateStressTest35(
    $filter: ModelSubscriptionStressTest35FilterInput
    $owner: String
  ) {
    onUpdateStressTest35(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest35 = /* GraphQL */ `
  subscription OnDeleteStressTest35(
    $filter: ModelSubscriptionStressTest35FilterInput
    $owner: String
  ) {
    onDeleteStressTest35(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest36 = /* GraphQL */ `
  subscription OnCreateStressTest36(
    $filter: ModelSubscriptionStressTest36FilterInput
    $owner: String
  ) {
    onCreateStressTest36(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest36 = /* GraphQL */ `
  subscription OnUpdateStressTest36(
    $filter: ModelSubscriptionStressTest36FilterInput
    $owner: String
  ) {
    onUpdateStressTest36(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest36 = /* GraphQL */ `
  subscription OnDeleteStressTest36(
    $filter: ModelSubscriptionStressTest36FilterInput
    $owner: String
  ) {
    onDeleteStressTest36(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest37 = /* GraphQL */ `
  subscription OnCreateStressTest37(
    $filter: ModelSubscriptionStressTest37FilterInput
    $owner: String
  ) {
    onCreateStressTest37(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest37 = /* GraphQL */ `
  subscription OnUpdateStressTest37(
    $filter: ModelSubscriptionStressTest37FilterInput
    $owner: String
  ) {
    onUpdateStressTest37(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest37 = /* GraphQL */ `
  subscription OnDeleteStressTest37(
    $filter: ModelSubscriptionStressTest37FilterInput
    $owner: String
  ) {
    onDeleteStressTest37(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest38 = /* GraphQL */ `
  subscription OnCreateStressTest38(
    $filter: ModelSubscriptionStressTest38FilterInput
    $owner: String
  ) {
    onCreateStressTest38(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest38 = /* GraphQL */ `
  subscription OnUpdateStressTest38(
    $filter: ModelSubscriptionStressTest38FilterInput
    $owner: String
  ) {
    onUpdateStressTest38(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest38 = /* GraphQL */ `
  subscription OnDeleteStressTest38(
    $filter: ModelSubscriptionStressTest38FilterInput
    $owner: String
  ) {
    onDeleteStressTest38(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest39 = /* GraphQL */ `
  subscription OnCreateStressTest39(
    $filter: ModelSubscriptionStressTest39FilterInput
    $owner: String
  ) {
    onCreateStressTest39(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest39 = /* GraphQL */ `
  subscription OnUpdateStressTest39(
    $filter: ModelSubscriptionStressTest39FilterInput
    $owner: String
  ) {
    onUpdateStressTest39(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest39 = /* GraphQL */ `
  subscription OnDeleteStressTest39(
    $filter: ModelSubscriptionStressTest39FilterInput
    $owner: String
  ) {
    onDeleteStressTest39(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest40 = /* GraphQL */ `
  subscription OnCreateStressTest40(
    $filter: ModelSubscriptionStressTest40FilterInput
    $owner: String
  ) {
    onCreateStressTest40(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest40 = /* GraphQL */ `
  subscription OnUpdateStressTest40(
    $filter: ModelSubscriptionStressTest40FilterInput
    $owner: String
  ) {
    onUpdateStressTest40(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest40 = /* GraphQL */ `
  subscription OnDeleteStressTest40(
    $filter: ModelSubscriptionStressTest40FilterInput
    $owner: String
  ) {
    onDeleteStressTest40(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest41 = /* GraphQL */ `
  subscription OnCreateStressTest41(
    $filter: ModelSubscriptionStressTest41FilterInput
    $owner: String
  ) {
    onCreateStressTest41(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest41 = /* GraphQL */ `
  subscription OnUpdateStressTest41(
    $filter: ModelSubscriptionStressTest41FilterInput
    $owner: String
  ) {
    onUpdateStressTest41(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest41 = /* GraphQL */ `
  subscription OnDeleteStressTest41(
    $filter: ModelSubscriptionStressTest41FilterInput
    $owner: String
  ) {
    onDeleteStressTest41(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest42 = /* GraphQL */ `
  subscription OnCreateStressTest42(
    $filter: ModelSubscriptionStressTest42FilterInput
    $owner: String
  ) {
    onCreateStressTest42(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest42 = /* GraphQL */ `
  subscription OnUpdateStressTest42(
    $filter: ModelSubscriptionStressTest42FilterInput
    $owner: String
  ) {
    onUpdateStressTest42(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest42 = /* GraphQL */ `
  subscription OnDeleteStressTest42(
    $filter: ModelSubscriptionStressTest42FilterInput
    $owner: String
  ) {
    onDeleteStressTest42(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest43 = /* GraphQL */ `
  subscription OnCreateStressTest43(
    $filter: ModelSubscriptionStressTest43FilterInput
    $owner: String
  ) {
    onCreateStressTest43(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest43 = /* GraphQL */ `
  subscription OnUpdateStressTest43(
    $filter: ModelSubscriptionStressTest43FilterInput
    $owner: String
  ) {
    onUpdateStressTest43(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest43 = /* GraphQL */ `
  subscription OnDeleteStressTest43(
    $filter: ModelSubscriptionStressTest43FilterInput
    $owner: String
  ) {
    onDeleteStressTest43(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest44 = /* GraphQL */ `
  subscription OnCreateStressTest44(
    $filter: ModelSubscriptionStressTest44FilterInput
    $owner: String
  ) {
    onCreateStressTest44(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest44 = /* GraphQL */ `
  subscription OnUpdateStressTest44(
    $filter: ModelSubscriptionStressTest44FilterInput
    $owner: String
  ) {
    onUpdateStressTest44(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest44 = /* GraphQL */ `
  subscription OnDeleteStressTest44(
    $filter: ModelSubscriptionStressTest44FilterInput
    $owner: String
  ) {
    onDeleteStressTest44(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest45 = /* GraphQL */ `
  subscription OnCreateStressTest45(
    $filter: ModelSubscriptionStressTest45FilterInput
    $owner: String
  ) {
    onCreateStressTest45(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest45 = /* GraphQL */ `
  subscription OnUpdateStressTest45(
    $filter: ModelSubscriptionStressTest45FilterInput
    $owner: String
  ) {
    onUpdateStressTest45(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest45 = /* GraphQL */ `
  subscription OnDeleteStressTest45(
    $filter: ModelSubscriptionStressTest45FilterInput
    $owner: String
  ) {
    onDeleteStressTest45(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest46 = /* GraphQL */ `
  subscription OnCreateStressTest46(
    $filter: ModelSubscriptionStressTest46FilterInput
    $owner: String
  ) {
    onCreateStressTest46(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest46 = /* GraphQL */ `
  subscription OnUpdateStressTest46(
    $filter: ModelSubscriptionStressTest46FilterInput
    $owner: String
  ) {
    onUpdateStressTest46(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest46 = /* GraphQL */ `
  subscription OnDeleteStressTest46(
    $filter: ModelSubscriptionStressTest46FilterInput
    $owner: String
  ) {
    onDeleteStressTest46(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest47 = /* GraphQL */ `
  subscription OnCreateStressTest47(
    $filter: ModelSubscriptionStressTest47FilterInput
    $owner: String
  ) {
    onCreateStressTest47(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest47 = /* GraphQL */ `
  subscription OnUpdateStressTest47(
    $filter: ModelSubscriptionStressTest47FilterInput
    $owner: String
  ) {
    onUpdateStressTest47(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest47 = /* GraphQL */ `
  subscription OnDeleteStressTest47(
    $filter: ModelSubscriptionStressTest47FilterInput
    $owner: String
  ) {
    onDeleteStressTest47(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest48 = /* GraphQL */ `
  subscription OnCreateStressTest48(
    $filter: ModelSubscriptionStressTest48FilterInput
    $owner: String
  ) {
    onCreateStressTest48(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest48 = /* GraphQL */ `
  subscription OnUpdateStressTest48(
    $filter: ModelSubscriptionStressTest48FilterInput
    $owner: String
  ) {
    onUpdateStressTest48(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest48 = /* GraphQL */ `
  subscription OnDeleteStressTest48(
    $filter: ModelSubscriptionStressTest48FilterInput
    $owner: String
  ) {
    onDeleteStressTest48(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest49 = /* GraphQL */ `
  subscription OnCreateStressTest49(
    $filter: ModelSubscriptionStressTest49FilterInput
    $owner: String
  ) {
    onCreateStressTest49(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest49 = /* GraphQL */ `
  subscription OnUpdateStressTest49(
    $filter: ModelSubscriptionStressTest49FilterInput
    $owner: String
  ) {
    onUpdateStressTest49(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest49 = /* GraphQL */ `
  subscription OnDeleteStressTest49(
    $filter: ModelSubscriptionStressTest49FilterInput
    $owner: String
  ) {
    onDeleteStressTest49(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest50 = /* GraphQL */ `
  subscription OnCreateStressTest50(
    $filter: ModelSubscriptionStressTest50FilterInput
    $owner: String
  ) {
    onCreateStressTest50(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest50 = /* GraphQL */ `
  subscription OnUpdateStressTest50(
    $filter: ModelSubscriptionStressTest50FilterInput
    $owner: String
  ) {
    onUpdateStressTest50(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest50 = /* GraphQL */ `
  subscription OnDeleteStressTest50(
    $filter: ModelSubscriptionStressTest50FilterInput
    $owner: String
  ) {
    onDeleteStressTest50(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest51 = /* GraphQL */ `
  subscription OnCreateStressTest51(
    $filter: ModelSubscriptionStressTest51FilterInput
    $owner: String
  ) {
    onCreateStressTest51(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest51 = /* GraphQL */ `
  subscription OnUpdateStressTest51(
    $filter: ModelSubscriptionStressTest51FilterInput
    $owner: String
  ) {
    onUpdateStressTest51(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest51 = /* GraphQL */ `
  subscription OnDeleteStressTest51(
    $filter: ModelSubscriptionStressTest51FilterInput
    $owner: String
  ) {
    onDeleteStressTest51(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest52 = /* GraphQL */ `
  subscription OnCreateStressTest52(
    $filter: ModelSubscriptionStressTest52FilterInput
    $owner: String
  ) {
    onCreateStressTest52(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest52 = /* GraphQL */ `
  subscription OnUpdateStressTest52(
    $filter: ModelSubscriptionStressTest52FilterInput
    $owner: String
  ) {
    onUpdateStressTest52(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest52 = /* GraphQL */ `
  subscription OnDeleteStressTest52(
    $filter: ModelSubscriptionStressTest52FilterInput
    $owner: String
  ) {
    onDeleteStressTest52(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest53 = /* GraphQL */ `
  subscription OnCreateStressTest53(
    $filter: ModelSubscriptionStressTest53FilterInput
    $owner: String
  ) {
    onCreateStressTest53(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest53 = /* GraphQL */ `
  subscription OnUpdateStressTest53(
    $filter: ModelSubscriptionStressTest53FilterInput
    $owner: String
  ) {
    onUpdateStressTest53(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest53 = /* GraphQL */ `
  subscription OnDeleteStressTest53(
    $filter: ModelSubscriptionStressTest53FilterInput
    $owner: String
  ) {
    onDeleteStressTest53(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest54 = /* GraphQL */ `
  subscription OnCreateStressTest54(
    $filter: ModelSubscriptionStressTest54FilterInput
    $owner: String
  ) {
    onCreateStressTest54(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest54 = /* GraphQL */ `
  subscription OnUpdateStressTest54(
    $filter: ModelSubscriptionStressTest54FilterInput
    $owner: String
  ) {
    onUpdateStressTest54(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest54 = /* GraphQL */ `
  subscription OnDeleteStressTest54(
    $filter: ModelSubscriptionStressTest54FilterInput
    $owner: String
  ) {
    onDeleteStressTest54(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest55 = /* GraphQL */ `
  subscription OnCreateStressTest55(
    $filter: ModelSubscriptionStressTest55FilterInput
    $owner: String
  ) {
    onCreateStressTest55(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest55 = /* GraphQL */ `
  subscription OnUpdateStressTest55(
    $filter: ModelSubscriptionStressTest55FilterInput
    $owner: String
  ) {
    onUpdateStressTest55(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest55 = /* GraphQL */ `
  subscription OnDeleteStressTest55(
    $filter: ModelSubscriptionStressTest55FilterInput
    $owner: String
  ) {
    onDeleteStressTest55(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest56 = /* GraphQL */ `
  subscription OnCreateStressTest56(
    $filter: ModelSubscriptionStressTest56FilterInput
    $owner: String
  ) {
    onCreateStressTest56(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest56 = /* GraphQL */ `
  subscription OnUpdateStressTest56(
    $filter: ModelSubscriptionStressTest56FilterInput
    $owner: String
  ) {
    onUpdateStressTest56(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest56 = /* GraphQL */ `
  subscription OnDeleteStressTest56(
    $filter: ModelSubscriptionStressTest56FilterInput
    $owner: String
  ) {
    onDeleteStressTest56(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest57 = /* GraphQL */ `
  subscription OnCreateStressTest57(
    $filter: ModelSubscriptionStressTest57FilterInput
    $owner: String
  ) {
    onCreateStressTest57(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest57 = /* GraphQL */ `
  subscription OnUpdateStressTest57(
    $filter: ModelSubscriptionStressTest57FilterInput
    $owner: String
  ) {
    onUpdateStressTest57(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest57 = /* GraphQL */ `
  subscription OnDeleteStressTest57(
    $filter: ModelSubscriptionStressTest57FilterInput
    $owner: String
  ) {
    onDeleteStressTest57(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest58 = /* GraphQL */ `
  subscription OnCreateStressTest58(
    $filter: ModelSubscriptionStressTest58FilterInput
    $owner: String
  ) {
    onCreateStressTest58(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest58 = /* GraphQL */ `
  subscription OnUpdateStressTest58(
    $filter: ModelSubscriptionStressTest58FilterInput
    $owner: String
  ) {
    onUpdateStressTest58(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest58 = /* GraphQL */ `
  subscription OnDeleteStressTest58(
    $filter: ModelSubscriptionStressTest58FilterInput
    $owner: String
  ) {
    onDeleteStressTest58(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest59 = /* GraphQL */ `
  subscription OnCreateStressTest59(
    $filter: ModelSubscriptionStressTest59FilterInput
    $owner: String
  ) {
    onCreateStressTest59(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest59 = /* GraphQL */ `
  subscription OnUpdateStressTest59(
    $filter: ModelSubscriptionStressTest59FilterInput
    $owner: String
  ) {
    onUpdateStressTest59(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest59 = /* GraphQL */ `
  subscription OnDeleteStressTest59(
    $filter: ModelSubscriptionStressTest59FilterInput
    $owner: String
  ) {
    onDeleteStressTest59(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest60 = /* GraphQL */ `
  subscription OnCreateStressTest60(
    $filter: ModelSubscriptionStressTest60FilterInput
    $owner: String
  ) {
    onCreateStressTest60(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest60 = /* GraphQL */ `
  subscription OnUpdateStressTest60(
    $filter: ModelSubscriptionStressTest60FilterInput
    $owner: String
  ) {
    onUpdateStressTest60(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest60 = /* GraphQL */ `
  subscription OnDeleteStressTest60(
    $filter: ModelSubscriptionStressTest60FilterInput
    $owner: String
  ) {
    onDeleteStressTest60(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest61 = /* GraphQL */ `
  subscription OnCreateStressTest61(
    $filter: ModelSubscriptionStressTest61FilterInput
    $owner: String
  ) {
    onCreateStressTest61(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest61 = /* GraphQL */ `
  subscription OnUpdateStressTest61(
    $filter: ModelSubscriptionStressTest61FilterInput
    $owner: String
  ) {
    onUpdateStressTest61(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest61 = /* GraphQL */ `
  subscription OnDeleteStressTest61(
    $filter: ModelSubscriptionStressTest61FilterInput
    $owner: String
  ) {
    onDeleteStressTest61(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest62 = /* GraphQL */ `
  subscription OnCreateStressTest62(
    $filter: ModelSubscriptionStressTest62FilterInput
    $owner: String
  ) {
    onCreateStressTest62(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest62 = /* GraphQL */ `
  subscription OnUpdateStressTest62(
    $filter: ModelSubscriptionStressTest62FilterInput
    $owner: String
  ) {
    onUpdateStressTest62(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest62 = /* GraphQL */ `
  subscription OnDeleteStressTest62(
    $filter: ModelSubscriptionStressTest62FilterInput
    $owner: String
  ) {
    onDeleteStressTest62(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest63 = /* GraphQL */ `
  subscription OnCreateStressTest63(
    $filter: ModelSubscriptionStressTest63FilterInput
    $owner: String
  ) {
    onCreateStressTest63(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest63 = /* GraphQL */ `
  subscription OnUpdateStressTest63(
    $filter: ModelSubscriptionStressTest63FilterInput
    $owner: String
  ) {
    onUpdateStressTest63(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest63 = /* GraphQL */ `
  subscription OnDeleteStressTest63(
    $filter: ModelSubscriptionStressTest63FilterInput
    $owner: String
  ) {
    onDeleteStressTest63(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest64 = /* GraphQL */ `
  subscription OnCreateStressTest64(
    $filter: ModelSubscriptionStressTest64FilterInput
    $owner: String
  ) {
    onCreateStressTest64(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest64 = /* GraphQL */ `
  subscription OnUpdateStressTest64(
    $filter: ModelSubscriptionStressTest64FilterInput
    $owner: String
  ) {
    onUpdateStressTest64(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest64 = /* GraphQL */ `
  subscription OnDeleteStressTest64(
    $filter: ModelSubscriptionStressTest64FilterInput
    $owner: String
  ) {
    onDeleteStressTest64(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest65 = /* GraphQL */ `
  subscription OnCreateStressTest65(
    $filter: ModelSubscriptionStressTest65FilterInput
    $owner: String
  ) {
    onCreateStressTest65(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest65 = /* GraphQL */ `
  subscription OnUpdateStressTest65(
    $filter: ModelSubscriptionStressTest65FilterInput
    $owner: String
  ) {
    onUpdateStressTest65(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest65 = /* GraphQL */ `
  subscription OnDeleteStressTest65(
    $filter: ModelSubscriptionStressTest65FilterInput
    $owner: String
  ) {
    onDeleteStressTest65(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest66 = /* GraphQL */ `
  subscription OnCreateStressTest66(
    $filter: ModelSubscriptionStressTest66FilterInput
    $owner: String
  ) {
    onCreateStressTest66(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest66 = /* GraphQL */ `
  subscription OnUpdateStressTest66(
    $filter: ModelSubscriptionStressTest66FilterInput
    $owner: String
  ) {
    onUpdateStressTest66(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest66 = /* GraphQL */ `
  subscription OnDeleteStressTest66(
    $filter: ModelSubscriptionStressTest66FilterInput
    $owner: String
  ) {
    onDeleteStressTest66(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest67 = /* GraphQL */ `
  subscription OnCreateStressTest67(
    $filter: ModelSubscriptionStressTest67FilterInput
    $owner: String
  ) {
    onCreateStressTest67(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest67 = /* GraphQL */ `
  subscription OnUpdateStressTest67(
    $filter: ModelSubscriptionStressTest67FilterInput
    $owner: String
  ) {
    onUpdateStressTest67(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest67 = /* GraphQL */ `
  subscription OnDeleteStressTest67(
    $filter: ModelSubscriptionStressTest67FilterInput
    $owner: String
  ) {
    onDeleteStressTest67(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest68 = /* GraphQL */ `
  subscription OnCreateStressTest68(
    $filter: ModelSubscriptionStressTest68FilterInput
    $owner: String
  ) {
    onCreateStressTest68(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest68 = /* GraphQL */ `
  subscription OnUpdateStressTest68(
    $filter: ModelSubscriptionStressTest68FilterInput
    $owner: String
  ) {
    onUpdateStressTest68(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest68 = /* GraphQL */ `
  subscription OnDeleteStressTest68(
    $filter: ModelSubscriptionStressTest68FilterInput
    $owner: String
  ) {
    onDeleteStressTest68(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest69 = /* GraphQL */ `
  subscription OnCreateStressTest69(
    $filter: ModelSubscriptionStressTest69FilterInput
    $owner: String
  ) {
    onCreateStressTest69(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest69 = /* GraphQL */ `
  subscription OnUpdateStressTest69(
    $filter: ModelSubscriptionStressTest69FilterInput
    $owner: String
  ) {
    onUpdateStressTest69(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest69 = /* GraphQL */ `
  subscription OnDeleteStressTest69(
    $filter: ModelSubscriptionStressTest69FilterInput
    $owner: String
  ) {
    onDeleteStressTest69(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest70 = /* GraphQL */ `
  subscription OnCreateStressTest70(
    $filter: ModelSubscriptionStressTest70FilterInput
    $owner: String
  ) {
    onCreateStressTest70(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest70 = /* GraphQL */ `
  subscription OnUpdateStressTest70(
    $filter: ModelSubscriptionStressTest70FilterInput
    $owner: String
  ) {
    onUpdateStressTest70(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest70 = /* GraphQL */ `
  subscription OnDeleteStressTest70(
    $filter: ModelSubscriptionStressTest70FilterInput
    $owner: String
  ) {
    onDeleteStressTest70(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest71 = /* GraphQL */ `
  subscription OnCreateStressTest71(
    $filter: ModelSubscriptionStressTest71FilterInput
    $owner: String
  ) {
    onCreateStressTest71(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest71 = /* GraphQL */ `
  subscription OnUpdateStressTest71(
    $filter: ModelSubscriptionStressTest71FilterInput
    $owner: String
  ) {
    onUpdateStressTest71(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest71 = /* GraphQL */ `
  subscription OnDeleteStressTest71(
    $filter: ModelSubscriptionStressTest71FilterInput
    $owner: String
  ) {
    onDeleteStressTest71(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest72 = /* GraphQL */ `
  subscription OnCreateStressTest72(
    $filter: ModelSubscriptionStressTest72FilterInput
    $owner: String
  ) {
    onCreateStressTest72(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest72 = /* GraphQL */ `
  subscription OnUpdateStressTest72(
    $filter: ModelSubscriptionStressTest72FilterInput
    $owner: String
  ) {
    onUpdateStressTest72(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest72 = /* GraphQL */ `
  subscription OnDeleteStressTest72(
    $filter: ModelSubscriptionStressTest72FilterInput
    $owner: String
  ) {
    onDeleteStressTest72(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest73 = /* GraphQL */ `
  subscription OnCreateStressTest73(
    $filter: ModelSubscriptionStressTest73FilterInput
    $owner: String
  ) {
    onCreateStressTest73(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest73 = /* GraphQL */ `
  subscription OnUpdateStressTest73(
    $filter: ModelSubscriptionStressTest73FilterInput
    $owner: String
  ) {
    onUpdateStressTest73(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest73 = /* GraphQL */ `
  subscription OnDeleteStressTest73(
    $filter: ModelSubscriptionStressTest73FilterInput
    $owner: String
  ) {
    onDeleteStressTest73(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest74 = /* GraphQL */ `
  subscription OnCreateStressTest74(
    $filter: ModelSubscriptionStressTest74FilterInput
    $owner: String
  ) {
    onCreateStressTest74(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest74 = /* GraphQL */ `
  subscription OnUpdateStressTest74(
    $filter: ModelSubscriptionStressTest74FilterInput
    $owner: String
  ) {
    onUpdateStressTest74(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest74 = /* GraphQL */ `
  subscription OnDeleteStressTest74(
    $filter: ModelSubscriptionStressTest74FilterInput
    $owner: String
  ) {
    onDeleteStressTest74(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest75 = /* GraphQL */ `
  subscription OnCreateStressTest75(
    $filter: ModelSubscriptionStressTest75FilterInput
    $owner: String
  ) {
    onCreateStressTest75(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest75 = /* GraphQL */ `
  subscription OnUpdateStressTest75(
    $filter: ModelSubscriptionStressTest75FilterInput
    $owner: String
  ) {
    onUpdateStressTest75(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest75 = /* GraphQL */ `
  subscription OnDeleteStressTest75(
    $filter: ModelSubscriptionStressTest75FilterInput
    $owner: String
  ) {
    onDeleteStressTest75(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest76 = /* GraphQL */ `
  subscription OnCreateStressTest76(
    $filter: ModelSubscriptionStressTest76FilterInput
    $owner: String
  ) {
    onCreateStressTest76(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest76 = /* GraphQL */ `
  subscription OnUpdateStressTest76(
    $filter: ModelSubscriptionStressTest76FilterInput
    $owner: String
  ) {
    onUpdateStressTest76(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest76 = /* GraphQL */ `
  subscription OnDeleteStressTest76(
    $filter: ModelSubscriptionStressTest76FilterInput
    $owner: String
  ) {
    onDeleteStressTest76(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest77 = /* GraphQL */ `
  subscription OnCreateStressTest77(
    $filter: ModelSubscriptionStressTest77FilterInput
    $owner: String
  ) {
    onCreateStressTest77(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest77 = /* GraphQL */ `
  subscription OnUpdateStressTest77(
    $filter: ModelSubscriptionStressTest77FilterInput
    $owner: String
  ) {
    onUpdateStressTest77(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest77 = /* GraphQL */ `
  subscription OnDeleteStressTest77(
    $filter: ModelSubscriptionStressTest77FilterInput
    $owner: String
  ) {
    onDeleteStressTest77(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest78 = /* GraphQL */ `
  subscription OnCreateStressTest78(
    $filter: ModelSubscriptionStressTest78FilterInput
    $owner: String
  ) {
    onCreateStressTest78(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest78 = /* GraphQL */ `
  subscription OnUpdateStressTest78(
    $filter: ModelSubscriptionStressTest78FilterInput
    $owner: String
  ) {
    onUpdateStressTest78(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest78 = /* GraphQL */ `
  subscription OnDeleteStressTest78(
    $filter: ModelSubscriptionStressTest78FilterInput
    $owner: String
  ) {
    onDeleteStressTest78(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest79 = /* GraphQL */ `
  subscription OnCreateStressTest79(
    $filter: ModelSubscriptionStressTest79FilterInput
    $owner: String
  ) {
    onCreateStressTest79(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest79 = /* GraphQL */ `
  subscription OnUpdateStressTest79(
    $filter: ModelSubscriptionStressTest79FilterInput
    $owner: String
  ) {
    onUpdateStressTest79(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest79 = /* GraphQL */ `
  subscription OnDeleteStressTest79(
    $filter: ModelSubscriptionStressTest79FilterInput
    $owner: String
  ) {
    onDeleteStressTest79(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest80 = /* GraphQL */ `
  subscription OnCreateStressTest80(
    $filter: ModelSubscriptionStressTest80FilterInput
    $owner: String
  ) {
    onCreateStressTest80(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest80 = /* GraphQL */ `
  subscription OnUpdateStressTest80(
    $filter: ModelSubscriptionStressTest80FilterInput
    $owner: String
  ) {
    onUpdateStressTest80(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest80 = /* GraphQL */ `
  subscription OnDeleteStressTest80(
    $filter: ModelSubscriptionStressTest80FilterInput
    $owner: String
  ) {
    onDeleteStressTest80(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest81 = /* GraphQL */ `
  subscription OnCreateStressTest81(
    $filter: ModelSubscriptionStressTest81FilterInput
    $owner: String
  ) {
    onCreateStressTest81(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      relatedItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest81 = /* GraphQL */ `
  subscription OnUpdateStressTest81(
    $filter: ModelSubscriptionStressTest81FilterInput
    $owner: String
  ) {
    onUpdateStressTest81(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      relatedItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest81 = /* GraphQL */ `
  subscription OnDeleteStressTest81(
    $filter: ModelSubscriptionStressTest81FilterInput
    $owner: String
  ) {
    onDeleteStressTest81(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      relatedItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest82 = /* GraphQL */ `
  subscription OnCreateStressTest82(
    $filter: ModelSubscriptionStressTest82FilterInput
    $owner: String
  ) {
    onCreateStressTest82(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      stressTest81ID
      createdAt
      updatedAt
      stressTest81RelatedItemsId
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest82 = /* GraphQL */ `
  subscription OnUpdateStressTest82(
    $filter: ModelSubscriptionStressTest82FilterInput
    $owner: String
  ) {
    onUpdateStressTest82(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      stressTest81ID
      createdAt
      updatedAt
      stressTest81RelatedItemsId
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest82 = /* GraphQL */ `
  subscription OnDeleteStressTest82(
    $filter: ModelSubscriptionStressTest82FilterInput
    $owner: String
  ) {
    onDeleteStressTest82(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      stressTest81ID
      createdAt
      updatedAt
      stressTest81RelatedItemsId
      owner
      __typename
    }
  }
`;
export const onCreateStressTest83 = /* GraphQL */ `
  subscription OnCreateStressTest83(
    $filter: ModelSubscriptionStressTest83FilterInput
    $owner: String
  ) {
    onCreateStressTest83(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      relatedItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest83 = /* GraphQL */ `
  subscription OnUpdateStressTest83(
    $filter: ModelSubscriptionStressTest83FilterInput
    $owner: String
  ) {
    onUpdateStressTest83(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      relatedItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest83 = /* GraphQL */ `
  subscription OnDeleteStressTest83(
    $filter: ModelSubscriptionStressTest83FilterInput
    $owner: String
  ) {
    onDeleteStressTest83(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      relatedItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest84 = /* GraphQL */ `
  subscription OnCreateStressTest84(
    $filter: ModelSubscriptionStressTest84FilterInput
    $owner: String
  ) {
    onCreateStressTest84(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      stressTest83ID
      createdAt
      updatedAt
      stressTest83RelatedItemsId
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest84 = /* GraphQL */ `
  subscription OnUpdateStressTest84(
    $filter: ModelSubscriptionStressTest84FilterInput
    $owner: String
  ) {
    onUpdateStressTest84(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      stressTest83ID
      createdAt
      updatedAt
      stressTest83RelatedItemsId
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest84 = /* GraphQL */ `
  subscription OnDeleteStressTest84(
    $filter: ModelSubscriptionStressTest84FilterInput
    $owner: String
  ) {
    onDeleteStressTest84(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      stressTest83ID
      createdAt
      updatedAt
      stressTest83RelatedItemsId
      owner
      __typename
    }
  }
`;
export const onCreateStressTest85 = /* GraphQL */ `
  subscription OnCreateStressTest85(
    $filter: ModelSubscriptionStressTest85FilterInput
    $owner: String
  ) {
    onCreateStressTest85(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      relatedItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest85 = /* GraphQL */ `
  subscription OnUpdateStressTest85(
    $filter: ModelSubscriptionStressTest85FilterInput
    $owner: String
  ) {
    onUpdateStressTest85(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      relatedItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest85 = /* GraphQL */ `
  subscription OnDeleteStressTest85(
    $filter: ModelSubscriptionStressTest85FilterInput
    $owner: String
  ) {
    onDeleteStressTest85(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      relatedItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest86 = /* GraphQL */ `
  subscription OnCreateStressTest86(
    $filter: ModelSubscriptionStressTest86FilterInput
    $owner: String
  ) {
    onCreateStressTest86(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      stressTest85ID
      createdAt
      updatedAt
      stressTest85RelatedItemsId
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest86 = /* GraphQL */ `
  subscription OnUpdateStressTest86(
    $filter: ModelSubscriptionStressTest86FilterInput
    $owner: String
  ) {
    onUpdateStressTest86(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      stressTest85ID
      createdAt
      updatedAt
      stressTest85RelatedItemsId
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest86 = /* GraphQL */ `
  subscription OnDeleteStressTest86(
    $filter: ModelSubscriptionStressTest86FilterInput
    $owner: String
  ) {
    onDeleteStressTest86(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      stressTest85ID
      createdAt
      updatedAt
      stressTest85RelatedItemsId
      owner
      __typename
    }
  }
`;
export const onCreateStressTest87 = /* GraphQL */ `
  subscription OnCreateStressTest87(
    $filter: ModelSubscriptionStressTest87FilterInput
    $owner: String
  ) {
    onCreateStressTest87(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      relatedItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest87 = /* GraphQL */ `
  subscription OnUpdateStressTest87(
    $filter: ModelSubscriptionStressTest87FilterInput
    $owner: String
  ) {
    onUpdateStressTest87(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      relatedItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest87 = /* GraphQL */ `
  subscription OnDeleteStressTest87(
    $filter: ModelSubscriptionStressTest87FilterInput
    $owner: String
  ) {
    onDeleteStressTest87(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      relatedItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest88 = /* GraphQL */ `
  subscription OnCreateStressTest88(
    $filter: ModelSubscriptionStressTest88FilterInput
    $owner: String
  ) {
    onCreateStressTest88(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      stressTest87ID
      createdAt
      updatedAt
      stressTest87RelatedItemsId
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest88 = /* GraphQL */ `
  subscription OnUpdateStressTest88(
    $filter: ModelSubscriptionStressTest88FilterInput
    $owner: String
  ) {
    onUpdateStressTest88(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      stressTest87ID
      createdAt
      updatedAt
      stressTest87RelatedItemsId
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest88 = /* GraphQL */ `
  subscription OnDeleteStressTest88(
    $filter: ModelSubscriptionStressTest88FilterInput
    $owner: String
  ) {
    onDeleteStressTest88(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      stressTest87ID
      createdAt
      updatedAt
      stressTest87RelatedItemsId
      owner
      __typename
    }
  }
`;
export const onCreateStressTest89 = /* GraphQL */ `
  subscription OnCreateStressTest89(
    $filter: ModelSubscriptionStressTest89FilterInput
    $owner: String
  ) {
    onCreateStressTest89(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      relatedItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest89 = /* GraphQL */ `
  subscription OnUpdateStressTest89(
    $filter: ModelSubscriptionStressTest89FilterInput
    $owner: String
  ) {
    onUpdateStressTest89(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      relatedItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest89 = /* GraphQL */ `
  subscription OnDeleteStressTest89(
    $filter: ModelSubscriptionStressTest89FilterInput
    $owner: String
  ) {
    onDeleteStressTest89(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      relatedItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest90 = /* GraphQL */ `
  subscription OnCreateStressTest90(
    $filter: ModelSubscriptionStressTest90FilterInput
    $owner: String
  ) {
    onCreateStressTest90(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      stressTest89ID
      createdAt
      updatedAt
      stressTest89RelatedItemsId
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest90 = /* GraphQL */ `
  subscription OnUpdateStressTest90(
    $filter: ModelSubscriptionStressTest90FilterInput
    $owner: String
  ) {
    onUpdateStressTest90(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      stressTest89ID
      createdAt
      updatedAt
      stressTest89RelatedItemsId
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest90 = /* GraphQL */ `
  subscription OnDeleteStressTest90(
    $filter: ModelSubscriptionStressTest90FilterInput
    $owner: String
  ) {
    onDeleteStressTest90(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      stressTest89ID
      createdAt
      updatedAt
      stressTest89RelatedItemsId
      owner
      __typename
    }
  }
`;
export const onCreateStressTest91 = /* GraphQL */ `
  subscription OnCreateStressTest91(
    $filter: ModelSubscriptionStressTest91FilterInput
    $owner: String
  ) {
    onCreateStressTest91(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest91 = /* GraphQL */ `
  subscription OnUpdateStressTest91(
    $filter: ModelSubscriptionStressTest91FilterInput
    $owner: String
  ) {
    onUpdateStressTest91(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest91 = /* GraphQL */ `
  subscription OnDeleteStressTest91(
    $filter: ModelSubscriptionStressTest91FilterInput
    $owner: String
  ) {
    onDeleteStressTest91(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest92 = /* GraphQL */ `
  subscription OnCreateStressTest92(
    $filter: ModelSubscriptionStressTest92FilterInput
    $owner: String
  ) {
    onCreateStressTest92(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest92 = /* GraphQL */ `
  subscription OnUpdateStressTest92(
    $filter: ModelSubscriptionStressTest92FilterInput
    $owner: String
  ) {
    onUpdateStressTest92(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest92 = /* GraphQL */ `
  subscription OnDeleteStressTest92(
    $filter: ModelSubscriptionStressTest92FilterInput
    $owner: String
  ) {
    onDeleteStressTest92(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest93 = /* GraphQL */ `
  subscription OnCreateStressTest93(
    $filter: ModelSubscriptionStressTest93FilterInput
    $owner: String
  ) {
    onCreateStressTest93(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest93 = /* GraphQL */ `
  subscription OnUpdateStressTest93(
    $filter: ModelSubscriptionStressTest93FilterInput
    $owner: String
  ) {
    onUpdateStressTest93(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest93 = /* GraphQL */ `
  subscription OnDeleteStressTest93(
    $filter: ModelSubscriptionStressTest93FilterInput
    $owner: String
  ) {
    onDeleteStressTest93(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest94 = /* GraphQL */ `
  subscription OnCreateStressTest94(
    $filter: ModelSubscriptionStressTest94FilterInput
    $owner: String
  ) {
    onCreateStressTest94(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest94 = /* GraphQL */ `
  subscription OnUpdateStressTest94(
    $filter: ModelSubscriptionStressTest94FilterInput
    $owner: String
  ) {
    onUpdateStressTest94(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest94 = /* GraphQL */ `
  subscription OnDeleteStressTest94(
    $filter: ModelSubscriptionStressTest94FilterInput
    $owner: String
  ) {
    onDeleteStressTest94(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest95 = /* GraphQL */ `
  subscription OnCreateStressTest95(
    $filter: ModelSubscriptionStressTest95FilterInput
    $owner: String
  ) {
    onCreateStressTest95(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest95 = /* GraphQL */ `
  subscription OnUpdateStressTest95(
    $filter: ModelSubscriptionStressTest95FilterInput
    $owner: String
  ) {
    onUpdateStressTest95(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest95 = /* GraphQL */ `
  subscription OnDeleteStressTest95(
    $filter: ModelSubscriptionStressTest95FilterInput
    $owner: String
  ) {
    onDeleteStressTest95(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest96 = /* GraphQL */ `
  subscription OnCreateStressTest96(
    $filter: ModelSubscriptionStressTest96FilterInput
    $owner: String
  ) {
    onCreateStressTest96(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest96 = /* GraphQL */ `
  subscription OnUpdateStressTest96(
    $filter: ModelSubscriptionStressTest96FilterInput
    $owner: String
  ) {
    onUpdateStressTest96(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest96 = /* GraphQL */ `
  subscription OnDeleteStressTest96(
    $filter: ModelSubscriptionStressTest96FilterInput
    $owner: String
  ) {
    onDeleteStressTest96(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest97 = /* GraphQL */ `
  subscription OnCreateStressTest97(
    $filter: ModelSubscriptionStressTest97FilterInput
    $owner: String
  ) {
    onCreateStressTest97(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest97 = /* GraphQL */ `
  subscription OnUpdateStressTest97(
    $filter: ModelSubscriptionStressTest97FilterInput
    $owner: String
  ) {
    onUpdateStressTest97(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest97 = /* GraphQL */ `
  subscription OnDeleteStressTest97(
    $filter: ModelSubscriptionStressTest97FilterInput
    $owner: String
  ) {
    onDeleteStressTest97(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest98 = /* GraphQL */ `
  subscription OnCreateStressTest98(
    $filter: ModelSubscriptionStressTest98FilterInput
    $owner: String
  ) {
    onCreateStressTest98(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest98 = /* GraphQL */ `
  subscription OnUpdateStressTest98(
    $filter: ModelSubscriptionStressTest98FilterInput
    $owner: String
  ) {
    onUpdateStressTest98(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest98 = /* GraphQL */ `
  subscription OnDeleteStressTest98(
    $filter: ModelSubscriptionStressTest98FilterInput
    $owner: String
  ) {
    onDeleteStressTest98(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest99 = /* GraphQL */ `
  subscription OnCreateStressTest99(
    $filter: ModelSubscriptionStressTest99FilterInput
    $owner: String
  ) {
    onCreateStressTest99(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest99 = /* GraphQL */ `
  subscription OnUpdateStressTest99(
    $filter: ModelSubscriptionStressTest99FilterInput
    $owner: String
  ) {
    onUpdateStressTest99(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest99 = /* GraphQL */ `
  subscription OnDeleteStressTest99(
    $filter: ModelSubscriptionStressTest99FilterInput
    $owner: String
  ) {
    onDeleteStressTest99(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStressTest100 = /* GraphQL */ `
  subscription OnCreateStressTest100(
    $filter: ModelSubscriptionStressTest100FilterInput
    $owner: String
  ) {
    onCreateStressTest100(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStressTest100 = /* GraphQL */ `
  subscription OnUpdateStressTest100(
    $filter: ModelSubscriptionStressTest100FilterInput
    $owner: String
  ) {
    onUpdateStressTest100(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStressTest100 = /* GraphQL */ `
  subscription OnDeleteStressTest100(
    $filter: ModelSubscriptionStressTest100FilterInput
    $owner: String
  ) {
    onDeleteStressTest100(filter: $filter, owner: $owner) {
      id
      name
      data
      value
      active
      timestamp
      status
      priority
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
