import { combineReducers } from "redux";
import UserReducer from "./user";
const rootReducer = combineReducers({
  users: UserReducer,
});
export default rootReducer;
