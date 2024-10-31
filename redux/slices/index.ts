import { combineReducers } from "@reduxjs/toolkit";
import serviceModalReducer from "./serviceModalSlice/serviceModalSlice";
import taskReducer from "./taskSlice/taskSlice";

const rootReducer = combineReducers({
  serviceModalSlice: serviceModalReducer,
  taskSlice: taskReducer,
});

export default rootReducer;
