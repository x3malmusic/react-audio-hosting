import { combineReducers } from "redux";
import user from "./user";
import player from "./player";
import loading from "./loading";

export default combineReducers({ user, player, loading });
