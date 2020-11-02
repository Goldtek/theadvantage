import { combineReducers } from "redux";
import UserReducer from "./user";
import CourseReducer from './course';
import Cart from "./cart";

const rootReducer = combineReducers({
  Cart,
  User: UserReducer,
  Course:CourseReducer,
});
export default rootReducer;
