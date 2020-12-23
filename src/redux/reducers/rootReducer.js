import { combineReducers } from "redux";
import UserReducer from "./user";
import CourseReducer from './course';
import EventReducer from './event';
import Cart from "./cart";

const rootReducer = combineReducers({
  Cart,
  User: UserReducer,
  Course:CourseReducer,
  Event: EventReducer,
});
export default rootReducer;
