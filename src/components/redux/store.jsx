import { configureStore } from "@reduxjs/toolkit";
import mySaga from "./saga";
import createSagaMiddleware from "redux-saga";
import { projectData } from "./reducer";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: projectData,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(mySaga);
export default store;
