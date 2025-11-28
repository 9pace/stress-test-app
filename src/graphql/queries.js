/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRandomQuote = /* GraphQL */ `
  query GetRandomQuote {
    getRandomQuote {
      message
      quote
      author
      timestamp
      totalQuotes
      __typename
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        deadline
        color
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStressTest1 = /* GraphQL */ `
  query GetStressTest1($id: ID!) {
    getStressTest1(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest1s = /* GraphQL */ `
  query ListStressTest1s(
    $filter: ModelStressTest1FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest1s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest2 = /* GraphQL */ `
  query GetStressTest2($id: ID!) {
    getStressTest2(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest2s = /* GraphQL */ `
  query ListStressTest2s(
    $filter: ModelStressTest2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest3 = /* GraphQL */ `
  query GetStressTest3($id: ID!) {
    getStressTest3(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest3s = /* GraphQL */ `
  query ListStressTest3s(
    $filter: ModelStressTest3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest4 = /* GraphQL */ `
  query GetStressTest4($id: ID!) {
    getStressTest4(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest4s = /* GraphQL */ `
  query ListStressTest4s(
    $filter: ModelStressTest4FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest4s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest5 = /* GraphQL */ `
  query GetStressTest5($id: ID!) {
    getStressTest5(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest5s = /* GraphQL */ `
  query ListStressTest5s(
    $filter: ModelStressTest5FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest5s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest6 = /* GraphQL */ `
  query GetStressTest6($id: ID!) {
    getStressTest6(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest6s = /* GraphQL */ `
  query ListStressTest6s(
    $filter: ModelStressTest6FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest6s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest7 = /* GraphQL */ `
  query GetStressTest7($id: ID!) {
    getStressTest7(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest7s = /* GraphQL */ `
  query ListStressTest7s(
    $filter: ModelStressTest7FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest7s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest8 = /* GraphQL */ `
  query GetStressTest8($id: ID!) {
    getStressTest8(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest8s = /* GraphQL */ `
  query ListStressTest8s(
    $filter: ModelStressTest8FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest8s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest9 = /* GraphQL */ `
  query GetStressTest9($id: ID!) {
    getStressTest9(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest9s = /* GraphQL */ `
  query ListStressTest9s(
    $filter: ModelStressTest9FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest9s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest10 = /* GraphQL */ `
  query GetStressTest10($id: ID!) {
    getStressTest10(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest10s = /* GraphQL */ `
  query ListStressTest10s(
    $filter: ModelStressTest10FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest10s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest11 = /* GraphQL */ `
  query GetStressTest11($id: ID!) {
    getStressTest11(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest11s = /* GraphQL */ `
  query ListStressTest11s(
    $filter: ModelStressTest11FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest11s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest12 = /* GraphQL */ `
  query GetStressTest12($id: ID!) {
    getStressTest12(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest12s = /* GraphQL */ `
  query ListStressTest12s(
    $filter: ModelStressTest12FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest12s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest13 = /* GraphQL */ `
  query GetStressTest13($id: ID!) {
    getStressTest13(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest13s = /* GraphQL */ `
  query ListStressTest13s(
    $filter: ModelStressTest13FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest13s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest14 = /* GraphQL */ `
  query GetStressTest14($id: ID!) {
    getStressTest14(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest14s = /* GraphQL */ `
  query ListStressTest14s(
    $filter: ModelStressTest14FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest14s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest15 = /* GraphQL */ `
  query GetStressTest15($id: ID!) {
    getStressTest15(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest15s = /* GraphQL */ `
  query ListStressTest15s(
    $filter: ModelStressTest15FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest15s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest16 = /* GraphQL */ `
  query GetStressTest16($id: ID!) {
    getStressTest16(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest16s = /* GraphQL */ `
  query ListStressTest16s(
    $filter: ModelStressTest16FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest16s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest17 = /* GraphQL */ `
  query GetStressTest17($id: ID!) {
    getStressTest17(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest17s = /* GraphQL */ `
  query ListStressTest17s(
    $filter: ModelStressTest17FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest17s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest18 = /* GraphQL */ `
  query GetStressTest18($id: ID!) {
    getStressTest18(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest18s = /* GraphQL */ `
  query ListStressTest18s(
    $filter: ModelStressTest18FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest18s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest19 = /* GraphQL */ `
  query GetStressTest19($id: ID!) {
    getStressTest19(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest19s = /* GraphQL */ `
  query ListStressTest19s(
    $filter: ModelStressTest19FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest19s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest20 = /* GraphQL */ `
  query GetStressTest20($id: ID!) {
    getStressTest20(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest20s = /* GraphQL */ `
  query ListStressTest20s(
    $filter: ModelStressTest20FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest20s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest21 = /* GraphQL */ `
  query GetStressTest21($id: ID!) {
    getStressTest21(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest21s = /* GraphQL */ `
  query ListStressTest21s(
    $filter: ModelStressTest21FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest21s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest22 = /* GraphQL */ `
  query GetStressTest22($id: ID!) {
    getStressTest22(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest22s = /* GraphQL */ `
  query ListStressTest22s(
    $filter: ModelStressTest22FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest22s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest23 = /* GraphQL */ `
  query GetStressTest23($id: ID!) {
    getStressTest23(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest23s = /* GraphQL */ `
  query ListStressTest23s(
    $filter: ModelStressTest23FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest23s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest24 = /* GraphQL */ `
  query GetStressTest24($id: ID!) {
    getStressTest24(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest24s = /* GraphQL */ `
  query ListStressTest24s(
    $filter: ModelStressTest24FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest24s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest25 = /* GraphQL */ `
  query GetStressTest25($id: ID!) {
    getStressTest25(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest25s = /* GraphQL */ `
  query ListStressTest25s(
    $filter: ModelStressTest25FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest25s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest26 = /* GraphQL */ `
  query GetStressTest26($id: ID!) {
    getStressTest26(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest26s = /* GraphQL */ `
  query ListStressTest26s(
    $filter: ModelStressTest26FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest26s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest27 = /* GraphQL */ `
  query GetStressTest27($id: ID!) {
    getStressTest27(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest27s = /* GraphQL */ `
  query ListStressTest27s(
    $filter: ModelStressTest27FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest27s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest28 = /* GraphQL */ `
  query GetStressTest28($id: ID!) {
    getStressTest28(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest28s = /* GraphQL */ `
  query ListStressTest28s(
    $filter: ModelStressTest28FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest28s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest29 = /* GraphQL */ `
  query GetStressTest29($id: ID!) {
    getStressTest29(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest29s = /* GraphQL */ `
  query ListStressTest29s(
    $filter: ModelStressTest29FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest29s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest30 = /* GraphQL */ `
  query GetStressTest30($id: ID!) {
    getStressTest30(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest30s = /* GraphQL */ `
  query ListStressTest30s(
    $filter: ModelStressTest30FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest30s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest31 = /* GraphQL */ `
  query GetStressTest31($id: ID!) {
    getStressTest31(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest31s = /* GraphQL */ `
  query ListStressTest31s(
    $filter: ModelStressTest31FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest31s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest32 = /* GraphQL */ `
  query GetStressTest32($id: ID!) {
    getStressTest32(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest32s = /* GraphQL */ `
  query ListStressTest32s(
    $filter: ModelStressTest32FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest32s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest33 = /* GraphQL */ `
  query GetStressTest33($id: ID!) {
    getStressTest33(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest33s = /* GraphQL */ `
  query ListStressTest33s(
    $filter: ModelStressTest33FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest33s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest34 = /* GraphQL */ `
  query GetStressTest34($id: ID!) {
    getStressTest34(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest34s = /* GraphQL */ `
  query ListStressTest34s(
    $filter: ModelStressTest34FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest34s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest35 = /* GraphQL */ `
  query GetStressTest35($id: ID!) {
    getStressTest35(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest35s = /* GraphQL */ `
  query ListStressTest35s(
    $filter: ModelStressTest35FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest35s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest36 = /* GraphQL */ `
  query GetStressTest36($id: ID!) {
    getStressTest36(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest36s = /* GraphQL */ `
  query ListStressTest36s(
    $filter: ModelStressTest36FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest36s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest37 = /* GraphQL */ `
  query GetStressTest37($id: ID!) {
    getStressTest37(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest37s = /* GraphQL */ `
  query ListStressTest37s(
    $filter: ModelStressTest37FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest37s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest38 = /* GraphQL */ `
  query GetStressTest38($id: ID!) {
    getStressTest38(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest38s = /* GraphQL */ `
  query ListStressTest38s(
    $filter: ModelStressTest38FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest38s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest39 = /* GraphQL */ `
  query GetStressTest39($id: ID!) {
    getStressTest39(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest39s = /* GraphQL */ `
  query ListStressTest39s(
    $filter: ModelStressTest39FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest39s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest40 = /* GraphQL */ `
  query GetStressTest40($id: ID!) {
    getStressTest40(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest40s = /* GraphQL */ `
  query ListStressTest40s(
    $filter: ModelStressTest40FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest40s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest41 = /* GraphQL */ `
  query GetStressTest41($id: ID!) {
    getStressTest41(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest41s = /* GraphQL */ `
  query ListStressTest41s(
    $filter: ModelStressTest41FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest41s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest42 = /* GraphQL */ `
  query GetStressTest42($id: ID!) {
    getStressTest42(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest42s = /* GraphQL */ `
  query ListStressTest42s(
    $filter: ModelStressTest42FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest42s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest43 = /* GraphQL */ `
  query GetStressTest43($id: ID!) {
    getStressTest43(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest43s = /* GraphQL */ `
  query ListStressTest43s(
    $filter: ModelStressTest43FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest43s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest44 = /* GraphQL */ `
  query GetStressTest44($id: ID!) {
    getStressTest44(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest44s = /* GraphQL */ `
  query ListStressTest44s(
    $filter: ModelStressTest44FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest44s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest45 = /* GraphQL */ `
  query GetStressTest45($id: ID!) {
    getStressTest45(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest45s = /* GraphQL */ `
  query ListStressTest45s(
    $filter: ModelStressTest45FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest45s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest46 = /* GraphQL */ `
  query GetStressTest46($id: ID!) {
    getStressTest46(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest46s = /* GraphQL */ `
  query ListStressTest46s(
    $filter: ModelStressTest46FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest46s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest47 = /* GraphQL */ `
  query GetStressTest47($id: ID!) {
    getStressTest47(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest47s = /* GraphQL */ `
  query ListStressTest47s(
    $filter: ModelStressTest47FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest47s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest48 = /* GraphQL */ `
  query GetStressTest48($id: ID!) {
    getStressTest48(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest48s = /* GraphQL */ `
  query ListStressTest48s(
    $filter: ModelStressTest48FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest48s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest49 = /* GraphQL */ `
  query GetStressTest49($id: ID!) {
    getStressTest49(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest49s = /* GraphQL */ `
  query ListStressTest49s(
    $filter: ModelStressTest49FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest49s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest50 = /* GraphQL */ `
  query GetStressTest50($id: ID!) {
    getStressTest50(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest50s = /* GraphQL */ `
  query ListStressTest50s(
    $filter: ModelStressTest50FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest50s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest51 = /* GraphQL */ `
  query GetStressTest51($id: ID!) {
    getStressTest51(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest51s = /* GraphQL */ `
  query ListStressTest51s(
    $filter: ModelStressTest51FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest51s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest52 = /* GraphQL */ `
  query GetStressTest52($id: ID!) {
    getStressTest52(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest52s = /* GraphQL */ `
  query ListStressTest52s(
    $filter: ModelStressTest52FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest52s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest53 = /* GraphQL */ `
  query GetStressTest53($id: ID!) {
    getStressTest53(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest53s = /* GraphQL */ `
  query ListStressTest53s(
    $filter: ModelStressTest53FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest53s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest54 = /* GraphQL */ `
  query GetStressTest54($id: ID!) {
    getStressTest54(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest54s = /* GraphQL */ `
  query ListStressTest54s(
    $filter: ModelStressTest54FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest54s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest55 = /* GraphQL */ `
  query GetStressTest55($id: ID!) {
    getStressTest55(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest55s = /* GraphQL */ `
  query ListStressTest55s(
    $filter: ModelStressTest55FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest55s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest56 = /* GraphQL */ `
  query GetStressTest56($id: ID!) {
    getStressTest56(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest56s = /* GraphQL */ `
  query ListStressTest56s(
    $filter: ModelStressTest56FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest56s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest57 = /* GraphQL */ `
  query GetStressTest57($id: ID!) {
    getStressTest57(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest57s = /* GraphQL */ `
  query ListStressTest57s(
    $filter: ModelStressTest57FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest57s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest58 = /* GraphQL */ `
  query GetStressTest58($id: ID!) {
    getStressTest58(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest58s = /* GraphQL */ `
  query ListStressTest58s(
    $filter: ModelStressTest58FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest58s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest59 = /* GraphQL */ `
  query GetStressTest59($id: ID!) {
    getStressTest59(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest59s = /* GraphQL */ `
  query ListStressTest59s(
    $filter: ModelStressTest59FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest59s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest60 = /* GraphQL */ `
  query GetStressTest60($id: ID!) {
    getStressTest60(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest60s = /* GraphQL */ `
  query ListStressTest60s(
    $filter: ModelStressTest60FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest60s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest61 = /* GraphQL */ `
  query GetStressTest61($id: ID!) {
    getStressTest61(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest61s = /* GraphQL */ `
  query ListStressTest61s(
    $filter: ModelStressTest61FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest61s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest62 = /* GraphQL */ `
  query GetStressTest62($id: ID!) {
    getStressTest62(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest62s = /* GraphQL */ `
  query ListStressTest62s(
    $filter: ModelStressTest62FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest62s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest63 = /* GraphQL */ `
  query GetStressTest63($id: ID!) {
    getStressTest63(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest63s = /* GraphQL */ `
  query ListStressTest63s(
    $filter: ModelStressTest63FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest63s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest64 = /* GraphQL */ `
  query GetStressTest64($id: ID!) {
    getStressTest64(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest64s = /* GraphQL */ `
  query ListStressTest64s(
    $filter: ModelStressTest64FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest64s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest65 = /* GraphQL */ `
  query GetStressTest65($id: ID!) {
    getStressTest65(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest65s = /* GraphQL */ `
  query ListStressTest65s(
    $filter: ModelStressTest65FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest65s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest66 = /* GraphQL */ `
  query GetStressTest66($id: ID!) {
    getStressTest66(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest66s = /* GraphQL */ `
  query ListStressTest66s(
    $filter: ModelStressTest66FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest66s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest67 = /* GraphQL */ `
  query GetStressTest67($id: ID!) {
    getStressTest67(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest67s = /* GraphQL */ `
  query ListStressTest67s(
    $filter: ModelStressTest67FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest67s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest68 = /* GraphQL */ `
  query GetStressTest68($id: ID!) {
    getStressTest68(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest68s = /* GraphQL */ `
  query ListStressTest68s(
    $filter: ModelStressTest68FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest68s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest69 = /* GraphQL */ `
  query GetStressTest69($id: ID!) {
    getStressTest69(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest69s = /* GraphQL */ `
  query ListStressTest69s(
    $filter: ModelStressTest69FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest69s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest70 = /* GraphQL */ `
  query GetStressTest70($id: ID!) {
    getStressTest70(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest70s = /* GraphQL */ `
  query ListStressTest70s(
    $filter: ModelStressTest70FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest70s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest71 = /* GraphQL */ `
  query GetStressTest71($id: ID!) {
    getStressTest71(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest71s = /* GraphQL */ `
  query ListStressTest71s(
    $filter: ModelStressTest71FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest71s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest72 = /* GraphQL */ `
  query GetStressTest72($id: ID!) {
    getStressTest72(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest72s = /* GraphQL */ `
  query ListStressTest72s(
    $filter: ModelStressTest72FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest72s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest73 = /* GraphQL */ `
  query GetStressTest73($id: ID!) {
    getStressTest73(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest73s = /* GraphQL */ `
  query ListStressTest73s(
    $filter: ModelStressTest73FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest73s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest74 = /* GraphQL */ `
  query GetStressTest74($id: ID!) {
    getStressTest74(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest74s = /* GraphQL */ `
  query ListStressTest74s(
    $filter: ModelStressTest74FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest74s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest75 = /* GraphQL */ `
  query GetStressTest75($id: ID!) {
    getStressTest75(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest75s = /* GraphQL */ `
  query ListStressTest75s(
    $filter: ModelStressTest75FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest75s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest76 = /* GraphQL */ `
  query GetStressTest76($id: ID!) {
    getStressTest76(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest76s = /* GraphQL */ `
  query ListStressTest76s(
    $filter: ModelStressTest76FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest76s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest77 = /* GraphQL */ `
  query GetStressTest77($id: ID!) {
    getStressTest77(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest77s = /* GraphQL */ `
  query ListStressTest77s(
    $filter: ModelStressTest77FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest77s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest78 = /* GraphQL */ `
  query GetStressTest78($id: ID!) {
    getStressTest78(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest78s = /* GraphQL */ `
  query ListStressTest78s(
    $filter: ModelStressTest78FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest78s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest79 = /* GraphQL */ `
  query GetStressTest79($id: ID!) {
    getStressTest79(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest79s = /* GraphQL */ `
  query ListStressTest79s(
    $filter: ModelStressTest79FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest79s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest80 = /* GraphQL */ `
  query GetStressTest80($id: ID!) {
    getStressTest80(id: $id) {
      id
      name
      data
      value
      active
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStressTest80s = /* GraphQL */ `
  query ListStressTest80s(
    $filter: ModelStressTest80FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest80s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest81 = /* GraphQL */ `
  query GetStressTest81($id: ID!) {
    getStressTest81(id: $id) {
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
export const listStressTest81s = /* GraphQL */ `
  query ListStressTest81s(
    $filter: ModelStressTest81FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest81s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest82 = /* GraphQL */ `
  query GetStressTest82($id: ID!) {
    getStressTest82(id: $id) {
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
export const listStressTest82s = /* GraphQL */ `
  query ListStressTest82s(
    $filter: ModelStressTest82FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest82s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStressTest83 = /* GraphQL */ `
  query GetStressTest83($id: ID!) {
    getStressTest83(id: $id) {
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
export const listStressTest83s = /* GraphQL */ `
  query ListStressTest83s(
    $filter: ModelStressTest83FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest83s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest84 = /* GraphQL */ `
  query GetStressTest84($id: ID!) {
    getStressTest84(id: $id) {
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
export const listStressTest84s = /* GraphQL */ `
  query ListStressTest84s(
    $filter: ModelStressTest84FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest84s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStressTest85 = /* GraphQL */ `
  query GetStressTest85($id: ID!) {
    getStressTest85(id: $id) {
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
export const listStressTest85s = /* GraphQL */ `
  query ListStressTest85s(
    $filter: ModelStressTest85FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest85s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest86 = /* GraphQL */ `
  query GetStressTest86($id: ID!) {
    getStressTest86(id: $id) {
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
export const listStressTest86s = /* GraphQL */ `
  query ListStressTest86s(
    $filter: ModelStressTest86FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest86s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStressTest87 = /* GraphQL */ `
  query GetStressTest87($id: ID!) {
    getStressTest87(id: $id) {
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
export const listStressTest87s = /* GraphQL */ `
  query ListStressTest87s(
    $filter: ModelStressTest87FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest87s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest88 = /* GraphQL */ `
  query GetStressTest88($id: ID!) {
    getStressTest88(id: $id) {
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
export const listStressTest88s = /* GraphQL */ `
  query ListStressTest88s(
    $filter: ModelStressTest88FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest88s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStressTest89 = /* GraphQL */ `
  query GetStressTest89($id: ID!) {
    getStressTest89(id: $id) {
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
export const listStressTest89s = /* GraphQL */ `
  query ListStressTest89s(
    $filter: ModelStressTest89FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest89s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        data
        value
        active
        timestamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStressTest90 = /* GraphQL */ `
  query GetStressTest90($id: ID!) {
    getStressTest90(id: $id) {
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
export const listStressTest90s = /* GraphQL */ `
  query ListStressTest90s(
    $filter: ModelStressTest90FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest90s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStressTest91 = /* GraphQL */ `
  query GetStressTest91($id: ID!) {
    getStressTest91(id: $id) {
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
export const listStressTest91s = /* GraphQL */ `
  query ListStressTest91s(
    $filter: ModelStressTest91FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest91s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStressTest92 = /* GraphQL */ `
  query GetStressTest92($id: ID!) {
    getStressTest92(id: $id) {
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
export const listStressTest92s = /* GraphQL */ `
  query ListStressTest92s(
    $filter: ModelStressTest92FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest92s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStressTest93 = /* GraphQL */ `
  query GetStressTest93($id: ID!) {
    getStressTest93(id: $id) {
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
export const listStressTest93s = /* GraphQL */ `
  query ListStressTest93s(
    $filter: ModelStressTest93FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest93s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStressTest94 = /* GraphQL */ `
  query GetStressTest94($id: ID!) {
    getStressTest94(id: $id) {
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
export const listStressTest94s = /* GraphQL */ `
  query ListStressTest94s(
    $filter: ModelStressTest94FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest94s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStressTest95 = /* GraphQL */ `
  query GetStressTest95($id: ID!) {
    getStressTest95(id: $id) {
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
export const listStressTest95s = /* GraphQL */ `
  query ListStressTest95s(
    $filter: ModelStressTest95FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest95s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStressTest96 = /* GraphQL */ `
  query GetStressTest96($id: ID!) {
    getStressTest96(id: $id) {
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
export const listStressTest96s = /* GraphQL */ `
  query ListStressTest96s(
    $filter: ModelStressTest96FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest96s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStressTest97 = /* GraphQL */ `
  query GetStressTest97($id: ID!) {
    getStressTest97(id: $id) {
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
export const listStressTest97s = /* GraphQL */ `
  query ListStressTest97s(
    $filter: ModelStressTest97FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest97s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStressTest98 = /* GraphQL */ `
  query GetStressTest98($id: ID!) {
    getStressTest98(id: $id) {
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
export const listStressTest98s = /* GraphQL */ `
  query ListStressTest98s(
    $filter: ModelStressTest98FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest98s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStressTest99 = /* GraphQL */ `
  query GetStressTest99($id: ID!) {
    getStressTest99(id: $id) {
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
export const listStressTest99s = /* GraphQL */ `
  query ListStressTest99s(
    $filter: ModelStressTest99FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest99s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStressTest100 = /* GraphQL */ `
  query GetStressTest100($id: ID!) {
    getStressTest100(id: $id) {
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
export const listStressTest100s = /* GraphQL */ `
  query ListStressTest100s(
    $filter: ModelStressTest100FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStressTest100s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
