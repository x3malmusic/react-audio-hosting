import { combineReducers } from "redux";
import user from "./user";
import player from "./player";
import loading from "./loading";
import newPlaylist from "./createPlaylist";

export default combineReducers({ user, player, loading, newPlaylist });
