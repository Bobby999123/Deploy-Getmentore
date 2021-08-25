import { combineReducers } from "redux";
import userReducer from "./userReducer";
import projectsReducer from "./projectsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  projects: projectsReducer,
});

export default rootReducer;
