import { createStore, applyMiddleware, combineReducers } from "redux";
import loggerMiddleware from "redux-logger";
import thunk from "redux-thunk";
import campuses from "./campuses";
import students from "./students";
import currStudent from "./currStudent";
import currCampus from "./currCampus";

const reducer = combineReducers({
  students,
  campuses,
  currStudent,
  currCampus,
});

const store = createStore(reducer, applyMiddleware(thunk, loggerMiddleware));

export default store;
