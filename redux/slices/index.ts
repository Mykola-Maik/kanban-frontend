import { combineReducers } from "@reduxjs/toolkit";
import serviceModalReducer from "@/redux/slices/serviceModalSlice/serviceModalSlice";
import taskReducer from "@/redux/slices/taskSlice/taskSlice";

const rootReducer = combineReducers({
  serviceModalSlice: serviceModalReducer,
  taskSlice: taskReducer,
});

export default rootReducer;
