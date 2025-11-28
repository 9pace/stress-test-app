/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
export const createStressTest1 = /* GraphQL */ `
  mutation CreateStressTest1(
    $input: CreateStressTest1Input!
    $condition: ModelStressTest1ConditionInput
  ) {
    createStressTest1(input: $input, condition: $condition) {
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
export const updateStressTest1 = /* GraphQL */ `
  mutation UpdateStressTest1(
    $input: UpdateStressTest1Input!
    $condition: ModelStressTest1ConditionInput
  ) {
    updateStressTest1(input: $input, condition: $condition) {
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
export const deleteStressTest1 = /* GraphQL */ `
  mutation DeleteStressTest1(
    $input: DeleteStressTest1Input!
    $condition: ModelStressTest1ConditionInput
  ) {
    deleteStressTest1(input: $input, condition: $condition) {
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
export const createStressTest2 = /* GraphQL */ `
  mutation CreateStressTest2(
    $input: CreateStressTest2Input!
    $condition: ModelStressTest2ConditionInput
  ) {
    createStressTest2(input: $input, condition: $condition) {
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
export const updateStressTest2 = /* GraphQL */ `
  mutation UpdateStressTest2(
    $input: UpdateStressTest2Input!
    $condition: ModelStressTest2ConditionInput
  ) {
    updateStressTest2(input: $input, condition: $condition) {
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
export const deleteStressTest2 = /* GraphQL */ `
  mutation DeleteStressTest2(
    $input: DeleteStressTest2Input!
    $condition: ModelStressTest2ConditionInput
  ) {
    deleteStressTest2(input: $input, condition: $condition) {
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
export const createStressTest3 = /* GraphQL */ `
  mutation CreateStressTest3(
    $input: CreateStressTest3Input!
    $condition: ModelStressTest3ConditionInput
  ) {
    createStressTest3(input: $input, condition: $condition) {
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
export const updateStressTest3 = /* GraphQL */ `
  mutation UpdateStressTest3(
    $input: UpdateStressTest3Input!
    $condition: ModelStressTest3ConditionInput
  ) {
    updateStressTest3(input: $input, condition: $condition) {
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
export const deleteStressTest3 = /* GraphQL */ `
  mutation DeleteStressTest3(
    $input: DeleteStressTest3Input!
    $condition: ModelStressTest3ConditionInput
  ) {
    deleteStressTest3(input: $input, condition: $condition) {
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
export const createStressTest4 = /* GraphQL */ `
  mutation CreateStressTest4(
    $input: CreateStressTest4Input!
    $condition: ModelStressTest4ConditionInput
  ) {
    createStressTest4(input: $input, condition: $condition) {
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
export const updateStressTest4 = /* GraphQL */ `
  mutation UpdateStressTest4(
    $input: UpdateStressTest4Input!
    $condition: ModelStressTest4ConditionInput
  ) {
    updateStressTest4(input: $input, condition: $condition) {
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
export const deleteStressTest4 = /* GraphQL */ `
  mutation DeleteStressTest4(
    $input: DeleteStressTest4Input!
    $condition: ModelStressTest4ConditionInput
  ) {
    deleteStressTest4(input: $input, condition: $condition) {
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
export const createStressTest5 = /* GraphQL */ `
  mutation CreateStressTest5(
    $input: CreateStressTest5Input!
    $condition: ModelStressTest5ConditionInput
  ) {
    createStressTest5(input: $input, condition: $condition) {
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
export const updateStressTest5 = /* GraphQL */ `
  mutation UpdateStressTest5(
    $input: UpdateStressTest5Input!
    $condition: ModelStressTest5ConditionInput
  ) {
    updateStressTest5(input: $input, condition: $condition) {
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
export const deleteStressTest5 = /* GraphQL */ `
  mutation DeleteStressTest5(
    $input: DeleteStressTest5Input!
    $condition: ModelStressTest5ConditionInput
  ) {
    deleteStressTest5(input: $input, condition: $condition) {
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
export const createStressTest6 = /* GraphQL */ `
  mutation CreateStressTest6(
    $input: CreateStressTest6Input!
    $condition: ModelStressTest6ConditionInput
  ) {
    createStressTest6(input: $input, condition: $condition) {
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
export const updateStressTest6 = /* GraphQL */ `
  mutation UpdateStressTest6(
    $input: UpdateStressTest6Input!
    $condition: ModelStressTest6ConditionInput
  ) {
    updateStressTest6(input: $input, condition: $condition) {
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
export const deleteStressTest6 = /* GraphQL */ `
  mutation DeleteStressTest6(
    $input: DeleteStressTest6Input!
    $condition: ModelStressTest6ConditionInput
  ) {
    deleteStressTest6(input: $input, condition: $condition) {
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
export const createStressTest7 = /* GraphQL */ `
  mutation CreateStressTest7(
    $input: CreateStressTest7Input!
    $condition: ModelStressTest7ConditionInput
  ) {
    createStressTest7(input: $input, condition: $condition) {
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
export const updateStressTest7 = /* GraphQL */ `
  mutation UpdateStressTest7(
    $input: UpdateStressTest7Input!
    $condition: ModelStressTest7ConditionInput
  ) {
    updateStressTest7(input: $input, condition: $condition) {
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
export const deleteStressTest7 = /* GraphQL */ `
  mutation DeleteStressTest7(
    $input: DeleteStressTest7Input!
    $condition: ModelStressTest7ConditionInput
  ) {
    deleteStressTest7(input: $input, condition: $condition) {
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
export const createStressTest8 = /* GraphQL */ `
  mutation CreateStressTest8(
    $input: CreateStressTest8Input!
    $condition: ModelStressTest8ConditionInput
  ) {
    createStressTest8(input: $input, condition: $condition) {
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
export const updateStressTest8 = /* GraphQL */ `
  mutation UpdateStressTest8(
    $input: UpdateStressTest8Input!
    $condition: ModelStressTest8ConditionInput
  ) {
    updateStressTest8(input: $input, condition: $condition) {
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
export const deleteStressTest8 = /* GraphQL */ `
  mutation DeleteStressTest8(
    $input: DeleteStressTest8Input!
    $condition: ModelStressTest8ConditionInput
  ) {
    deleteStressTest8(input: $input, condition: $condition) {
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
export const createStressTest9 = /* GraphQL */ `
  mutation CreateStressTest9(
    $input: CreateStressTest9Input!
    $condition: ModelStressTest9ConditionInput
  ) {
    createStressTest9(input: $input, condition: $condition) {
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
export const updateStressTest9 = /* GraphQL */ `
  mutation UpdateStressTest9(
    $input: UpdateStressTest9Input!
    $condition: ModelStressTest9ConditionInput
  ) {
    updateStressTest9(input: $input, condition: $condition) {
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
export const deleteStressTest9 = /* GraphQL */ `
  mutation DeleteStressTest9(
    $input: DeleteStressTest9Input!
    $condition: ModelStressTest9ConditionInput
  ) {
    deleteStressTest9(input: $input, condition: $condition) {
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
export const createStressTest10 = /* GraphQL */ `
  mutation CreateStressTest10(
    $input: CreateStressTest10Input!
    $condition: ModelStressTest10ConditionInput
  ) {
    createStressTest10(input: $input, condition: $condition) {
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
export const updateStressTest10 = /* GraphQL */ `
  mutation UpdateStressTest10(
    $input: UpdateStressTest10Input!
    $condition: ModelStressTest10ConditionInput
  ) {
    updateStressTest10(input: $input, condition: $condition) {
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
export const deleteStressTest10 = /* GraphQL */ `
  mutation DeleteStressTest10(
    $input: DeleteStressTest10Input!
    $condition: ModelStressTest10ConditionInput
  ) {
    deleteStressTest10(input: $input, condition: $condition) {
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
export const createStressTest11 = /* GraphQL */ `
  mutation CreateStressTest11(
    $input: CreateStressTest11Input!
    $condition: ModelStressTest11ConditionInput
  ) {
    createStressTest11(input: $input, condition: $condition) {
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
export const updateStressTest11 = /* GraphQL */ `
  mutation UpdateStressTest11(
    $input: UpdateStressTest11Input!
    $condition: ModelStressTest11ConditionInput
  ) {
    updateStressTest11(input: $input, condition: $condition) {
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
export const deleteStressTest11 = /* GraphQL */ `
  mutation DeleteStressTest11(
    $input: DeleteStressTest11Input!
    $condition: ModelStressTest11ConditionInput
  ) {
    deleteStressTest11(input: $input, condition: $condition) {
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
export const createStressTest12 = /* GraphQL */ `
  mutation CreateStressTest12(
    $input: CreateStressTest12Input!
    $condition: ModelStressTest12ConditionInput
  ) {
    createStressTest12(input: $input, condition: $condition) {
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
export const updateStressTest12 = /* GraphQL */ `
  mutation UpdateStressTest12(
    $input: UpdateStressTest12Input!
    $condition: ModelStressTest12ConditionInput
  ) {
    updateStressTest12(input: $input, condition: $condition) {
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
export const deleteStressTest12 = /* GraphQL */ `
  mutation DeleteStressTest12(
    $input: DeleteStressTest12Input!
    $condition: ModelStressTest12ConditionInput
  ) {
    deleteStressTest12(input: $input, condition: $condition) {
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
export const createStressTest13 = /* GraphQL */ `
  mutation CreateStressTest13(
    $input: CreateStressTest13Input!
    $condition: ModelStressTest13ConditionInput
  ) {
    createStressTest13(input: $input, condition: $condition) {
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
export const updateStressTest13 = /* GraphQL */ `
  mutation UpdateStressTest13(
    $input: UpdateStressTest13Input!
    $condition: ModelStressTest13ConditionInput
  ) {
    updateStressTest13(input: $input, condition: $condition) {
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
export const deleteStressTest13 = /* GraphQL */ `
  mutation DeleteStressTest13(
    $input: DeleteStressTest13Input!
    $condition: ModelStressTest13ConditionInput
  ) {
    deleteStressTest13(input: $input, condition: $condition) {
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
export const createStressTest14 = /* GraphQL */ `
  mutation CreateStressTest14(
    $input: CreateStressTest14Input!
    $condition: ModelStressTest14ConditionInput
  ) {
    createStressTest14(input: $input, condition: $condition) {
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
export const updateStressTest14 = /* GraphQL */ `
  mutation UpdateStressTest14(
    $input: UpdateStressTest14Input!
    $condition: ModelStressTest14ConditionInput
  ) {
    updateStressTest14(input: $input, condition: $condition) {
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
export const deleteStressTest14 = /* GraphQL */ `
  mutation DeleteStressTest14(
    $input: DeleteStressTest14Input!
    $condition: ModelStressTest14ConditionInput
  ) {
    deleteStressTest14(input: $input, condition: $condition) {
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
export const createStressTest15 = /* GraphQL */ `
  mutation CreateStressTest15(
    $input: CreateStressTest15Input!
    $condition: ModelStressTest15ConditionInput
  ) {
    createStressTest15(input: $input, condition: $condition) {
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
export const updateStressTest15 = /* GraphQL */ `
  mutation UpdateStressTest15(
    $input: UpdateStressTest15Input!
    $condition: ModelStressTest15ConditionInput
  ) {
    updateStressTest15(input: $input, condition: $condition) {
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
export const deleteStressTest15 = /* GraphQL */ `
  mutation DeleteStressTest15(
    $input: DeleteStressTest15Input!
    $condition: ModelStressTest15ConditionInput
  ) {
    deleteStressTest15(input: $input, condition: $condition) {
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
export const createStressTest16 = /* GraphQL */ `
  mutation CreateStressTest16(
    $input: CreateStressTest16Input!
    $condition: ModelStressTest16ConditionInput
  ) {
    createStressTest16(input: $input, condition: $condition) {
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
export const updateStressTest16 = /* GraphQL */ `
  mutation UpdateStressTest16(
    $input: UpdateStressTest16Input!
    $condition: ModelStressTest16ConditionInput
  ) {
    updateStressTest16(input: $input, condition: $condition) {
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
export const deleteStressTest16 = /* GraphQL */ `
  mutation DeleteStressTest16(
    $input: DeleteStressTest16Input!
    $condition: ModelStressTest16ConditionInput
  ) {
    deleteStressTest16(input: $input, condition: $condition) {
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
export const createStressTest17 = /* GraphQL */ `
  mutation CreateStressTest17(
    $input: CreateStressTest17Input!
    $condition: ModelStressTest17ConditionInput
  ) {
    createStressTest17(input: $input, condition: $condition) {
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
export const updateStressTest17 = /* GraphQL */ `
  mutation UpdateStressTest17(
    $input: UpdateStressTest17Input!
    $condition: ModelStressTest17ConditionInput
  ) {
    updateStressTest17(input: $input, condition: $condition) {
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
export const deleteStressTest17 = /* GraphQL */ `
  mutation DeleteStressTest17(
    $input: DeleteStressTest17Input!
    $condition: ModelStressTest17ConditionInput
  ) {
    deleteStressTest17(input: $input, condition: $condition) {
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
export const createStressTest18 = /* GraphQL */ `
  mutation CreateStressTest18(
    $input: CreateStressTest18Input!
    $condition: ModelStressTest18ConditionInput
  ) {
    createStressTest18(input: $input, condition: $condition) {
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
export const updateStressTest18 = /* GraphQL */ `
  mutation UpdateStressTest18(
    $input: UpdateStressTest18Input!
    $condition: ModelStressTest18ConditionInput
  ) {
    updateStressTest18(input: $input, condition: $condition) {
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
export const deleteStressTest18 = /* GraphQL */ `
  mutation DeleteStressTest18(
    $input: DeleteStressTest18Input!
    $condition: ModelStressTest18ConditionInput
  ) {
    deleteStressTest18(input: $input, condition: $condition) {
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
export const createStressTest19 = /* GraphQL */ `
  mutation CreateStressTest19(
    $input: CreateStressTest19Input!
    $condition: ModelStressTest19ConditionInput
  ) {
    createStressTest19(input: $input, condition: $condition) {
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
export const updateStressTest19 = /* GraphQL */ `
  mutation UpdateStressTest19(
    $input: UpdateStressTest19Input!
    $condition: ModelStressTest19ConditionInput
  ) {
    updateStressTest19(input: $input, condition: $condition) {
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
export const deleteStressTest19 = /* GraphQL */ `
  mutation DeleteStressTest19(
    $input: DeleteStressTest19Input!
    $condition: ModelStressTest19ConditionInput
  ) {
    deleteStressTest19(input: $input, condition: $condition) {
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
export const createStressTest20 = /* GraphQL */ `
  mutation CreateStressTest20(
    $input: CreateStressTest20Input!
    $condition: ModelStressTest20ConditionInput
  ) {
    createStressTest20(input: $input, condition: $condition) {
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
export const updateStressTest20 = /* GraphQL */ `
  mutation UpdateStressTest20(
    $input: UpdateStressTest20Input!
    $condition: ModelStressTest20ConditionInput
  ) {
    updateStressTest20(input: $input, condition: $condition) {
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
export const deleteStressTest20 = /* GraphQL */ `
  mutation DeleteStressTest20(
    $input: DeleteStressTest20Input!
    $condition: ModelStressTest20ConditionInput
  ) {
    deleteStressTest20(input: $input, condition: $condition) {
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
export const createStressTest21 = /* GraphQL */ `
  mutation CreateStressTest21(
    $input: CreateStressTest21Input!
    $condition: ModelStressTest21ConditionInput
  ) {
    createStressTest21(input: $input, condition: $condition) {
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
export const updateStressTest21 = /* GraphQL */ `
  mutation UpdateStressTest21(
    $input: UpdateStressTest21Input!
    $condition: ModelStressTest21ConditionInput
  ) {
    updateStressTest21(input: $input, condition: $condition) {
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
export const deleteStressTest21 = /* GraphQL */ `
  mutation DeleteStressTest21(
    $input: DeleteStressTest21Input!
    $condition: ModelStressTest21ConditionInput
  ) {
    deleteStressTest21(input: $input, condition: $condition) {
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
export const createStressTest22 = /* GraphQL */ `
  mutation CreateStressTest22(
    $input: CreateStressTest22Input!
    $condition: ModelStressTest22ConditionInput
  ) {
    createStressTest22(input: $input, condition: $condition) {
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
export const updateStressTest22 = /* GraphQL */ `
  mutation UpdateStressTest22(
    $input: UpdateStressTest22Input!
    $condition: ModelStressTest22ConditionInput
  ) {
    updateStressTest22(input: $input, condition: $condition) {
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
export const deleteStressTest22 = /* GraphQL */ `
  mutation DeleteStressTest22(
    $input: DeleteStressTest22Input!
    $condition: ModelStressTest22ConditionInput
  ) {
    deleteStressTest22(input: $input, condition: $condition) {
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
export const createStressTest23 = /* GraphQL */ `
  mutation CreateStressTest23(
    $input: CreateStressTest23Input!
    $condition: ModelStressTest23ConditionInput
  ) {
    createStressTest23(input: $input, condition: $condition) {
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
export const updateStressTest23 = /* GraphQL */ `
  mutation UpdateStressTest23(
    $input: UpdateStressTest23Input!
    $condition: ModelStressTest23ConditionInput
  ) {
    updateStressTest23(input: $input, condition: $condition) {
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
export const deleteStressTest23 = /* GraphQL */ `
  mutation DeleteStressTest23(
    $input: DeleteStressTest23Input!
    $condition: ModelStressTest23ConditionInput
  ) {
    deleteStressTest23(input: $input, condition: $condition) {
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
export const createStressTest24 = /* GraphQL */ `
  mutation CreateStressTest24(
    $input: CreateStressTest24Input!
    $condition: ModelStressTest24ConditionInput
  ) {
    createStressTest24(input: $input, condition: $condition) {
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
export const updateStressTest24 = /* GraphQL */ `
  mutation UpdateStressTest24(
    $input: UpdateStressTest24Input!
    $condition: ModelStressTest24ConditionInput
  ) {
    updateStressTest24(input: $input, condition: $condition) {
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
export const deleteStressTest24 = /* GraphQL */ `
  mutation DeleteStressTest24(
    $input: DeleteStressTest24Input!
    $condition: ModelStressTest24ConditionInput
  ) {
    deleteStressTest24(input: $input, condition: $condition) {
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
export const createStressTest25 = /* GraphQL */ `
  mutation CreateStressTest25(
    $input: CreateStressTest25Input!
    $condition: ModelStressTest25ConditionInput
  ) {
    createStressTest25(input: $input, condition: $condition) {
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
export const updateStressTest25 = /* GraphQL */ `
  mutation UpdateStressTest25(
    $input: UpdateStressTest25Input!
    $condition: ModelStressTest25ConditionInput
  ) {
    updateStressTest25(input: $input, condition: $condition) {
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
export const deleteStressTest25 = /* GraphQL */ `
  mutation DeleteStressTest25(
    $input: DeleteStressTest25Input!
    $condition: ModelStressTest25ConditionInput
  ) {
    deleteStressTest25(input: $input, condition: $condition) {
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
export const createStressTest26 = /* GraphQL */ `
  mutation CreateStressTest26(
    $input: CreateStressTest26Input!
    $condition: ModelStressTest26ConditionInput
  ) {
    createStressTest26(input: $input, condition: $condition) {
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
export const updateStressTest26 = /* GraphQL */ `
  mutation UpdateStressTest26(
    $input: UpdateStressTest26Input!
    $condition: ModelStressTest26ConditionInput
  ) {
    updateStressTest26(input: $input, condition: $condition) {
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
export const deleteStressTest26 = /* GraphQL */ `
  mutation DeleteStressTest26(
    $input: DeleteStressTest26Input!
    $condition: ModelStressTest26ConditionInput
  ) {
    deleteStressTest26(input: $input, condition: $condition) {
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
export const createStressTest27 = /* GraphQL */ `
  mutation CreateStressTest27(
    $input: CreateStressTest27Input!
    $condition: ModelStressTest27ConditionInput
  ) {
    createStressTest27(input: $input, condition: $condition) {
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
export const updateStressTest27 = /* GraphQL */ `
  mutation UpdateStressTest27(
    $input: UpdateStressTest27Input!
    $condition: ModelStressTest27ConditionInput
  ) {
    updateStressTest27(input: $input, condition: $condition) {
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
export const deleteStressTest27 = /* GraphQL */ `
  mutation DeleteStressTest27(
    $input: DeleteStressTest27Input!
    $condition: ModelStressTest27ConditionInput
  ) {
    deleteStressTest27(input: $input, condition: $condition) {
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
export const createStressTest28 = /* GraphQL */ `
  mutation CreateStressTest28(
    $input: CreateStressTest28Input!
    $condition: ModelStressTest28ConditionInput
  ) {
    createStressTest28(input: $input, condition: $condition) {
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
export const updateStressTest28 = /* GraphQL */ `
  mutation UpdateStressTest28(
    $input: UpdateStressTest28Input!
    $condition: ModelStressTest28ConditionInput
  ) {
    updateStressTest28(input: $input, condition: $condition) {
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
export const deleteStressTest28 = /* GraphQL */ `
  mutation DeleteStressTest28(
    $input: DeleteStressTest28Input!
    $condition: ModelStressTest28ConditionInput
  ) {
    deleteStressTest28(input: $input, condition: $condition) {
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
export const createStressTest29 = /* GraphQL */ `
  mutation CreateStressTest29(
    $input: CreateStressTest29Input!
    $condition: ModelStressTest29ConditionInput
  ) {
    createStressTest29(input: $input, condition: $condition) {
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
export const updateStressTest29 = /* GraphQL */ `
  mutation UpdateStressTest29(
    $input: UpdateStressTest29Input!
    $condition: ModelStressTest29ConditionInput
  ) {
    updateStressTest29(input: $input, condition: $condition) {
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
export const deleteStressTest29 = /* GraphQL */ `
  mutation DeleteStressTest29(
    $input: DeleteStressTest29Input!
    $condition: ModelStressTest29ConditionInput
  ) {
    deleteStressTest29(input: $input, condition: $condition) {
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
export const createStressTest30 = /* GraphQL */ `
  mutation CreateStressTest30(
    $input: CreateStressTest30Input!
    $condition: ModelStressTest30ConditionInput
  ) {
    createStressTest30(input: $input, condition: $condition) {
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
export const updateStressTest30 = /* GraphQL */ `
  mutation UpdateStressTest30(
    $input: UpdateStressTest30Input!
    $condition: ModelStressTest30ConditionInput
  ) {
    updateStressTest30(input: $input, condition: $condition) {
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
export const deleteStressTest30 = /* GraphQL */ `
  mutation DeleteStressTest30(
    $input: DeleteStressTest30Input!
    $condition: ModelStressTest30ConditionInput
  ) {
    deleteStressTest30(input: $input, condition: $condition) {
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
export const createStressTest31 = /* GraphQL */ `
  mutation CreateStressTest31(
    $input: CreateStressTest31Input!
    $condition: ModelStressTest31ConditionInput
  ) {
    createStressTest31(input: $input, condition: $condition) {
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
export const updateStressTest31 = /* GraphQL */ `
  mutation UpdateStressTest31(
    $input: UpdateStressTest31Input!
    $condition: ModelStressTest31ConditionInput
  ) {
    updateStressTest31(input: $input, condition: $condition) {
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
export const deleteStressTest31 = /* GraphQL */ `
  mutation DeleteStressTest31(
    $input: DeleteStressTest31Input!
    $condition: ModelStressTest31ConditionInput
  ) {
    deleteStressTest31(input: $input, condition: $condition) {
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
export const createStressTest32 = /* GraphQL */ `
  mutation CreateStressTest32(
    $input: CreateStressTest32Input!
    $condition: ModelStressTest32ConditionInput
  ) {
    createStressTest32(input: $input, condition: $condition) {
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
export const updateStressTest32 = /* GraphQL */ `
  mutation UpdateStressTest32(
    $input: UpdateStressTest32Input!
    $condition: ModelStressTest32ConditionInput
  ) {
    updateStressTest32(input: $input, condition: $condition) {
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
export const deleteStressTest32 = /* GraphQL */ `
  mutation DeleteStressTest32(
    $input: DeleteStressTest32Input!
    $condition: ModelStressTest32ConditionInput
  ) {
    deleteStressTest32(input: $input, condition: $condition) {
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
export const createStressTest33 = /* GraphQL */ `
  mutation CreateStressTest33(
    $input: CreateStressTest33Input!
    $condition: ModelStressTest33ConditionInput
  ) {
    createStressTest33(input: $input, condition: $condition) {
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
export const updateStressTest33 = /* GraphQL */ `
  mutation UpdateStressTest33(
    $input: UpdateStressTest33Input!
    $condition: ModelStressTest33ConditionInput
  ) {
    updateStressTest33(input: $input, condition: $condition) {
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
export const deleteStressTest33 = /* GraphQL */ `
  mutation DeleteStressTest33(
    $input: DeleteStressTest33Input!
    $condition: ModelStressTest33ConditionInput
  ) {
    deleteStressTest33(input: $input, condition: $condition) {
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
export const createStressTest34 = /* GraphQL */ `
  mutation CreateStressTest34(
    $input: CreateStressTest34Input!
    $condition: ModelStressTest34ConditionInput
  ) {
    createStressTest34(input: $input, condition: $condition) {
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
export const updateStressTest34 = /* GraphQL */ `
  mutation UpdateStressTest34(
    $input: UpdateStressTest34Input!
    $condition: ModelStressTest34ConditionInput
  ) {
    updateStressTest34(input: $input, condition: $condition) {
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
export const deleteStressTest34 = /* GraphQL */ `
  mutation DeleteStressTest34(
    $input: DeleteStressTest34Input!
    $condition: ModelStressTest34ConditionInput
  ) {
    deleteStressTest34(input: $input, condition: $condition) {
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
export const createStressTest35 = /* GraphQL */ `
  mutation CreateStressTest35(
    $input: CreateStressTest35Input!
    $condition: ModelStressTest35ConditionInput
  ) {
    createStressTest35(input: $input, condition: $condition) {
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
export const updateStressTest35 = /* GraphQL */ `
  mutation UpdateStressTest35(
    $input: UpdateStressTest35Input!
    $condition: ModelStressTest35ConditionInput
  ) {
    updateStressTest35(input: $input, condition: $condition) {
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
export const deleteStressTest35 = /* GraphQL */ `
  mutation DeleteStressTest35(
    $input: DeleteStressTest35Input!
    $condition: ModelStressTest35ConditionInput
  ) {
    deleteStressTest35(input: $input, condition: $condition) {
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
export const createStressTest36 = /* GraphQL */ `
  mutation CreateStressTest36(
    $input: CreateStressTest36Input!
    $condition: ModelStressTest36ConditionInput
  ) {
    createStressTest36(input: $input, condition: $condition) {
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
export const updateStressTest36 = /* GraphQL */ `
  mutation UpdateStressTest36(
    $input: UpdateStressTest36Input!
    $condition: ModelStressTest36ConditionInput
  ) {
    updateStressTest36(input: $input, condition: $condition) {
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
export const deleteStressTest36 = /* GraphQL */ `
  mutation DeleteStressTest36(
    $input: DeleteStressTest36Input!
    $condition: ModelStressTest36ConditionInput
  ) {
    deleteStressTest36(input: $input, condition: $condition) {
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
export const createStressTest37 = /* GraphQL */ `
  mutation CreateStressTest37(
    $input: CreateStressTest37Input!
    $condition: ModelStressTest37ConditionInput
  ) {
    createStressTest37(input: $input, condition: $condition) {
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
export const updateStressTest37 = /* GraphQL */ `
  mutation UpdateStressTest37(
    $input: UpdateStressTest37Input!
    $condition: ModelStressTest37ConditionInput
  ) {
    updateStressTest37(input: $input, condition: $condition) {
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
export const deleteStressTest37 = /* GraphQL */ `
  mutation DeleteStressTest37(
    $input: DeleteStressTest37Input!
    $condition: ModelStressTest37ConditionInput
  ) {
    deleteStressTest37(input: $input, condition: $condition) {
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
export const createStressTest38 = /* GraphQL */ `
  mutation CreateStressTest38(
    $input: CreateStressTest38Input!
    $condition: ModelStressTest38ConditionInput
  ) {
    createStressTest38(input: $input, condition: $condition) {
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
export const updateStressTest38 = /* GraphQL */ `
  mutation UpdateStressTest38(
    $input: UpdateStressTest38Input!
    $condition: ModelStressTest38ConditionInput
  ) {
    updateStressTest38(input: $input, condition: $condition) {
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
export const deleteStressTest38 = /* GraphQL */ `
  mutation DeleteStressTest38(
    $input: DeleteStressTest38Input!
    $condition: ModelStressTest38ConditionInput
  ) {
    deleteStressTest38(input: $input, condition: $condition) {
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
export const createStressTest39 = /* GraphQL */ `
  mutation CreateStressTest39(
    $input: CreateStressTest39Input!
    $condition: ModelStressTest39ConditionInput
  ) {
    createStressTest39(input: $input, condition: $condition) {
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
export const updateStressTest39 = /* GraphQL */ `
  mutation UpdateStressTest39(
    $input: UpdateStressTest39Input!
    $condition: ModelStressTest39ConditionInput
  ) {
    updateStressTest39(input: $input, condition: $condition) {
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
export const deleteStressTest39 = /* GraphQL */ `
  mutation DeleteStressTest39(
    $input: DeleteStressTest39Input!
    $condition: ModelStressTest39ConditionInput
  ) {
    deleteStressTest39(input: $input, condition: $condition) {
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
export const createStressTest40 = /* GraphQL */ `
  mutation CreateStressTest40(
    $input: CreateStressTest40Input!
    $condition: ModelStressTest40ConditionInput
  ) {
    createStressTest40(input: $input, condition: $condition) {
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
export const updateStressTest40 = /* GraphQL */ `
  mutation UpdateStressTest40(
    $input: UpdateStressTest40Input!
    $condition: ModelStressTest40ConditionInput
  ) {
    updateStressTest40(input: $input, condition: $condition) {
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
export const deleteStressTest40 = /* GraphQL */ `
  mutation DeleteStressTest40(
    $input: DeleteStressTest40Input!
    $condition: ModelStressTest40ConditionInput
  ) {
    deleteStressTest40(input: $input, condition: $condition) {
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
export const createStressTest41 = /* GraphQL */ `
  mutation CreateStressTest41(
    $input: CreateStressTest41Input!
    $condition: ModelStressTest41ConditionInput
  ) {
    createStressTest41(input: $input, condition: $condition) {
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
export const updateStressTest41 = /* GraphQL */ `
  mutation UpdateStressTest41(
    $input: UpdateStressTest41Input!
    $condition: ModelStressTest41ConditionInput
  ) {
    updateStressTest41(input: $input, condition: $condition) {
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
export const deleteStressTest41 = /* GraphQL */ `
  mutation DeleteStressTest41(
    $input: DeleteStressTest41Input!
    $condition: ModelStressTest41ConditionInput
  ) {
    deleteStressTest41(input: $input, condition: $condition) {
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
export const createStressTest42 = /* GraphQL */ `
  mutation CreateStressTest42(
    $input: CreateStressTest42Input!
    $condition: ModelStressTest42ConditionInput
  ) {
    createStressTest42(input: $input, condition: $condition) {
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
export const updateStressTest42 = /* GraphQL */ `
  mutation UpdateStressTest42(
    $input: UpdateStressTest42Input!
    $condition: ModelStressTest42ConditionInput
  ) {
    updateStressTest42(input: $input, condition: $condition) {
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
export const deleteStressTest42 = /* GraphQL */ `
  mutation DeleteStressTest42(
    $input: DeleteStressTest42Input!
    $condition: ModelStressTest42ConditionInput
  ) {
    deleteStressTest42(input: $input, condition: $condition) {
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
export const createStressTest43 = /* GraphQL */ `
  mutation CreateStressTest43(
    $input: CreateStressTest43Input!
    $condition: ModelStressTest43ConditionInput
  ) {
    createStressTest43(input: $input, condition: $condition) {
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
export const updateStressTest43 = /* GraphQL */ `
  mutation UpdateStressTest43(
    $input: UpdateStressTest43Input!
    $condition: ModelStressTest43ConditionInput
  ) {
    updateStressTest43(input: $input, condition: $condition) {
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
export const deleteStressTest43 = /* GraphQL */ `
  mutation DeleteStressTest43(
    $input: DeleteStressTest43Input!
    $condition: ModelStressTest43ConditionInput
  ) {
    deleteStressTest43(input: $input, condition: $condition) {
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
export const createStressTest44 = /* GraphQL */ `
  mutation CreateStressTest44(
    $input: CreateStressTest44Input!
    $condition: ModelStressTest44ConditionInput
  ) {
    createStressTest44(input: $input, condition: $condition) {
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
export const updateStressTest44 = /* GraphQL */ `
  mutation UpdateStressTest44(
    $input: UpdateStressTest44Input!
    $condition: ModelStressTest44ConditionInput
  ) {
    updateStressTest44(input: $input, condition: $condition) {
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
export const deleteStressTest44 = /* GraphQL */ `
  mutation DeleteStressTest44(
    $input: DeleteStressTest44Input!
    $condition: ModelStressTest44ConditionInput
  ) {
    deleteStressTest44(input: $input, condition: $condition) {
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
export const createStressTest45 = /* GraphQL */ `
  mutation CreateStressTest45(
    $input: CreateStressTest45Input!
    $condition: ModelStressTest45ConditionInput
  ) {
    createStressTest45(input: $input, condition: $condition) {
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
export const updateStressTest45 = /* GraphQL */ `
  mutation UpdateStressTest45(
    $input: UpdateStressTest45Input!
    $condition: ModelStressTest45ConditionInput
  ) {
    updateStressTest45(input: $input, condition: $condition) {
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
export const deleteStressTest45 = /* GraphQL */ `
  mutation DeleteStressTest45(
    $input: DeleteStressTest45Input!
    $condition: ModelStressTest45ConditionInput
  ) {
    deleteStressTest45(input: $input, condition: $condition) {
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
export const createStressTest46 = /* GraphQL */ `
  mutation CreateStressTest46(
    $input: CreateStressTest46Input!
    $condition: ModelStressTest46ConditionInput
  ) {
    createStressTest46(input: $input, condition: $condition) {
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
export const updateStressTest46 = /* GraphQL */ `
  mutation UpdateStressTest46(
    $input: UpdateStressTest46Input!
    $condition: ModelStressTest46ConditionInput
  ) {
    updateStressTest46(input: $input, condition: $condition) {
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
export const deleteStressTest46 = /* GraphQL */ `
  mutation DeleteStressTest46(
    $input: DeleteStressTest46Input!
    $condition: ModelStressTest46ConditionInput
  ) {
    deleteStressTest46(input: $input, condition: $condition) {
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
export const createStressTest47 = /* GraphQL */ `
  mutation CreateStressTest47(
    $input: CreateStressTest47Input!
    $condition: ModelStressTest47ConditionInput
  ) {
    createStressTest47(input: $input, condition: $condition) {
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
export const updateStressTest47 = /* GraphQL */ `
  mutation UpdateStressTest47(
    $input: UpdateStressTest47Input!
    $condition: ModelStressTest47ConditionInput
  ) {
    updateStressTest47(input: $input, condition: $condition) {
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
export const deleteStressTest47 = /* GraphQL */ `
  mutation DeleteStressTest47(
    $input: DeleteStressTest47Input!
    $condition: ModelStressTest47ConditionInput
  ) {
    deleteStressTest47(input: $input, condition: $condition) {
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
export const createStressTest48 = /* GraphQL */ `
  mutation CreateStressTest48(
    $input: CreateStressTest48Input!
    $condition: ModelStressTest48ConditionInput
  ) {
    createStressTest48(input: $input, condition: $condition) {
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
export const updateStressTest48 = /* GraphQL */ `
  mutation UpdateStressTest48(
    $input: UpdateStressTest48Input!
    $condition: ModelStressTest48ConditionInput
  ) {
    updateStressTest48(input: $input, condition: $condition) {
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
export const deleteStressTest48 = /* GraphQL */ `
  mutation DeleteStressTest48(
    $input: DeleteStressTest48Input!
    $condition: ModelStressTest48ConditionInput
  ) {
    deleteStressTest48(input: $input, condition: $condition) {
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
export const createStressTest49 = /* GraphQL */ `
  mutation CreateStressTest49(
    $input: CreateStressTest49Input!
    $condition: ModelStressTest49ConditionInput
  ) {
    createStressTest49(input: $input, condition: $condition) {
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
export const updateStressTest49 = /* GraphQL */ `
  mutation UpdateStressTest49(
    $input: UpdateStressTest49Input!
    $condition: ModelStressTest49ConditionInput
  ) {
    updateStressTest49(input: $input, condition: $condition) {
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
export const deleteStressTest49 = /* GraphQL */ `
  mutation DeleteStressTest49(
    $input: DeleteStressTest49Input!
    $condition: ModelStressTest49ConditionInput
  ) {
    deleteStressTest49(input: $input, condition: $condition) {
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
export const createStressTest50 = /* GraphQL */ `
  mutation CreateStressTest50(
    $input: CreateStressTest50Input!
    $condition: ModelStressTest50ConditionInput
  ) {
    createStressTest50(input: $input, condition: $condition) {
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
export const updateStressTest50 = /* GraphQL */ `
  mutation UpdateStressTest50(
    $input: UpdateStressTest50Input!
    $condition: ModelStressTest50ConditionInput
  ) {
    updateStressTest50(input: $input, condition: $condition) {
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
export const deleteStressTest50 = /* GraphQL */ `
  mutation DeleteStressTest50(
    $input: DeleteStressTest50Input!
    $condition: ModelStressTest50ConditionInput
  ) {
    deleteStressTest50(input: $input, condition: $condition) {
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
export const createStressTest51 = /* GraphQL */ `
  mutation CreateStressTest51(
    $input: CreateStressTest51Input!
    $condition: ModelStressTest51ConditionInput
  ) {
    createStressTest51(input: $input, condition: $condition) {
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
export const updateStressTest51 = /* GraphQL */ `
  mutation UpdateStressTest51(
    $input: UpdateStressTest51Input!
    $condition: ModelStressTest51ConditionInput
  ) {
    updateStressTest51(input: $input, condition: $condition) {
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
export const deleteStressTest51 = /* GraphQL */ `
  mutation DeleteStressTest51(
    $input: DeleteStressTest51Input!
    $condition: ModelStressTest51ConditionInput
  ) {
    deleteStressTest51(input: $input, condition: $condition) {
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
export const createStressTest52 = /* GraphQL */ `
  mutation CreateStressTest52(
    $input: CreateStressTest52Input!
    $condition: ModelStressTest52ConditionInput
  ) {
    createStressTest52(input: $input, condition: $condition) {
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
export const updateStressTest52 = /* GraphQL */ `
  mutation UpdateStressTest52(
    $input: UpdateStressTest52Input!
    $condition: ModelStressTest52ConditionInput
  ) {
    updateStressTest52(input: $input, condition: $condition) {
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
export const deleteStressTest52 = /* GraphQL */ `
  mutation DeleteStressTest52(
    $input: DeleteStressTest52Input!
    $condition: ModelStressTest52ConditionInput
  ) {
    deleteStressTest52(input: $input, condition: $condition) {
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
export const createStressTest53 = /* GraphQL */ `
  mutation CreateStressTest53(
    $input: CreateStressTest53Input!
    $condition: ModelStressTest53ConditionInput
  ) {
    createStressTest53(input: $input, condition: $condition) {
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
export const updateStressTest53 = /* GraphQL */ `
  mutation UpdateStressTest53(
    $input: UpdateStressTest53Input!
    $condition: ModelStressTest53ConditionInput
  ) {
    updateStressTest53(input: $input, condition: $condition) {
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
export const deleteStressTest53 = /* GraphQL */ `
  mutation DeleteStressTest53(
    $input: DeleteStressTest53Input!
    $condition: ModelStressTest53ConditionInput
  ) {
    deleteStressTest53(input: $input, condition: $condition) {
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
export const createStressTest54 = /* GraphQL */ `
  mutation CreateStressTest54(
    $input: CreateStressTest54Input!
    $condition: ModelStressTest54ConditionInput
  ) {
    createStressTest54(input: $input, condition: $condition) {
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
export const updateStressTest54 = /* GraphQL */ `
  mutation UpdateStressTest54(
    $input: UpdateStressTest54Input!
    $condition: ModelStressTest54ConditionInput
  ) {
    updateStressTest54(input: $input, condition: $condition) {
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
export const deleteStressTest54 = /* GraphQL */ `
  mutation DeleteStressTest54(
    $input: DeleteStressTest54Input!
    $condition: ModelStressTest54ConditionInput
  ) {
    deleteStressTest54(input: $input, condition: $condition) {
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
export const createStressTest55 = /* GraphQL */ `
  mutation CreateStressTest55(
    $input: CreateStressTest55Input!
    $condition: ModelStressTest55ConditionInput
  ) {
    createStressTest55(input: $input, condition: $condition) {
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
export const updateStressTest55 = /* GraphQL */ `
  mutation UpdateStressTest55(
    $input: UpdateStressTest55Input!
    $condition: ModelStressTest55ConditionInput
  ) {
    updateStressTest55(input: $input, condition: $condition) {
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
export const deleteStressTest55 = /* GraphQL */ `
  mutation DeleteStressTest55(
    $input: DeleteStressTest55Input!
    $condition: ModelStressTest55ConditionInput
  ) {
    deleteStressTest55(input: $input, condition: $condition) {
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
export const createStressTest56 = /* GraphQL */ `
  mutation CreateStressTest56(
    $input: CreateStressTest56Input!
    $condition: ModelStressTest56ConditionInput
  ) {
    createStressTest56(input: $input, condition: $condition) {
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
export const updateStressTest56 = /* GraphQL */ `
  mutation UpdateStressTest56(
    $input: UpdateStressTest56Input!
    $condition: ModelStressTest56ConditionInput
  ) {
    updateStressTest56(input: $input, condition: $condition) {
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
export const deleteStressTest56 = /* GraphQL */ `
  mutation DeleteStressTest56(
    $input: DeleteStressTest56Input!
    $condition: ModelStressTest56ConditionInput
  ) {
    deleteStressTest56(input: $input, condition: $condition) {
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
export const createStressTest57 = /* GraphQL */ `
  mutation CreateStressTest57(
    $input: CreateStressTest57Input!
    $condition: ModelStressTest57ConditionInput
  ) {
    createStressTest57(input: $input, condition: $condition) {
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
export const updateStressTest57 = /* GraphQL */ `
  mutation UpdateStressTest57(
    $input: UpdateStressTest57Input!
    $condition: ModelStressTest57ConditionInput
  ) {
    updateStressTest57(input: $input, condition: $condition) {
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
export const deleteStressTest57 = /* GraphQL */ `
  mutation DeleteStressTest57(
    $input: DeleteStressTest57Input!
    $condition: ModelStressTest57ConditionInput
  ) {
    deleteStressTest57(input: $input, condition: $condition) {
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
export const createStressTest58 = /* GraphQL */ `
  mutation CreateStressTest58(
    $input: CreateStressTest58Input!
    $condition: ModelStressTest58ConditionInput
  ) {
    createStressTest58(input: $input, condition: $condition) {
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
export const updateStressTest58 = /* GraphQL */ `
  mutation UpdateStressTest58(
    $input: UpdateStressTest58Input!
    $condition: ModelStressTest58ConditionInput
  ) {
    updateStressTest58(input: $input, condition: $condition) {
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
export const deleteStressTest58 = /* GraphQL */ `
  mutation DeleteStressTest58(
    $input: DeleteStressTest58Input!
    $condition: ModelStressTest58ConditionInput
  ) {
    deleteStressTest58(input: $input, condition: $condition) {
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
export const createStressTest59 = /* GraphQL */ `
  mutation CreateStressTest59(
    $input: CreateStressTest59Input!
    $condition: ModelStressTest59ConditionInput
  ) {
    createStressTest59(input: $input, condition: $condition) {
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
export const updateStressTest59 = /* GraphQL */ `
  mutation UpdateStressTest59(
    $input: UpdateStressTest59Input!
    $condition: ModelStressTest59ConditionInput
  ) {
    updateStressTest59(input: $input, condition: $condition) {
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
export const deleteStressTest59 = /* GraphQL */ `
  mutation DeleteStressTest59(
    $input: DeleteStressTest59Input!
    $condition: ModelStressTest59ConditionInput
  ) {
    deleteStressTest59(input: $input, condition: $condition) {
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
export const createStressTest60 = /* GraphQL */ `
  mutation CreateStressTest60(
    $input: CreateStressTest60Input!
    $condition: ModelStressTest60ConditionInput
  ) {
    createStressTest60(input: $input, condition: $condition) {
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
export const updateStressTest60 = /* GraphQL */ `
  mutation UpdateStressTest60(
    $input: UpdateStressTest60Input!
    $condition: ModelStressTest60ConditionInput
  ) {
    updateStressTest60(input: $input, condition: $condition) {
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
export const deleteStressTest60 = /* GraphQL */ `
  mutation DeleteStressTest60(
    $input: DeleteStressTest60Input!
    $condition: ModelStressTest60ConditionInput
  ) {
    deleteStressTest60(input: $input, condition: $condition) {
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
export const createStressTest61 = /* GraphQL */ `
  mutation CreateStressTest61(
    $input: CreateStressTest61Input!
    $condition: ModelStressTest61ConditionInput
  ) {
    createStressTest61(input: $input, condition: $condition) {
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
export const updateStressTest61 = /* GraphQL */ `
  mutation UpdateStressTest61(
    $input: UpdateStressTest61Input!
    $condition: ModelStressTest61ConditionInput
  ) {
    updateStressTest61(input: $input, condition: $condition) {
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
export const deleteStressTest61 = /* GraphQL */ `
  mutation DeleteStressTest61(
    $input: DeleteStressTest61Input!
    $condition: ModelStressTest61ConditionInput
  ) {
    deleteStressTest61(input: $input, condition: $condition) {
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
export const createStressTest62 = /* GraphQL */ `
  mutation CreateStressTest62(
    $input: CreateStressTest62Input!
    $condition: ModelStressTest62ConditionInput
  ) {
    createStressTest62(input: $input, condition: $condition) {
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
export const updateStressTest62 = /* GraphQL */ `
  mutation UpdateStressTest62(
    $input: UpdateStressTest62Input!
    $condition: ModelStressTest62ConditionInput
  ) {
    updateStressTest62(input: $input, condition: $condition) {
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
export const deleteStressTest62 = /* GraphQL */ `
  mutation DeleteStressTest62(
    $input: DeleteStressTest62Input!
    $condition: ModelStressTest62ConditionInput
  ) {
    deleteStressTest62(input: $input, condition: $condition) {
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
export const createStressTest63 = /* GraphQL */ `
  mutation CreateStressTest63(
    $input: CreateStressTest63Input!
    $condition: ModelStressTest63ConditionInput
  ) {
    createStressTest63(input: $input, condition: $condition) {
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
export const updateStressTest63 = /* GraphQL */ `
  mutation UpdateStressTest63(
    $input: UpdateStressTest63Input!
    $condition: ModelStressTest63ConditionInput
  ) {
    updateStressTest63(input: $input, condition: $condition) {
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
export const deleteStressTest63 = /* GraphQL */ `
  mutation DeleteStressTest63(
    $input: DeleteStressTest63Input!
    $condition: ModelStressTest63ConditionInput
  ) {
    deleteStressTest63(input: $input, condition: $condition) {
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
export const createStressTest64 = /* GraphQL */ `
  mutation CreateStressTest64(
    $input: CreateStressTest64Input!
    $condition: ModelStressTest64ConditionInput
  ) {
    createStressTest64(input: $input, condition: $condition) {
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
export const updateStressTest64 = /* GraphQL */ `
  mutation UpdateStressTest64(
    $input: UpdateStressTest64Input!
    $condition: ModelStressTest64ConditionInput
  ) {
    updateStressTest64(input: $input, condition: $condition) {
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
export const deleteStressTest64 = /* GraphQL */ `
  mutation DeleteStressTest64(
    $input: DeleteStressTest64Input!
    $condition: ModelStressTest64ConditionInput
  ) {
    deleteStressTest64(input: $input, condition: $condition) {
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
export const createStressTest65 = /* GraphQL */ `
  mutation CreateStressTest65(
    $input: CreateStressTest65Input!
    $condition: ModelStressTest65ConditionInput
  ) {
    createStressTest65(input: $input, condition: $condition) {
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
export const updateStressTest65 = /* GraphQL */ `
  mutation UpdateStressTest65(
    $input: UpdateStressTest65Input!
    $condition: ModelStressTest65ConditionInput
  ) {
    updateStressTest65(input: $input, condition: $condition) {
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
export const deleteStressTest65 = /* GraphQL */ `
  mutation DeleteStressTest65(
    $input: DeleteStressTest65Input!
    $condition: ModelStressTest65ConditionInput
  ) {
    deleteStressTest65(input: $input, condition: $condition) {
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
export const createStressTest66 = /* GraphQL */ `
  mutation CreateStressTest66(
    $input: CreateStressTest66Input!
    $condition: ModelStressTest66ConditionInput
  ) {
    createStressTest66(input: $input, condition: $condition) {
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
export const updateStressTest66 = /* GraphQL */ `
  mutation UpdateStressTest66(
    $input: UpdateStressTest66Input!
    $condition: ModelStressTest66ConditionInput
  ) {
    updateStressTest66(input: $input, condition: $condition) {
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
export const deleteStressTest66 = /* GraphQL */ `
  mutation DeleteStressTest66(
    $input: DeleteStressTest66Input!
    $condition: ModelStressTest66ConditionInput
  ) {
    deleteStressTest66(input: $input, condition: $condition) {
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
export const createStressTest67 = /* GraphQL */ `
  mutation CreateStressTest67(
    $input: CreateStressTest67Input!
    $condition: ModelStressTest67ConditionInput
  ) {
    createStressTest67(input: $input, condition: $condition) {
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
export const updateStressTest67 = /* GraphQL */ `
  mutation UpdateStressTest67(
    $input: UpdateStressTest67Input!
    $condition: ModelStressTest67ConditionInput
  ) {
    updateStressTest67(input: $input, condition: $condition) {
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
export const deleteStressTest67 = /* GraphQL */ `
  mutation DeleteStressTest67(
    $input: DeleteStressTest67Input!
    $condition: ModelStressTest67ConditionInput
  ) {
    deleteStressTest67(input: $input, condition: $condition) {
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
export const createStressTest68 = /* GraphQL */ `
  mutation CreateStressTest68(
    $input: CreateStressTest68Input!
    $condition: ModelStressTest68ConditionInput
  ) {
    createStressTest68(input: $input, condition: $condition) {
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
export const updateStressTest68 = /* GraphQL */ `
  mutation UpdateStressTest68(
    $input: UpdateStressTest68Input!
    $condition: ModelStressTest68ConditionInput
  ) {
    updateStressTest68(input: $input, condition: $condition) {
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
export const deleteStressTest68 = /* GraphQL */ `
  mutation DeleteStressTest68(
    $input: DeleteStressTest68Input!
    $condition: ModelStressTest68ConditionInput
  ) {
    deleteStressTest68(input: $input, condition: $condition) {
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
export const createStressTest69 = /* GraphQL */ `
  mutation CreateStressTest69(
    $input: CreateStressTest69Input!
    $condition: ModelStressTest69ConditionInput
  ) {
    createStressTest69(input: $input, condition: $condition) {
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
export const updateStressTest69 = /* GraphQL */ `
  mutation UpdateStressTest69(
    $input: UpdateStressTest69Input!
    $condition: ModelStressTest69ConditionInput
  ) {
    updateStressTest69(input: $input, condition: $condition) {
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
export const deleteStressTest69 = /* GraphQL */ `
  mutation DeleteStressTest69(
    $input: DeleteStressTest69Input!
    $condition: ModelStressTest69ConditionInput
  ) {
    deleteStressTest69(input: $input, condition: $condition) {
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
export const createStressTest70 = /* GraphQL */ `
  mutation CreateStressTest70(
    $input: CreateStressTest70Input!
    $condition: ModelStressTest70ConditionInput
  ) {
    createStressTest70(input: $input, condition: $condition) {
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
export const updateStressTest70 = /* GraphQL */ `
  mutation UpdateStressTest70(
    $input: UpdateStressTest70Input!
    $condition: ModelStressTest70ConditionInput
  ) {
    updateStressTest70(input: $input, condition: $condition) {
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
export const deleteStressTest70 = /* GraphQL */ `
  mutation DeleteStressTest70(
    $input: DeleteStressTest70Input!
    $condition: ModelStressTest70ConditionInput
  ) {
    deleteStressTest70(input: $input, condition: $condition) {
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
export const createStressTest71 = /* GraphQL */ `
  mutation CreateStressTest71(
    $input: CreateStressTest71Input!
    $condition: ModelStressTest71ConditionInput
  ) {
    createStressTest71(input: $input, condition: $condition) {
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
export const updateStressTest71 = /* GraphQL */ `
  mutation UpdateStressTest71(
    $input: UpdateStressTest71Input!
    $condition: ModelStressTest71ConditionInput
  ) {
    updateStressTest71(input: $input, condition: $condition) {
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
export const deleteStressTest71 = /* GraphQL */ `
  mutation DeleteStressTest71(
    $input: DeleteStressTest71Input!
    $condition: ModelStressTest71ConditionInput
  ) {
    deleteStressTest71(input: $input, condition: $condition) {
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
export const createStressTest72 = /* GraphQL */ `
  mutation CreateStressTest72(
    $input: CreateStressTest72Input!
    $condition: ModelStressTest72ConditionInput
  ) {
    createStressTest72(input: $input, condition: $condition) {
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
export const updateStressTest72 = /* GraphQL */ `
  mutation UpdateStressTest72(
    $input: UpdateStressTest72Input!
    $condition: ModelStressTest72ConditionInput
  ) {
    updateStressTest72(input: $input, condition: $condition) {
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
export const deleteStressTest72 = /* GraphQL */ `
  mutation DeleteStressTest72(
    $input: DeleteStressTest72Input!
    $condition: ModelStressTest72ConditionInput
  ) {
    deleteStressTest72(input: $input, condition: $condition) {
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
export const createStressTest73 = /* GraphQL */ `
  mutation CreateStressTest73(
    $input: CreateStressTest73Input!
    $condition: ModelStressTest73ConditionInput
  ) {
    createStressTest73(input: $input, condition: $condition) {
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
export const updateStressTest73 = /* GraphQL */ `
  mutation UpdateStressTest73(
    $input: UpdateStressTest73Input!
    $condition: ModelStressTest73ConditionInput
  ) {
    updateStressTest73(input: $input, condition: $condition) {
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
export const deleteStressTest73 = /* GraphQL */ `
  mutation DeleteStressTest73(
    $input: DeleteStressTest73Input!
    $condition: ModelStressTest73ConditionInput
  ) {
    deleteStressTest73(input: $input, condition: $condition) {
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
export const createStressTest74 = /* GraphQL */ `
  mutation CreateStressTest74(
    $input: CreateStressTest74Input!
    $condition: ModelStressTest74ConditionInput
  ) {
    createStressTest74(input: $input, condition: $condition) {
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
export const updateStressTest74 = /* GraphQL */ `
  mutation UpdateStressTest74(
    $input: UpdateStressTest74Input!
    $condition: ModelStressTest74ConditionInput
  ) {
    updateStressTest74(input: $input, condition: $condition) {
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
export const deleteStressTest74 = /* GraphQL */ `
  mutation DeleteStressTest74(
    $input: DeleteStressTest74Input!
    $condition: ModelStressTest74ConditionInput
  ) {
    deleteStressTest74(input: $input, condition: $condition) {
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
export const createStressTest75 = /* GraphQL */ `
  mutation CreateStressTest75(
    $input: CreateStressTest75Input!
    $condition: ModelStressTest75ConditionInput
  ) {
    createStressTest75(input: $input, condition: $condition) {
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
export const updateStressTest75 = /* GraphQL */ `
  mutation UpdateStressTest75(
    $input: UpdateStressTest75Input!
    $condition: ModelStressTest75ConditionInput
  ) {
    updateStressTest75(input: $input, condition: $condition) {
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
export const deleteStressTest75 = /* GraphQL */ `
  mutation DeleteStressTest75(
    $input: DeleteStressTest75Input!
    $condition: ModelStressTest75ConditionInput
  ) {
    deleteStressTest75(input: $input, condition: $condition) {
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
export const createStressTest76 = /* GraphQL */ `
  mutation CreateStressTest76(
    $input: CreateStressTest76Input!
    $condition: ModelStressTest76ConditionInput
  ) {
    createStressTest76(input: $input, condition: $condition) {
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
export const updateStressTest76 = /* GraphQL */ `
  mutation UpdateStressTest76(
    $input: UpdateStressTest76Input!
    $condition: ModelStressTest76ConditionInput
  ) {
    updateStressTest76(input: $input, condition: $condition) {
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
export const deleteStressTest76 = /* GraphQL */ `
  mutation DeleteStressTest76(
    $input: DeleteStressTest76Input!
    $condition: ModelStressTest76ConditionInput
  ) {
    deleteStressTest76(input: $input, condition: $condition) {
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
export const createStressTest77 = /* GraphQL */ `
  mutation CreateStressTest77(
    $input: CreateStressTest77Input!
    $condition: ModelStressTest77ConditionInput
  ) {
    createStressTest77(input: $input, condition: $condition) {
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
export const updateStressTest77 = /* GraphQL */ `
  mutation UpdateStressTest77(
    $input: UpdateStressTest77Input!
    $condition: ModelStressTest77ConditionInput
  ) {
    updateStressTest77(input: $input, condition: $condition) {
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
export const deleteStressTest77 = /* GraphQL */ `
  mutation DeleteStressTest77(
    $input: DeleteStressTest77Input!
    $condition: ModelStressTest77ConditionInput
  ) {
    deleteStressTest77(input: $input, condition: $condition) {
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
export const createStressTest78 = /* GraphQL */ `
  mutation CreateStressTest78(
    $input: CreateStressTest78Input!
    $condition: ModelStressTest78ConditionInput
  ) {
    createStressTest78(input: $input, condition: $condition) {
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
export const updateStressTest78 = /* GraphQL */ `
  mutation UpdateStressTest78(
    $input: UpdateStressTest78Input!
    $condition: ModelStressTest78ConditionInput
  ) {
    updateStressTest78(input: $input, condition: $condition) {
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
export const deleteStressTest78 = /* GraphQL */ `
  mutation DeleteStressTest78(
    $input: DeleteStressTest78Input!
    $condition: ModelStressTest78ConditionInput
  ) {
    deleteStressTest78(input: $input, condition: $condition) {
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
export const createStressTest79 = /* GraphQL */ `
  mutation CreateStressTest79(
    $input: CreateStressTest79Input!
    $condition: ModelStressTest79ConditionInput
  ) {
    createStressTest79(input: $input, condition: $condition) {
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
export const updateStressTest79 = /* GraphQL */ `
  mutation UpdateStressTest79(
    $input: UpdateStressTest79Input!
    $condition: ModelStressTest79ConditionInput
  ) {
    updateStressTest79(input: $input, condition: $condition) {
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
export const deleteStressTest79 = /* GraphQL */ `
  mutation DeleteStressTest79(
    $input: DeleteStressTest79Input!
    $condition: ModelStressTest79ConditionInput
  ) {
    deleteStressTest79(input: $input, condition: $condition) {
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
export const createStressTest80 = /* GraphQL */ `
  mutation CreateStressTest80(
    $input: CreateStressTest80Input!
    $condition: ModelStressTest80ConditionInput
  ) {
    createStressTest80(input: $input, condition: $condition) {
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
export const updateStressTest80 = /* GraphQL */ `
  mutation UpdateStressTest80(
    $input: UpdateStressTest80Input!
    $condition: ModelStressTest80ConditionInput
  ) {
    updateStressTest80(input: $input, condition: $condition) {
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
export const deleteStressTest80 = /* GraphQL */ `
  mutation DeleteStressTest80(
    $input: DeleteStressTest80Input!
    $condition: ModelStressTest80ConditionInput
  ) {
    deleteStressTest80(input: $input, condition: $condition) {
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
export const createStressTest81 = /* GraphQL */ `
  mutation CreateStressTest81(
    $input: CreateStressTest81Input!
    $condition: ModelStressTest81ConditionInput
  ) {
    createStressTest81(input: $input, condition: $condition) {
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
export const updateStressTest81 = /* GraphQL */ `
  mutation UpdateStressTest81(
    $input: UpdateStressTest81Input!
    $condition: ModelStressTest81ConditionInput
  ) {
    updateStressTest81(input: $input, condition: $condition) {
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
export const deleteStressTest81 = /* GraphQL */ `
  mutation DeleteStressTest81(
    $input: DeleteStressTest81Input!
    $condition: ModelStressTest81ConditionInput
  ) {
    deleteStressTest81(input: $input, condition: $condition) {
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
export const createStressTest82 = /* GraphQL */ `
  mutation CreateStressTest82(
    $input: CreateStressTest82Input!
    $condition: ModelStressTest82ConditionInput
  ) {
    createStressTest82(input: $input, condition: $condition) {
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
export const updateStressTest82 = /* GraphQL */ `
  mutation UpdateStressTest82(
    $input: UpdateStressTest82Input!
    $condition: ModelStressTest82ConditionInput
  ) {
    updateStressTest82(input: $input, condition: $condition) {
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
export const deleteStressTest82 = /* GraphQL */ `
  mutation DeleteStressTest82(
    $input: DeleteStressTest82Input!
    $condition: ModelStressTest82ConditionInput
  ) {
    deleteStressTest82(input: $input, condition: $condition) {
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
export const createStressTest83 = /* GraphQL */ `
  mutation CreateStressTest83(
    $input: CreateStressTest83Input!
    $condition: ModelStressTest83ConditionInput
  ) {
    createStressTest83(input: $input, condition: $condition) {
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
export const updateStressTest83 = /* GraphQL */ `
  mutation UpdateStressTest83(
    $input: UpdateStressTest83Input!
    $condition: ModelStressTest83ConditionInput
  ) {
    updateStressTest83(input: $input, condition: $condition) {
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
export const deleteStressTest83 = /* GraphQL */ `
  mutation DeleteStressTest83(
    $input: DeleteStressTest83Input!
    $condition: ModelStressTest83ConditionInput
  ) {
    deleteStressTest83(input: $input, condition: $condition) {
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
export const createStressTest84 = /* GraphQL */ `
  mutation CreateStressTest84(
    $input: CreateStressTest84Input!
    $condition: ModelStressTest84ConditionInput
  ) {
    createStressTest84(input: $input, condition: $condition) {
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
export const updateStressTest84 = /* GraphQL */ `
  mutation UpdateStressTest84(
    $input: UpdateStressTest84Input!
    $condition: ModelStressTest84ConditionInput
  ) {
    updateStressTest84(input: $input, condition: $condition) {
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
export const deleteStressTest84 = /* GraphQL */ `
  mutation DeleteStressTest84(
    $input: DeleteStressTest84Input!
    $condition: ModelStressTest84ConditionInput
  ) {
    deleteStressTest84(input: $input, condition: $condition) {
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
export const createStressTest85 = /* GraphQL */ `
  mutation CreateStressTest85(
    $input: CreateStressTest85Input!
    $condition: ModelStressTest85ConditionInput
  ) {
    createStressTest85(input: $input, condition: $condition) {
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
export const updateStressTest85 = /* GraphQL */ `
  mutation UpdateStressTest85(
    $input: UpdateStressTest85Input!
    $condition: ModelStressTest85ConditionInput
  ) {
    updateStressTest85(input: $input, condition: $condition) {
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
export const deleteStressTest85 = /* GraphQL */ `
  mutation DeleteStressTest85(
    $input: DeleteStressTest85Input!
    $condition: ModelStressTest85ConditionInput
  ) {
    deleteStressTest85(input: $input, condition: $condition) {
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
export const createStressTest86 = /* GraphQL */ `
  mutation CreateStressTest86(
    $input: CreateStressTest86Input!
    $condition: ModelStressTest86ConditionInput
  ) {
    createStressTest86(input: $input, condition: $condition) {
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
export const updateStressTest86 = /* GraphQL */ `
  mutation UpdateStressTest86(
    $input: UpdateStressTest86Input!
    $condition: ModelStressTest86ConditionInput
  ) {
    updateStressTest86(input: $input, condition: $condition) {
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
export const deleteStressTest86 = /* GraphQL */ `
  mutation DeleteStressTest86(
    $input: DeleteStressTest86Input!
    $condition: ModelStressTest86ConditionInput
  ) {
    deleteStressTest86(input: $input, condition: $condition) {
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
export const createStressTest87 = /* GraphQL */ `
  mutation CreateStressTest87(
    $input: CreateStressTest87Input!
    $condition: ModelStressTest87ConditionInput
  ) {
    createStressTest87(input: $input, condition: $condition) {
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
export const updateStressTest87 = /* GraphQL */ `
  mutation UpdateStressTest87(
    $input: UpdateStressTest87Input!
    $condition: ModelStressTest87ConditionInput
  ) {
    updateStressTest87(input: $input, condition: $condition) {
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
export const deleteStressTest87 = /* GraphQL */ `
  mutation DeleteStressTest87(
    $input: DeleteStressTest87Input!
    $condition: ModelStressTest87ConditionInput
  ) {
    deleteStressTest87(input: $input, condition: $condition) {
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
export const createStressTest88 = /* GraphQL */ `
  mutation CreateStressTest88(
    $input: CreateStressTest88Input!
    $condition: ModelStressTest88ConditionInput
  ) {
    createStressTest88(input: $input, condition: $condition) {
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
export const updateStressTest88 = /* GraphQL */ `
  mutation UpdateStressTest88(
    $input: UpdateStressTest88Input!
    $condition: ModelStressTest88ConditionInput
  ) {
    updateStressTest88(input: $input, condition: $condition) {
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
export const deleteStressTest88 = /* GraphQL */ `
  mutation DeleteStressTest88(
    $input: DeleteStressTest88Input!
    $condition: ModelStressTest88ConditionInput
  ) {
    deleteStressTest88(input: $input, condition: $condition) {
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
export const createStressTest89 = /* GraphQL */ `
  mutation CreateStressTest89(
    $input: CreateStressTest89Input!
    $condition: ModelStressTest89ConditionInput
  ) {
    createStressTest89(input: $input, condition: $condition) {
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
export const updateStressTest89 = /* GraphQL */ `
  mutation UpdateStressTest89(
    $input: UpdateStressTest89Input!
    $condition: ModelStressTest89ConditionInput
  ) {
    updateStressTest89(input: $input, condition: $condition) {
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
export const deleteStressTest89 = /* GraphQL */ `
  mutation DeleteStressTest89(
    $input: DeleteStressTest89Input!
    $condition: ModelStressTest89ConditionInput
  ) {
    deleteStressTest89(input: $input, condition: $condition) {
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
export const createStressTest90 = /* GraphQL */ `
  mutation CreateStressTest90(
    $input: CreateStressTest90Input!
    $condition: ModelStressTest90ConditionInput
  ) {
    createStressTest90(input: $input, condition: $condition) {
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
export const updateStressTest90 = /* GraphQL */ `
  mutation UpdateStressTest90(
    $input: UpdateStressTest90Input!
    $condition: ModelStressTest90ConditionInput
  ) {
    updateStressTest90(input: $input, condition: $condition) {
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
export const deleteStressTest90 = /* GraphQL */ `
  mutation DeleteStressTest90(
    $input: DeleteStressTest90Input!
    $condition: ModelStressTest90ConditionInput
  ) {
    deleteStressTest90(input: $input, condition: $condition) {
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
export const createStressTest91 = /* GraphQL */ `
  mutation CreateStressTest91(
    $input: CreateStressTest91Input!
    $condition: ModelStressTest91ConditionInput
  ) {
    createStressTest91(input: $input, condition: $condition) {
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
export const updateStressTest91 = /* GraphQL */ `
  mutation UpdateStressTest91(
    $input: UpdateStressTest91Input!
    $condition: ModelStressTest91ConditionInput
  ) {
    updateStressTest91(input: $input, condition: $condition) {
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
export const deleteStressTest91 = /* GraphQL */ `
  mutation DeleteStressTest91(
    $input: DeleteStressTest91Input!
    $condition: ModelStressTest91ConditionInput
  ) {
    deleteStressTest91(input: $input, condition: $condition) {
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
export const createStressTest92 = /* GraphQL */ `
  mutation CreateStressTest92(
    $input: CreateStressTest92Input!
    $condition: ModelStressTest92ConditionInput
  ) {
    createStressTest92(input: $input, condition: $condition) {
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
export const updateStressTest92 = /* GraphQL */ `
  mutation UpdateStressTest92(
    $input: UpdateStressTest92Input!
    $condition: ModelStressTest92ConditionInput
  ) {
    updateStressTest92(input: $input, condition: $condition) {
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
export const deleteStressTest92 = /* GraphQL */ `
  mutation DeleteStressTest92(
    $input: DeleteStressTest92Input!
    $condition: ModelStressTest92ConditionInput
  ) {
    deleteStressTest92(input: $input, condition: $condition) {
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
export const createStressTest93 = /* GraphQL */ `
  mutation CreateStressTest93(
    $input: CreateStressTest93Input!
    $condition: ModelStressTest93ConditionInput
  ) {
    createStressTest93(input: $input, condition: $condition) {
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
export const updateStressTest93 = /* GraphQL */ `
  mutation UpdateStressTest93(
    $input: UpdateStressTest93Input!
    $condition: ModelStressTest93ConditionInput
  ) {
    updateStressTest93(input: $input, condition: $condition) {
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
export const deleteStressTest93 = /* GraphQL */ `
  mutation DeleteStressTest93(
    $input: DeleteStressTest93Input!
    $condition: ModelStressTest93ConditionInput
  ) {
    deleteStressTest93(input: $input, condition: $condition) {
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
export const createStressTest94 = /* GraphQL */ `
  mutation CreateStressTest94(
    $input: CreateStressTest94Input!
    $condition: ModelStressTest94ConditionInput
  ) {
    createStressTest94(input: $input, condition: $condition) {
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
export const updateStressTest94 = /* GraphQL */ `
  mutation UpdateStressTest94(
    $input: UpdateStressTest94Input!
    $condition: ModelStressTest94ConditionInput
  ) {
    updateStressTest94(input: $input, condition: $condition) {
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
export const deleteStressTest94 = /* GraphQL */ `
  mutation DeleteStressTest94(
    $input: DeleteStressTest94Input!
    $condition: ModelStressTest94ConditionInput
  ) {
    deleteStressTest94(input: $input, condition: $condition) {
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
export const createStressTest95 = /* GraphQL */ `
  mutation CreateStressTest95(
    $input: CreateStressTest95Input!
    $condition: ModelStressTest95ConditionInput
  ) {
    createStressTest95(input: $input, condition: $condition) {
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
export const updateStressTest95 = /* GraphQL */ `
  mutation UpdateStressTest95(
    $input: UpdateStressTest95Input!
    $condition: ModelStressTest95ConditionInput
  ) {
    updateStressTest95(input: $input, condition: $condition) {
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
export const deleteStressTest95 = /* GraphQL */ `
  mutation DeleteStressTest95(
    $input: DeleteStressTest95Input!
    $condition: ModelStressTest95ConditionInput
  ) {
    deleteStressTest95(input: $input, condition: $condition) {
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
export const createStressTest96 = /* GraphQL */ `
  mutation CreateStressTest96(
    $input: CreateStressTest96Input!
    $condition: ModelStressTest96ConditionInput
  ) {
    createStressTest96(input: $input, condition: $condition) {
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
export const updateStressTest96 = /* GraphQL */ `
  mutation UpdateStressTest96(
    $input: UpdateStressTest96Input!
    $condition: ModelStressTest96ConditionInput
  ) {
    updateStressTest96(input: $input, condition: $condition) {
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
export const deleteStressTest96 = /* GraphQL */ `
  mutation DeleteStressTest96(
    $input: DeleteStressTest96Input!
    $condition: ModelStressTest96ConditionInput
  ) {
    deleteStressTest96(input: $input, condition: $condition) {
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
export const createStressTest97 = /* GraphQL */ `
  mutation CreateStressTest97(
    $input: CreateStressTest97Input!
    $condition: ModelStressTest97ConditionInput
  ) {
    createStressTest97(input: $input, condition: $condition) {
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
export const updateStressTest97 = /* GraphQL */ `
  mutation UpdateStressTest97(
    $input: UpdateStressTest97Input!
    $condition: ModelStressTest97ConditionInput
  ) {
    updateStressTest97(input: $input, condition: $condition) {
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
export const deleteStressTest97 = /* GraphQL */ `
  mutation DeleteStressTest97(
    $input: DeleteStressTest97Input!
    $condition: ModelStressTest97ConditionInput
  ) {
    deleteStressTest97(input: $input, condition: $condition) {
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
export const createStressTest98 = /* GraphQL */ `
  mutation CreateStressTest98(
    $input: CreateStressTest98Input!
    $condition: ModelStressTest98ConditionInput
  ) {
    createStressTest98(input: $input, condition: $condition) {
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
export const updateStressTest98 = /* GraphQL */ `
  mutation UpdateStressTest98(
    $input: UpdateStressTest98Input!
    $condition: ModelStressTest98ConditionInput
  ) {
    updateStressTest98(input: $input, condition: $condition) {
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
export const deleteStressTest98 = /* GraphQL */ `
  mutation DeleteStressTest98(
    $input: DeleteStressTest98Input!
    $condition: ModelStressTest98ConditionInput
  ) {
    deleteStressTest98(input: $input, condition: $condition) {
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
export const createStressTest99 = /* GraphQL */ `
  mutation CreateStressTest99(
    $input: CreateStressTest99Input!
    $condition: ModelStressTest99ConditionInput
  ) {
    createStressTest99(input: $input, condition: $condition) {
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
export const updateStressTest99 = /* GraphQL */ `
  mutation UpdateStressTest99(
    $input: UpdateStressTest99Input!
    $condition: ModelStressTest99ConditionInput
  ) {
    updateStressTest99(input: $input, condition: $condition) {
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
export const deleteStressTest99 = /* GraphQL */ `
  mutation DeleteStressTest99(
    $input: DeleteStressTest99Input!
    $condition: ModelStressTest99ConditionInput
  ) {
    deleteStressTest99(input: $input, condition: $condition) {
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
export const createStressTest100 = /* GraphQL */ `
  mutation CreateStressTest100(
    $input: CreateStressTest100Input!
    $condition: ModelStressTest100ConditionInput
  ) {
    createStressTest100(input: $input, condition: $condition) {
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
export const updateStressTest100 = /* GraphQL */ `
  mutation UpdateStressTest100(
    $input: UpdateStressTest100Input!
    $condition: ModelStressTest100ConditionInput
  ) {
    updateStressTest100(input: $input, condition: $condition) {
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
export const deleteStressTest100 = /* GraphQL */ `
  mutation DeleteStressTest100(
    $input: DeleteStressTest100Input!
    $condition: ModelStressTest100ConditionInput
  ) {
    deleteStressTest100(input: $input, condition: $condition) {
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
