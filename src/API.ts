/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  status: ProjectStatus,
  deadline?: string | null,
  color?: string | null,
};

export enum ProjectStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  ON_HOLD = "ON_HOLD",
  ARCHIVED = "ARCHIVED",
}


export type ModelProjectConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelProjectStatusInput | null,
  deadline?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelProjectStatusInput = {
  eq?: ProjectStatus | null,
  ne?: ProjectStatus | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  title: string,
  description?: string | null,
  status: ProjectStatus,
  deadline?: string | null,
  color?: string | null,
  todos?: ModelTodoConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  images?: Array< string | null > | null,
  projectID?: string | null,
  createdAt: string,
  updatedAt: string,
  projectTodosId?: string | null,
  owner?: string | null,
};

export type UpdateProjectInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  status?: ProjectStatus | null,
  deadline?: string | null,
  color?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  images?: Array< string | null > | null,
  projectID?: string | null,
  projectTodosId?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  projectID?: ModelIDInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  projectTodosId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  images?: Array< string | null > | null,
  projectID?: string | null,
  projectTodosId?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateStressTest1Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest1ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest1ConditionInput | null > | null,
  or?: Array< ModelStressTest1ConditionInput | null > | null,
  not?: ModelStressTest1ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type StressTest1 = {
  __typename: "StressTest1",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest1Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest1Input = {
  id: string,
};

export type CreateStressTest2Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest2ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest2ConditionInput | null > | null,
  or?: Array< ModelStressTest2ConditionInput | null > | null,
  not?: ModelStressTest2ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest2 = {
  __typename: "StressTest2",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest2Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest2Input = {
  id: string,
};

export type CreateStressTest3Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest3ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest3ConditionInput | null > | null,
  or?: Array< ModelStressTest3ConditionInput | null > | null,
  not?: ModelStressTest3ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest3 = {
  __typename: "StressTest3",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest3Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest3Input = {
  id: string,
};

export type CreateStressTest4Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest4ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest4ConditionInput | null > | null,
  or?: Array< ModelStressTest4ConditionInput | null > | null,
  not?: ModelStressTest4ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest4 = {
  __typename: "StressTest4",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest4Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest4Input = {
  id: string,
};

export type CreateStressTest5Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest5ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest5ConditionInput | null > | null,
  or?: Array< ModelStressTest5ConditionInput | null > | null,
  not?: ModelStressTest5ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest5 = {
  __typename: "StressTest5",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest5Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest5Input = {
  id: string,
};

export type CreateStressTest6Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest6ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest6ConditionInput | null > | null,
  or?: Array< ModelStressTest6ConditionInput | null > | null,
  not?: ModelStressTest6ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest6 = {
  __typename: "StressTest6",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest6Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest6Input = {
  id: string,
};

export type CreateStressTest7Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest7ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest7ConditionInput | null > | null,
  or?: Array< ModelStressTest7ConditionInput | null > | null,
  not?: ModelStressTest7ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest7 = {
  __typename: "StressTest7",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest7Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest7Input = {
  id: string,
};

export type CreateStressTest8Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest8ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest8ConditionInput | null > | null,
  or?: Array< ModelStressTest8ConditionInput | null > | null,
  not?: ModelStressTest8ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest8 = {
  __typename: "StressTest8",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest8Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest8Input = {
  id: string,
};

export type CreateStressTest9Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest9ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest9ConditionInput | null > | null,
  or?: Array< ModelStressTest9ConditionInput | null > | null,
  not?: ModelStressTest9ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest9 = {
  __typename: "StressTest9",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest9Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest9Input = {
  id: string,
};

export type CreateStressTest10Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest10ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest10ConditionInput | null > | null,
  or?: Array< ModelStressTest10ConditionInput | null > | null,
  not?: ModelStressTest10ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest10 = {
  __typename: "StressTest10",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest10Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest10Input = {
  id: string,
};

export type CreateStressTest11Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest11ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest11ConditionInput | null > | null,
  or?: Array< ModelStressTest11ConditionInput | null > | null,
  not?: ModelStressTest11ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest11 = {
  __typename: "StressTest11",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest11Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest11Input = {
  id: string,
};

export type CreateStressTest12Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest12ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest12ConditionInput | null > | null,
  or?: Array< ModelStressTest12ConditionInput | null > | null,
  not?: ModelStressTest12ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest12 = {
  __typename: "StressTest12",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest12Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest12Input = {
  id: string,
};

export type CreateStressTest13Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest13ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest13ConditionInput | null > | null,
  or?: Array< ModelStressTest13ConditionInput | null > | null,
  not?: ModelStressTest13ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest13 = {
  __typename: "StressTest13",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest13Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest13Input = {
  id: string,
};

export type CreateStressTest14Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest14ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest14ConditionInput | null > | null,
  or?: Array< ModelStressTest14ConditionInput | null > | null,
  not?: ModelStressTest14ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest14 = {
  __typename: "StressTest14",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest14Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest14Input = {
  id: string,
};

export type CreateStressTest15Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest15ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest15ConditionInput | null > | null,
  or?: Array< ModelStressTest15ConditionInput | null > | null,
  not?: ModelStressTest15ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest15 = {
  __typename: "StressTest15",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest15Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest15Input = {
  id: string,
};

export type CreateStressTest16Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest16ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest16ConditionInput | null > | null,
  or?: Array< ModelStressTest16ConditionInput | null > | null,
  not?: ModelStressTest16ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest16 = {
  __typename: "StressTest16",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest16Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest16Input = {
  id: string,
};

export type CreateStressTest17Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest17ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest17ConditionInput | null > | null,
  or?: Array< ModelStressTest17ConditionInput | null > | null,
  not?: ModelStressTest17ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest17 = {
  __typename: "StressTest17",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest17Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest17Input = {
  id: string,
};

export type CreateStressTest18Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest18ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest18ConditionInput | null > | null,
  or?: Array< ModelStressTest18ConditionInput | null > | null,
  not?: ModelStressTest18ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest18 = {
  __typename: "StressTest18",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest18Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest18Input = {
  id: string,
};

export type CreateStressTest19Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest19ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest19ConditionInput | null > | null,
  or?: Array< ModelStressTest19ConditionInput | null > | null,
  not?: ModelStressTest19ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest19 = {
  __typename: "StressTest19",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest19Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest19Input = {
  id: string,
};

export type CreateStressTest20Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest20ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest20ConditionInput | null > | null,
  or?: Array< ModelStressTest20ConditionInput | null > | null,
  not?: ModelStressTest20ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest20 = {
  __typename: "StressTest20",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest20Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest20Input = {
  id: string,
};

export type CreateStressTest21Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest21ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest21ConditionInput | null > | null,
  or?: Array< ModelStressTest21ConditionInput | null > | null,
  not?: ModelStressTest21ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest21 = {
  __typename: "StressTest21",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest21Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest21Input = {
  id: string,
};

export type CreateStressTest22Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest22ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest22ConditionInput | null > | null,
  or?: Array< ModelStressTest22ConditionInput | null > | null,
  not?: ModelStressTest22ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest22 = {
  __typename: "StressTest22",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest22Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest22Input = {
  id: string,
};

export type CreateStressTest23Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest23ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest23ConditionInput | null > | null,
  or?: Array< ModelStressTest23ConditionInput | null > | null,
  not?: ModelStressTest23ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest23 = {
  __typename: "StressTest23",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest23Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest23Input = {
  id: string,
};

export type CreateStressTest24Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest24ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest24ConditionInput | null > | null,
  or?: Array< ModelStressTest24ConditionInput | null > | null,
  not?: ModelStressTest24ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest24 = {
  __typename: "StressTest24",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest24Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest24Input = {
  id: string,
};

export type CreateStressTest25Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest25ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest25ConditionInput | null > | null,
  or?: Array< ModelStressTest25ConditionInput | null > | null,
  not?: ModelStressTest25ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest25 = {
  __typename: "StressTest25",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest25Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest25Input = {
  id: string,
};

export type CreateStressTest26Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest26ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest26ConditionInput | null > | null,
  or?: Array< ModelStressTest26ConditionInput | null > | null,
  not?: ModelStressTest26ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest26 = {
  __typename: "StressTest26",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest26Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest26Input = {
  id: string,
};

export type CreateStressTest27Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest27ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest27ConditionInput | null > | null,
  or?: Array< ModelStressTest27ConditionInput | null > | null,
  not?: ModelStressTest27ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest27 = {
  __typename: "StressTest27",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest27Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest27Input = {
  id: string,
};

export type CreateStressTest28Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest28ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest28ConditionInput | null > | null,
  or?: Array< ModelStressTest28ConditionInput | null > | null,
  not?: ModelStressTest28ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest28 = {
  __typename: "StressTest28",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest28Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest28Input = {
  id: string,
};

export type CreateStressTest29Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest29ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest29ConditionInput | null > | null,
  or?: Array< ModelStressTest29ConditionInput | null > | null,
  not?: ModelStressTest29ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest29 = {
  __typename: "StressTest29",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest29Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest29Input = {
  id: string,
};

export type CreateStressTest30Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest30ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest30ConditionInput | null > | null,
  or?: Array< ModelStressTest30ConditionInput | null > | null,
  not?: ModelStressTest30ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest30 = {
  __typename: "StressTest30",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest30Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest30Input = {
  id: string,
};

export type CreateStressTest31Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest31ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest31ConditionInput | null > | null,
  or?: Array< ModelStressTest31ConditionInput | null > | null,
  not?: ModelStressTest31ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest31 = {
  __typename: "StressTest31",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest31Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest31Input = {
  id: string,
};

export type CreateStressTest32Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest32ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest32ConditionInput | null > | null,
  or?: Array< ModelStressTest32ConditionInput | null > | null,
  not?: ModelStressTest32ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest32 = {
  __typename: "StressTest32",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest32Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest32Input = {
  id: string,
};

export type CreateStressTest33Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest33ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest33ConditionInput | null > | null,
  or?: Array< ModelStressTest33ConditionInput | null > | null,
  not?: ModelStressTest33ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest33 = {
  __typename: "StressTest33",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest33Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest33Input = {
  id: string,
};

export type CreateStressTest34Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest34ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest34ConditionInput | null > | null,
  or?: Array< ModelStressTest34ConditionInput | null > | null,
  not?: ModelStressTest34ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest34 = {
  __typename: "StressTest34",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest34Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest34Input = {
  id: string,
};

export type CreateStressTest35Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest35ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest35ConditionInput | null > | null,
  or?: Array< ModelStressTest35ConditionInput | null > | null,
  not?: ModelStressTest35ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest35 = {
  __typename: "StressTest35",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest35Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest35Input = {
  id: string,
};

export type CreateStressTest36Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest36ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest36ConditionInput | null > | null,
  or?: Array< ModelStressTest36ConditionInput | null > | null,
  not?: ModelStressTest36ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest36 = {
  __typename: "StressTest36",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest36Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest36Input = {
  id: string,
};

export type CreateStressTest37Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest37ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest37ConditionInput | null > | null,
  or?: Array< ModelStressTest37ConditionInput | null > | null,
  not?: ModelStressTest37ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest37 = {
  __typename: "StressTest37",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest37Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest37Input = {
  id: string,
};

export type CreateStressTest38Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest38ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest38ConditionInput | null > | null,
  or?: Array< ModelStressTest38ConditionInput | null > | null,
  not?: ModelStressTest38ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest38 = {
  __typename: "StressTest38",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest38Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest38Input = {
  id: string,
};

export type CreateStressTest39Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest39ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest39ConditionInput | null > | null,
  or?: Array< ModelStressTest39ConditionInput | null > | null,
  not?: ModelStressTest39ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest39 = {
  __typename: "StressTest39",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest39Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest39Input = {
  id: string,
};

export type CreateStressTest40Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest40ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest40ConditionInput | null > | null,
  or?: Array< ModelStressTest40ConditionInput | null > | null,
  not?: ModelStressTest40ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest40 = {
  __typename: "StressTest40",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest40Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest40Input = {
  id: string,
};

export type CreateStressTest41Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest41ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest41ConditionInput | null > | null,
  or?: Array< ModelStressTest41ConditionInput | null > | null,
  not?: ModelStressTest41ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest41 = {
  __typename: "StressTest41",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest41Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest41Input = {
  id: string,
};

export type CreateStressTest42Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest42ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest42ConditionInput | null > | null,
  or?: Array< ModelStressTest42ConditionInput | null > | null,
  not?: ModelStressTest42ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest42 = {
  __typename: "StressTest42",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest42Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest42Input = {
  id: string,
};

export type CreateStressTest43Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest43ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest43ConditionInput | null > | null,
  or?: Array< ModelStressTest43ConditionInput | null > | null,
  not?: ModelStressTest43ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest43 = {
  __typename: "StressTest43",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest43Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest43Input = {
  id: string,
};

export type CreateStressTest44Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest44ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest44ConditionInput | null > | null,
  or?: Array< ModelStressTest44ConditionInput | null > | null,
  not?: ModelStressTest44ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest44 = {
  __typename: "StressTest44",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest44Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest44Input = {
  id: string,
};

export type CreateStressTest45Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest45ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest45ConditionInput | null > | null,
  or?: Array< ModelStressTest45ConditionInput | null > | null,
  not?: ModelStressTest45ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest45 = {
  __typename: "StressTest45",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest45Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest45Input = {
  id: string,
};

export type CreateStressTest46Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest46ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest46ConditionInput | null > | null,
  or?: Array< ModelStressTest46ConditionInput | null > | null,
  not?: ModelStressTest46ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest46 = {
  __typename: "StressTest46",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest46Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest46Input = {
  id: string,
};

export type CreateStressTest47Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest47ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest47ConditionInput | null > | null,
  or?: Array< ModelStressTest47ConditionInput | null > | null,
  not?: ModelStressTest47ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest47 = {
  __typename: "StressTest47",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest47Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest47Input = {
  id: string,
};

export type CreateStressTest48Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest48ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest48ConditionInput | null > | null,
  or?: Array< ModelStressTest48ConditionInput | null > | null,
  not?: ModelStressTest48ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest48 = {
  __typename: "StressTest48",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest48Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest48Input = {
  id: string,
};

export type CreateStressTest49Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest49ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest49ConditionInput | null > | null,
  or?: Array< ModelStressTest49ConditionInput | null > | null,
  not?: ModelStressTest49ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest49 = {
  __typename: "StressTest49",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest49Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest49Input = {
  id: string,
};

export type CreateStressTest50Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest50ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest50ConditionInput | null > | null,
  or?: Array< ModelStressTest50ConditionInput | null > | null,
  not?: ModelStressTest50ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest50 = {
  __typename: "StressTest50",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest50Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest50Input = {
  id: string,
};

export type CreateStressTest51Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest51ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest51ConditionInput | null > | null,
  or?: Array< ModelStressTest51ConditionInput | null > | null,
  not?: ModelStressTest51ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest51 = {
  __typename: "StressTest51",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest51Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest51Input = {
  id: string,
};

export type CreateStressTest52Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest52ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest52ConditionInput | null > | null,
  or?: Array< ModelStressTest52ConditionInput | null > | null,
  not?: ModelStressTest52ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest52 = {
  __typename: "StressTest52",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest52Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest52Input = {
  id: string,
};

export type CreateStressTest53Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest53ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest53ConditionInput | null > | null,
  or?: Array< ModelStressTest53ConditionInput | null > | null,
  not?: ModelStressTest53ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest53 = {
  __typename: "StressTest53",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest53Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest53Input = {
  id: string,
};

export type CreateStressTest54Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest54ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest54ConditionInput | null > | null,
  or?: Array< ModelStressTest54ConditionInput | null > | null,
  not?: ModelStressTest54ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest54 = {
  __typename: "StressTest54",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest54Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest54Input = {
  id: string,
};

export type CreateStressTest55Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest55ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest55ConditionInput | null > | null,
  or?: Array< ModelStressTest55ConditionInput | null > | null,
  not?: ModelStressTest55ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest55 = {
  __typename: "StressTest55",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest55Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest55Input = {
  id: string,
};

export type CreateStressTest56Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest56ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest56ConditionInput | null > | null,
  or?: Array< ModelStressTest56ConditionInput | null > | null,
  not?: ModelStressTest56ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest56 = {
  __typename: "StressTest56",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest56Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest56Input = {
  id: string,
};

export type CreateStressTest57Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest57ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest57ConditionInput | null > | null,
  or?: Array< ModelStressTest57ConditionInput | null > | null,
  not?: ModelStressTest57ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest57 = {
  __typename: "StressTest57",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest57Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest57Input = {
  id: string,
};

export type CreateStressTest58Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest58ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest58ConditionInput | null > | null,
  or?: Array< ModelStressTest58ConditionInput | null > | null,
  not?: ModelStressTest58ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest58 = {
  __typename: "StressTest58",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest58Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest58Input = {
  id: string,
};

export type CreateStressTest59Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest59ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest59ConditionInput | null > | null,
  or?: Array< ModelStressTest59ConditionInput | null > | null,
  not?: ModelStressTest59ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest59 = {
  __typename: "StressTest59",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest59Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest59Input = {
  id: string,
};

export type CreateStressTest60Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest60ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest60ConditionInput | null > | null,
  or?: Array< ModelStressTest60ConditionInput | null > | null,
  not?: ModelStressTest60ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest60 = {
  __typename: "StressTest60",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest60Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest60Input = {
  id: string,
};

export type CreateStressTest61Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest61ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest61ConditionInput | null > | null,
  or?: Array< ModelStressTest61ConditionInput | null > | null,
  not?: ModelStressTest61ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest61 = {
  __typename: "StressTest61",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest61Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest61Input = {
  id: string,
};

export type CreateStressTest62Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest62ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest62ConditionInput | null > | null,
  or?: Array< ModelStressTest62ConditionInput | null > | null,
  not?: ModelStressTest62ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest62 = {
  __typename: "StressTest62",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest62Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest62Input = {
  id: string,
};

export type CreateStressTest63Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest63ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest63ConditionInput | null > | null,
  or?: Array< ModelStressTest63ConditionInput | null > | null,
  not?: ModelStressTest63ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest63 = {
  __typename: "StressTest63",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest63Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest63Input = {
  id: string,
};

export type CreateStressTest64Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest64ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest64ConditionInput | null > | null,
  or?: Array< ModelStressTest64ConditionInput | null > | null,
  not?: ModelStressTest64ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest64 = {
  __typename: "StressTest64",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest64Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest64Input = {
  id: string,
};

export type CreateStressTest65Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest65ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest65ConditionInput | null > | null,
  or?: Array< ModelStressTest65ConditionInput | null > | null,
  not?: ModelStressTest65ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest65 = {
  __typename: "StressTest65",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest65Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest65Input = {
  id: string,
};

export type CreateStressTest66Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest66ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest66ConditionInput | null > | null,
  or?: Array< ModelStressTest66ConditionInput | null > | null,
  not?: ModelStressTest66ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest66 = {
  __typename: "StressTest66",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest66Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest66Input = {
  id: string,
};

export type CreateStressTest67Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest67ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest67ConditionInput | null > | null,
  or?: Array< ModelStressTest67ConditionInput | null > | null,
  not?: ModelStressTest67ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest67 = {
  __typename: "StressTest67",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest67Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest67Input = {
  id: string,
};

export type CreateStressTest68Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest68ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest68ConditionInput | null > | null,
  or?: Array< ModelStressTest68ConditionInput | null > | null,
  not?: ModelStressTest68ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest68 = {
  __typename: "StressTest68",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest68Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest68Input = {
  id: string,
};

export type CreateStressTest69Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest69ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest69ConditionInput | null > | null,
  or?: Array< ModelStressTest69ConditionInput | null > | null,
  not?: ModelStressTest69ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest69 = {
  __typename: "StressTest69",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest69Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest69Input = {
  id: string,
};

export type CreateStressTest70Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest70ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest70ConditionInput | null > | null,
  or?: Array< ModelStressTest70ConditionInput | null > | null,
  not?: ModelStressTest70ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest70 = {
  __typename: "StressTest70",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest70Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest70Input = {
  id: string,
};

export type CreateStressTest71Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest71ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest71ConditionInput | null > | null,
  or?: Array< ModelStressTest71ConditionInput | null > | null,
  not?: ModelStressTest71ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest71 = {
  __typename: "StressTest71",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest71Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest71Input = {
  id: string,
};

export type CreateStressTest72Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest72ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest72ConditionInput | null > | null,
  or?: Array< ModelStressTest72ConditionInput | null > | null,
  not?: ModelStressTest72ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest72 = {
  __typename: "StressTest72",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest72Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest72Input = {
  id: string,
};

export type CreateStressTest73Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest73ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest73ConditionInput | null > | null,
  or?: Array< ModelStressTest73ConditionInput | null > | null,
  not?: ModelStressTest73ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest73 = {
  __typename: "StressTest73",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest73Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest73Input = {
  id: string,
};

export type CreateStressTest74Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest74ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest74ConditionInput | null > | null,
  or?: Array< ModelStressTest74ConditionInput | null > | null,
  not?: ModelStressTest74ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest74 = {
  __typename: "StressTest74",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest74Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest74Input = {
  id: string,
};

export type CreateStressTest75Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest75ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest75ConditionInput | null > | null,
  or?: Array< ModelStressTest75ConditionInput | null > | null,
  not?: ModelStressTest75ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest75 = {
  __typename: "StressTest75",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest75Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest75Input = {
  id: string,
};

export type CreateStressTest76Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest76ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest76ConditionInput | null > | null,
  or?: Array< ModelStressTest76ConditionInput | null > | null,
  not?: ModelStressTest76ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest76 = {
  __typename: "StressTest76",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest76Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest76Input = {
  id: string,
};

export type CreateStressTest77Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest77ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest77ConditionInput | null > | null,
  or?: Array< ModelStressTest77ConditionInput | null > | null,
  not?: ModelStressTest77ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest77 = {
  __typename: "StressTest77",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest77Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest77Input = {
  id: string,
};

export type CreateStressTest78Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest78ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest78ConditionInput | null > | null,
  or?: Array< ModelStressTest78ConditionInput | null > | null,
  not?: ModelStressTest78ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest78 = {
  __typename: "StressTest78",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest78Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest78Input = {
  id: string,
};

export type CreateStressTest79Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest79ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest79ConditionInput | null > | null,
  or?: Array< ModelStressTest79ConditionInput | null > | null,
  not?: ModelStressTest79ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest79 = {
  __typename: "StressTest79",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest79Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest79Input = {
  id: string,
};

export type CreateStressTest80Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest80ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest80ConditionInput | null > | null,
  or?: Array< ModelStressTest80ConditionInput | null > | null,
  not?: ModelStressTest80ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest80 = {
  __typename: "StressTest80",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest80Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest80Input = {
  id: string,
};

export type CreateStressTest81Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest81ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest81ConditionInput | null > | null,
  or?: Array< ModelStressTest81ConditionInput | null > | null,
  not?: ModelStressTest81ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest81 = {
  __typename: "StressTest81",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  relatedItems?: ModelStressTest82Connection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelStressTest82Connection = {
  __typename: "ModelStressTest82Connection",
  items:  Array<StressTest82 | null >,
  nextToken?: string | null,
};

export type StressTest82 = {
  __typename: "StressTest82",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  stressTest81ID?: string | null,
  createdAt: string,
  updatedAt: string,
  stressTest81RelatedItemsId?: string | null,
  owner?: string | null,
};

export type UpdateStressTest81Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest81Input = {
  id: string,
};

export type CreateStressTest82Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  stressTest81ID?: string | null,
  stressTest81RelatedItemsId?: string | null,
};

export type ModelStressTest82ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  stressTest81ID?: ModelIDInput | null,
  and?: Array< ModelStressTest82ConditionInput | null > | null,
  or?: Array< ModelStressTest82ConditionInput | null > | null,
  not?: ModelStressTest82ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  stressTest81RelatedItemsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateStressTest82Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  stressTest81ID?: string | null,
  stressTest81RelatedItemsId?: string | null,
};

export type DeleteStressTest82Input = {
  id: string,
};

export type CreateStressTest83Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest83ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest83ConditionInput | null > | null,
  or?: Array< ModelStressTest83ConditionInput | null > | null,
  not?: ModelStressTest83ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest83 = {
  __typename: "StressTest83",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  relatedItems?: ModelStressTest84Connection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelStressTest84Connection = {
  __typename: "ModelStressTest84Connection",
  items:  Array<StressTest84 | null >,
  nextToken?: string | null,
};

export type StressTest84 = {
  __typename: "StressTest84",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  stressTest83ID?: string | null,
  createdAt: string,
  updatedAt: string,
  stressTest83RelatedItemsId?: string | null,
  owner?: string | null,
};

export type UpdateStressTest83Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest83Input = {
  id: string,
};

export type CreateStressTest84Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  stressTest83ID?: string | null,
  stressTest83RelatedItemsId?: string | null,
};

export type ModelStressTest84ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  stressTest83ID?: ModelIDInput | null,
  and?: Array< ModelStressTest84ConditionInput | null > | null,
  or?: Array< ModelStressTest84ConditionInput | null > | null,
  not?: ModelStressTest84ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  stressTest83RelatedItemsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateStressTest84Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  stressTest83ID?: string | null,
  stressTest83RelatedItemsId?: string | null,
};

export type DeleteStressTest84Input = {
  id: string,
};

export type CreateStressTest85Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest85ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest85ConditionInput | null > | null,
  or?: Array< ModelStressTest85ConditionInput | null > | null,
  not?: ModelStressTest85ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest85 = {
  __typename: "StressTest85",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  relatedItems?: ModelStressTest86Connection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelStressTest86Connection = {
  __typename: "ModelStressTest86Connection",
  items:  Array<StressTest86 | null >,
  nextToken?: string | null,
};

export type StressTest86 = {
  __typename: "StressTest86",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  stressTest85ID?: string | null,
  createdAt: string,
  updatedAt: string,
  stressTest85RelatedItemsId?: string | null,
  owner?: string | null,
};

export type UpdateStressTest85Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest85Input = {
  id: string,
};

export type CreateStressTest86Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  stressTest85ID?: string | null,
  stressTest85RelatedItemsId?: string | null,
};

export type ModelStressTest86ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  stressTest85ID?: ModelIDInput | null,
  and?: Array< ModelStressTest86ConditionInput | null > | null,
  or?: Array< ModelStressTest86ConditionInput | null > | null,
  not?: ModelStressTest86ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  stressTest85RelatedItemsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateStressTest86Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  stressTest85ID?: string | null,
  stressTest85RelatedItemsId?: string | null,
};

export type DeleteStressTest86Input = {
  id: string,
};

export type CreateStressTest87Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest87ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest87ConditionInput | null > | null,
  or?: Array< ModelStressTest87ConditionInput | null > | null,
  not?: ModelStressTest87ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest87 = {
  __typename: "StressTest87",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  relatedItems?: ModelStressTest88Connection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelStressTest88Connection = {
  __typename: "ModelStressTest88Connection",
  items:  Array<StressTest88 | null >,
  nextToken?: string | null,
};

export type StressTest88 = {
  __typename: "StressTest88",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  stressTest87ID?: string | null,
  createdAt: string,
  updatedAt: string,
  stressTest87RelatedItemsId?: string | null,
  owner?: string | null,
};

export type UpdateStressTest87Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest87Input = {
  id: string,
};

export type CreateStressTest88Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  stressTest87ID?: string | null,
  stressTest87RelatedItemsId?: string | null,
};

export type ModelStressTest88ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  stressTest87ID?: ModelIDInput | null,
  and?: Array< ModelStressTest88ConditionInput | null > | null,
  or?: Array< ModelStressTest88ConditionInput | null > | null,
  not?: ModelStressTest88ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  stressTest87RelatedItemsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateStressTest88Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  stressTest87ID?: string | null,
  stressTest87RelatedItemsId?: string | null,
};

export type DeleteStressTest88Input = {
  id: string,
};

export type CreateStressTest89Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type ModelStressTest89ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelStressTest89ConditionInput | null > | null,
  or?: Array< ModelStressTest89ConditionInput | null > | null,
  not?: ModelStressTest89ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest89 = {
  __typename: "StressTest89",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  relatedItems?: ModelStressTest90Connection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelStressTest90Connection = {
  __typename: "ModelStressTest90Connection",
  items:  Array<StressTest90 | null >,
  nextToken?: string | null,
};

export type StressTest90 = {
  __typename: "StressTest90",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  stressTest89ID?: string | null,
  createdAt: string,
  updatedAt: string,
  stressTest89RelatedItemsId?: string | null,
  owner?: string | null,
};

export type UpdateStressTest89Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
};

export type DeleteStressTest89Input = {
  id: string,
};

export type CreateStressTest90Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  stressTest89ID?: string | null,
  stressTest89RelatedItemsId?: string | null,
};

export type ModelStressTest90ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  stressTest89ID?: ModelIDInput | null,
  and?: Array< ModelStressTest90ConditionInput | null > | null,
  or?: Array< ModelStressTest90ConditionInput | null > | null,
  not?: ModelStressTest90ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  stressTest89RelatedItemsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateStressTest90Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  stressTest89ID?: string | null,
  stressTest89RelatedItemsId?: string | null,
};

export type DeleteStressTest90Input = {
  id: string,
};

export type CreateStressTest91Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export enum StressTestStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}


export enum StressTestPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  CRITICAL = "CRITICAL",
}


export type ModelStressTest91ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  and?: Array< ModelStressTest91ConditionInput | null > | null,
  or?: Array< ModelStressTest91ConditionInput | null > | null,
  not?: ModelStressTest91ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTestStatusInput = {
  eq?: StressTestStatus | null,
  ne?: StressTestStatus | null,
};

export type ModelStressTestPriorityInput = {
  eq?: StressTestPriority | null,
  ne?: StressTestPriority | null,
};

export type StressTest91 = {
  __typename: "StressTest91",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest91Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type DeleteStressTest91Input = {
  id: string,
};

export type CreateStressTest92Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type ModelStressTest92ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  and?: Array< ModelStressTest92ConditionInput | null > | null,
  or?: Array< ModelStressTest92ConditionInput | null > | null,
  not?: ModelStressTest92ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest92 = {
  __typename: "StressTest92",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest92Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type DeleteStressTest92Input = {
  id: string,
};

export type CreateStressTest93Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type ModelStressTest93ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  and?: Array< ModelStressTest93ConditionInput | null > | null,
  or?: Array< ModelStressTest93ConditionInput | null > | null,
  not?: ModelStressTest93ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest93 = {
  __typename: "StressTest93",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest93Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type DeleteStressTest93Input = {
  id: string,
};

export type CreateStressTest94Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type ModelStressTest94ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  and?: Array< ModelStressTest94ConditionInput | null > | null,
  or?: Array< ModelStressTest94ConditionInput | null > | null,
  not?: ModelStressTest94ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest94 = {
  __typename: "StressTest94",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest94Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type DeleteStressTest94Input = {
  id: string,
};

export type CreateStressTest95Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type ModelStressTest95ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  and?: Array< ModelStressTest95ConditionInput | null > | null,
  or?: Array< ModelStressTest95ConditionInput | null > | null,
  not?: ModelStressTest95ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest95 = {
  __typename: "StressTest95",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest95Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type DeleteStressTest95Input = {
  id: string,
};

export type CreateStressTest96Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type ModelStressTest96ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  and?: Array< ModelStressTest96ConditionInput | null > | null,
  or?: Array< ModelStressTest96ConditionInput | null > | null,
  not?: ModelStressTest96ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest96 = {
  __typename: "StressTest96",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest96Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type DeleteStressTest96Input = {
  id: string,
};

export type CreateStressTest97Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type ModelStressTest97ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  and?: Array< ModelStressTest97ConditionInput | null > | null,
  or?: Array< ModelStressTest97ConditionInput | null > | null,
  not?: ModelStressTest97ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest97 = {
  __typename: "StressTest97",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest97Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type DeleteStressTest97Input = {
  id: string,
};

export type CreateStressTest98Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type ModelStressTest98ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  and?: Array< ModelStressTest98ConditionInput | null > | null,
  or?: Array< ModelStressTest98ConditionInput | null > | null,
  not?: ModelStressTest98ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest98 = {
  __typename: "StressTest98",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest98Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type DeleteStressTest98Input = {
  id: string,
};

export type CreateStressTest99Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type ModelStressTest99ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  and?: Array< ModelStressTest99ConditionInput | null > | null,
  or?: Array< ModelStressTest99ConditionInput | null > | null,
  not?: ModelStressTest99ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest99 = {
  __typename: "StressTest99",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest99Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type DeleteStressTest99Input = {
  id: string,
};

export type CreateStressTest100Input = {
  id?: string | null,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type ModelStressTest100ConditionInput = {
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  and?: Array< ModelStressTest100ConditionInput | null > | null,
  or?: Array< ModelStressTest100ConditionInput | null > | null,
  not?: ModelStressTest100ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type StressTest100 = {
  __typename: "StressTest100",
  id: string,
  name: string,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStressTest100Input = {
  id: string,
  name?: string | null,
  data?: string | null,
  value?: number | null,
  active?: boolean | null,
  timestamp?: string | null,
  status?: StressTestStatus | null,
  priority?: StressTestPriority | null,
};

export type DeleteStressTest100Input = {
  id: string,
};

export type QuoteResponse = {
  __typename: "QuoteResponse",
  message: string,
  quote: string,
  author: string,
  timestamp: string,
  totalQuotes: number,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelProjectStatusInput | null,
  deadline?: ModelStringInput | null,
  color?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  projectID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
  projectTodosId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest1FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest1FilterInput | null > | null,
  or?: Array< ModelStressTest1FilterInput | null > | null,
  not?: ModelStressTest1FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest1Connection = {
  __typename: "ModelStressTest1Connection",
  items:  Array<StressTest1 | null >,
  nextToken?: string | null,
};

export type ModelStressTest2FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest2FilterInput | null > | null,
  or?: Array< ModelStressTest2FilterInput | null > | null,
  not?: ModelStressTest2FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest2Connection = {
  __typename: "ModelStressTest2Connection",
  items:  Array<StressTest2 | null >,
  nextToken?: string | null,
};

export type ModelStressTest3FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest3FilterInput | null > | null,
  or?: Array< ModelStressTest3FilterInput | null > | null,
  not?: ModelStressTest3FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest3Connection = {
  __typename: "ModelStressTest3Connection",
  items:  Array<StressTest3 | null >,
  nextToken?: string | null,
};

export type ModelStressTest4FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest4FilterInput | null > | null,
  or?: Array< ModelStressTest4FilterInput | null > | null,
  not?: ModelStressTest4FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest4Connection = {
  __typename: "ModelStressTest4Connection",
  items:  Array<StressTest4 | null >,
  nextToken?: string | null,
};

export type ModelStressTest5FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest5FilterInput | null > | null,
  or?: Array< ModelStressTest5FilterInput | null > | null,
  not?: ModelStressTest5FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest5Connection = {
  __typename: "ModelStressTest5Connection",
  items:  Array<StressTest5 | null >,
  nextToken?: string | null,
};

export type ModelStressTest6FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest6FilterInput | null > | null,
  or?: Array< ModelStressTest6FilterInput | null > | null,
  not?: ModelStressTest6FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest6Connection = {
  __typename: "ModelStressTest6Connection",
  items:  Array<StressTest6 | null >,
  nextToken?: string | null,
};

export type ModelStressTest7FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest7FilterInput | null > | null,
  or?: Array< ModelStressTest7FilterInput | null > | null,
  not?: ModelStressTest7FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest7Connection = {
  __typename: "ModelStressTest7Connection",
  items:  Array<StressTest7 | null >,
  nextToken?: string | null,
};

export type ModelStressTest8FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest8FilterInput | null > | null,
  or?: Array< ModelStressTest8FilterInput | null > | null,
  not?: ModelStressTest8FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest8Connection = {
  __typename: "ModelStressTest8Connection",
  items:  Array<StressTest8 | null >,
  nextToken?: string | null,
};

export type ModelStressTest9FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest9FilterInput | null > | null,
  or?: Array< ModelStressTest9FilterInput | null > | null,
  not?: ModelStressTest9FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest9Connection = {
  __typename: "ModelStressTest9Connection",
  items:  Array<StressTest9 | null >,
  nextToken?: string | null,
};

export type ModelStressTest10FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest10FilterInput | null > | null,
  or?: Array< ModelStressTest10FilterInput | null > | null,
  not?: ModelStressTest10FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest10Connection = {
  __typename: "ModelStressTest10Connection",
  items:  Array<StressTest10 | null >,
  nextToken?: string | null,
};

export type ModelStressTest11FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest11FilterInput | null > | null,
  or?: Array< ModelStressTest11FilterInput | null > | null,
  not?: ModelStressTest11FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest11Connection = {
  __typename: "ModelStressTest11Connection",
  items:  Array<StressTest11 | null >,
  nextToken?: string | null,
};

export type ModelStressTest12FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest12FilterInput | null > | null,
  or?: Array< ModelStressTest12FilterInput | null > | null,
  not?: ModelStressTest12FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest12Connection = {
  __typename: "ModelStressTest12Connection",
  items:  Array<StressTest12 | null >,
  nextToken?: string | null,
};

export type ModelStressTest13FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest13FilterInput | null > | null,
  or?: Array< ModelStressTest13FilterInput | null > | null,
  not?: ModelStressTest13FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest13Connection = {
  __typename: "ModelStressTest13Connection",
  items:  Array<StressTest13 | null >,
  nextToken?: string | null,
};

export type ModelStressTest14FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest14FilterInput | null > | null,
  or?: Array< ModelStressTest14FilterInput | null > | null,
  not?: ModelStressTest14FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest14Connection = {
  __typename: "ModelStressTest14Connection",
  items:  Array<StressTest14 | null >,
  nextToken?: string | null,
};

export type ModelStressTest15FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest15FilterInput | null > | null,
  or?: Array< ModelStressTest15FilterInput | null > | null,
  not?: ModelStressTest15FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest15Connection = {
  __typename: "ModelStressTest15Connection",
  items:  Array<StressTest15 | null >,
  nextToken?: string | null,
};

export type ModelStressTest16FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest16FilterInput | null > | null,
  or?: Array< ModelStressTest16FilterInput | null > | null,
  not?: ModelStressTest16FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest16Connection = {
  __typename: "ModelStressTest16Connection",
  items:  Array<StressTest16 | null >,
  nextToken?: string | null,
};

export type ModelStressTest17FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest17FilterInput | null > | null,
  or?: Array< ModelStressTest17FilterInput | null > | null,
  not?: ModelStressTest17FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest17Connection = {
  __typename: "ModelStressTest17Connection",
  items:  Array<StressTest17 | null >,
  nextToken?: string | null,
};

export type ModelStressTest18FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest18FilterInput | null > | null,
  or?: Array< ModelStressTest18FilterInput | null > | null,
  not?: ModelStressTest18FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest18Connection = {
  __typename: "ModelStressTest18Connection",
  items:  Array<StressTest18 | null >,
  nextToken?: string | null,
};

export type ModelStressTest19FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest19FilterInput | null > | null,
  or?: Array< ModelStressTest19FilterInput | null > | null,
  not?: ModelStressTest19FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest19Connection = {
  __typename: "ModelStressTest19Connection",
  items:  Array<StressTest19 | null >,
  nextToken?: string | null,
};

export type ModelStressTest20FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest20FilterInput | null > | null,
  or?: Array< ModelStressTest20FilterInput | null > | null,
  not?: ModelStressTest20FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest20Connection = {
  __typename: "ModelStressTest20Connection",
  items:  Array<StressTest20 | null >,
  nextToken?: string | null,
};

export type ModelStressTest21FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest21FilterInput | null > | null,
  or?: Array< ModelStressTest21FilterInput | null > | null,
  not?: ModelStressTest21FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest21Connection = {
  __typename: "ModelStressTest21Connection",
  items:  Array<StressTest21 | null >,
  nextToken?: string | null,
};

export type ModelStressTest22FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest22FilterInput | null > | null,
  or?: Array< ModelStressTest22FilterInput | null > | null,
  not?: ModelStressTest22FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest22Connection = {
  __typename: "ModelStressTest22Connection",
  items:  Array<StressTest22 | null >,
  nextToken?: string | null,
};

export type ModelStressTest23FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest23FilterInput | null > | null,
  or?: Array< ModelStressTest23FilterInput | null > | null,
  not?: ModelStressTest23FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest23Connection = {
  __typename: "ModelStressTest23Connection",
  items:  Array<StressTest23 | null >,
  nextToken?: string | null,
};

export type ModelStressTest24FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest24FilterInput | null > | null,
  or?: Array< ModelStressTest24FilterInput | null > | null,
  not?: ModelStressTest24FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest24Connection = {
  __typename: "ModelStressTest24Connection",
  items:  Array<StressTest24 | null >,
  nextToken?: string | null,
};

export type ModelStressTest25FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest25FilterInput | null > | null,
  or?: Array< ModelStressTest25FilterInput | null > | null,
  not?: ModelStressTest25FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest25Connection = {
  __typename: "ModelStressTest25Connection",
  items:  Array<StressTest25 | null >,
  nextToken?: string | null,
};

export type ModelStressTest26FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest26FilterInput | null > | null,
  or?: Array< ModelStressTest26FilterInput | null > | null,
  not?: ModelStressTest26FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest26Connection = {
  __typename: "ModelStressTest26Connection",
  items:  Array<StressTest26 | null >,
  nextToken?: string | null,
};

export type ModelStressTest27FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest27FilterInput | null > | null,
  or?: Array< ModelStressTest27FilterInput | null > | null,
  not?: ModelStressTest27FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest27Connection = {
  __typename: "ModelStressTest27Connection",
  items:  Array<StressTest27 | null >,
  nextToken?: string | null,
};

export type ModelStressTest28FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest28FilterInput | null > | null,
  or?: Array< ModelStressTest28FilterInput | null > | null,
  not?: ModelStressTest28FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest28Connection = {
  __typename: "ModelStressTest28Connection",
  items:  Array<StressTest28 | null >,
  nextToken?: string | null,
};

export type ModelStressTest29FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest29FilterInput | null > | null,
  or?: Array< ModelStressTest29FilterInput | null > | null,
  not?: ModelStressTest29FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest29Connection = {
  __typename: "ModelStressTest29Connection",
  items:  Array<StressTest29 | null >,
  nextToken?: string | null,
};

export type ModelStressTest30FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest30FilterInput | null > | null,
  or?: Array< ModelStressTest30FilterInput | null > | null,
  not?: ModelStressTest30FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest30Connection = {
  __typename: "ModelStressTest30Connection",
  items:  Array<StressTest30 | null >,
  nextToken?: string | null,
};

export type ModelStressTest31FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest31FilterInput | null > | null,
  or?: Array< ModelStressTest31FilterInput | null > | null,
  not?: ModelStressTest31FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest31Connection = {
  __typename: "ModelStressTest31Connection",
  items:  Array<StressTest31 | null >,
  nextToken?: string | null,
};

export type ModelStressTest32FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest32FilterInput | null > | null,
  or?: Array< ModelStressTest32FilterInput | null > | null,
  not?: ModelStressTest32FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest32Connection = {
  __typename: "ModelStressTest32Connection",
  items:  Array<StressTest32 | null >,
  nextToken?: string | null,
};

export type ModelStressTest33FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest33FilterInput | null > | null,
  or?: Array< ModelStressTest33FilterInput | null > | null,
  not?: ModelStressTest33FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest33Connection = {
  __typename: "ModelStressTest33Connection",
  items:  Array<StressTest33 | null >,
  nextToken?: string | null,
};

export type ModelStressTest34FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest34FilterInput | null > | null,
  or?: Array< ModelStressTest34FilterInput | null > | null,
  not?: ModelStressTest34FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest34Connection = {
  __typename: "ModelStressTest34Connection",
  items:  Array<StressTest34 | null >,
  nextToken?: string | null,
};

export type ModelStressTest35FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest35FilterInput | null > | null,
  or?: Array< ModelStressTest35FilterInput | null > | null,
  not?: ModelStressTest35FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest35Connection = {
  __typename: "ModelStressTest35Connection",
  items:  Array<StressTest35 | null >,
  nextToken?: string | null,
};

export type ModelStressTest36FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest36FilterInput | null > | null,
  or?: Array< ModelStressTest36FilterInput | null > | null,
  not?: ModelStressTest36FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest36Connection = {
  __typename: "ModelStressTest36Connection",
  items:  Array<StressTest36 | null >,
  nextToken?: string | null,
};

export type ModelStressTest37FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest37FilterInput | null > | null,
  or?: Array< ModelStressTest37FilterInput | null > | null,
  not?: ModelStressTest37FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest37Connection = {
  __typename: "ModelStressTest37Connection",
  items:  Array<StressTest37 | null >,
  nextToken?: string | null,
};

export type ModelStressTest38FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest38FilterInput | null > | null,
  or?: Array< ModelStressTest38FilterInput | null > | null,
  not?: ModelStressTest38FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest38Connection = {
  __typename: "ModelStressTest38Connection",
  items:  Array<StressTest38 | null >,
  nextToken?: string | null,
};

export type ModelStressTest39FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest39FilterInput | null > | null,
  or?: Array< ModelStressTest39FilterInput | null > | null,
  not?: ModelStressTest39FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest39Connection = {
  __typename: "ModelStressTest39Connection",
  items:  Array<StressTest39 | null >,
  nextToken?: string | null,
};

export type ModelStressTest40FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest40FilterInput | null > | null,
  or?: Array< ModelStressTest40FilterInput | null > | null,
  not?: ModelStressTest40FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest40Connection = {
  __typename: "ModelStressTest40Connection",
  items:  Array<StressTest40 | null >,
  nextToken?: string | null,
};

export type ModelStressTest41FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest41FilterInput | null > | null,
  or?: Array< ModelStressTest41FilterInput | null > | null,
  not?: ModelStressTest41FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest41Connection = {
  __typename: "ModelStressTest41Connection",
  items:  Array<StressTest41 | null >,
  nextToken?: string | null,
};

export type ModelStressTest42FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest42FilterInput | null > | null,
  or?: Array< ModelStressTest42FilterInput | null > | null,
  not?: ModelStressTest42FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest42Connection = {
  __typename: "ModelStressTest42Connection",
  items:  Array<StressTest42 | null >,
  nextToken?: string | null,
};

export type ModelStressTest43FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest43FilterInput | null > | null,
  or?: Array< ModelStressTest43FilterInput | null > | null,
  not?: ModelStressTest43FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest43Connection = {
  __typename: "ModelStressTest43Connection",
  items:  Array<StressTest43 | null >,
  nextToken?: string | null,
};

export type ModelStressTest44FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest44FilterInput | null > | null,
  or?: Array< ModelStressTest44FilterInput | null > | null,
  not?: ModelStressTest44FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest44Connection = {
  __typename: "ModelStressTest44Connection",
  items:  Array<StressTest44 | null >,
  nextToken?: string | null,
};

export type ModelStressTest45FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest45FilterInput | null > | null,
  or?: Array< ModelStressTest45FilterInput | null > | null,
  not?: ModelStressTest45FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest45Connection = {
  __typename: "ModelStressTest45Connection",
  items:  Array<StressTest45 | null >,
  nextToken?: string | null,
};

export type ModelStressTest46FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest46FilterInput | null > | null,
  or?: Array< ModelStressTest46FilterInput | null > | null,
  not?: ModelStressTest46FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest46Connection = {
  __typename: "ModelStressTest46Connection",
  items:  Array<StressTest46 | null >,
  nextToken?: string | null,
};

export type ModelStressTest47FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest47FilterInput | null > | null,
  or?: Array< ModelStressTest47FilterInput | null > | null,
  not?: ModelStressTest47FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest47Connection = {
  __typename: "ModelStressTest47Connection",
  items:  Array<StressTest47 | null >,
  nextToken?: string | null,
};

export type ModelStressTest48FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest48FilterInput | null > | null,
  or?: Array< ModelStressTest48FilterInput | null > | null,
  not?: ModelStressTest48FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest48Connection = {
  __typename: "ModelStressTest48Connection",
  items:  Array<StressTest48 | null >,
  nextToken?: string | null,
};

export type ModelStressTest49FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest49FilterInput | null > | null,
  or?: Array< ModelStressTest49FilterInput | null > | null,
  not?: ModelStressTest49FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest49Connection = {
  __typename: "ModelStressTest49Connection",
  items:  Array<StressTest49 | null >,
  nextToken?: string | null,
};

export type ModelStressTest50FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest50FilterInput | null > | null,
  or?: Array< ModelStressTest50FilterInput | null > | null,
  not?: ModelStressTest50FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest50Connection = {
  __typename: "ModelStressTest50Connection",
  items:  Array<StressTest50 | null >,
  nextToken?: string | null,
};

export type ModelStressTest51FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest51FilterInput | null > | null,
  or?: Array< ModelStressTest51FilterInput | null > | null,
  not?: ModelStressTest51FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest51Connection = {
  __typename: "ModelStressTest51Connection",
  items:  Array<StressTest51 | null >,
  nextToken?: string | null,
};

export type ModelStressTest52FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest52FilterInput | null > | null,
  or?: Array< ModelStressTest52FilterInput | null > | null,
  not?: ModelStressTest52FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest52Connection = {
  __typename: "ModelStressTest52Connection",
  items:  Array<StressTest52 | null >,
  nextToken?: string | null,
};

export type ModelStressTest53FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest53FilterInput | null > | null,
  or?: Array< ModelStressTest53FilterInput | null > | null,
  not?: ModelStressTest53FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest53Connection = {
  __typename: "ModelStressTest53Connection",
  items:  Array<StressTest53 | null >,
  nextToken?: string | null,
};

export type ModelStressTest54FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest54FilterInput | null > | null,
  or?: Array< ModelStressTest54FilterInput | null > | null,
  not?: ModelStressTest54FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest54Connection = {
  __typename: "ModelStressTest54Connection",
  items:  Array<StressTest54 | null >,
  nextToken?: string | null,
};

export type ModelStressTest55FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest55FilterInput | null > | null,
  or?: Array< ModelStressTest55FilterInput | null > | null,
  not?: ModelStressTest55FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest55Connection = {
  __typename: "ModelStressTest55Connection",
  items:  Array<StressTest55 | null >,
  nextToken?: string | null,
};

export type ModelStressTest56FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest56FilterInput | null > | null,
  or?: Array< ModelStressTest56FilterInput | null > | null,
  not?: ModelStressTest56FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest56Connection = {
  __typename: "ModelStressTest56Connection",
  items:  Array<StressTest56 | null >,
  nextToken?: string | null,
};

export type ModelStressTest57FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest57FilterInput | null > | null,
  or?: Array< ModelStressTest57FilterInput | null > | null,
  not?: ModelStressTest57FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest57Connection = {
  __typename: "ModelStressTest57Connection",
  items:  Array<StressTest57 | null >,
  nextToken?: string | null,
};

export type ModelStressTest58FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest58FilterInput | null > | null,
  or?: Array< ModelStressTest58FilterInput | null > | null,
  not?: ModelStressTest58FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest58Connection = {
  __typename: "ModelStressTest58Connection",
  items:  Array<StressTest58 | null >,
  nextToken?: string | null,
};

export type ModelStressTest59FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest59FilterInput | null > | null,
  or?: Array< ModelStressTest59FilterInput | null > | null,
  not?: ModelStressTest59FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest59Connection = {
  __typename: "ModelStressTest59Connection",
  items:  Array<StressTest59 | null >,
  nextToken?: string | null,
};

export type ModelStressTest60FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest60FilterInput | null > | null,
  or?: Array< ModelStressTest60FilterInput | null > | null,
  not?: ModelStressTest60FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest60Connection = {
  __typename: "ModelStressTest60Connection",
  items:  Array<StressTest60 | null >,
  nextToken?: string | null,
};

export type ModelStressTest61FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest61FilterInput | null > | null,
  or?: Array< ModelStressTest61FilterInput | null > | null,
  not?: ModelStressTest61FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest61Connection = {
  __typename: "ModelStressTest61Connection",
  items:  Array<StressTest61 | null >,
  nextToken?: string | null,
};

export type ModelStressTest62FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest62FilterInput | null > | null,
  or?: Array< ModelStressTest62FilterInput | null > | null,
  not?: ModelStressTest62FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest62Connection = {
  __typename: "ModelStressTest62Connection",
  items:  Array<StressTest62 | null >,
  nextToken?: string | null,
};

export type ModelStressTest63FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest63FilterInput | null > | null,
  or?: Array< ModelStressTest63FilterInput | null > | null,
  not?: ModelStressTest63FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest63Connection = {
  __typename: "ModelStressTest63Connection",
  items:  Array<StressTest63 | null >,
  nextToken?: string | null,
};

export type ModelStressTest64FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest64FilterInput | null > | null,
  or?: Array< ModelStressTest64FilterInput | null > | null,
  not?: ModelStressTest64FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest64Connection = {
  __typename: "ModelStressTest64Connection",
  items:  Array<StressTest64 | null >,
  nextToken?: string | null,
};

export type ModelStressTest65FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest65FilterInput | null > | null,
  or?: Array< ModelStressTest65FilterInput | null > | null,
  not?: ModelStressTest65FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest65Connection = {
  __typename: "ModelStressTest65Connection",
  items:  Array<StressTest65 | null >,
  nextToken?: string | null,
};

export type ModelStressTest66FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest66FilterInput | null > | null,
  or?: Array< ModelStressTest66FilterInput | null > | null,
  not?: ModelStressTest66FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest66Connection = {
  __typename: "ModelStressTest66Connection",
  items:  Array<StressTest66 | null >,
  nextToken?: string | null,
};

export type ModelStressTest67FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest67FilterInput | null > | null,
  or?: Array< ModelStressTest67FilterInput | null > | null,
  not?: ModelStressTest67FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest67Connection = {
  __typename: "ModelStressTest67Connection",
  items:  Array<StressTest67 | null >,
  nextToken?: string | null,
};

export type ModelStressTest68FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest68FilterInput | null > | null,
  or?: Array< ModelStressTest68FilterInput | null > | null,
  not?: ModelStressTest68FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest68Connection = {
  __typename: "ModelStressTest68Connection",
  items:  Array<StressTest68 | null >,
  nextToken?: string | null,
};

export type ModelStressTest69FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest69FilterInput | null > | null,
  or?: Array< ModelStressTest69FilterInput | null > | null,
  not?: ModelStressTest69FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest69Connection = {
  __typename: "ModelStressTest69Connection",
  items:  Array<StressTest69 | null >,
  nextToken?: string | null,
};

export type ModelStressTest70FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest70FilterInput | null > | null,
  or?: Array< ModelStressTest70FilterInput | null > | null,
  not?: ModelStressTest70FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest70Connection = {
  __typename: "ModelStressTest70Connection",
  items:  Array<StressTest70 | null >,
  nextToken?: string | null,
};

export type ModelStressTest71FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest71FilterInput | null > | null,
  or?: Array< ModelStressTest71FilterInput | null > | null,
  not?: ModelStressTest71FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest71Connection = {
  __typename: "ModelStressTest71Connection",
  items:  Array<StressTest71 | null >,
  nextToken?: string | null,
};

export type ModelStressTest72FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest72FilterInput | null > | null,
  or?: Array< ModelStressTest72FilterInput | null > | null,
  not?: ModelStressTest72FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest72Connection = {
  __typename: "ModelStressTest72Connection",
  items:  Array<StressTest72 | null >,
  nextToken?: string | null,
};

export type ModelStressTest73FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest73FilterInput | null > | null,
  or?: Array< ModelStressTest73FilterInput | null > | null,
  not?: ModelStressTest73FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest73Connection = {
  __typename: "ModelStressTest73Connection",
  items:  Array<StressTest73 | null >,
  nextToken?: string | null,
};

export type ModelStressTest74FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest74FilterInput | null > | null,
  or?: Array< ModelStressTest74FilterInput | null > | null,
  not?: ModelStressTest74FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest74Connection = {
  __typename: "ModelStressTest74Connection",
  items:  Array<StressTest74 | null >,
  nextToken?: string | null,
};

export type ModelStressTest75FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest75FilterInput | null > | null,
  or?: Array< ModelStressTest75FilterInput | null > | null,
  not?: ModelStressTest75FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest75Connection = {
  __typename: "ModelStressTest75Connection",
  items:  Array<StressTest75 | null >,
  nextToken?: string | null,
};

export type ModelStressTest76FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest76FilterInput | null > | null,
  or?: Array< ModelStressTest76FilterInput | null > | null,
  not?: ModelStressTest76FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest76Connection = {
  __typename: "ModelStressTest76Connection",
  items:  Array<StressTest76 | null >,
  nextToken?: string | null,
};

export type ModelStressTest77FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest77FilterInput | null > | null,
  or?: Array< ModelStressTest77FilterInput | null > | null,
  not?: ModelStressTest77FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest77Connection = {
  __typename: "ModelStressTest77Connection",
  items:  Array<StressTest77 | null >,
  nextToken?: string | null,
};

export type ModelStressTest78FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest78FilterInput | null > | null,
  or?: Array< ModelStressTest78FilterInput | null > | null,
  not?: ModelStressTest78FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest78Connection = {
  __typename: "ModelStressTest78Connection",
  items:  Array<StressTest78 | null >,
  nextToken?: string | null,
};

export type ModelStressTest79FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest79FilterInput | null > | null,
  or?: Array< ModelStressTest79FilterInput | null > | null,
  not?: ModelStressTest79FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest79Connection = {
  __typename: "ModelStressTest79Connection",
  items:  Array<StressTest79 | null >,
  nextToken?: string | null,
};

export type ModelStressTest80FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest80FilterInput | null > | null,
  or?: Array< ModelStressTest80FilterInput | null > | null,
  not?: ModelStressTest80FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest80Connection = {
  __typename: "ModelStressTest80Connection",
  items:  Array<StressTest80 | null >,
  nextToken?: string | null,
};

export type ModelStressTest81FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest81FilterInput | null > | null,
  or?: Array< ModelStressTest81FilterInput | null > | null,
  not?: ModelStressTest81FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest81Connection = {
  __typename: "ModelStressTest81Connection",
  items:  Array<StressTest81 | null >,
  nextToken?: string | null,
};

export type ModelStressTest82FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  stressTest81ID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest82FilterInput | null > | null,
  or?: Array< ModelStressTest82FilterInput | null > | null,
  not?: ModelStressTest82FilterInput | null,
  stressTest81RelatedItemsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest83FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest83FilterInput | null > | null,
  or?: Array< ModelStressTest83FilterInput | null > | null,
  not?: ModelStressTest83FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest83Connection = {
  __typename: "ModelStressTest83Connection",
  items:  Array<StressTest83 | null >,
  nextToken?: string | null,
};

export type ModelStressTest84FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  stressTest83ID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest84FilterInput | null > | null,
  or?: Array< ModelStressTest84FilterInput | null > | null,
  not?: ModelStressTest84FilterInput | null,
  stressTest83RelatedItemsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest85FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest85FilterInput | null > | null,
  or?: Array< ModelStressTest85FilterInput | null > | null,
  not?: ModelStressTest85FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest85Connection = {
  __typename: "ModelStressTest85Connection",
  items:  Array<StressTest85 | null >,
  nextToken?: string | null,
};

export type ModelStressTest86FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  stressTest85ID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest86FilterInput | null > | null,
  or?: Array< ModelStressTest86FilterInput | null > | null,
  not?: ModelStressTest86FilterInput | null,
  stressTest85RelatedItemsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest87FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest87FilterInput | null > | null,
  or?: Array< ModelStressTest87FilterInput | null > | null,
  not?: ModelStressTest87FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest87Connection = {
  __typename: "ModelStressTest87Connection",
  items:  Array<StressTest87 | null >,
  nextToken?: string | null,
};

export type ModelStressTest88FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  stressTest87ID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest88FilterInput | null > | null,
  or?: Array< ModelStressTest88FilterInput | null > | null,
  not?: ModelStressTest88FilterInput | null,
  stressTest87RelatedItemsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest89FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest89FilterInput | null > | null,
  or?: Array< ModelStressTest89FilterInput | null > | null,
  not?: ModelStressTest89FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest89Connection = {
  __typename: "ModelStressTest89Connection",
  items:  Array<StressTest89 | null >,
  nextToken?: string | null,
};

export type ModelStressTest90FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  stressTest89ID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest90FilterInput | null > | null,
  or?: Array< ModelStressTest90FilterInput | null > | null,
  not?: ModelStressTest90FilterInput | null,
  stressTest89RelatedItemsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest91FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest91FilterInput | null > | null,
  or?: Array< ModelStressTest91FilterInput | null > | null,
  not?: ModelStressTest91FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest91Connection = {
  __typename: "ModelStressTest91Connection",
  items:  Array<StressTest91 | null >,
  nextToken?: string | null,
};

export type ModelStressTest92FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest92FilterInput | null > | null,
  or?: Array< ModelStressTest92FilterInput | null > | null,
  not?: ModelStressTest92FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest92Connection = {
  __typename: "ModelStressTest92Connection",
  items:  Array<StressTest92 | null >,
  nextToken?: string | null,
};

export type ModelStressTest93FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest93FilterInput | null > | null,
  or?: Array< ModelStressTest93FilterInput | null > | null,
  not?: ModelStressTest93FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest93Connection = {
  __typename: "ModelStressTest93Connection",
  items:  Array<StressTest93 | null >,
  nextToken?: string | null,
};

export type ModelStressTest94FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest94FilterInput | null > | null,
  or?: Array< ModelStressTest94FilterInput | null > | null,
  not?: ModelStressTest94FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest94Connection = {
  __typename: "ModelStressTest94Connection",
  items:  Array<StressTest94 | null >,
  nextToken?: string | null,
};

export type ModelStressTest95FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest95FilterInput | null > | null,
  or?: Array< ModelStressTest95FilterInput | null > | null,
  not?: ModelStressTest95FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest95Connection = {
  __typename: "ModelStressTest95Connection",
  items:  Array<StressTest95 | null >,
  nextToken?: string | null,
};

export type ModelStressTest96FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest96FilterInput | null > | null,
  or?: Array< ModelStressTest96FilterInput | null > | null,
  not?: ModelStressTest96FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest96Connection = {
  __typename: "ModelStressTest96Connection",
  items:  Array<StressTest96 | null >,
  nextToken?: string | null,
};

export type ModelStressTest97FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest97FilterInput | null > | null,
  or?: Array< ModelStressTest97FilterInput | null > | null,
  not?: ModelStressTest97FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest97Connection = {
  __typename: "ModelStressTest97Connection",
  items:  Array<StressTest97 | null >,
  nextToken?: string | null,
};

export type ModelStressTest98FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest98FilterInput | null > | null,
  or?: Array< ModelStressTest98FilterInput | null > | null,
  not?: ModelStressTest98FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest98Connection = {
  __typename: "ModelStressTest98Connection",
  items:  Array<StressTest98 | null >,
  nextToken?: string | null,
};

export type ModelStressTest99FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest99FilterInput | null > | null,
  or?: Array< ModelStressTest99FilterInput | null > | null,
  not?: ModelStressTest99FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest99Connection = {
  __typename: "ModelStressTest99Connection",
  items:  Array<StressTest99 | null >,
  nextToken?: string | null,
};

export type ModelStressTest100FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  value?: ModelIntInput | null,
  active?: ModelBooleanInput | null,
  timestamp?: ModelStringInput | null,
  status?: ModelStressTestStatusInput | null,
  priority?: ModelStressTestPriorityInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStressTest100FilterInput | null > | null,
  or?: Array< ModelStressTest100FilterInput | null > | null,
  not?: ModelStressTest100FilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStressTest100Connection = {
  __typename: "ModelStressTest100Connection",
  items:  Array<StressTest100 | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionProjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  deadline?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  projectTodosId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest1FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest1FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest1FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionStressTest2FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest2FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest2FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest3FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest3FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest3FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest4FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest4FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest4FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest5FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest5FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest5FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest6FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest6FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest6FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest7FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest7FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest7FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest8FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest8FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest8FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest9FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest9FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest9FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest10FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest10FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest10FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest11FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest11FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest11FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest12FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest12FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest12FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest13FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest13FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest13FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest14FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest14FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest14FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest15FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest15FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest15FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest16FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest16FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest16FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest17FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest17FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest17FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest18FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest18FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest18FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest19FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest19FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest19FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest20FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest20FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest20FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest21FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest21FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest21FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest22FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest22FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest22FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest23FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest23FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest23FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest24FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest24FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest24FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest25FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest25FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest25FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest26FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest26FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest26FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest27FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest27FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest27FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest28FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest28FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest28FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest29FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest29FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest29FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest30FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest30FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest30FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest31FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest31FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest31FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest32FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest32FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest32FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest33FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest33FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest33FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest34FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest34FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest34FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest35FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest35FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest35FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest36FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest36FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest36FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest37FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest37FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest37FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest38FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest38FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest38FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest39FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest39FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest39FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest40FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest40FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest40FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest41FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest41FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest41FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest42FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest42FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest42FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest43FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest43FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest43FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest44FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest44FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest44FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest45FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest45FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest45FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest46FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest46FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest46FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest47FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest47FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest47FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest48FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest48FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest48FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest49FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest49FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest49FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest50FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest50FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest50FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest51FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest51FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest51FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest52FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest52FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest52FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest53FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest53FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest53FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest54FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest54FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest54FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest55FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest55FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest55FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest56FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest56FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest56FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest57FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest57FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest57FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest58FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest58FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest58FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest59FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest59FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest59FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest60FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest60FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest60FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest61FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest61FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest61FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest62FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest62FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest62FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest63FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest63FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest63FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest64FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest64FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest64FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest65FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest65FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest65FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest66FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest66FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest66FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest67FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest67FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest67FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest68FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest68FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest68FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest69FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest69FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest69FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest70FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest70FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest70FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest71FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest71FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest71FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest72FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest72FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest72FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest73FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest73FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest73FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest74FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest74FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest74FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest75FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest75FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest75FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest76FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest76FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest76FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest77FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest77FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest77FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest78FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest78FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest78FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest79FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest79FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest79FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest80FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest80FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest80FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest81FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest81FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest81FilterInput | null > | null,
  stressTest81RelatedItemsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest82FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  stressTest81ID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest82FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest82FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest83FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest83FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest83FilterInput | null > | null,
  stressTest83RelatedItemsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest84FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  stressTest83ID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest84FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest84FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest85FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest85FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest85FilterInput | null > | null,
  stressTest85RelatedItemsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest86FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  stressTest85ID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest86FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest86FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest87FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest87FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest87FilterInput | null > | null,
  stressTest87RelatedItemsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest88FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  stressTest87ID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest88FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest88FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest89FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest89FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest89FilterInput | null > | null,
  stressTest89RelatedItemsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest90FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  stressTest89ID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest90FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest90FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest91FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest91FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest91FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest92FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest92FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest92FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest93FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest93FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest93FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest94FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest94FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest94FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest95FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest95FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest95FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest96FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest96FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest96FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest97FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest97FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest97FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest98FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest98FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest98FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest99FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest99FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest99FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStressTest100FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionIntInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStressTest100FilterInput | null > | null,
  or?: Array< ModelSubscriptionStressTest100FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    status: ProjectStatus,
    deadline?: string | null,
    color?: string | null,
    todos?:  {
      __typename: "ModelTodoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    status: ProjectStatus,
    deadline?: string | null,
    color?: string | null,
    todos?:  {
      __typename: "ModelTodoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    status: ProjectStatus,
    deadline?: string | null,
    color?: string | null,
    todos?:  {
      __typename: "ModelTodoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    images?: Array< string | null > | null,
    projectID?: string | null,
    createdAt: string,
    updatedAt: string,
    projectTodosId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    images?: Array< string | null > | null,
    projectID?: string | null,
    createdAt: string,
    updatedAt: string,
    projectTodosId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    images?: Array< string | null > | null,
    projectID?: string | null,
    createdAt: string,
    updatedAt: string,
    projectTodosId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateStressTest1MutationVariables = {
  input: CreateStressTest1Input,
  condition?: ModelStressTest1ConditionInput | null,
};

export type CreateStressTest1Mutation = {
  createStressTest1?:  {
    __typename: "StressTest1",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest1MutationVariables = {
  input: UpdateStressTest1Input,
  condition?: ModelStressTest1ConditionInput | null,
};

export type UpdateStressTest1Mutation = {
  updateStressTest1?:  {
    __typename: "StressTest1",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest1MutationVariables = {
  input: DeleteStressTest1Input,
  condition?: ModelStressTest1ConditionInput | null,
};

export type DeleteStressTest1Mutation = {
  deleteStressTest1?:  {
    __typename: "StressTest1",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest2MutationVariables = {
  input: CreateStressTest2Input,
  condition?: ModelStressTest2ConditionInput | null,
};

export type CreateStressTest2Mutation = {
  createStressTest2?:  {
    __typename: "StressTest2",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest2MutationVariables = {
  input: UpdateStressTest2Input,
  condition?: ModelStressTest2ConditionInput | null,
};

export type UpdateStressTest2Mutation = {
  updateStressTest2?:  {
    __typename: "StressTest2",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest2MutationVariables = {
  input: DeleteStressTest2Input,
  condition?: ModelStressTest2ConditionInput | null,
};

export type DeleteStressTest2Mutation = {
  deleteStressTest2?:  {
    __typename: "StressTest2",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest3MutationVariables = {
  input: CreateStressTest3Input,
  condition?: ModelStressTest3ConditionInput | null,
};

export type CreateStressTest3Mutation = {
  createStressTest3?:  {
    __typename: "StressTest3",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest3MutationVariables = {
  input: UpdateStressTest3Input,
  condition?: ModelStressTest3ConditionInput | null,
};

export type UpdateStressTest3Mutation = {
  updateStressTest3?:  {
    __typename: "StressTest3",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest3MutationVariables = {
  input: DeleteStressTest3Input,
  condition?: ModelStressTest3ConditionInput | null,
};

export type DeleteStressTest3Mutation = {
  deleteStressTest3?:  {
    __typename: "StressTest3",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest4MutationVariables = {
  input: CreateStressTest4Input,
  condition?: ModelStressTest4ConditionInput | null,
};

export type CreateStressTest4Mutation = {
  createStressTest4?:  {
    __typename: "StressTest4",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest4MutationVariables = {
  input: UpdateStressTest4Input,
  condition?: ModelStressTest4ConditionInput | null,
};

export type UpdateStressTest4Mutation = {
  updateStressTest4?:  {
    __typename: "StressTest4",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest4MutationVariables = {
  input: DeleteStressTest4Input,
  condition?: ModelStressTest4ConditionInput | null,
};

export type DeleteStressTest4Mutation = {
  deleteStressTest4?:  {
    __typename: "StressTest4",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest5MutationVariables = {
  input: CreateStressTest5Input,
  condition?: ModelStressTest5ConditionInput | null,
};

export type CreateStressTest5Mutation = {
  createStressTest5?:  {
    __typename: "StressTest5",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest5MutationVariables = {
  input: UpdateStressTest5Input,
  condition?: ModelStressTest5ConditionInput | null,
};

export type UpdateStressTest5Mutation = {
  updateStressTest5?:  {
    __typename: "StressTest5",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest5MutationVariables = {
  input: DeleteStressTest5Input,
  condition?: ModelStressTest5ConditionInput | null,
};

export type DeleteStressTest5Mutation = {
  deleteStressTest5?:  {
    __typename: "StressTest5",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest6MutationVariables = {
  input: CreateStressTest6Input,
  condition?: ModelStressTest6ConditionInput | null,
};

export type CreateStressTest6Mutation = {
  createStressTest6?:  {
    __typename: "StressTest6",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest6MutationVariables = {
  input: UpdateStressTest6Input,
  condition?: ModelStressTest6ConditionInput | null,
};

export type UpdateStressTest6Mutation = {
  updateStressTest6?:  {
    __typename: "StressTest6",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest6MutationVariables = {
  input: DeleteStressTest6Input,
  condition?: ModelStressTest6ConditionInput | null,
};

export type DeleteStressTest6Mutation = {
  deleteStressTest6?:  {
    __typename: "StressTest6",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest7MutationVariables = {
  input: CreateStressTest7Input,
  condition?: ModelStressTest7ConditionInput | null,
};

export type CreateStressTest7Mutation = {
  createStressTest7?:  {
    __typename: "StressTest7",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest7MutationVariables = {
  input: UpdateStressTest7Input,
  condition?: ModelStressTest7ConditionInput | null,
};

export type UpdateStressTest7Mutation = {
  updateStressTest7?:  {
    __typename: "StressTest7",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest7MutationVariables = {
  input: DeleteStressTest7Input,
  condition?: ModelStressTest7ConditionInput | null,
};

export type DeleteStressTest7Mutation = {
  deleteStressTest7?:  {
    __typename: "StressTest7",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest8MutationVariables = {
  input: CreateStressTest8Input,
  condition?: ModelStressTest8ConditionInput | null,
};

export type CreateStressTest8Mutation = {
  createStressTest8?:  {
    __typename: "StressTest8",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest8MutationVariables = {
  input: UpdateStressTest8Input,
  condition?: ModelStressTest8ConditionInput | null,
};

export type UpdateStressTest8Mutation = {
  updateStressTest8?:  {
    __typename: "StressTest8",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest8MutationVariables = {
  input: DeleteStressTest8Input,
  condition?: ModelStressTest8ConditionInput | null,
};

export type DeleteStressTest8Mutation = {
  deleteStressTest8?:  {
    __typename: "StressTest8",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest9MutationVariables = {
  input: CreateStressTest9Input,
  condition?: ModelStressTest9ConditionInput | null,
};

export type CreateStressTest9Mutation = {
  createStressTest9?:  {
    __typename: "StressTest9",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest9MutationVariables = {
  input: UpdateStressTest9Input,
  condition?: ModelStressTest9ConditionInput | null,
};

export type UpdateStressTest9Mutation = {
  updateStressTest9?:  {
    __typename: "StressTest9",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest9MutationVariables = {
  input: DeleteStressTest9Input,
  condition?: ModelStressTest9ConditionInput | null,
};

export type DeleteStressTest9Mutation = {
  deleteStressTest9?:  {
    __typename: "StressTest9",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest10MutationVariables = {
  input: CreateStressTest10Input,
  condition?: ModelStressTest10ConditionInput | null,
};

export type CreateStressTest10Mutation = {
  createStressTest10?:  {
    __typename: "StressTest10",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest10MutationVariables = {
  input: UpdateStressTest10Input,
  condition?: ModelStressTest10ConditionInput | null,
};

export type UpdateStressTest10Mutation = {
  updateStressTest10?:  {
    __typename: "StressTest10",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest10MutationVariables = {
  input: DeleteStressTest10Input,
  condition?: ModelStressTest10ConditionInput | null,
};

export type DeleteStressTest10Mutation = {
  deleteStressTest10?:  {
    __typename: "StressTest10",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest11MutationVariables = {
  input: CreateStressTest11Input,
  condition?: ModelStressTest11ConditionInput | null,
};

export type CreateStressTest11Mutation = {
  createStressTest11?:  {
    __typename: "StressTest11",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest11MutationVariables = {
  input: UpdateStressTest11Input,
  condition?: ModelStressTest11ConditionInput | null,
};

export type UpdateStressTest11Mutation = {
  updateStressTest11?:  {
    __typename: "StressTest11",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest11MutationVariables = {
  input: DeleteStressTest11Input,
  condition?: ModelStressTest11ConditionInput | null,
};

export type DeleteStressTest11Mutation = {
  deleteStressTest11?:  {
    __typename: "StressTest11",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest12MutationVariables = {
  input: CreateStressTest12Input,
  condition?: ModelStressTest12ConditionInput | null,
};

export type CreateStressTest12Mutation = {
  createStressTest12?:  {
    __typename: "StressTest12",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest12MutationVariables = {
  input: UpdateStressTest12Input,
  condition?: ModelStressTest12ConditionInput | null,
};

export type UpdateStressTest12Mutation = {
  updateStressTest12?:  {
    __typename: "StressTest12",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest12MutationVariables = {
  input: DeleteStressTest12Input,
  condition?: ModelStressTest12ConditionInput | null,
};

export type DeleteStressTest12Mutation = {
  deleteStressTest12?:  {
    __typename: "StressTest12",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest13MutationVariables = {
  input: CreateStressTest13Input,
  condition?: ModelStressTest13ConditionInput | null,
};

export type CreateStressTest13Mutation = {
  createStressTest13?:  {
    __typename: "StressTest13",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest13MutationVariables = {
  input: UpdateStressTest13Input,
  condition?: ModelStressTest13ConditionInput | null,
};

export type UpdateStressTest13Mutation = {
  updateStressTest13?:  {
    __typename: "StressTest13",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest13MutationVariables = {
  input: DeleteStressTest13Input,
  condition?: ModelStressTest13ConditionInput | null,
};

export type DeleteStressTest13Mutation = {
  deleteStressTest13?:  {
    __typename: "StressTest13",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest14MutationVariables = {
  input: CreateStressTest14Input,
  condition?: ModelStressTest14ConditionInput | null,
};

export type CreateStressTest14Mutation = {
  createStressTest14?:  {
    __typename: "StressTest14",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest14MutationVariables = {
  input: UpdateStressTest14Input,
  condition?: ModelStressTest14ConditionInput | null,
};

export type UpdateStressTest14Mutation = {
  updateStressTest14?:  {
    __typename: "StressTest14",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest14MutationVariables = {
  input: DeleteStressTest14Input,
  condition?: ModelStressTest14ConditionInput | null,
};

export type DeleteStressTest14Mutation = {
  deleteStressTest14?:  {
    __typename: "StressTest14",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest15MutationVariables = {
  input: CreateStressTest15Input,
  condition?: ModelStressTest15ConditionInput | null,
};

export type CreateStressTest15Mutation = {
  createStressTest15?:  {
    __typename: "StressTest15",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest15MutationVariables = {
  input: UpdateStressTest15Input,
  condition?: ModelStressTest15ConditionInput | null,
};

export type UpdateStressTest15Mutation = {
  updateStressTest15?:  {
    __typename: "StressTest15",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest15MutationVariables = {
  input: DeleteStressTest15Input,
  condition?: ModelStressTest15ConditionInput | null,
};

export type DeleteStressTest15Mutation = {
  deleteStressTest15?:  {
    __typename: "StressTest15",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest16MutationVariables = {
  input: CreateStressTest16Input,
  condition?: ModelStressTest16ConditionInput | null,
};

export type CreateStressTest16Mutation = {
  createStressTest16?:  {
    __typename: "StressTest16",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest16MutationVariables = {
  input: UpdateStressTest16Input,
  condition?: ModelStressTest16ConditionInput | null,
};

export type UpdateStressTest16Mutation = {
  updateStressTest16?:  {
    __typename: "StressTest16",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest16MutationVariables = {
  input: DeleteStressTest16Input,
  condition?: ModelStressTest16ConditionInput | null,
};

export type DeleteStressTest16Mutation = {
  deleteStressTest16?:  {
    __typename: "StressTest16",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest17MutationVariables = {
  input: CreateStressTest17Input,
  condition?: ModelStressTest17ConditionInput | null,
};

export type CreateStressTest17Mutation = {
  createStressTest17?:  {
    __typename: "StressTest17",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest17MutationVariables = {
  input: UpdateStressTest17Input,
  condition?: ModelStressTest17ConditionInput | null,
};

export type UpdateStressTest17Mutation = {
  updateStressTest17?:  {
    __typename: "StressTest17",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest17MutationVariables = {
  input: DeleteStressTest17Input,
  condition?: ModelStressTest17ConditionInput | null,
};

export type DeleteStressTest17Mutation = {
  deleteStressTest17?:  {
    __typename: "StressTest17",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest18MutationVariables = {
  input: CreateStressTest18Input,
  condition?: ModelStressTest18ConditionInput | null,
};

export type CreateStressTest18Mutation = {
  createStressTest18?:  {
    __typename: "StressTest18",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest18MutationVariables = {
  input: UpdateStressTest18Input,
  condition?: ModelStressTest18ConditionInput | null,
};

export type UpdateStressTest18Mutation = {
  updateStressTest18?:  {
    __typename: "StressTest18",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest18MutationVariables = {
  input: DeleteStressTest18Input,
  condition?: ModelStressTest18ConditionInput | null,
};

export type DeleteStressTest18Mutation = {
  deleteStressTest18?:  {
    __typename: "StressTest18",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest19MutationVariables = {
  input: CreateStressTest19Input,
  condition?: ModelStressTest19ConditionInput | null,
};

export type CreateStressTest19Mutation = {
  createStressTest19?:  {
    __typename: "StressTest19",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest19MutationVariables = {
  input: UpdateStressTest19Input,
  condition?: ModelStressTest19ConditionInput | null,
};

export type UpdateStressTest19Mutation = {
  updateStressTest19?:  {
    __typename: "StressTest19",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest19MutationVariables = {
  input: DeleteStressTest19Input,
  condition?: ModelStressTest19ConditionInput | null,
};

export type DeleteStressTest19Mutation = {
  deleteStressTest19?:  {
    __typename: "StressTest19",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest20MutationVariables = {
  input: CreateStressTest20Input,
  condition?: ModelStressTest20ConditionInput | null,
};

export type CreateStressTest20Mutation = {
  createStressTest20?:  {
    __typename: "StressTest20",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest20MutationVariables = {
  input: UpdateStressTest20Input,
  condition?: ModelStressTest20ConditionInput | null,
};

export type UpdateStressTest20Mutation = {
  updateStressTest20?:  {
    __typename: "StressTest20",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest20MutationVariables = {
  input: DeleteStressTest20Input,
  condition?: ModelStressTest20ConditionInput | null,
};

export type DeleteStressTest20Mutation = {
  deleteStressTest20?:  {
    __typename: "StressTest20",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest21MutationVariables = {
  input: CreateStressTest21Input,
  condition?: ModelStressTest21ConditionInput | null,
};

export type CreateStressTest21Mutation = {
  createStressTest21?:  {
    __typename: "StressTest21",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest21MutationVariables = {
  input: UpdateStressTest21Input,
  condition?: ModelStressTest21ConditionInput | null,
};

export type UpdateStressTest21Mutation = {
  updateStressTest21?:  {
    __typename: "StressTest21",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest21MutationVariables = {
  input: DeleteStressTest21Input,
  condition?: ModelStressTest21ConditionInput | null,
};

export type DeleteStressTest21Mutation = {
  deleteStressTest21?:  {
    __typename: "StressTest21",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest22MutationVariables = {
  input: CreateStressTest22Input,
  condition?: ModelStressTest22ConditionInput | null,
};

export type CreateStressTest22Mutation = {
  createStressTest22?:  {
    __typename: "StressTest22",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest22MutationVariables = {
  input: UpdateStressTest22Input,
  condition?: ModelStressTest22ConditionInput | null,
};

export type UpdateStressTest22Mutation = {
  updateStressTest22?:  {
    __typename: "StressTest22",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest22MutationVariables = {
  input: DeleteStressTest22Input,
  condition?: ModelStressTest22ConditionInput | null,
};

export type DeleteStressTest22Mutation = {
  deleteStressTest22?:  {
    __typename: "StressTest22",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest23MutationVariables = {
  input: CreateStressTest23Input,
  condition?: ModelStressTest23ConditionInput | null,
};

export type CreateStressTest23Mutation = {
  createStressTest23?:  {
    __typename: "StressTest23",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest23MutationVariables = {
  input: UpdateStressTest23Input,
  condition?: ModelStressTest23ConditionInput | null,
};

export type UpdateStressTest23Mutation = {
  updateStressTest23?:  {
    __typename: "StressTest23",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest23MutationVariables = {
  input: DeleteStressTest23Input,
  condition?: ModelStressTest23ConditionInput | null,
};

export type DeleteStressTest23Mutation = {
  deleteStressTest23?:  {
    __typename: "StressTest23",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest24MutationVariables = {
  input: CreateStressTest24Input,
  condition?: ModelStressTest24ConditionInput | null,
};

export type CreateStressTest24Mutation = {
  createStressTest24?:  {
    __typename: "StressTest24",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest24MutationVariables = {
  input: UpdateStressTest24Input,
  condition?: ModelStressTest24ConditionInput | null,
};

export type UpdateStressTest24Mutation = {
  updateStressTest24?:  {
    __typename: "StressTest24",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest24MutationVariables = {
  input: DeleteStressTest24Input,
  condition?: ModelStressTest24ConditionInput | null,
};

export type DeleteStressTest24Mutation = {
  deleteStressTest24?:  {
    __typename: "StressTest24",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest25MutationVariables = {
  input: CreateStressTest25Input,
  condition?: ModelStressTest25ConditionInput | null,
};

export type CreateStressTest25Mutation = {
  createStressTest25?:  {
    __typename: "StressTest25",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest25MutationVariables = {
  input: UpdateStressTest25Input,
  condition?: ModelStressTest25ConditionInput | null,
};

export type UpdateStressTest25Mutation = {
  updateStressTest25?:  {
    __typename: "StressTest25",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest25MutationVariables = {
  input: DeleteStressTest25Input,
  condition?: ModelStressTest25ConditionInput | null,
};

export type DeleteStressTest25Mutation = {
  deleteStressTest25?:  {
    __typename: "StressTest25",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest26MutationVariables = {
  input: CreateStressTest26Input,
  condition?: ModelStressTest26ConditionInput | null,
};

export type CreateStressTest26Mutation = {
  createStressTest26?:  {
    __typename: "StressTest26",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest26MutationVariables = {
  input: UpdateStressTest26Input,
  condition?: ModelStressTest26ConditionInput | null,
};

export type UpdateStressTest26Mutation = {
  updateStressTest26?:  {
    __typename: "StressTest26",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest26MutationVariables = {
  input: DeleteStressTest26Input,
  condition?: ModelStressTest26ConditionInput | null,
};

export type DeleteStressTest26Mutation = {
  deleteStressTest26?:  {
    __typename: "StressTest26",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest27MutationVariables = {
  input: CreateStressTest27Input,
  condition?: ModelStressTest27ConditionInput | null,
};

export type CreateStressTest27Mutation = {
  createStressTest27?:  {
    __typename: "StressTest27",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest27MutationVariables = {
  input: UpdateStressTest27Input,
  condition?: ModelStressTest27ConditionInput | null,
};

export type UpdateStressTest27Mutation = {
  updateStressTest27?:  {
    __typename: "StressTest27",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest27MutationVariables = {
  input: DeleteStressTest27Input,
  condition?: ModelStressTest27ConditionInput | null,
};

export type DeleteStressTest27Mutation = {
  deleteStressTest27?:  {
    __typename: "StressTest27",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest28MutationVariables = {
  input: CreateStressTest28Input,
  condition?: ModelStressTest28ConditionInput | null,
};

export type CreateStressTest28Mutation = {
  createStressTest28?:  {
    __typename: "StressTest28",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest28MutationVariables = {
  input: UpdateStressTest28Input,
  condition?: ModelStressTest28ConditionInput | null,
};

export type UpdateStressTest28Mutation = {
  updateStressTest28?:  {
    __typename: "StressTest28",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest28MutationVariables = {
  input: DeleteStressTest28Input,
  condition?: ModelStressTest28ConditionInput | null,
};

export type DeleteStressTest28Mutation = {
  deleteStressTest28?:  {
    __typename: "StressTest28",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest29MutationVariables = {
  input: CreateStressTest29Input,
  condition?: ModelStressTest29ConditionInput | null,
};

export type CreateStressTest29Mutation = {
  createStressTest29?:  {
    __typename: "StressTest29",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest29MutationVariables = {
  input: UpdateStressTest29Input,
  condition?: ModelStressTest29ConditionInput | null,
};

export type UpdateStressTest29Mutation = {
  updateStressTest29?:  {
    __typename: "StressTest29",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest29MutationVariables = {
  input: DeleteStressTest29Input,
  condition?: ModelStressTest29ConditionInput | null,
};

export type DeleteStressTest29Mutation = {
  deleteStressTest29?:  {
    __typename: "StressTest29",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest30MutationVariables = {
  input: CreateStressTest30Input,
  condition?: ModelStressTest30ConditionInput | null,
};

export type CreateStressTest30Mutation = {
  createStressTest30?:  {
    __typename: "StressTest30",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest30MutationVariables = {
  input: UpdateStressTest30Input,
  condition?: ModelStressTest30ConditionInput | null,
};

export type UpdateStressTest30Mutation = {
  updateStressTest30?:  {
    __typename: "StressTest30",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest30MutationVariables = {
  input: DeleteStressTest30Input,
  condition?: ModelStressTest30ConditionInput | null,
};

export type DeleteStressTest30Mutation = {
  deleteStressTest30?:  {
    __typename: "StressTest30",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest31MutationVariables = {
  input: CreateStressTest31Input,
  condition?: ModelStressTest31ConditionInput | null,
};

export type CreateStressTest31Mutation = {
  createStressTest31?:  {
    __typename: "StressTest31",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest31MutationVariables = {
  input: UpdateStressTest31Input,
  condition?: ModelStressTest31ConditionInput | null,
};

export type UpdateStressTest31Mutation = {
  updateStressTest31?:  {
    __typename: "StressTest31",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest31MutationVariables = {
  input: DeleteStressTest31Input,
  condition?: ModelStressTest31ConditionInput | null,
};

export type DeleteStressTest31Mutation = {
  deleteStressTest31?:  {
    __typename: "StressTest31",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest32MutationVariables = {
  input: CreateStressTest32Input,
  condition?: ModelStressTest32ConditionInput | null,
};

export type CreateStressTest32Mutation = {
  createStressTest32?:  {
    __typename: "StressTest32",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest32MutationVariables = {
  input: UpdateStressTest32Input,
  condition?: ModelStressTest32ConditionInput | null,
};

export type UpdateStressTest32Mutation = {
  updateStressTest32?:  {
    __typename: "StressTest32",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest32MutationVariables = {
  input: DeleteStressTest32Input,
  condition?: ModelStressTest32ConditionInput | null,
};

export type DeleteStressTest32Mutation = {
  deleteStressTest32?:  {
    __typename: "StressTest32",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest33MutationVariables = {
  input: CreateStressTest33Input,
  condition?: ModelStressTest33ConditionInput | null,
};

export type CreateStressTest33Mutation = {
  createStressTest33?:  {
    __typename: "StressTest33",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest33MutationVariables = {
  input: UpdateStressTest33Input,
  condition?: ModelStressTest33ConditionInput | null,
};

export type UpdateStressTest33Mutation = {
  updateStressTest33?:  {
    __typename: "StressTest33",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest33MutationVariables = {
  input: DeleteStressTest33Input,
  condition?: ModelStressTest33ConditionInput | null,
};

export type DeleteStressTest33Mutation = {
  deleteStressTest33?:  {
    __typename: "StressTest33",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest34MutationVariables = {
  input: CreateStressTest34Input,
  condition?: ModelStressTest34ConditionInput | null,
};

export type CreateStressTest34Mutation = {
  createStressTest34?:  {
    __typename: "StressTest34",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest34MutationVariables = {
  input: UpdateStressTest34Input,
  condition?: ModelStressTest34ConditionInput | null,
};

export type UpdateStressTest34Mutation = {
  updateStressTest34?:  {
    __typename: "StressTest34",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest34MutationVariables = {
  input: DeleteStressTest34Input,
  condition?: ModelStressTest34ConditionInput | null,
};

export type DeleteStressTest34Mutation = {
  deleteStressTest34?:  {
    __typename: "StressTest34",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest35MutationVariables = {
  input: CreateStressTest35Input,
  condition?: ModelStressTest35ConditionInput | null,
};

export type CreateStressTest35Mutation = {
  createStressTest35?:  {
    __typename: "StressTest35",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest35MutationVariables = {
  input: UpdateStressTest35Input,
  condition?: ModelStressTest35ConditionInput | null,
};

export type UpdateStressTest35Mutation = {
  updateStressTest35?:  {
    __typename: "StressTest35",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest35MutationVariables = {
  input: DeleteStressTest35Input,
  condition?: ModelStressTest35ConditionInput | null,
};

export type DeleteStressTest35Mutation = {
  deleteStressTest35?:  {
    __typename: "StressTest35",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest36MutationVariables = {
  input: CreateStressTest36Input,
  condition?: ModelStressTest36ConditionInput | null,
};

export type CreateStressTest36Mutation = {
  createStressTest36?:  {
    __typename: "StressTest36",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest36MutationVariables = {
  input: UpdateStressTest36Input,
  condition?: ModelStressTest36ConditionInput | null,
};

export type UpdateStressTest36Mutation = {
  updateStressTest36?:  {
    __typename: "StressTest36",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest36MutationVariables = {
  input: DeleteStressTest36Input,
  condition?: ModelStressTest36ConditionInput | null,
};

export type DeleteStressTest36Mutation = {
  deleteStressTest36?:  {
    __typename: "StressTest36",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest37MutationVariables = {
  input: CreateStressTest37Input,
  condition?: ModelStressTest37ConditionInput | null,
};

export type CreateStressTest37Mutation = {
  createStressTest37?:  {
    __typename: "StressTest37",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest37MutationVariables = {
  input: UpdateStressTest37Input,
  condition?: ModelStressTest37ConditionInput | null,
};

export type UpdateStressTest37Mutation = {
  updateStressTest37?:  {
    __typename: "StressTest37",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest37MutationVariables = {
  input: DeleteStressTest37Input,
  condition?: ModelStressTest37ConditionInput | null,
};

export type DeleteStressTest37Mutation = {
  deleteStressTest37?:  {
    __typename: "StressTest37",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest38MutationVariables = {
  input: CreateStressTest38Input,
  condition?: ModelStressTest38ConditionInput | null,
};

export type CreateStressTest38Mutation = {
  createStressTest38?:  {
    __typename: "StressTest38",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest38MutationVariables = {
  input: UpdateStressTest38Input,
  condition?: ModelStressTest38ConditionInput | null,
};

export type UpdateStressTest38Mutation = {
  updateStressTest38?:  {
    __typename: "StressTest38",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest38MutationVariables = {
  input: DeleteStressTest38Input,
  condition?: ModelStressTest38ConditionInput | null,
};

export type DeleteStressTest38Mutation = {
  deleteStressTest38?:  {
    __typename: "StressTest38",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest39MutationVariables = {
  input: CreateStressTest39Input,
  condition?: ModelStressTest39ConditionInput | null,
};

export type CreateStressTest39Mutation = {
  createStressTest39?:  {
    __typename: "StressTest39",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest39MutationVariables = {
  input: UpdateStressTest39Input,
  condition?: ModelStressTest39ConditionInput | null,
};

export type UpdateStressTest39Mutation = {
  updateStressTest39?:  {
    __typename: "StressTest39",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest39MutationVariables = {
  input: DeleteStressTest39Input,
  condition?: ModelStressTest39ConditionInput | null,
};

export type DeleteStressTest39Mutation = {
  deleteStressTest39?:  {
    __typename: "StressTest39",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest40MutationVariables = {
  input: CreateStressTest40Input,
  condition?: ModelStressTest40ConditionInput | null,
};

export type CreateStressTest40Mutation = {
  createStressTest40?:  {
    __typename: "StressTest40",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest40MutationVariables = {
  input: UpdateStressTest40Input,
  condition?: ModelStressTest40ConditionInput | null,
};

export type UpdateStressTest40Mutation = {
  updateStressTest40?:  {
    __typename: "StressTest40",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest40MutationVariables = {
  input: DeleteStressTest40Input,
  condition?: ModelStressTest40ConditionInput | null,
};

export type DeleteStressTest40Mutation = {
  deleteStressTest40?:  {
    __typename: "StressTest40",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest41MutationVariables = {
  input: CreateStressTest41Input,
  condition?: ModelStressTest41ConditionInput | null,
};

export type CreateStressTest41Mutation = {
  createStressTest41?:  {
    __typename: "StressTest41",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest41MutationVariables = {
  input: UpdateStressTest41Input,
  condition?: ModelStressTest41ConditionInput | null,
};

export type UpdateStressTest41Mutation = {
  updateStressTest41?:  {
    __typename: "StressTest41",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest41MutationVariables = {
  input: DeleteStressTest41Input,
  condition?: ModelStressTest41ConditionInput | null,
};

export type DeleteStressTest41Mutation = {
  deleteStressTest41?:  {
    __typename: "StressTest41",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest42MutationVariables = {
  input: CreateStressTest42Input,
  condition?: ModelStressTest42ConditionInput | null,
};

export type CreateStressTest42Mutation = {
  createStressTest42?:  {
    __typename: "StressTest42",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest42MutationVariables = {
  input: UpdateStressTest42Input,
  condition?: ModelStressTest42ConditionInput | null,
};

export type UpdateStressTest42Mutation = {
  updateStressTest42?:  {
    __typename: "StressTest42",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest42MutationVariables = {
  input: DeleteStressTest42Input,
  condition?: ModelStressTest42ConditionInput | null,
};

export type DeleteStressTest42Mutation = {
  deleteStressTest42?:  {
    __typename: "StressTest42",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest43MutationVariables = {
  input: CreateStressTest43Input,
  condition?: ModelStressTest43ConditionInput | null,
};

export type CreateStressTest43Mutation = {
  createStressTest43?:  {
    __typename: "StressTest43",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest43MutationVariables = {
  input: UpdateStressTest43Input,
  condition?: ModelStressTest43ConditionInput | null,
};

export type UpdateStressTest43Mutation = {
  updateStressTest43?:  {
    __typename: "StressTest43",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest43MutationVariables = {
  input: DeleteStressTest43Input,
  condition?: ModelStressTest43ConditionInput | null,
};

export type DeleteStressTest43Mutation = {
  deleteStressTest43?:  {
    __typename: "StressTest43",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest44MutationVariables = {
  input: CreateStressTest44Input,
  condition?: ModelStressTest44ConditionInput | null,
};

export type CreateStressTest44Mutation = {
  createStressTest44?:  {
    __typename: "StressTest44",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest44MutationVariables = {
  input: UpdateStressTest44Input,
  condition?: ModelStressTest44ConditionInput | null,
};

export type UpdateStressTest44Mutation = {
  updateStressTest44?:  {
    __typename: "StressTest44",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest44MutationVariables = {
  input: DeleteStressTest44Input,
  condition?: ModelStressTest44ConditionInput | null,
};

export type DeleteStressTest44Mutation = {
  deleteStressTest44?:  {
    __typename: "StressTest44",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest45MutationVariables = {
  input: CreateStressTest45Input,
  condition?: ModelStressTest45ConditionInput | null,
};

export type CreateStressTest45Mutation = {
  createStressTest45?:  {
    __typename: "StressTest45",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest45MutationVariables = {
  input: UpdateStressTest45Input,
  condition?: ModelStressTest45ConditionInput | null,
};

export type UpdateStressTest45Mutation = {
  updateStressTest45?:  {
    __typename: "StressTest45",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest45MutationVariables = {
  input: DeleteStressTest45Input,
  condition?: ModelStressTest45ConditionInput | null,
};

export type DeleteStressTest45Mutation = {
  deleteStressTest45?:  {
    __typename: "StressTest45",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest46MutationVariables = {
  input: CreateStressTest46Input,
  condition?: ModelStressTest46ConditionInput | null,
};

export type CreateStressTest46Mutation = {
  createStressTest46?:  {
    __typename: "StressTest46",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest46MutationVariables = {
  input: UpdateStressTest46Input,
  condition?: ModelStressTest46ConditionInput | null,
};

export type UpdateStressTest46Mutation = {
  updateStressTest46?:  {
    __typename: "StressTest46",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest46MutationVariables = {
  input: DeleteStressTest46Input,
  condition?: ModelStressTest46ConditionInput | null,
};

export type DeleteStressTest46Mutation = {
  deleteStressTest46?:  {
    __typename: "StressTest46",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest47MutationVariables = {
  input: CreateStressTest47Input,
  condition?: ModelStressTest47ConditionInput | null,
};

export type CreateStressTest47Mutation = {
  createStressTest47?:  {
    __typename: "StressTest47",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest47MutationVariables = {
  input: UpdateStressTest47Input,
  condition?: ModelStressTest47ConditionInput | null,
};

export type UpdateStressTest47Mutation = {
  updateStressTest47?:  {
    __typename: "StressTest47",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest47MutationVariables = {
  input: DeleteStressTest47Input,
  condition?: ModelStressTest47ConditionInput | null,
};

export type DeleteStressTest47Mutation = {
  deleteStressTest47?:  {
    __typename: "StressTest47",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest48MutationVariables = {
  input: CreateStressTest48Input,
  condition?: ModelStressTest48ConditionInput | null,
};

export type CreateStressTest48Mutation = {
  createStressTest48?:  {
    __typename: "StressTest48",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest48MutationVariables = {
  input: UpdateStressTest48Input,
  condition?: ModelStressTest48ConditionInput | null,
};

export type UpdateStressTest48Mutation = {
  updateStressTest48?:  {
    __typename: "StressTest48",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest48MutationVariables = {
  input: DeleteStressTest48Input,
  condition?: ModelStressTest48ConditionInput | null,
};

export type DeleteStressTest48Mutation = {
  deleteStressTest48?:  {
    __typename: "StressTest48",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest49MutationVariables = {
  input: CreateStressTest49Input,
  condition?: ModelStressTest49ConditionInput | null,
};

export type CreateStressTest49Mutation = {
  createStressTest49?:  {
    __typename: "StressTest49",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest49MutationVariables = {
  input: UpdateStressTest49Input,
  condition?: ModelStressTest49ConditionInput | null,
};

export type UpdateStressTest49Mutation = {
  updateStressTest49?:  {
    __typename: "StressTest49",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest49MutationVariables = {
  input: DeleteStressTest49Input,
  condition?: ModelStressTest49ConditionInput | null,
};

export type DeleteStressTest49Mutation = {
  deleteStressTest49?:  {
    __typename: "StressTest49",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest50MutationVariables = {
  input: CreateStressTest50Input,
  condition?: ModelStressTest50ConditionInput | null,
};

export type CreateStressTest50Mutation = {
  createStressTest50?:  {
    __typename: "StressTest50",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest50MutationVariables = {
  input: UpdateStressTest50Input,
  condition?: ModelStressTest50ConditionInput | null,
};

export type UpdateStressTest50Mutation = {
  updateStressTest50?:  {
    __typename: "StressTest50",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest50MutationVariables = {
  input: DeleteStressTest50Input,
  condition?: ModelStressTest50ConditionInput | null,
};

export type DeleteStressTest50Mutation = {
  deleteStressTest50?:  {
    __typename: "StressTest50",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest51MutationVariables = {
  input: CreateStressTest51Input,
  condition?: ModelStressTest51ConditionInput | null,
};

export type CreateStressTest51Mutation = {
  createStressTest51?:  {
    __typename: "StressTest51",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest51MutationVariables = {
  input: UpdateStressTest51Input,
  condition?: ModelStressTest51ConditionInput | null,
};

export type UpdateStressTest51Mutation = {
  updateStressTest51?:  {
    __typename: "StressTest51",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest51MutationVariables = {
  input: DeleteStressTest51Input,
  condition?: ModelStressTest51ConditionInput | null,
};

export type DeleteStressTest51Mutation = {
  deleteStressTest51?:  {
    __typename: "StressTest51",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest52MutationVariables = {
  input: CreateStressTest52Input,
  condition?: ModelStressTest52ConditionInput | null,
};

export type CreateStressTest52Mutation = {
  createStressTest52?:  {
    __typename: "StressTest52",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest52MutationVariables = {
  input: UpdateStressTest52Input,
  condition?: ModelStressTest52ConditionInput | null,
};

export type UpdateStressTest52Mutation = {
  updateStressTest52?:  {
    __typename: "StressTest52",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest52MutationVariables = {
  input: DeleteStressTest52Input,
  condition?: ModelStressTest52ConditionInput | null,
};

export type DeleteStressTest52Mutation = {
  deleteStressTest52?:  {
    __typename: "StressTest52",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest53MutationVariables = {
  input: CreateStressTest53Input,
  condition?: ModelStressTest53ConditionInput | null,
};

export type CreateStressTest53Mutation = {
  createStressTest53?:  {
    __typename: "StressTest53",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest53MutationVariables = {
  input: UpdateStressTest53Input,
  condition?: ModelStressTest53ConditionInput | null,
};

export type UpdateStressTest53Mutation = {
  updateStressTest53?:  {
    __typename: "StressTest53",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest53MutationVariables = {
  input: DeleteStressTest53Input,
  condition?: ModelStressTest53ConditionInput | null,
};

export type DeleteStressTest53Mutation = {
  deleteStressTest53?:  {
    __typename: "StressTest53",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest54MutationVariables = {
  input: CreateStressTest54Input,
  condition?: ModelStressTest54ConditionInput | null,
};

export type CreateStressTest54Mutation = {
  createStressTest54?:  {
    __typename: "StressTest54",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest54MutationVariables = {
  input: UpdateStressTest54Input,
  condition?: ModelStressTest54ConditionInput | null,
};

export type UpdateStressTest54Mutation = {
  updateStressTest54?:  {
    __typename: "StressTest54",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest54MutationVariables = {
  input: DeleteStressTest54Input,
  condition?: ModelStressTest54ConditionInput | null,
};

export type DeleteStressTest54Mutation = {
  deleteStressTest54?:  {
    __typename: "StressTest54",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest55MutationVariables = {
  input: CreateStressTest55Input,
  condition?: ModelStressTest55ConditionInput | null,
};

export type CreateStressTest55Mutation = {
  createStressTest55?:  {
    __typename: "StressTest55",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest55MutationVariables = {
  input: UpdateStressTest55Input,
  condition?: ModelStressTest55ConditionInput | null,
};

export type UpdateStressTest55Mutation = {
  updateStressTest55?:  {
    __typename: "StressTest55",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest55MutationVariables = {
  input: DeleteStressTest55Input,
  condition?: ModelStressTest55ConditionInput | null,
};

export type DeleteStressTest55Mutation = {
  deleteStressTest55?:  {
    __typename: "StressTest55",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest56MutationVariables = {
  input: CreateStressTest56Input,
  condition?: ModelStressTest56ConditionInput | null,
};

export type CreateStressTest56Mutation = {
  createStressTest56?:  {
    __typename: "StressTest56",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest56MutationVariables = {
  input: UpdateStressTest56Input,
  condition?: ModelStressTest56ConditionInput | null,
};

export type UpdateStressTest56Mutation = {
  updateStressTest56?:  {
    __typename: "StressTest56",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest56MutationVariables = {
  input: DeleteStressTest56Input,
  condition?: ModelStressTest56ConditionInput | null,
};

export type DeleteStressTest56Mutation = {
  deleteStressTest56?:  {
    __typename: "StressTest56",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest57MutationVariables = {
  input: CreateStressTest57Input,
  condition?: ModelStressTest57ConditionInput | null,
};

export type CreateStressTest57Mutation = {
  createStressTest57?:  {
    __typename: "StressTest57",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest57MutationVariables = {
  input: UpdateStressTest57Input,
  condition?: ModelStressTest57ConditionInput | null,
};

export type UpdateStressTest57Mutation = {
  updateStressTest57?:  {
    __typename: "StressTest57",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest57MutationVariables = {
  input: DeleteStressTest57Input,
  condition?: ModelStressTest57ConditionInput | null,
};

export type DeleteStressTest57Mutation = {
  deleteStressTest57?:  {
    __typename: "StressTest57",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest58MutationVariables = {
  input: CreateStressTest58Input,
  condition?: ModelStressTest58ConditionInput | null,
};

export type CreateStressTest58Mutation = {
  createStressTest58?:  {
    __typename: "StressTest58",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest58MutationVariables = {
  input: UpdateStressTest58Input,
  condition?: ModelStressTest58ConditionInput | null,
};

export type UpdateStressTest58Mutation = {
  updateStressTest58?:  {
    __typename: "StressTest58",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest58MutationVariables = {
  input: DeleteStressTest58Input,
  condition?: ModelStressTest58ConditionInput | null,
};

export type DeleteStressTest58Mutation = {
  deleteStressTest58?:  {
    __typename: "StressTest58",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest59MutationVariables = {
  input: CreateStressTest59Input,
  condition?: ModelStressTest59ConditionInput | null,
};

export type CreateStressTest59Mutation = {
  createStressTest59?:  {
    __typename: "StressTest59",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest59MutationVariables = {
  input: UpdateStressTest59Input,
  condition?: ModelStressTest59ConditionInput | null,
};

export type UpdateStressTest59Mutation = {
  updateStressTest59?:  {
    __typename: "StressTest59",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest59MutationVariables = {
  input: DeleteStressTest59Input,
  condition?: ModelStressTest59ConditionInput | null,
};

export type DeleteStressTest59Mutation = {
  deleteStressTest59?:  {
    __typename: "StressTest59",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest60MutationVariables = {
  input: CreateStressTest60Input,
  condition?: ModelStressTest60ConditionInput | null,
};

export type CreateStressTest60Mutation = {
  createStressTest60?:  {
    __typename: "StressTest60",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest60MutationVariables = {
  input: UpdateStressTest60Input,
  condition?: ModelStressTest60ConditionInput | null,
};

export type UpdateStressTest60Mutation = {
  updateStressTest60?:  {
    __typename: "StressTest60",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest60MutationVariables = {
  input: DeleteStressTest60Input,
  condition?: ModelStressTest60ConditionInput | null,
};

export type DeleteStressTest60Mutation = {
  deleteStressTest60?:  {
    __typename: "StressTest60",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest61MutationVariables = {
  input: CreateStressTest61Input,
  condition?: ModelStressTest61ConditionInput | null,
};

export type CreateStressTest61Mutation = {
  createStressTest61?:  {
    __typename: "StressTest61",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest61MutationVariables = {
  input: UpdateStressTest61Input,
  condition?: ModelStressTest61ConditionInput | null,
};

export type UpdateStressTest61Mutation = {
  updateStressTest61?:  {
    __typename: "StressTest61",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest61MutationVariables = {
  input: DeleteStressTest61Input,
  condition?: ModelStressTest61ConditionInput | null,
};

export type DeleteStressTest61Mutation = {
  deleteStressTest61?:  {
    __typename: "StressTest61",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest62MutationVariables = {
  input: CreateStressTest62Input,
  condition?: ModelStressTest62ConditionInput | null,
};

export type CreateStressTest62Mutation = {
  createStressTest62?:  {
    __typename: "StressTest62",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest62MutationVariables = {
  input: UpdateStressTest62Input,
  condition?: ModelStressTest62ConditionInput | null,
};

export type UpdateStressTest62Mutation = {
  updateStressTest62?:  {
    __typename: "StressTest62",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest62MutationVariables = {
  input: DeleteStressTest62Input,
  condition?: ModelStressTest62ConditionInput | null,
};

export type DeleteStressTest62Mutation = {
  deleteStressTest62?:  {
    __typename: "StressTest62",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest63MutationVariables = {
  input: CreateStressTest63Input,
  condition?: ModelStressTest63ConditionInput | null,
};

export type CreateStressTest63Mutation = {
  createStressTest63?:  {
    __typename: "StressTest63",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest63MutationVariables = {
  input: UpdateStressTest63Input,
  condition?: ModelStressTest63ConditionInput | null,
};

export type UpdateStressTest63Mutation = {
  updateStressTest63?:  {
    __typename: "StressTest63",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest63MutationVariables = {
  input: DeleteStressTest63Input,
  condition?: ModelStressTest63ConditionInput | null,
};

export type DeleteStressTest63Mutation = {
  deleteStressTest63?:  {
    __typename: "StressTest63",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest64MutationVariables = {
  input: CreateStressTest64Input,
  condition?: ModelStressTest64ConditionInput | null,
};

export type CreateStressTest64Mutation = {
  createStressTest64?:  {
    __typename: "StressTest64",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest64MutationVariables = {
  input: UpdateStressTest64Input,
  condition?: ModelStressTest64ConditionInput | null,
};

export type UpdateStressTest64Mutation = {
  updateStressTest64?:  {
    __typename: "StressTest64",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest64MutationVariables = {
  input: DeleteStressTest64Input,
  condition?: ModelStressTest64ConditionInput | null,
};

export type DeleteStressTest64Mutation = {
  deleteStressTest64?:  {
    __typename: "StressTest64",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest65MutationVariables = {
  input: CreateStressTest65Input,
  condition?: ModelStressTest65ConditionInput | null,
};

export type CreateStressTest65Mutation = {
  createStressTest65?:  {
    __typename: "StressTest65",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest65MutationVariables = {
  input: UpdateStressTest65Input,
  condition?: ModelStressTest65ConditionInput | null,
};

export type UpdateStressTest65Mutation = {
  updateStressTest65?:  {
    __typename: "StressTest65",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest65MutationVariables = {
  input: DeleteStressTest65Input,
  condition?: ModelStressTest65ConditionInput | null,
};

export type DeleteStressTest65Mutation = {
  deleteStressTest65?:  {
    __typename: "StressTest65",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest66MutationVariables = {
  input: CreateStressTest66Input,
  condition?: ModelStressTest66ConditionInput | null,
};

export type CreateStressTest66Mutation = {
  createStressTest66?:  {
    __typename: "StressTest66",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest66MutationVariables = {
  input: UpdateStressTest66Input,
  condition?: ModelStressTest66ConditionInput | null,
};

export type UpdateStressTest66Mutation = {
  updateStressTest66?:  {
    __typename: "StressTest66",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest66MutationVariables = {
  input: DeleteStressTest66Input,
  condition?: ModelStressTest66ConditionInput | null,
};

export type DeleteStressTest66Mutation = {
  deleteStressTest66?:  {
    __typename: "StressTest66",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest67MutationVariables = {
  input: CreateStressTest67Input,
  condition?: ModelStressTest67ConditionInput | null,
};

export type CreateStressTest67Mutation = {
  createStressTest67?:  {
    __typename: "StressTest67",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest67MutationVariables = {
  input: UpdateStressTest67Input,
  condition?: ModelStressTest67ConditionInput | null,
};

export type UpdateStressTest67Mutation = {
  updateStressTest67?:  {
    __typename: "StressTest67",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest67MutationVariables = {
  input: DeleteStressTest67Input,
  condition?: ModelStressTest67ConditionInput | null,
};

export type DeleteStressTest67Mutation = {
  deleteStressTest67?:  {
    __typename: "StressTest67",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest68MutationVariables = {
  input: CreateStressTest68Input,
  condition?: ModelStressTest68ConditionInput | null,
};

export type CreateStressTest68Mutation = {
  createStressTest68?:  {
    __typename: "StressTest68",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest68MutationVariables = {
  input: UpdateStressTest68Input,
  condition?: ModelStressTest68ConditionInput | null,
};

export type UpdateStressTest68Mutation = {
  updateStressTest68?:  {
    __typename: "StressTest68",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest68MutationVariables = {
  input: DeleteStressTest68Input,
  condition?: ModelStressTest68ConditionInput | null,
};

export type DeleteStressTest68Mutation = {
  deleteStressTest68?:  {
    __typename: "StressTest68",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest69MutationVariables = {
  input: CreateStressTest69Input,
  condition?: ModelStressTest69ConditionInput | null,
};

export type CreateStressTest69Mutation = {
  createStressTest69?:  {
    __typename: "StressTest69",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest69MutationVariables = {
  input: UpdateStressTest69Input,
  condition?: ModelStressTest69ConditionInput | null,
};

export type UpdateStressTest69Mutation = {
  updateStressTest69?:  {
    __typename: "StressTest69",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest69MutationVariables = {
  input: DeleteStressTest69Input,
  condition?: ModelStressTest69ConditionInput | null,
};

export type DeleteStressTest69Mutation = {
  deleteStressTest69?:  {
    __typename: "StressTest69",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest70MutationVariables = {
  input: CreateStressTest70Input,
  condition?: ModelStressTest70ConditionInput | null,
};

export type CreateStressTest70Mutation = {
  createStressTest70?:  {
    __typename: "StressTest70",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest70MutationVariables = {
  input: UpdateStressTest70Input,
  condition?: ModelStressTest70ConditionInput | null,
};

export type UpdateStressTest70Mutation = {
  updateStressTest70?:  {
    __typename: "StressTest70",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest70MutationVariables = {
  input: DeleteStressTest70Input,
  condition?: ModelStressTest70ConditionInput | null,
};

export type DeleteStressTest70Mutation = {
  deleteStressTest70?:  {
    __typename: "StressTest70",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest71MutationVariables = {
  input: CreateStressTest71Input,
  condition?: ModelStressTest71ConditionInput | null,
};

export type CreateStressTest71Mutation = {
  createStressTest71?:  {
    __typename: "StressTest71",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest71MutationVariables = {
  input: UpdateStressTest71Input,
  condition?: ModelStressTest71ConditionInput | null,
};

export type UpdateStressTest71Mutation = {
  updateStressTest71?:  {
    __typename: "StressTest71",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest71MutationVariables = {
  input: DeleteStressTest71Input,
  condition?: ModelStressTest71ConditionInput | null,
};

export type DeleteStressTest71Mutation = {
  deleteStressTest71?:  {
    __typename: "StressTest71",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest72MutationVariables = {
  input: CreateStressTest72Input,
  condition?: ModelStressTest72ConditionInput | null,
};

export type CreateStressTest72Mutation = {
  createStressTest72?:  {
    __typename: "StressTest72",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest72MutationVariables = {
  input: UpdateStressTest72Input,
  condition?: ModelStressTest72ConditionInput | null,
};

export type UpdateStressTest72Mutation = {
  updateStressTest72?:  {
    __typename: "StressTest72",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest72MutationVariables = {
  input: DeleteStressTest72Input,
  condition?: ModelStressTest72ConditionInput | null,
};

export type DeleteStressTest72Mutation = {
  deleteStressTest72?:  {
    __typename: "StressTest72",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest73MutationVariables = {
  input: CreateStressTest73Input,
  condition?: ModelStressTest73ConditionInput | null,
};

export type CreateStressTest73Mutation = {
  createStressTest73?:  {
    __typename: "StressTest73",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest73MutationVariables = {
  input: UpdateStressTest73Input,
  condition?: ModelStressTest73ConditionInput | null,
};

export type UpdateStressTest73Mutation = {
  updateStressTest73?:  {
    __typename: "StressTest73",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest73MutationVariables = {
  input: DeleteStressTest73Input,
  condition?: ModelStressTest73ConditionInput | null,
};

export type DeleteStressTest73Mutation = {
  deleteStressTest73?:  {
    __typename: "StressTest73",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest74MutationVariables = {
  input: CreateStressTest74Input,
  condition?: ModelStressTest74ConditionInput | null,
};

export type CreateStressTest74Mutation = {
  createStressTest74?:  {
    __typename: "StressTest74",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest74MutationVariables = {
  input: UpdateStressTest74Input,
  condition?: ModelStressTest74ConditionInput | null,
};

export type UpdateStressTest74Mutation = {
  updateStressTest74?:  {
    __typename: "StressTest74",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest74MutationVariables = {
  input: DeleteStressTest74Input,
  condition?: ModelStressTest74ConditionInput | null,
};

export type DeleteStressTest74Mutation = {
  deleteStressTest74?:  {
    __typename: "StressTest74",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest75MutationVariables = {
  input: CreateStressTest75Input,
  condition?: ModelStressTest75ConditionInput | null,
};

export type CreateStressTest75Mutation = {
  createStressTest75?:  {
    __typename: "StressTest75",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest75MutationVariables = {
  input: UpdateStressTest75Input,
  condition?: ModelStressTest75ConditionInput | null,
};

export type UpdateStressTest75Mutation = {
  updateStressTest75?:  {
    __typename: "StressTest75",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest75MutationVariables = {
  input: DeleteStressTest75Input,
  condition?: ModelStressTest75ConditionInput | null,
};

export type DeleteStressTest75Mutation = {
  deleteStressTest75?:  {
    __typename: "StressTest75",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest76MutationVariables = {
  input: CreateStressTest76Input,
  condition?: ModelStressTest76ConditionInput | null,
};

export type CreateStressTest76Mutation = {
  createStressTest76?:  {
    __typename: "StressTest76",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest76MutationVariables = {
  input: UpdateStressTest76Input,
  condition?: ModelStressTest76ConditionInput | null,
};

export type UpdateStressTest76Mutation = {
  updateStressTest76?:  {
    __typename: "StressTest76",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest76MutationVariables = {
  input: DeleteStressTest76Input,
  condition?: ModelStressTest76ConditionInput | null,
};

export type DeleteStressTest76Mutation = {
  deleteStressTest76?:  {
    __typename: "StressTest76",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest77MutationVariables = {
  input: CreateStressTest77Input,
  condition?: ModelStressTest77ConditionInput | null,
};

export type CreateStressTest77Mutation = {
  createStressTest77?:  {
    __typename: "StressTest77",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest77MutationVariables = {
  input: UpdateStressTest77Input,
  condition?: ModelStressTest77ConditionInput | null,
};

export type UpdateStressTest77Mutation = {
  updateStressTest77?:  {
    __typename: "StressTest77",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest77MutationVariables = {
  input: DeleteStressTest77Input,
  condition?: ModelStressTest77ConditionInput | null,
};

export type DeleteStressTest77Mutation = {
  deleteStressTest77?:  {
    __typename: "StressTest77",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest78MutationVariables = {
  input: CreateStressTest78Input,
  condition?: ModelStressTest78ConditionInput | null,
};

export type CreateStressTest78Mutation = {
  createStressTest78?:  {
    __typename: "StressTest78",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest78MutationVariables = {
  input: UpdateStressTest78Input,
  condition?: ModelStressTest78ConditionInput | null,
};

export type UpdateStressTest78Mutation = {
  updateStressTest78?:  {
    __typename: "StressTest78",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest78MutationVariables = {
  input: DeleteStressTest78Input,
  condition?: ModelStressTest78ConditionInput | null,
};

export type DeleteStressTest78Mutation = {
  deleteStressTest78?:  {
    __typename: "StressTest78",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest79MutationVariables = {
  input: CreateStressTest79Input,
  condition?: ModelStressTest79ConditionInput | null,
};

export type CreateStressTest79Mutation = {
  createStressTest79?:  {
    __typename: "StressTest79",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest79MutationVariables = {
  input: UpdateStressTest79Input,
  condition?: ModelStressTest79ConditionInput | null,
};

export type UpdateStressTest79Mutation = {
  updateStressTest79?:  {
    __typename: "StressTest79",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest79MutationVariables = {
  input: DeleteStressTest79Input,
  condition?: ModelStressTest79ConditionInput | null,
};

export type DeleteStressTest79Mutation = {
  deleteStressTest79?:  {
    __typename: "StressTest79",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest80MutationVariables = {
  input: CreateStressTest80Input,
  condition?: ModelStressTest80ConditionInput | null,
};

export type CreateStressTest80Mutation = {
  createStressTest80?:  {
    __typename: "StressTest80",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest80MutationVariables = {
  input: UpdateStressTest80Input,
  condition?: ModelStressTest80ConditionInput | null,
};

export type UpdateStressTest80Mutation = {
  updateStressTest80?:  {
    __typename: "StressTest80",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest80MutationVariables = {
  input: DeleteStressTest80Input,
  condition?: ModelStressTest80ConditionInput | null,
};

export type DeleteStressTest80Mutation = {
  deleteStressTest80?:  {
    __typename: "StressTest80",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest81MutationVariables = {
  input: CreateStressTest81Input,
  condition?: ModelStressTest81ConditionInput | null,
};

export type CreateStressTest81Mutation = {
  createStressTest81?:  {
    __typename: "StressTest81",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest82Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest81MutationVariables = {
  input: UpdateStressTest81Input,
  condition?: ModelStressTest81ConditionInput | null,
};

export type UpdateStressTest81Mutation = {
  updateStressTest81?:  {
    __typename: "StressTest81",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest82Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest81MutationVariables = {
  input: DeleteStressTest81Input,
  condition?: ModelStressTest81ConditionInput | null,
};

export type DeleteStressTest81Mutation = {
  deleteStressTest81?:  {
    __typename: "StressTest81",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest82Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest82MutationVariables = {
  input: CreateStressTest82Input,
  condition?: ModelStressTest82ConditionInput | null,
};

export type CreateStressTest82Mutation = {
  createStressTest82?:  {
    __typename: "StressTest82",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest81ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest81RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest82MutationVariables = {
  input: UpdateStressTest82Input,
  condition?: ModelStressTest82ConditionInput | null,
};

export type UpdateStressTest82Mutation = {
  updateStressTest82?:  {
    __typename: "StressTest82",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest81ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest81RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest82MutationVariables = {
  input: DeleteStressTest82Input,
  condition?: ModelStressTest82ConditionInput | null,
};

export type DeleteStressTest82Mutation = {
  deleteStressTest82?:  {
    __typename: "StressTest82",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest81ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest81RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateStressTest83MutationVariables = {
  input: CreateStressTest83Input,
  condition?: ModelStressTest83ConditionInput | null,
};

export type CreateStressTest83Mutation = {
  createStressTest83?:  {
    __typename: "StressTest83",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest84Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest83MutationVariables = {
  input: UpdateStressTest83Input,
  condition?: ModelStressTest83ConditionInput | null,
};

export type UpdateStressTest83Mutation = {
  updateStressTest83?:  {
    __typename: "StressTest83",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest84Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest83MutationVariables = {
  input: DeleteStressTest83Input,
  condition?: ModelStressTest83ConditionInput | null,
};

export type DeleteStressTest83Mutation = {
  deleteStressTest83?:  {
    __typename: "StressTest83",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest84Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest84MutationVariables = {
  input: CreateStressTest84Input,
  condition?: ModelStressTest84ConditionInput | null,
};

export type CreateStressTest84Mutation = {
  createStressTest84?:  {
    __typename: "StressTest84",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest83ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest83RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest84MutationVariables = {
  input: UpdateStressTest84Input,
  condition?: ModelStressTest84ConditionInput | null,
};

export type UpdateStressTest84Mutation = {
  updateStressTest84?:  {
    __typename: "StressTest84",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest83ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest83RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest84MutationVariables = {
  input: DeleteStressTest84Input,
  condition?: ModelStressTest84ConditionInput | null,
};

export type DeleteStressTest84Mutation = {
  deleteStressTest84?:  {
    __typename: "StressTest84",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest83ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest83RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateStressTest85MutationVariables = {
  input: CreateStressTest85Input,
  condition?: ModelStressTest85ConditionInput | null,
};

export type CreateStressTest85Mutation = {
  createStressTest85?:  {
    __typename: "StressTest85",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest86Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest85MutationVariables = {
  input: UpdateStressTest85Input,
  condition?: ModelStressTest85ConditionInput | null,
};

export type UpdateStressTest85Mutation = {
  updateStressTest85?:  {
    __typename: "StressTest85",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest86Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest85MutationVariables = {
  input: DeleteStressTest85Input,
  condition?: ModelStressTest85ConditionInput | null,
};

export type DeleteStressTest85Mutation = {
  deleteStressTest85?:  {
    __typename: "StressTest85",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest86Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest86MutationVariables = {
  input: CreateStressTest86Input,
  condition?: ModelStressTest86ConditionInput | null,
};

export type CreateStressTest86Mutation = {
  createStressTest86?:  {
    __typename: "StressTest86",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest85ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest85RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest86MutationVariables = {
  input: UpdateStressTest86Input,
  condition?: ModelStressTest86ConditionInput | null,
};

export type UpdateStressTest86Mutation = {
  updateStressTest86?:  {
    __typename: "StressTest86",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest85ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest85RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest86MutationVariables = {
  input: DeleteStressTest86Input,
  condition?: ModelStressTest86ConditionInput | null,
};

export type DeleteStressTest86Mutation = {
  deleteStressTest86?:  {
    __typename: "StressTest86",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest85ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest85RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateStressTest87MutationVariables = {
  input: CreateStressTest87Input,
  condition?: ModelStressTest87ConditionInput | null,
};

export type CreateStressTest87Mutation = {
  createStressTest87?:  {
    __typename: "StressTest87",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest88Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest87MutationVariables = {
  input: UpdateStressTest87Input,
  condition?: ModelStressTest87ConditionInput | null,
};

export type UpdateStressTest87Mutation = {
  updateStressTest87?:  {
    __typename: "StressTest87",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest88Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest87MutationVariables = {
  input: DeleteStressTest87Input,
  condition?: ModelStressTest87ConditionInput | null,
};

export type DeleteStressTest87Mutation = {
  deleteStressTest87?:  {
    __typename: "StressTest87",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest88Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest88MutationVariables = {
  input: CreateStressTest88Input,
  condition?: ModelStressTest88ConditionInput | null,
};

export type CreateStressTest88Mutation = {
  createStressTest88?:  {
    __typename: "StressTest88",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest87ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest87RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest88MutationVariables = {
  input: UpdateStressTest88Input,
  condition?: ModelStressTest88ConditionInput | null,
};

export type UpdateStressTest88Mutation = {
  updateStressTest88?:  {
    __typename: "StressTest88",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest87ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest87RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest88MutationVariables = {
  input: DeleteStressTest88Input,
  condition?: ModelStressTest88ConditionInput | null,
};

export type DeleteStressTest88Mutation = {
  deleteStressTest88?:  {
    __typename: "StressTest88",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest87ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest87RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateStressTest89MutationVariables = {
  input: CreateStressTest89Input,
  condition?: ModelStressTest89ConditionInput | null,
};

export type CreateStressTest89Mutation = {
  createStressTest89?:  {
    __typename: "StressTest89",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest90Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest89MutationVariables = {
  input: UpdateStressTest89Input,
  condition?: ModelStressTest89ConditionInput | null,
};

export type UpdateStressTest89Mutation = {
  updateStressTest89?:  {
    __typename: "StressTest89",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest90Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest89MutationVariables = {
  input: DeleteStressTest89Input,
  condition?: ModelStressTest89ConditionInput | null,
};

export type DeleteStressTest89Mutation = {
  deleteStressTest89?:  {
    __typename: "StressTest89",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest90Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest90MutationVariables = {
  input: CreateStressTest90Input,
  condition?: ModelStressTest90ConditionInput | null,
};

export type CreateStressTest90Mutation = {
  createStressTest90?:  {
    __typename: "StressTest90",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest89ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest89RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest90MutationVariables = {
  input: UpdateStressTest90Input,
  condition?: ModelStressTest90ConditionInput | null,
};

export type UpdateStressTest90Mutation = {
  updateStressTest90?:  {
    __typename: "StressTest90",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest89ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest89RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest90MutationVariables = {
  input: DeleteStressTest90Input,
  condition?: ModelStressTest90ConditionInput | null,
};

export type DeleteStressTest90Mutation = {
  deleteStressTest90?:  {
    __typename: "StressTest90",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest89ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest89RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateStressTest91MutationVariables = {
  input: CreateStressTest91Input,
  condition?: ModelStressTest91ConditionInput | null,
};

export type CreateStressTest91Mutation = {
  createStressTest91?:  {
    __typename: "StressTest91",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest91MutationVariables = {
  input: UpdateStressTest91Input,
  condition?: ModelStressTest91ConditionInput | null,
};

export type UpdateStressTest91Mutation = {
  updateStressTest91?:  {
    __typename: "StressTest91",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest91MutationVariables = {
  input: DeleteStressTest91Input,
  condition?: ModelStressTest91ConditionInput | null,
};

export type DeleteStressTest91Mutation = {
  deleteStressTest91?:  {
    __typename: "StressTest91",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest92MutationVariables = {
  input: CreateStressTest92Input,
  condition?: ModelStressTest92ConditionInput | null,
};

export type CreateStressTest92Mutation = {
  createStressTest92?:  {
    __typename: "StressTest92",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest92MutationVariables = {
  input: UpdateStressTest92Input,
  condition?: ModelStressTest92ConditionInput | null,
};

export type UpdateStressTest92Mutation = {
  updateStressTest92?:  {
    __typename: "StressTest92",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest92MutationVariables = {
  input: DeleteStressTest92Input,
  condition?: ModelStressTest92ConditionInput | null,
};

export type DeleteStressTest92Mutation = {
  deleteStressTest92?:  {
    __typename: "StressTest92",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest93MutationVariables = {
  input: CreateStressTest93Input,
  condition?: ModelStressTest93ConditionInput | null,
};

export type CreateStressTest93Mutation = {
  createStressTest93?:  {
    __typename: "StressTest93",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest93MutationVariables = {
  input: UpdateStressTest93Input,
  condition?: ModelStressTest93ConditionInput | null,
};

export type UpdateStressTest93Mutation = {
  updateStressTest93?:  {
    __typename: "StressTest93",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest93MutationVariables = {
  input: DeleteStressTest93Input,
  condition?: ModelStressTest93ConditionInput | null,
};

export type DeleteStressTest93Mutation = {
  deleteStressTest93?:  {
    __typename: "StressTest93",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest94MutationVariables = {
  input: CreateStressTest94Input,
  condition?: ModelStressTest94ConditionInput | null,
};

export type CreateStressTest94Mutation = {
  createStressTest94?:  {
    __typename: "StressTest94",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest94MutationVariables = {
  input: UpdateStressTest94Input,
  condition?: ModelStressTest94ConditionInput | null,
};

export type UpdateStressTest94Mutation = {
  updateStressTest94?:  {
    __typename: "StressTest94",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest94MutationVariables = {
  input: DeleteStressTest94Input,
  condition?: ModelStressTest94ConditionInput | null,
};

export type DeleteStressTest94Mutation = {
  deleteStressTest94?:  {
    __typename: "StressTest94",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest95MutationVariables = {
  input: CreateStressTest95Input,
  condition?: ModelStressTest95ConditionInput | null,
};

export type CreateStressTest95Mutation = {
  createStressTest95?:  {
    __typename: "StressTest95",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest95MutationVariables = {
  input: UpdateStressTest95Input,
  condition?: ModelStressTest95ConditionInput | null,
};

export type UpdateStressTest95Mutation = {
  updateStressTest95?:  {
    __typename: "StressTest95",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest95MutationVariables = {
  input: DeleteStressTest95Input,
  condition?: ModelStressTest95ConditionInput | null,
};

export type DeleteStressTest95Mutation = {
  deleteStressTest95?:  {
    __typename: "StressTest95",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest96MutationVariables = {
  input: CreateStressTest96Input,
  condition?: ModelStressTest96ConditionInput | null,
};

export type CreateStressTest96Mutation = {
  createStressTest96?:  {
    __typename: "StressTest96",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest96MutationVariables = {
  input: UpdateStressTest96Input,
  condition?: ModelStressTest96ConditionInput | null,
};

export type UpdateStressTest96Mutation = {
  updateStressTest96?:  {
    __typename: "StressTest96",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest96MutationVariables = {
  input: DeleteStressTest96Input,
  condition?: ModelStressTest96ConditionInput | null,
};

export type DeleteStressTest96Mutation = {
  deleteStressTest96?:  {
    __typename: "StressTest96",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest97MutationVariables = {
  input: CreateStressTest97Input,
  condition?: ModelStressTest97ConditionInput | null,
};

export type CreateStressTest97Mutation = {
  createStressTest97?:  {
    __typename: "StressTest97",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest97MutationVariables = {
  input: UpdateStressTest97Input,
  condition?: ModelStressTest97ConditionInput | null,
};

export type UpdateStressTest97Mutation = {
  updateStressTest97?:  {
    __typename: "StressTest97",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest97MutationVariables = {
  input: DeleteStressTest97Input,
  condition?: ModelStressTest97ConditionInput | null,
};

export type DeleteStressTest97Mutation = {
  deleteStressTest97?:  {
    __typename: "StressTest97",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest98MutationVariables = {
  input: CreateStressTest98Input,
  condition?: ModelStressTest98ConditionInput | null,
};

export type CreateStressTest98Mutation = {
  createStressTest98?:  {
    __typename: "StressTest98",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest98MutationVariables = {
  input: UpdateStressTest98Input,
  condition?: ModelStressTest98ConditionInput | null,
};

export type UpdateStressTest98Mutation = {
  updateStressTest98?:  {
    __typename: "StressTest98",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest98MutationVariables = {
  input: DeleteStressTest98Input,
  condition?: ModelStressTest98ConditionInput | null,
};

export type DeleteStressTest98Mutation = {
  deleteStressTest98?:  {
    __typename: "StressTest98",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest99MutationVariables = {
  input: CreateStressTest99Input,
  condition?: ModelStressTest99ConditionInput | null,
};

export type CreateStressTest99Mutation = {
  createStressTest99?:  {
    __typename: "StressTest99",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest99MutationVariables = {
  input: UpdateStressTest99Input,
  condition?: ModelStressTest99ConditionInput | null,
};

export type UpdateStressTest99Mutation = {
  updateStressTest99?:  {
    __typename: "StressTest99",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest99MutationVariables = {
  input: DeleteStressTest99Input,
  condition?: ModelStressTest99ConditionInput | null,
};

export type DeleteStressTest99Mutation = {
  deleteStressTest99?:  {
    __typename: "StressTest99",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStressTest100MutationVariables = {
  input: CreateStressTest100Input,
  condition?: ModelStressTest100ConditionInput | null,
};

export type CreateStressTest100Mutation = {
  createStressTest100?:  {
    __typename: "StressTest100",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStressTest100MutationVariables = {
  input: UpdateStressTest100Input,
  condition?: ModelStressTest100ConditionInput | null,
};

export type UpdateStressTest100Mutation = {
  updateStressTest100?:  {
    __typename: "StressTest100",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStressTest100MutationVariables = {
  input: DeleteStressTest100Input,
  condition?: ModelStressTest100ConditionInput | null,
};

export type DeleteStressTest100Mutation = {
  deleteStressTest100?:  {
    __typename: "StressTest100",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetRandomQuoteQueryVariables = {
};

export type GetRandomQuoteQuery = {
  getRandomQuote?:  {
    __typename: "QuoteResponse",
    message: string,
    quote: string,
    author: string,
    timestamp: string,
    totalQuotes: number,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    status: ProjectStatus,
    deadline?: string | null,
    color?: string | null,
    todos?:  {
      __typename: "ModelTodoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      status: ProjectStatus,
      deadline?: string | null,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    images?: Array< string | null > | null,
    projectID?: string | null,
    createdAt: string,
    updatedAt: string,
    projectTodosId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      images?: Array< string | null > | null,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTodosId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest1QueryVariables = {
  id: string,
};

export type GetStressTest1Query = {
  getStressTest1?:  {
    __typename: "StressTest1",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest1sQueryVariables = {
  filter?: ModelStressTest1FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest1sQuery = {
  listStressTest1s?:  {
    __typename: "ModelStressTest1Connection",
    items:  Array< {
      __typename: "StressTest1",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest2QueryVariables = {
  id: string,
};

export type GetStressTest2Query = {
  getStressTest2?:  {
    __typename: "StressTest2",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest2sQueryVariables = {
  filter?: ModelStressTest2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest2sQuery = {
  listStressTest2s?:  {
    __typename: "ModelStressTest2Connection",
    items:  Array< {
      __typename: "StressTest2",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest3QueryVariables = {
  id: string,
};

export type GetStressTest3Query = {
  getStressTest3?:  {
    __typename: "StressTest3",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest3sQueryVariables = {
  filter?: ModelStressTest3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest3sQuery = {
  listStressTest3s?:  {
    __typename: "ModelStressTest3Connection",
    items:  Array< {
      __typename: "StressTest3",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest4QueryVariables = {
  id: string,
};

export type GetStressTest4Query = {
  getStressTest4?:  {
    __typename: "StressTest4",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest4sQueryVariables = {
  filter?: ModelStressTest4FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest4sQuery = {
  listStressTest4s?:  {
    __typename: "ModelStressTest4Connection",
    items:  Array< {
      __typename: "StressTest4",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest5QueryVariables = {
  id: string,
};

export type GetStressTest5Query = {
  getStressTest5?:  {
    __typename: "StressTest5",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest5sQueryVariables = {
  filter?: ModelStressTest5FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest5sQuery = {
  listStressTest5s?:  {
    __typename: "ModelStressTest5Connection",
    items:  Array< {
      __typename: "StressTest5",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest6QueryVariables = {
  id: string,
};

export type GetStressTest6Query = {
  getStressTest6?:  {
    __typename: "StressTest6",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest6sQueryVariables = {
  filter?: ModelStressTest6FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest6sQuery = {
  listStressTest6s?:  {
    __typename: "ModelStressTest6Connection",
    items:  Array< {
      __typename: "StressTest6",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest7QueryVariables = {
  id: string,
};

export type GetStressTest7Query = {
  getStressTest7?:  {
    __typename: "StressTest7",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest7sQueryVariables = {
  filter?: ModelStressTest7FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest7sQuery = {
  listStressTest7s?:  {
    __typename: "ModelStressTest7Connection",
    items:  Array< {
      __typename: "StressTest7",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest8QueryVariables = {
  id: string,
};

export type GetStressTest8Query = {
  getStressTest8?:  {
    __typename: "StressTest8",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest8sQueryVariables = {
  filter?: ModelStressTest8FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest8sQuery = {
  listStressTest8s?:  {
    __typename: "ModelStressTest8Connection",
    items:  Array< {
      __typename: "StressTest8",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest9QueryVariables = {
  id: string,
};

export type GetStressTest9Query = {
  getStressTest9?:  {
    __typename: "StressTest9",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest9sQueryVariables = {
  filter?: ModelStressTest9FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest9sQuery = {
  listStressTest9s?:  {
    __typename: "ModelStressTest9Connection",
    items:  Array< {
      __typename: "StressTest9",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest10QueryVariables = {
  id: string,
};

export type GetStressTest10Query = {
  getStressTest10?:  {
    __typename: "StressTest10",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest10sQueryVariables = {
  filter?: ModelStressTest10FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest10sQuery = {
  listStressTest10s?:  {
    __typename: "ModelStressTest10Connection",
    items:  Array< {
      __typename: "StressTest10",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest11QueryVariables = {
  id: string,
};

export type GetStressTest11Query = {
  getStressTest11?:  {
    __typename: "StressTest11",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest11sQueryVariables = {
  filter?: ModelStressTest11FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest11sQuery = {
  listStressTest11s?:  {
    __typename: "ModelStressTest11Connection",
    items:  Array< {
      __typename: "StressTest11",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest12QueryVariables = {
  id: string,
};

export type GetStressTest12Query = {
  getStressTest12?:  {
    __typename: "StressTest12",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest12sQueryVariables = {
  filter?: ModelStressTest12FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest12sQuery = {
  listStressTest12s?:  {
    __typename: "ModelStressTest12Connection",
    items:  Array< {
      __typename: "StressTest12",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest13QueryVariables = {
  id: string,
};

export type GetStressTest13Query = {
  getStressTest13?:  {
    __typename: "StressTest13",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest13sQueryVariables = {
  filter?: ModelStressTest13FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest13sQuery = {
  listStressTest13s?:  {
    __typename: "ModelStressTest13Connection",
    items:  Array< {
      __typename: "StressTest13",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest14QueryVariables = {
  id: string,
};

export type GetStressTest14Query = {
  getStressTest14?:  {
    __typename: "StressTest14",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest14sQueryVariables = {
  filter?: ModelStressTest14FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest14sQuery = {
  listStressTest14s?:  {
    __typename: "ModelStressTest14Connection",
    items:  Array< {
      __typename: "StressTest14",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest15QueryVariables = {
  id: string,
};

export type GetStressTest15Query = {
  getStressTest15?:  {
    __typename: "StressTest15",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest15sQueryVariables = {
  filter?: ModelStressTest15FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest15sQuery = {
  listStressTest15s?:  {
    __typename: "ModelStressTest15Connection",
    items:  Array< {
      __typename: "StressTest15",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest16QueryVariables = {
  id: string,
};

export type GetStressTest16Query = {
  getStressTest16?:  {
    __typename: "StressTest16",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest16sQueryVariables = {
  filter?: ModelStressTest16FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest16sQuery = {
  listStressTest16s?:  {
    __typename: "ModelStressTest16Connection",
    items:  Array< {
      __typename: "StressTest16",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest17QueryVariables = {
  id: string,
};

export type GetStressTest17Query = {
  getStressTest17?:  {
    __typename: "StressTest17",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest17sQueryVariables = {
  filter?: ModelStressTest17FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest17sQuery = {
  listStressTest17s?:  {
    __typename: "ModelStressTest17Connection",
    items:  Array< {
      __typename: "StressTest17",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest18QueryVariables = {
  id: string,
};

export type GetStressTest18Query = {
  getStressTest18?:  {
    __typename: "StressTest18",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest18sQueryVariables = {
  filter?: ModelStressTest18FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest18sQuery = {
  listStressTest18s?:  {
    __typename: "ModelStressTest18Connection",
    items:  Array< {
      __typename: "StressTest18",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest19QueryVariables = {
  id: string,
};

export type GetStressTest19Query = {
  getStressTest19?:  {
    __typename: "StressTest19",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest19sQueryVariables = {
  filter?: ModelStressTest19FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest19sQuery = {
  listStressTest19s?:  {
    __typename: "ModelStressTest19Connection",
    items:  Array< {
      __typename: "StressTest19",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest20QueryVariables = {
  id: string,
};

export type GetStressTest20Query = {
  getStressTest20?:  {
    __typename: "StressTest20",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest20sQueryVariables = {
  filter?: ModelStressTest20FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest20sQuery = {
  listStressTest20s?:  {
    __typename: "ModelStressTest20Connection",
    items:  Array< {
      __typename: "StressTest20",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest21QueryVariables = {
  id: string,
};

export type GetStressTest21Query = {
  getStressTest21?:  {
    __typename: "StressTest21",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest21sQueryVariables = {
  filter?: ModelStressTest21FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest21sQuery = {
  listStressTest21s?:  {
    __typename: "ModelStressTest21Connection",
    items:  Array< {
      __typename: "StressTest21",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest22QueryVariables = {
  id: string,
};

export type GetStressTest22Query = {
  getStressTest22?:  {
    __typename: "StressTest22",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest22sQueryVariables = {
  filter?: ModelStressTest22FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest22sQuery = {
  listStressTest22s?:  {
    __typename: "ModelStressTest22Connection",
    items:  Array< {
      __typename: "StressTest22",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest23QueryVariables = {
  id: string,
};

export type GetStressTest23Query = {
  getStressTest23?:  {
    __typename: "StressTest23",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest23sQueryVariables = {
  filter?: ModelStressTest23FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest23sQuery = {
  listStressTest23s?:  {
    __typename: "ModelStressTest23Connection",
    items:  Array< {
      __typename: "StressTest23",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest24QueryVariables = {
  id: string,
};

export type GetStressTest24Query = {
  getStressTest24?:  {
    __typename: "StressTest24",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest24sQueryVariables = {
  filter?: ModelStressTest24FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest24sQuery = {
  listStressTest24s?:  {
    __typename: "ModelStressTest24Connection",
    items:  Array< {
      __typename: "StressTest24",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest25QueryVariables = {
  id: string,
};

export type GetStressTest25Query = {
  getStressTest25?:  {
    __typename: "StressTest25",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest25sQueryVariables = {
  filter?: ModelStressTest25FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest25sQuery = {
  listStressTest25s?:  {
    __typename: "ModelStressTest25Connection",
    items:  Array< {
      __typename: "StressTest25",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest26QueryVariables = {
  id: string,
};

export type GetStressTest26Query = {
  getStressTest26?:  {
    __typename: "StressTest26",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest26sQueryVariables = {
  filter?: ModelStressTest26FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest26sQuery = {
  listStressTest26s?:  {
    __typename: "ModelStressTest26Connection",
    items:  Array< {
      __typename: "StressTest26",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest27QueryVariables = {
  id: string,
};

export type GetStressTest27Query = {
  getStressTest27?:  {
    __typename: "StressTest27",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest27sQueryVariables = {
  filter?: ModelStressTest27FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest27sQuery = {
  listStressTest27s?:  {
    __typename: "ModelStressTest27Connection",
    items:  Array< {
      __typename: "StressTest27",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest28QueryVariables = {
  id: string,
};

export type GetStressTest28Query = {
  getStressTest28?:  {
    __typename: "StressTest28",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest28sQueryVariables = {
  filter?: ModelStressTest28FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest28sQuery = {
  listStressTest28s?:  {
    __typename: "ModelStressTest28Connection",
    items:  Array< {
      __typename: "StressTest28",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest29QueryVariables = {
  id: string,
};

export type GetStressTest29Query = {
  getStressTest29?:  {
    __typename: "StressTest29",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest29sQueryVariables = {
  filter?: ModelStressTest29FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest29sQuery = {
  listStressTest29s?:  {
    __typename: "ModelStressTest29Connection",
    items:  Array< {
      __typename: "StressTest29",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest30QueryVariables = {
  id: string,
};

export type GetStressTest30Query = {
  getStressTest30?:  {
    __typename: "StressTest30",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest30sQueryVariables = {
  filter?: ModelStressTest30FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest30sQuery = {
  listStressTest30s?:  {
    __typename: "ModelStressTest30Connection",
    items:  Array< {
      __typename: "StressTest30",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest31QueryVariables = {
  id: string,
};

export type GetStressTest31Query = {
  getStressTest31?:  {
    __typename: "StressTest31",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest31sQueryVariables = {
  filter?: ModelStressTest31FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest31sQuery = {
  listStressTest31s?:  {
    __typename: "ModelStressTest31Connection",
    items:  Array< {
      __typename: "StressTest31",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest32QueryVariables = {
  id: string,
};

export type GetStressTest32Query = {
  getStressTest32?:  {
    __typename: "StressTest32",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest32sQueryVariables = {
  filter?: ModelStressTest32FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest32sQuery = {
  listStressTest32s?:  {
    __typename: "ModelStressTest32Connection",
    items:  Array< {
      __typename: "StressTest32",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest33QueryVariables = {
  id: string,
};

export type GetStressTest33Query = {
  getStressTest33?:  {
    __typename: "StressTest33",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest33sQueryVariables = {
  filter?: ModelStressTest33FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest33sQuery = {
  listStressTest33s?:  {
    __typename: "ModelStressTest33Connection",
    items:  Array< {
      __typename: "StressTest33",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest34QueryVariables = {
  id: string,
};

export type GetStressTest34Query = {
  getStressTest34?:  {
    __typename: "StressTest34",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest34sQueryVariables = {
  filter?: ModelStressTest34FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest34sQuery = {
  listStressTest34s?:  {
    __typename: "ModelStressTest34Connection",
    items:  Array< {
      __typename: "StressTest34",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest35QueryVariables = {
  id: string,
};

export type GetStressTest35Query = {
  getStressTest35?:  {
    __typename: "StressTest35",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest35sQueryVariables = {
  filter?: ModelStressTest35FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest35sQuery = {
  listStressTest35s?:  {
    __typename: "ModelStressTest35Connection",
    items:  Array< {
      __typename: "StressTest35",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest36QueryVariables = {
  id: string,
};

export type GetStressTest36Query = {
  getStressTest36?:  {
    __typename: "StressTest36",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest36sQueryVariables = {
  filter?: ModelStressTest36FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest36sQuery = {
  listStressTest36s?:  {
    __typename: "ModelStressTest36Connection",
    items:  Array< {
      __typename: "StressTest36",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest37QueryVariables = {
  id: string,
};

export type GetStressTest37Query = {
  getStressTest37?:  {
    __typename: "StressTest37",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest37sQueryVariables = {
  filter?: ModelStressTest37FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest37sQuery = {
  listStressTest37s?:  {
    __typename: "ModelStressTest37Connection",
    items:  Array< {
      __typename: "StressTest37",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest38QueryVariables = {
  id: string,
};

export type GetStressTest38Query = {
  getStressTest38?:  {
    __typename: "StressTest38",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest38sQueryVariables = {
  filter?: ModelStressTest38FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest38sQuery = {
  listStressTest38s?:  {
    __typename: "ModelStressTest38Connection",
    items:  Array< {
      __typename: "StressTest38",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest39QueryVariables = {
  id: string,
};

export type GetStressTest39Query = {
  getStressTest39?:  {
    __typename: "StressTest39",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest39sQueryVariables = {
  filter?: ModelStressTest39FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest39sQuery = {
  listStressTest39s?:  {
    __typename: "ModelStressTest39Connection",
    items:  Array< {
      __typename: "StressTest39",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest40QueryVariables = {
  id: string,
};

export type GetStressTest40Query = {
  getStressTest40?:  {
    __typename: "StressTest40",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest40sQueryVariables = {
  filter?: ModelStressTest40FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest40sQuery = {
  listStressTest40s?:  {
    __typename: "ModelStressTest40Connection",
    items:  Array< {
      __typename: "StressTest40",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest41QueryVariables = {
  id: string,
};

export type GetStressTest41Query = {
  getStressTest41?:  {
    __typename: "StressTest41",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest41sQueryVariables = {
  filter?: ModelStressTest41FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest41sQuery = {
  listStressTest41s?:  {
    __typename: "ModelStressTest41Connection",
    items:  Array< {
      __typename: "StressTest41",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest42QueryVariables = {
  id: string,
};

export type GetStressTest42Query = {
  getStressTest42?:  {
    __typename: "StressTest42",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest42sQueryVariables = {
  filter?: ModelStressTest42FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest42sQuery = {
  listStressTest42s?:  {
    __typename: "ModelStressTest42Connection",
    items:  Array< {
      __typename: "StressTest42",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest43QueryVariables = {
  id: string,
};

export type GetStressTest43Query = {
  getStressTest43?:  {
    __typename: "StressTest43",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest43sQueryVariables = {
  filter?: ModelStressTest43FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest43sQuery = {
  listStressTest43s?:  {
    __typename: "ModelStressTest43Connection",
    items:  Array< {
      __typename: "StressTest43",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest44QueryVariables = {
  id: string,
};

export type GetStressTest44Query = {
  getStressTest44?:  {
    __typename: "StressTest44",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest44sQueryVariables = {
  filter?: ModelStressTest44FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest44sQuery = {
  listStressTest44s?:  {
    __typename: "ModelStressTest44Connection",
    items:  Array< {
      __typename: "StressTest44",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest45QueryVariables = {
  id: string,
};

export type GetStressTest45Query = {
  getStressTest45?:  {
    __typename: "StressTest45",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest45sQueryVariables = {
  filter?: ModelStressTest45FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest45sQuery = {
  listStressTest45s?:  {
    __typename: "ModelStressTest45Connection",
    items:  Array< {
      __typename: "StressTest45",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest46QueryVariables = {
  id: string,
};

export type GetStressTest46Query = {
  getStressTest46?:  {
    __typename: "StressTest46",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest46sQueryVariables = {
  filter?: ModelStressTest46FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest46sQuery = {
  listStressTest46s?:  {
    __typename: "ModelStressTest46Connection",
    items:  Array< {
      __typename: "StressTest46",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest47QueryVariables = {
  id: string,
};

export type GetStressTest47Query = {
  getStressTest47?:  {
    __typename: "StressTest47",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest47sQueryVariables = {
  filter?: ModelStressTest47FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest47sQuery = {
  listStressTest47s?:  {
    __typename: "ModelStressTest47Connection",
    items:  Array< {
      __typename: "StressTest47",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest48QueryVariables = {
  id: string,
};

export type GetStressTest48Query = {
  getStressTest48?:  {
    __typename: "StressTest48",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest48sQueryVariables = {
  filter?: ModelStressTest48FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest48sQuery = {
  listStressTest48s?:  {
    __typename: "ModelStressTest48Connection",
    items:  Array< {
      __typename: "StressTest48",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest49QueryVariables = {
  id: string,
};

export type GetStressTest49Query = {
  getStressTest49?:  {
    __typename: "StressTest49",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest49sQueryVariables = {
  filter?: ModelStressTest49FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest49sQuery = {
  listStressTest49s?:  {
    __typename: "ModelStressTest49Connection",
    items:  Array< {
      __typename: "StressTest49",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest50QueryVariables = {
  id: string,
};

export type GetStressTest50Query = {
  getStressTest50?:  {
    __typename: "StressTest50",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest50sQueryVariables = {
  filter?: ModelStressTest50FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest50sQuery = {
  listStressTest50s?:  {
    __typename: "ModelStressTest50Connection",
    items:  Array< {
      __typename: "StressTest50",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest51QueryVariables = {
  id: string,
};

export type GetStressTest51Query = {
  getStressTest51?:  {
    __typename: "StressTest51",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest51sQueryVariables = {
  filter?: ModelStressTest51FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest51sQuery = {
  listStressTest51s?:  {
    __typename: "ModelStressTest51Connection",
    items:  Array< {
      __typename: "StressTest51",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest52QueryVariables = {
  id: string,
};

export type GetStressTest52Query = {
  getStressTest52?:  {
    __typename: "StressTest52",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest52sQueryVariables = {
  filter?: ModelStressTest52FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest52sQuery = {
  listStressTest52s?:  {
    __typename: "ModelStressTest52Connection",
    items:  Array< {
      __typename: "StressTest52",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest53QueryVariables = {
  id: string,
};

export type GetStressTest53Query = {
  getStressTest53?:  {
    __typename: "StressTest53",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest53sQueryVariables = {
  filter?: ModelStressTest53FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest53sQuery = {
  listStressTest53s?:  {
    __typename: "ModelStressTest53Connection",
    items:  Array< {
      __typename: "StressTest53",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest54QueryVariables = {
  id: string,
};

export type GetStressTest54Query = {
  getStressTest54?:  {
    __typename: "StressTest54",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest54sQueryVariables = {
  filter?: ModelStressTest54FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest54sQuery = {
  listStressTest54s?:  {
    __typename: "ModelStressTest54Connection",
    items:  Array< {
      __typename: "StressTest54",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest55QueryVariables = {
  id: string,
};

export type GetStressTest55Query = {
  getStressTest55?:  {
    __typename: "StressTest55",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest55sQueryVariables = {
  filter?: ModelStressTest55FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest55sQuery = {
  listStressTest55s?:  {
    __typename: "ModelStressTest55Connection",
    items:  Array< {
      __typename: "StressTest55",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest56QueryVariables = {
  id: string,
};

export type GetStressTest56Query = {
  getStressTest56?:  {
    __typename: "StressTest56",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest56sQueryVariables = {
  filter?: ModelStressTest56FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest56sQuery = {
  listStressTest56s?:  {
    __typename: "ModelStressTest56Connection",
    items:  Array< {
      __typename: "StressTest56",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest57QueryVariables = {
  id: string,
};

export type GetStressTest57Query = {
  getStressTest57?:  {
    __typename: "StressTest57",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest57sQueryVariables = {
  filter?: ModelStressTest57FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest57sQuery = {
  listStressTest57s?:  {
    __typename: "ModelStressTest57Connection",
    items:  Array< {
      __typename: "StressTest57",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest58QueryVariables = {
  id: string,
};

export type GetStressTest58Query = {
  getStressTest58?:  {
    __typename: "StressTest58",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest58sQueryVariables = {
  filter?: ModelStressTest58FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest58sQuery = {
  listStressTest58s?:  {
    __typename: "ModelStressTest58Connection",
    items:  Array< {
      __typename: "StressTest58",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest59QueryVariables = {
  id: string,
};

export type GetStressTest59Query = {
  getStressTest59?:  {
    __typename: "StressTest59",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest59sQueryVariables = {
  filter?: ModelStressTest59FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest59sQuery = {
  listStressTest59s?:  {
    __typename: "ModelStressTest59Connection",
    items:  Array< {
      __typename: "StressTest59",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest60QueryVariables = {
  id: string,
};

export type GetStressTest60Query = {
  getStressTest60?:  {
    __typename: "StressTest60",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest60sQueryVariables = {
  filter?: ModelStressTest60FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest60sQuery = {
  listStressTest60s?:  {
    __typename: "ModelStressTest60Connection",
    items:  Array< {
      __typename: "StressTest60",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest61QueryVariables = {
  id: string,
};

export type GetStressTest61Query = {
  getStressTest61?:  {
    __typename: "StressTest61",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest61sQueryVariables = {
  filter?: ModelStressTest61FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest61sQuery = {
  listStressTest61s?:  {
    __typename: "ModelStressTest61Connection",
    items:  Array< {
      __typename: "StressTest61",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest62QueryVariables = {
  id: string,
};

export type GetStressTest62Query = {
  getStressTest62?:  {
    __typename: "StressTest62",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest62sQueryVariables = {
  filter?: ModelStressTest62FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest62sQuery = {
  listStressTest62s?:  {
    __typename: "ModelStressTest62Connection",
    items:  Array< {
      __typename: "StressTest62",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest63QueryVariables = {
  id: string,
};

export type GetStressTest63Query = {
  getStressTest63?:  {
    __typename: "StressTest63",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest63sQueryVariables = {
  filter?: ModelStressTest63FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest63sQuery = {
  listStressTest63s?:  {
    __typename: "ModelStressTest63Connection",
    items:  Array< {
      __typename: "StressTest63",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest64QueryVariables = {
  id: string,
};

export type GetStressTest64Query = {
  getStressTest64?:  {
    __typename: "StressTest64",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest64sQueryVariables = {
  filter?: ModelStressTest64FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest64sQuery = {
  listStressTest64s?:  {
    __typename: "ModelStressTest64Connection",
    items:  Array< {
      __typename: "StressTest64",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest65QueryVariables = {
  id: string,
};

export type GetStressTest65Query = {
  getStressTest65?:  {
    __typename: "StressTest65",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest65sQueryVariables = {
  filter?: ModelStressTest65FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest65sQuery = {
  listStressTest65s?:  {
    __typename: "ModelStressTest65Connection",
    items:  Array< {
      __typename: "StressTest65",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest66QueryVariables = {
  id: string,
};

export type GetStressTest66Query = {
  getStressTest66?:  {
    __typename: "StressTest66",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest66sQueryVariables = {
  filter?: ModelStressTest66FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest66sQuery = {
  listStressTest66s?:  {
    __typename: "ModelStressTest66Connection",
    items:  Array< {
      __typename: "StressTest66",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest67QueryVariables = {
  id: string,
};

export type GetStressTest67Query = {
  getStressTest67?:  {
    __typename: "StressTest67",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest67sQueryVariables = {
  filter?: ModelStressTest67FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest67sQuery = {
  listStressTest67s?:  {
    __typename: "ModelStressTest67Connection",
    items:  Array< {
      __typename: "StressTest67",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest68QueryVariables = {
  id: string,
};

export type GetStressTest68Query = {
  getStressTest68?:  {
    __typename: "StressTest68",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest68sQueryVariables = {
  filter?: ModelStressTest68FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest68sQuery = {
  listStressTest68s?:  {
    __typename: "ModelStressTest68Connection",
    items:  Array< {
      __typename: "StressTest68",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest69QueryVariables = {
  id: string,
};

export type GetStressTest69Query = {
  getStressTest69?:  {
    __typename: "StressTest69",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest69sQueryVariables = {
  filter?: ModelStressTest69FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest69sQuery = {
  listStressTest69s?:  {
    __typename: "ModelStressTest69Connection",
    items:  Array< {
      __typename: "StressTest69",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest70QueryVariables = {
  id: string,
};

export type GetStressTest70Query = {
  getStressTest70?:  {
    __typename: "StressTest70",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest70sQueryVariables = {
  filter?: ModelStressTest70FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest70sQuery = {
  listStressTest70s?:  {
    __typename: "ModelStressTest70Connection",
    items:  Array< {
      __typename: "StressTest70",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest71QueryVariables = {
  id: string,
};

export type GetStressTest71Query = {
  getStressTest71?:  {
    __typename: "StressTest71",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest71sQueryVariables = {
  filter?: ModelStressTest71FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest71sQuery = {
  listStressTest71s?:  {
    __typename: "ModelStressTest71Connection",
    items:  Array< {
      __typename: "StressTest71",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest72QueryVariables = {
  id: string,
};

export type GetStressTest72Query = {
  getStressTest72?:  {
    __typename: "StressTest72",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest72sQueryVariables = {
  filter?: ModelStressTest72FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest72sQuery = {
  listStressTest72s?:  {
    __typename: "ModelStressTest72Connection",
    items:  Array< {
      __typename: "StressTest72",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest73QueryVariables = {
  id: string,
};

export type GetStressTest73Query = {
  getStressTest73?:  {
    __typename: "StressTest73",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest73sQueryVariables = {
  filter?: ModelStressTest73FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest73sQuery = {
  listStressTest73s?:  {
    __typename: "ModelStressTest73Connection",
    items:  Array< {
      __typename: "StressTest73",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest74QueryVariables = {
  id: string,
};

export type GetStressTest74Query = {
  getStressTest74?:  {
    __typename: "StressTest74",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest74sQueryVariables = {
  filter?: ModelStressTest74FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest74sQuery = {
  listStressTest74s?:  {
    __typename: "ModelStressTest74Connection",
    items:  Array< {
      __typename: "StressTest74",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest75QueryVariables = {
  id: string,
};

export type GetStressTest75Query = {
  getStressTest75?:  {
    __typename: "StressTest75",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest75sQueryVariables = {
  filter?: ModelStressTest75FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest75sQuery = {
  listStressTest75s?:  {
    __typename: "ModelStressTest75Connection",
    items:  Array< {
      __typename: "StressTest75",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest76QueryVariables = {
  id: string,
};

export type GetStressTest76Query = {
  getStressTest76?:  {
    __typename: "StressTest76",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest76sQueryVariables = {
  filter?: ModelStressTest76FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest76sQuery = {
  listStressTest76s?:  {
    __typename: "ModelStressTest76Connection",
    items:  Array< {
      __typename: "StressTest76",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest77QueryVariables = {
  id: string,
};

export type GetStressTest77Query = {
  getStressTest77?:  {
    __typename: "StressTest77",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest77sQueryVariables = {
  filter?: ModelStressTest77FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest77sQuery = {
  listStressTest77s?:  {
    __typename: "ModelStressTest77Connection",
    items:  Array< {
      __typename: "StressTest77",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest78QueryVariables = {
  id: string,
};

export type GetStressTest78Query = {
  getStressTest78?:  {
    __typename: "StressTest78",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest78sQueryVariables = {
  filter?: ModelStressTest78FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest78sQuery = {
  listStressTest78s?:  {
    __typename: "ModelStressTest78Connection",
    items:  Array< {
      __typename: "StressTest78",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest79QueryVariables = {
  id: string,
};

export type GetStressTest79Query = {
  getStressTest79?:  {
    __typename: "StressTest79",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest79sQueryVariables = {
  filter?: ModelStressTest79FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest79sQuery = {
  listStressTest79s?:  {
    __typename: "ModelStressTest79Connection",
    items:  Array< {
      __typename: "StressTest79",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest80QueryVariables = {
  id: string,
};

export type GetStressTest80Query = {
  getStressTest80?:  {
    __typename: "StressTest80",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest80sQueryVariables = {
  filter?: ModelStressTest80FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest80sQuery = {
  listStressTest80s?:  {
    __typename: "ModelStressTest80Connection",
    items:  Array< {
      __typename: "StressTest80",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest81QueryVariables = {
  id: string,
};

export type GetStressTest81Query = {
  getStressTest81?:  {
    __typename: "StressTest81",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest82Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest81sQueryVariables = {
  filter?: ModelStressTest81FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest81sQuery = {
  listStressTest81s?:  {
    __typename: "ModelStressTest81Connection",
    items:  Array< {
      __typename: "StressTest81",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest82QueryVariables = {
  id: string,
};

export type GetStressTest82Query = {
  getStressTest82?:  {
    __typename: "StressTest82",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest81ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest81RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListStressTest82sQueryVariables = {
  filter?: ModelStressTest82FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest82sQuery = {
  listStressTest82s?:  {
    __typename: "ModelStressTest82Connection",
    items:  Array< {
      __typename: "StressTest82",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      stressTest81ID?: string | null,
      createdAt: string,
      updatedAt: string,
      stressTest81RelatedItemsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest83QueryVariables = {
  id: string,
};

export type GetStressTest83Query = {
  getStressTest83?:  {
    __typename: "StressTest83",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest84Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest83sQueryVariables = {
  filter?: ModelStressTest83FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest83sQuery = {
  listStressTest83s?:  {
    __typename: "ModelStressTest83Connection",
    items:  Array< {
      __typename: "StressTest83",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest84QueryVariables = {
  id: string,
};

export type GetStressTest84Query = {
  getStressTest84?:  {
    __typename: "StressTest84",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest83ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest83RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListStressTest84sQueryVariables = {
  filter?: ModelStressTest84FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest84sQuery = {
  listStressTest84s?:  {
    __typename: "ModelStressTest84Connection",
    items:  Array< {
      __typename: "StressTest84",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      stressTest83ID?: string | null,
      createdAt: string,
      updatedAt: string,
      stressTest83RelatedItemsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest85QueryVariables = {
  id: string,
};

export type GetStressTest85Query = {
  getStressTest85?:  {
    __typename: "StressTest85",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest86Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest85sQueryVariables = {
  filter?: ModelStressTest85FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest85sQuery = {
  listStressTest85s?:  {
    __typename: "ModelStressTest85Connection",
    items:  Array< {
      __typename: "StressTest85",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest86QueryVariables = {
  id: string,
};

export type GetStressTest86Query = {
  getStressTest86?:  {
    __typename: "StressTest86",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest85ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest85RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListStressTest86sQueryVariables = {
  filter?: ModelStressTest86FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest86sQuery = {
  listStressTest86s?:  {
    __typename: "ModelStressTest86Connection",
    items:  Array< {
      __typename: "StressTest86",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      stressTest85ID?: string | null,
      createdAt: string,
      updatedAt: string,
      stressTest85RelatedItemsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest87QueryVariables = {
  id: string,
};

export type GetStressTest87Query = {
  getStressTest87?:  {
    __typename: "StressTest87",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest88Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest87sQueryVariables = {
  filter?: ModelStressTest87FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest87sQuery = {
  listStressTest87s?:  {
    __typename: "ModelStressTest87Connection",
    items:  Array< {
      __typename: "StressTest87",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest88QueryVariables = {
  id: string,
};

export type GetStressTest88Query = {
  getStressTest88?:  {
    __typename: "StressTest88",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest87ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest87RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListStressTest88sQueryVariables = {
  filter?: ModelStressTest88FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest88sQuery = {
  listStressTest88s?:  {
    __typename: "ModelStressTest88Connection",
    items:  Array< {
      __typename: "StressTest88",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      stressTest87ID?: string | null,
      createdAt: string,
      updatedAt: string,
      stressTest87RelatedItemsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest89QueryVariables = {
  id: string,
};

export type GetStressTest89Query = {
  getStressTest89?:  {
    __typename: "StressTest89",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest90Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest89sQueryVariables = {
  filter?: ModelStressTest89FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest89sQuery = {
  listStressTest89s?:  {
    __typename: "ModelStressTest89Connection",
    items:  Array< {
      __typename: "StressTest89",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest90QueryVariables = {
  id: string,
};

export type GetStressTest90Query = {
  getStressTest90?:  {
    __typename: "StressTest90",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest89ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest89RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListStressTest90sQueryVariables = {
  filter?: ModelStressTest90FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest90sQuery = {
  listStressTest90s?:  {
    __typename: "ModelStressTest90Connection",
    items:  Array< {
      __typename: "StressTest90",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      stressTest89ID?: string | null,
      createdAt: string,
      updatedAt: string,
      stressTest89RelatedItemsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest91QueryVariables = {
  id: string,
};

export type GetStressTest91Query = {
  getStressTest91?:  {
    __typename: "StressTest91",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest91sQueryVariables = {
  filter?: ModelStressTest91FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest91sQuery = {
  listStressTest91s?:  {
    __typename: "ModelStressTest91Connection",
    items:  Array< {
      __typename: "StressTest91",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      status?: StressTestStatus | null,
      priority?: StressTestPriority | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest92QueryVariables = {
  id: string,
};

export type GetStressTest92Query = {
  getStressTest92?:  {
    __typename: "StressTest92",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest92sQueryVariables = {
  filter?: ModelStressTest92FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest92sQuery = {
  listStressTest92s?:  {
    __typename: "ModelStressTest92Connection",
    items:  Array< {
      __typename: "StressTest92",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      status?: StressTestStatus | null,
      priority?: StressTestPriority | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest93QueryVariables = {
  id: string,
};

export type GetStressTest93Query = {
  getStressTest93?:  {
    __typename: "StressTest93",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest93sQueryVariables = {
  filter?: ModelStressTest93FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest93sQuery = {
  listStressTest93s?:  {
    __typename: "ModelStressTest93Connection",
    items:  Array< {
      __typename: "StressTest93",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      status?: StressTestStatus | null,
      priority?: StressTestPriority | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest94QueryVariables = {
  id: string,
};

export type GetStressTest94Query = {
  getStressTest94?:  {
    __typename: "StressTest94",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest94sQueryVariables = {
  filter?: ModelStressTest94FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest94sQuery = {
  listStressTest94s?:  {
    __typename: "ModelStressTest94Connection",
    items:  Array< {
      __typename: "StressTest94",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      status?: StressTestStatus | null,
      priority?: StressTestPriority | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest95QueryVariables = {
  id: string,
};

export type GetStressTest95Query = {
  getStressTest95?:  {
    __typename: "StressTest95",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest95sQueryVariables = {
  filter?: ModelStressTest95FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest95sQuery = {
  listStressTest95s?:  {
    __typename: "ModelStressTest95Connection",
    items:  Array< {
      __typename: "StressTest95",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      status?: StressTestStatus | null,
      priority?: StressTestPriority | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest96QueryVariables = {
  id: string,
};

export type GetStressTest96Query = {
  getStressTest96?:  {
    __typename: "StressTest96",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest96sQueryVariables = {
  filter?: ModelStressTest96FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest96sQuery = {
  listStressTest96s?:  {
    __typename: "ModelStressTest96Connection",
    items:  Array< {
      __typename: "StressTest96",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      status?: StressTestStatus | null,
      priority?: StressTestPriority | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest97QueryVariables = {
  id: string,
};

export type GetStressTest97Query = {
  getStressTest97?:  {
    __typename: "StressTest97",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest97sQueryVariables = {
  filter?: ModelStressTest97FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest97sQuery = {
  listStressTest97s?:  {
    __typename: "ModelStressTest97Connection",
    items:  Array< {
      __typename: "StressTest97",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      status?: StressTestStatus | null,
      priority?: StressTestPriority | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest98QueryVariables = {
  id: string,
};

export type GetStressTest98Query = {
  getStressTest98?:  {
    __typename: "StressTest98",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest98sQueryVariables = {
  filter?: ModelStressTest98FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest98sQuery = {
  listStressTest98s?:  {
    __typename: "ModelStressTest98Connection",
    items:  Array< {
      __typename: "StressTest98",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      status?: StressTestStatus | null,
      priority?: StressTestPriority | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest99QueryVariables = {
  id: string,
};

export type GetStressTest99Query = {
  getStressTest99?:  {
    __typename: "StressTest99",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest99sQueryVariables = {
  filter?: ModelStressTest99FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest99sQuery = {
  listStressTest99s?:  {
    __typename: "ModelStressTest99Connection",
    items:  Array< {
      __typename: "StressTest99",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      status?: StressTestStatus | null,
      priority?: StressTestPriority | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStressTest100QueryVariables = {
  id: string,
};

export type GetStressTest100Query = {
  getStressTest100?:  {
    __typename: "StressTest100",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStressTest100sQueryVariables = {
  filter?: ModelStressTest100FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStressTest100sQuery = {
  listStressTest100s?:  {
    __typename: "ModelStressTest100Connection",
    items:  Array< {
      __typename: "StressTest100",
      id: string,
      name: string,
      data?: string | null,
      value?: number | null,
      active?: boolean | null,
      timestamp?: string | null,
      status?: StressTestStatus | null,
      priority?: StressTestPriority | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
  owner?: string | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    status: ProjectStatus,
    deadline?: string | null,
    color?: string | null,
    todos?:  {
      __typename: "ModelTodoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    status: ProjectStatus,
    deadline?: string | null,
    color?: string | null,
    todos?:  {
      __typename: "ModelTodoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    status: ProjectStatus,
    deadline?: string | null,
    color?: string | null,
    todos?:  {
      __typename: "ModelTodoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    images?: Array< string | null > | null,
    projectID?: string | null,
    createdAt: string,
    updatedAt: string,
    projectTodosId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    images?: Array< string | null > | null,
    projectID?: string | null,
    createdAt: string,
    updatedAt: string,
    projectTodosId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    images?: Array< string | null > | null,
    projectID?: string | null,
    createdAt: string,
    updatedAt: string,
    projectTodosId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest1SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest1FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest1Subscription = {
  onCreateStressTest1?:  {
    __typename: "StressTest1",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest1SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest1FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest1Subscription = {
  onUpdateStressTest1?:  {
    __typename: "StressTest1",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest1SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest1FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest1Subscription = {
  onDeleteStressTest1?:  {
    __typename: "StressTest1",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest2SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest2FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest2Subscription = {
  onCreateStressTest2?:  {
    __typename: "StressTest2",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest2SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest2FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest2Subscription = {
  onUpdateStressTest2?:  {
    __typename: "StressTest2",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest2SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest2FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest2Subscription = {
  onDeleteStressTest2?:  {
    __typename: "StressTest2",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest3SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest3FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest3Subscription = {
  onCreateStressTest3?:  {
    __typename: "StressTest3",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest3SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest3FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest3Subscription = {
  onUpdateStressTest3?:  {
    __typename: "StressTest3",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest3SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest3FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest3Subscription = {
  onDeleteStressTest3?:  {
    __typename: "StressTest3",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest4SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest4FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest4Subscription = {
  onCreateStressTest4?:  {
    __typename: "StressTest4",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest4SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest4FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest4Subscription = {
  onUpdateStressTest4?:  {
    __typename: "StressTest4",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest4SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest4FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest4Subscription = {
  onDeleteStressTest4?:  {
    __typename: "StressTest4",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest5SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest5FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest5Subscription = {
  onCreateStressTest5?:  {
    __typename: "StressTest5",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest5SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest5FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest5Subscription = {
  onUpdateStressTest5?:  {
    __typename: "StressTest5",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest5SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest5FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest5Subscription = {
  onDeleteStressTest5?:  {
    __typename: "StressTest5",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest6SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest6FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest6Subscription = {
  onCreateStressTest6?:  {
    __typename: "StressTest6",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest6SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest6FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest6Subscription = {
  onUpdateStressTest6?:  {
    __typename: "StressTest6",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest6SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest6FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest6Subscription = {
  onDeleteStressTest6?:  {
    __typename: "StressTest6",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest7SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest7FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest7Subscription = {
  onCreateStressTest7?:  {
    __typename: "StressTest7",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest7SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest7FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest7Subscription = {
  onUpdateStressTest7?:  {
    __typename: "StressTest7",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest7SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest7FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest7Subscription = {
  onDeleteStressTest7?:  {
    __typename: "StressTest7",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest8SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest8FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest8Subscription = {
  onCreateStressTest8?:  {
    __typename: "StressTest8",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest8SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest8FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest8Subscription = {
  onUpdateStressTest8?:  {
    __typename: "StressTest8",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest8SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest8FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest8Subscription = {
  onDeleteStressTest8?:  {
    __typename: "StressTest8",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest9SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest9FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest9Subscription = {
  onCreateStressTest9?:  {
    __typename: "StressTest9",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest9SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest9FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest9Subscription = {
  onUpdateStressTest9?:  {
    __typename: "StressTest9",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest9SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest9FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest9Subscription = {
  onDeleteStressTest9?:  {
    __typename: "StressTest9",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest10SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest10FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest10Subscription = {
  onCreateStressTest10?:  {
    __typename: "StressTest10",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest10SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest10FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest10Subscription = {
  onUpdateStressTest10?:  {
    __typename: "StressTest10",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest10SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest10FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest10Subscription = {
  onDeleteStressTest10?:  {
    __typename: "StressTest10",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest11SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest11FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest11Subscription = {
  onCreateStressTest11?:  {
    __typename: "StressTest11",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest11SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest11FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest11Subscription = {
  onUpdateStressTest11?:  {
    __typename: "StressTest11",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest11SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest11FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest11Subscription = {
  onDeleteStressTest11?:  {
    __typename: "StressTest11",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest12SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest12FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest12Subscription = {
  onCreateStressTest12?:  {
    __typename: "StressTest12",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest12SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest12FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest12Subscription = {
  onUpdateStressTest12?:  {
    __typename: "StressTest12",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest12SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest12FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest12Subscription = {
  onDeleteStressTest12?:  {
    __typename: "StressTest12",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest13SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest13FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest13Subscription = {
  onCreateStressTest13?:  {
    __typename: "StressTest13",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest13SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest13FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest13Subscription = {
  onUpdateStressTest13?:  {
    __typename: "StressTest13",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest13SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest13FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest13Subscription = {
  onDeleteStressTest13?:  {
    __typename: "StressTest13",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest14SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest14FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest14Subscription = {
  onCreateStressTest14?:  {
    __typename: "StressTest14",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest14SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest14FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest14Subscription = {
  onUpdateStressTest14?:  {
    __typename: "StressTest14",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest14SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest14FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest14Subscription = {
  onDeleteStressTest14?:  {
    __typename: "StressTest14",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest15SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest15FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest15Subscription = {
  onCreateStressTest15?:  {
    __typename: "StressTest15",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest15SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest15FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest15Subscription = {
  onUpdateStressTest15?:  {
    __typename: "StressTest15",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest15SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest15FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest15Subscription = {
  onDeleteStressTest15?:  {
    __typename: "StressTest15",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest16SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest16FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest16Subscription = {
  onCreateStressTest16?:  {
    __typename: "StressTest16",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest16SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest16FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest16Subscription = {
  onUpdateStressTest16?:  {
    __typename: "StressTest16",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest16SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest16FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest16Subscription = {
  onDeleteStressTest16?:  {
    __typename: "StressTest16",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest17SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest17FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest17Subscription = {
  onCreateStressTest17?:  {
    __typename: "StressTest17",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest17SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest17FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest17Subscription = {
  onUpdateStressTest17?:  {
    __typename: "StressTest17",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest17SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest17FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest17Subscription = {
  onDeleteStressTest17?:  {
    __typename: "StressTest17",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest18SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest18FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest18Subscription = {
  onCreateStressTest18?:  {
    __typename: "StressTest18",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest18SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest18FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest18Subscription = {
  onUpdateStressTest18?:  {
    __typename: "StressTest18",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest18SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest18FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest18Subscription = {
  onDeleteStressTest18?:  {
    __typename: "StressTest18",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest19SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest19FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest19Subscription = {
  onCreateStressTest19?:  {
    __typename: "StressTest19",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest19SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest19FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest19Subscription = {
  onUpdateStressTest19?:  {
    __typename: "StressTest19",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest19SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest19FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest19Subscription = {
  onDeleteStressTest19?:  {
    __typename: "StressTest19",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest20SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest20FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest20Subscription = {
  onCreateStressTest20?:  {
    __typename: "StressTest20",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest20SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest20FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest20Subscription = {
  onUpdateStressTest20?:  {
    __typename: "StressTest20",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest20SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest20FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest20Subscription = {
  onDeleteStressTest20?:  {
    __typename: "StressTest20",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest21SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest21FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest21Subscription = {
  onCreateStressTest21?:  {
    __typename: "StressTest21",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest21SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest21FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest21Subscription = {
  onUpdateStressTest21?:  {
    __typename: "StressTest21",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest21SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest21FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest21Subscription = {
  onDeleteStressTest21?:  {
    __typename: "StressTest21",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest22SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest22FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest22Subscription = {
  onCreateStressTest22?:  {
    __typename: "StressTest22",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest22SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest22FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest22Subscription = {
  onUpdateStressTest22?:  {
    __typename: "StressTest22",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest22SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest22FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest22Subscription = {
  onDeleteStressTest22?:  {
    __typename: "StressTest22",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest23SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest23FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest23Subscription = {
  onCreateStressTest23?:  {
    __typename: "StressTest23",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest23SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest23FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest23Subscription = {
  onUpdateStressTest23?:  {
    __typename: "StressTest23",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest23SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest23FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest23Subscription = {
  onDeleteStressTest23?:  {
    __typename: "StressTest23",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest24SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest24FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest24Subscription = {
  onCreateStressTest24?:  {
    __typename: "StressTest24",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest24SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest24FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest24Subscription = {
  onUpdateStressTest24?:  {
    __typename: "StressTest24",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest24SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest24FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest24Subscription = {
  onDeleteStressTest24?:  {
    __typename: "StressTest24",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest25SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest25FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest25Subscription = {
  onCreateStressTest25?:  {
    __typename: "StressTest25",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest25SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest25FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest25Subscription = {
  onUpdateStressTest25?:  {
    __typename: "StressTest25",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest25SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest25FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest25Subscription = {
  onDeleteStressTest25?:  {
    __typename: "StressTest25",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest26SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest26FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest26Subscription = {
  onCreateStressTest26?:  {
    __typename: "StressTest26",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest26SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest26FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest26Subscription = {
  onUpdateStressTest26?:  {
    __typename: "StressTest26",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest26SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest26FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest26Subscription = {
  onDeleteStressTest26?:  {
    __typename: "StressTest26",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest27SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest27FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest27Subscription = {
  onCreateStressTest27?:  {
    __typename: "StressTest27",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest27SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest27FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest27Subscription = {
  onUpdateStressTest27?:  {
    __typename: "StressTest27",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest27SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest27FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest27Subscription = {
  onDeleteStressTest27?:  {
    __typename: "StressTest27",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest28SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest28FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest28Subscription = {
  onCreateStressTest28?:  {
    __typename: "StressTest28",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest28SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest28FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest28Subscription = {
  onUpdateStressTest28?:  {
    __typename: "StressTest28",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest28SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest28FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest28Subscription = {
  onDeleteStressTest28?:  {
    __typename: "StressTest28",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest29SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest29FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest29Subscription = {
  onCreateStressTest29?:  {
    __typename: "StressTest29",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest29SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest29FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest29Subscription = {
  onUpdateStressTest29?:  {
    __typename: "StressTest29",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest29SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest29FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest29Subscription = {
  onDeleteStressTest29?:  {
    __typename: "StressTest29",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest30SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest30FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest30Subscription = {
  onCreateStressTest30?:  {
    __typename: "StressTest30",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest30SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest30FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest30Subscription = {
  onUpdateStressTest30?:  {
    __typename: "StressTest30",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest30SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest30FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest30Subscription = {
  onDeleteStressTest30?:  {
    __typename: "StressTest30",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest31SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest31FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest31Subscription = {
  onCreateStressTest31?:  {
    __typename: "StressTest31",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest31SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest31FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest31Subscription = {
  onUpdateStressTest31?:  {
    __typename: "StressTest31",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest31SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest31FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest31Subscription = {
  onDeleteStressTest31?:  {
    __typename: "StressTest31",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest32SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest32FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest32Subscription = {
  onCreateStressTest32?:  {
    __typename: "StressTest32",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest32SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest32FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest32Subscription = {
  onUpdateStressTest32?:  {
    __typename: "StressTest32",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest32SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest32FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest32Subscription = {
  onDeleteStressTest32?:  {
    __typename: "StressTest32",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest33SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest33FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest33Subscription = {
  onCreateStressTest33?:  {
    __typename: "StressTest33",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest33SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest33FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest33Subscription = {
  onUpdateStressTest33?:  {
    __typename: "StressTest33",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest33SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest33FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest33Subscription = {
  onDeleteStressTest33?:  {
    __typename: "StressTest33",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest34SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest34FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest34Subscription = {
  onCreateStressTest34?:  {
    __typename: "StressTest34",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest34SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest34FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest34Subscription = {
  onUpdateStressTest34?:  {
    __typename: "StressTest34",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest34SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest34FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest34Subscription = {
  onDeleteStressTest34?:  {
    __typename: "StressTest34",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest35SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest35FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest35Subscription = {
  onCreateStressTest35?:  {
    __typename: "StressTest35",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest35SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest35FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest35Subscription = {
  onUpdateStressTest35?:  {
    __typename: "StressTest35",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest35SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest35FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest35Subscription = {
  onDeleteStressTest35?:  {
    __typename: "StressTest35",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest36SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest36FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest36Subscription = {
  onCreateStressTest36?:  {
    __typename: "StressTest36",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest36SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest36FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest36Subscription = {
  onUpdateStressTest36?:  {
    __typename: "StressTest36",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest36SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest36FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest36Subscription = {
  onDeleteStressTest36?:  {
    __typename: "StressTest36",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest37SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest37FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest37Subscription = {
  onCreateStressTest37?:  {
    __typename: "StressTest37",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest37SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest37FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest37Subscription = {
  onUpdateStressTest37?:  {
    __typename: "StressTest37",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest37SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest37FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest37Subscription = {
  onDeleteStressTest37?:  {
    __typename: "StressTest37",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest38SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest38FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest38Subscription = {
  onCreateStressTest38?:  {
    __typename: "StressTest38",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest38SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest38FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest38Subscription = {
  onUpdateStressTest38?:  {
    __typename: "StressTest38",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest38SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest38FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest38Subscription = {
  onDeleteStressTest38?:  {
    __typename: "StressTest38",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest39SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest39FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest39Subscription = {
  onCreateStressTest39?:  {
    __typename: "StressTest39",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest39SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest39FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest39Subscription = {
  onUpdateStressTest39?:  {
    __typename: "StressTest39",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest39SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest39FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest39Subscription = {
  onDeleteStressTest39?:  {
    __typename: "StressTest39",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest40SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest40FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest40Subscription = {
  onCreateStressTest40?:  {
    __typename: "StressTest40",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest40SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest40FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest40Subscription = {
  onUpdateStressTest40?:  {
    __typename: "StressTest40",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest40SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest40FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest40Subscription = {
  onDeleteStressTest40?:  {
    __typename: "StressTest40",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest41SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest41FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest41Subscription = {
  onCreateStressTest41?:  {
    __typename: "StressTest41",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest41SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest41FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest41Subscription = {
  onUpdateStressTest41?:  {
    __typename: "StressTest41",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest41SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest41FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest41Subscription = {
  onDeleteStressTest41?:  {
    __typename: "StressTest41",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest42SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest42FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest42Subscription = {
  onCreateStressTest42?:  {
    __typename: "StressTest42",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest42SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest42FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest42Subscription = {
  onUpdateStressTest42?:  {
    __typename: "StressTest42",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest42SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest42FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest42Subscription = {
  onDeleteStressTest42?:  {
    __typename: "StressTest42",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest43SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest43FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest43Subscription = {
  onCreateStressTest43?:  {
    __typename: "StressTest43",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest43SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest43FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest43Subscription = {
  onUpdateStressTest43?:  {
    __typename: "StressTest43",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest43SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest43FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest43Subscription = {
  onDeleteStressTest43?:  {
    __typename: "StressTest43",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest44SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest44FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest44Subscription = {
  onCreateStressTest44?:  {
    __typename: "StressTest44",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest44SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest44FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest44Subscription = {
  onUpdateStressTest44?:  {
    __typename: "StressTest44",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest44SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest44FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest44Subscription = {
  onDeleteStressTest44?:  {
    __typename: "StressTest44",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest45SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest45FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest45Subscription = {
  onCreateStressTest45?:  {
    __typename: "StressTest45",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest45SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest45FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest45Subscription = {
  onUpdateStressTest45?:  {
    __typename: "StressTest45",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest45SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest45FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest45Subscription = {
  onDeleteStressTest45?:  {
    __typename: "StressTest45",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest46SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest46FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest46Subscription = {
  onCreateStressTest46?:  {
    __typename: "StressTest46",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest46SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest46FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest46Subscription = {
  onUpdateStressTest46?:  {
    __typename: "StressTest46",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest46SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest46FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest46Subscription = {
  onDeleteStressTest46?:  {
    __typename: "StressTest46",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest47SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest47FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest47Subscription = {
  onCreateStressTest47?:  {
    __typename: "StressTest47",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest47SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest47FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest47Subscription = {
  onUpdateStressTest47?:  {
    __typename: "StressTest47",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest47SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest47FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest47Subscription = {
  onDeleteStressTest47?:  {
    __typename: "StressTest47",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest48SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest48FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest48Subscription = {
  onCreateStressTest48?:  {
    __typename: "StressTest48",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest48SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest48FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest48Subscription = {
  onUpdateStressTest48?:  {
    __typename: "StressTest48",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest48SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest48FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest48Subscription = {
  onDeleteStressTest48?:  {
    __typename: "StressTest48",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest49SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest49FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest49Subscription = {
  onCreateStressTest49?:  {
    __typename: "StressTest49",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest49SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest49FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest49Subscription = {
  onUpdateStressTest49?:  {
    __typename: "StressTest49",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest49SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest49FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest49Subscription = {
  onDeleteStressTest49?:  {
    __typename: "StressTest49",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest50SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest50FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest50Subscription = {
  onCreateStressTest50?:  {
    __typename: "StressTest50",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest50SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest50FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest50Subscription = {
  onUpdateStressTest50?:  {
    __typename: "StressTest50",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest50SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest50FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest50Subscription = {
  onDeleteStressTest50?:  {
    __typename: "StressTest50",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest51SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest51FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest51Subscription = {
  onCreateStressTest51?:  {
    __typename: "StressTest51",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest51SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest51FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest51Subscription = {
  onUpdateStressTest51?:  {
    __typename: "StressTest51",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest51SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest51FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest51Subscription = {
  onDeleteStressTest51?:  {
    __typename: "StressTest51",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest52SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest52FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest52Subscription = {
  onCreateStressTest52?:  {
    __typename: "StressTest52",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest52SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest52FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest52Subscription = {
  onUpdateStressTest52?:  {
    __typename: "StressTest52",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest52SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest52FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest52Subscription = {
  onDeleteStressTest52?:  {
    __typename: "StressTest52",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest53SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest53FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest53Subscription = {
  onCreateStressTest53?:  {
    __typename: "StressTest53",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest53SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest53FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest53Subscription = {
  onUpdateStressTest53?:  {
    __typename: "StressTest53",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest53SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest53FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest53Subscription = {
  onDeleteStressTest53?:  {
    __typename: "StressTest53",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest54SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest54FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest54Subscription = {
  onCreateStressTest54?:  {
    __typename: "StressTest54",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest54SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest54FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest54Subscription = {
  onUpdateStressTest54?:  {
    __typename: "StressTest54",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest54SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest54FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest54Subscription = {
  onDeleteStressTest54?:  {
    __typename: "StressTest54",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest55SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest55FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest55Subscription = {
  onCreateStressTest55?:  {
    __typename: "StressTest55",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest55SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest55FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest55Subscription = {
  onUpdateStressTest55?:  {
    __typename: "StressTest55",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest55SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest55FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest55Subscription = {
  onDeleteStressTest55?:  {
    __typename: "StressTest55",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest56SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest56FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest56Subscription = {
  onCreateStressTest56?:  {
    __typename: "StressTest56",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest56SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest56FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest56Subscription = {
  onUpdateStressTest56?:  {
    __typename: "StressTest56",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest56SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest56FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest56Subscription = {
  onDeleteStressTest56?:  {
    __typename: "StressTest56",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest57SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest57FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest57Subscription = {
  onCreateStressTest57?:  {
    __typename: "StressTest57",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest57SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest57FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest57Subscription = {
  onUpdateStressTest57?:  {
    __typename: "StressTest57",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest57SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest57FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest57Subscription = {
  onDeleteStressTest57?:  {
    __typename: "StressTest57",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest58SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest58FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest58Subscription = {
  onCreateStressTest58?:  {
    __typename: "StressTest58",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest58SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest58FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest58Subscription = {
  onUpdateStressTest58?:  {
    __typename: "StressTest58",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest58SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest58FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest58Subscription = {
  onDeleteStressTest58?:  {
    __typename: "StressTest58",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest59SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest59FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest59Subscription = {
  onCreateStressTest59?:  {
    __typename: "StressTest59",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest59SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest59FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest59Subscription = {
  onUpdateStressTest59?:  {
    __typename: "StressTest59",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest59SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest59FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest59Subscription = {
  onDeleteStressTest59?:  {
    __typename: "StressTest59",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest60SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest60FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest60Subscription = {
  onCreateStressTest60?:  {
    __typename: "StressTest60",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest60SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest60FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest60Subscription = {
  onUpdateStressTest60?:  {
    __typename: "StressTest60",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest60SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest60FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest60Subscription = {
  onDeleteStressTest60?:  {
    __typename: "StressTest60",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest61SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest61FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest61Subscription = {
  onCreateStressTest61?:  {
    __typename: "StressTest61",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest61SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest61FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest61Subscription = {
  onUpdateStressTest61?:  {
    __typename: "StressTest61",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest61SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest61FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest61Subscription = {
  onDeleteStressTest61?:  {
    __typename: "StressTest61",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest62SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest62FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest62Subscription = {
  onCreateStressTest62?:  {
    __typename: "StressTest62",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest62SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest62FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest62Subscription = {
  onUpdateStressTest62?:  {
    __typename: "StressTest62",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest62SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest62FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest62Subscription = {
  onDeleteStressTest62?:  {
    __typename: "StressTest62",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest63SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest63FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest63Subscription = {
  onCreateStressTest63?:  {
    __typename: "StressTest63",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest63SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest63FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest63Subscription = {
  onUpdateStressTest63?:  {
    __typename: "StressTest63",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest63SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest63FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest63Subscription = {
  onDeleteStressTest63?:  {
    __typename: "StressTest63",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest64SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest64FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest64Subscription = {
  onCreateStressTest64?:  {
    __typename: "StressTest64",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest64SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest64FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest64Subscription = {
  onUpdateStressTest64?:  {
    __typename: "StressTest64",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest64SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest64FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest64Subscription = {
  onDeleteStressTest64?:  {
    __typename: "StressTest64",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest65SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest65FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest65Subscription = {
  onCreateStressTest65?:  {
    __typename: "StressTest65",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest65SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest65FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest65Subscription = {
  onUpdateStressTest65?:  {
    __typename: "StressTest65",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest65SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest65FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest65Subscription = {
  onDeleteStressTest65?:  {
    __typename: "StressTest65",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest66SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest66FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest66Subscription = {
  onCreateStressTest66?:  {
    __typename: "StressTest66",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest66SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest66FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest66Subscription = {
  onUpdateStressTest66?:  {
    __typename: "StressTest66",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest66SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest66FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest66Subscription = {
  onDeleteStressTest66?:  {
    __typename: "StressTest66",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest67SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest67FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest67Subscription = {
  onCreateStressTest67?:  {
    __typename: "StressTest67",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest67SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest67FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest67Subscription = {
  onUpdateStressTest67?:  {
    __typename: "StressTest67",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest67SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest67FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest67Subscription = {
  onDeleteStressTest67?:  {
    __typename: "StressTest67",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest68SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest68FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest68Subscription = {
  onCreateStressTest68?:  {
    __typename: "StressTest68",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest68SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest68FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest68Subscription = {
  onUpdateStressTest68?:  {
    __typename: "StressTest68",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest68SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest68FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest68Subscription = {
  onDeleteStressTest68?:  {
    __typename: "StressTest68",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest69SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest69FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest69Subscription = {
  onCreateStressTest69?:  {
    __typename: "StressTest69",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest69SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest69FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest69Subscription = {
  onUpdateStressTest69?:  {
    __typename: "StressTest69",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest69SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest69FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest69Subscription = {
  onDeleteStressTest69?:  {
    __typename: "StressTest69",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest70SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest70FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest70Subscription = {
  onCreateStressTest70?:  {
    __typename: "StressTest70",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest70SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest70FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest70Subscription = {
  onUpdateStressTest70?:  {
    __typename: "StressTest70",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest70SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest70FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest70Subscription = {
  onDeleteStressTest70?:  {
    __typename: "StressTest70",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest71SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest71FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest71Subscription = {
  onCreateStressTest71?:  {
    __typename: "StressTest71",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest71SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest71FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest71Subscription = {
  onUpdateStressTest71?:  {
    __typename: "StressTest71",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest71SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest71FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest71Subscription = {
  onDeleteStressTest71?:  {
    __typename: "StressTest71",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest72SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest72FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest72Subscription = {
  onCreateStressTest72?:  {
    __typename: "StressTest72",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest72SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest72FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest72Subscription = {
  onUpdateStressTest72?:  {
    __typename: "StressTest72",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest72SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest72FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest72Subscription = {
  onDeleteStressTest72?:  {
    __typename: "StressTest72",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest73SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest73FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest73Subscription = {
  onCreateStressTest73?:  {
    __typename: "StressTest73",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest73SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest73FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest73Subscription = {
  onUpdateStressTest73?:  {
    __typename: "StressTest73",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest73SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest73FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest73Subscription = {
  onDeleteStressTest73?:  {
    __typename: "StressTest73",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest74SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest74FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest74Subscription = {
  onCreateStressTest74?:  {
    __typename: "StressTest74",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest74SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest74FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest74Subscription = {
  onUpdateStressTest74?:  {
    __typename: "StressTest74",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest74SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest74FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest74Subscription = {
  onDeleteStressTest74?:  {
    __typename: "StressTest74",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest75SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest75FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest75Subscription = {
  onCreateStressTest75?:  {
    __typename: "StressTest75",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest75SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest75FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest75Subscription = {
  onUpdateStressTest75?:  {
    __typename: "StressTest75",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest75SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest75FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest75Subscription = {
  onDeleteStressTest75?:  {
    __typename: "StressTest75",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest76SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest76FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest76Subscription = {
  onCreateStressTest76?:  {
    __typename: "StressTest76",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest76SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest76FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest76Subscription = {
  onUpdateStressTest76?:  {
    __typename: "StressTest76",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest76SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest76FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest76Subscription = {
  onDeleteStressTest76?:  {
    __typename: "StressTest76",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest77SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest77FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest77Subscription = {
  onCreateStressTest77?:  {
    __typename: "StressTest77",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest77SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest77FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest77Subscription = {
  onUpdateStressTest77?:  {
    __typename: "StressTest77",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest77SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest77FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest77Subscription = {
  onDeleteStressTest77?:  {
    __typename: "StressTest77",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest78SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest78FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest78Subscription = {
  onCreateStressTest78?:  {
    __typename: "StressTest78",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest78SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest78FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest78Subscription = {
  onUpdateStressTest78?:  {
    __typename: "StressTest78",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest78SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest78FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest78Subscription = {
  onDeleteStressTest78?:  {
    __typename: "StressTest78",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest79SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest79FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest79Subscription = {
  onCreateStressTest79?:  {
    __typename: "StressTest79",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest79SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest79FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest79Subscription = {
  onUpdateStressTest79?:  {
    __typename: "StressTest79",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest79SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest79FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest79Subscription = {
  onDeleteStressTest79?:  {
    __typename: "StressTest79",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest80SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest80FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest80Subscription = {
  onCreateStressTest80?:  {
    __typename: "StressTest80",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest80SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest80FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest80Subscription = {
  onUpdateStressTest80?:  {
    __typename: "StressTest80",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest80SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest80FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest80Subscription = {
  onDeleteStressTest80?:  {
    __typename: "StressTest80",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest81SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest81FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest81Subscription = {
  onCreateStressTest81?:  {
    __typename: "StressTest81",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest82Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest81SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest81FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest81Subscription = {
  onUpdateStressTest81?:  {
    __typename: "StressTest81",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest82Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest81SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest81FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest81Subscription = {
  onDeleteStressTest81?:  {
    __typename: "StressTest81",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest82Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest82SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest82FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest82Subscription = {
  onCreateStressTest82?:  {
    __typename: "StressTest82",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest81ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest81RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest82SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest82FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest82Subscription = {
  onUpdateStressTest82?:  {
    __typename: "StressTest82",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest81ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest81RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest82SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest82FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest82Subscription = {
  onDeleteStressTest82?:  {
    __typename: "StressTest82",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest81ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest81RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest83SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest83FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest83Subscription = {
  onCreateStressTest83?:  {
    __typename: "StressTest83",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest84Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest83SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest83FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest83Subscription = {
  onUpdateStressTest83?:  {
    __typename: "StressTest83",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest84Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest83SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest83FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest83Subscription = {
  onDeleteStressTest83?:  {
    __typename: "StressTest83",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest84Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest84SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest84FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest84Subscription = {
  onCreateStressTest84?:  {
    __typename: "StressTest84",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest83ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest83RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest84SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest84FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest84Subscription = {
  onUpdateStressTest84?:  {
    __typename: "StressTest84",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest83ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest83RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest84SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest84FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest84Subscription = {
  onDeleteStressTest84?:  {
    __typename: "StressTest84",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest83ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest83RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest85SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest85FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest85Subscription = {
  onCreateStressTest85?:  {
    __typename: "StressTest85",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest86Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest85SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest85FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest85Subscription = {
  onUpdateStressTest85?:  {
    __typename: "StressTest85",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest86Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest85SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest85FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest85Subscription = {
  onDeleteStressTest85?:  {
    __typename: "StressTest85",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest86Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest86SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest86FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest86Subscription = {
  onCreateStressTest86?:  {
    __typename: "StressTest86",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest85ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest85RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest86SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest86FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest86Subscription = {
  onUpdateStressTest86?:  {
    __typename: "StressTest86",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest85ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest85RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest86SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest86FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest86Subscription = {
  onDeleteStressTest86?:  {
    __typename: "StressTest86",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest85ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest85RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest87SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest87FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest87Subscription = {
  onCreateStressTest87?:  {
    __typename: "StressTest87",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest88Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest87SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest87FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest87Subscription = {
  onUpdateStressTest87?:  {
    __typename: "StressTest87",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest88Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest87SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest87FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest87Subscription = {
  onDeleteStressTest87?:  {
    __typename: "StressTest87",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest88Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest88SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest88FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest88Subscription = {
  onCreateStressTest88?:  {
    __typename: "StressTest88",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest87ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest87RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest88SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest88FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest88Subscription = {
  onUpdateStressTest88?:  {
    __typename: "StressTest88",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest87ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest87RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest88SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest88FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest88Subscription = {
  onDeleteStressTest88?:  {
    __typename: "StressTest88",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest87ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest87RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest89SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest89FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest89Subscription = {
  onCreateStressTest89?:  {
    __typename: "StressTest89",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest90Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest89SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest89FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest89Subscription = {
  onUpdateStressTest89?:  {
    __typename: "StressTest89",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest90Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest89SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest89FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest89Subscription = {
  onDeleteStressTest89?:  {
    __typename: "StressTest89",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    relatedItems?:  {
      __typename: "ModelStressTest90Connection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest90SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest90FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest90Subscription = {
  onCreateStressTest90?:  {
    __typename: "StressTest90",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest89ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest89RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest90SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest90FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest90Subscription = {
  onUpdateStressTest90?:  {
    __typename: "StressTest90",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest89ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest89RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest90SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest90FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest90Subscription = {
  onDeleteStressTest90?:  {
    __typename: "StressTest90",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    stressTest89ID?: string | null,
    createdAt: string,
    updatedAt: string,
    stressTest89RelatedItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest91SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest91FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest91Subscription = {
  onCreateStressTest91?:  {
    __typename: "StressTest91",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest91SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest91FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest91Subscription = {
  onUpdateStressTest91?:  {
    __typename: "StressTest91",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest91SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest91FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest91Subscription = {
  onDeleteStressTest91?:  {
    __typename: "StressTest91",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest92SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest92FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest92Subscription = {
  onCreateStressTest92?:  {
    __typename: "StressTest92",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest92SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest92FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest92Subscription = {
  onUpdateStressTest92?:  {
    __typename: "StressTest92",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest92SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest92FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest92Subscription = {
  onDeleteStressTest92?:  {
    __typename: "StressTest92",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest93SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest93FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest93Subscription = {
  onCreateStressTest93?:  {
    __typename: "StressTest93",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest93SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest93FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest93Subscription = {
  onUpdateStressTest93?:  {
    __typename: "StressTest93",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest93SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest93FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest93Subscription = {
  onDeleteStressTest93?:  {
    __typename: "StressTest93",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest94SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest94FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest94Subscription = {
  onCreateStressTest94?:  {
    __typename: "StressTest94",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest94SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest94FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest94Subscription = {
  onUpdateStressTest94?:  {
    __typename: "StressTest94",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest94SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest94FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest94Subscription = {
  onDeleteStressTest94?:  {
    __typename: "StressTest94",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest95SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest95FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest95Subscription = {
  onCreateStressTest95?:  {
    __typename: "StressTest95",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest95SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest95FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest95Subscription = {
  onUpdateStressTest95?:  {
    __typename: "StressTest95",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest95SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest95FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest95Subscription = {
  onDeleteStressTest95?:  {
    __typename: "StressTest95",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest96SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest96FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest96Subscription = {
  onCreateStressTest96?:  {
    __typename: "StressTest96",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest96SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest96FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest96Subscription = {
  onUpdateStressTest96?:  {
    __typename: "StressTest96",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest96SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest96FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest96Subscription = {
  onDeleteStressTest96?:  {
    __typename: "StressTest96",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest97SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest97FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest97Subscription = {
  onCreateStressTest97?:  {
    __typename: "StressTest97",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest97SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest97FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest97Subscription = {
  onUpdateStressTest97?:  {
    __typename: "StressTest97",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest97SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest97FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest97Subscription = {
  onDeleteStressTest97?:  {
    __typename: "StressTest97",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest98SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest98FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest98Subscription = {
  onCreateStressTest98?:  {
    __typename: "StressTest98",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest98SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest98FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest98Subscription = {
  onUpdateStressTest98?:  {
    __typename: "StressTest98",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest98SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest98FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest98Subscription = {
  onDeleteStressTest98?:  {
    __typename: "StressTest98",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest99SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest99FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest99Subscription = {
  onCreateStressTest99?:  {
    __typename: "StressTest99",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest99SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest99FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest99Subscription = {
  onUpdateStressTest99?:  {
    __typename: "StressTest99",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest99SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest99FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest99Subscription = {
  onDeleteStressTest99?:  {
    __typename: "StressTest99",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStressTest100SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest100FilterInput | null,
  owner?: string | null,
};

export type OnCreateStressTest100Subscription = {
  onCreateStressTest100?:  {
    __typename: "StressTest100",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStressTest100SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest100FilterInput | null,
  owner?: string | null,
};

export type OnUpdateStressTest100Subscription = {
  onUpdateStressTest100?:  {
    __typename: "StressTest100",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStressTest100SubscriptionVariables = {
  filter?: ModelSubscriptionStressTest100FilterInput | null,
  owner?: string | null,
};

export type OnDeleteStressTest100Subscription = {
  onDeleteStressTest100?:  {
    __typename: "StressTest100",
    id: string,
    name: string,
    data?: string | null,
    value?: number | null,
    active?: boolean | null,
    timestamp?: string | null,
    status?: StressTestStatus | null,
    priority?: StressTestPriority | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
