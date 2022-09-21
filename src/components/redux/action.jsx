import { GET_PROJECT_LIST, SET_PROJECT_LIST } from "./actionConstant";

export const getProjectList = (data) => {
  return {
    type: GET_PROJECT_LIST,
  };
};
