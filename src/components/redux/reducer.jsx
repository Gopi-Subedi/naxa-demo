import { GET_PROJECT_LIST, SET_PROJECT_LIST } from "./actionConstant";

export const projectData = (data = [], action) => {
  switch (action.type) {
    case GET_PROJECT_LIST:
      console.warn("GET_PROJECT_LIST condition");
      return data;

    case SET_PROJECT_LIST:
      console.warn("SET_PROJECT_LIST condition");
      var clipedData = action.data.filter(
        (item) => item.is_key_highlight === true
      );
      console.log("Clipped Data ", clipedData);
      return [...clipedData];

    default:
      return data;
  }
};
