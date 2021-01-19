import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { favoriteReducer } from "./favoriteReducer";

export default combineReducers({
  login: loginReducer,
  favorite: favoriteReducer,
});
