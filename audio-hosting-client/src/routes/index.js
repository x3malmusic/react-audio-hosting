import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import PublishIcon from '@material-ui/icons/Publish';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import SettingsIcon from '@material-ui/icons/Settings';

import { 
  MAIN_PAGE,
  UPLOAD_PAGE,
  CREATE_PLAYLIST_PAGE,
  SETTINGS_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
 } from './pathnames'

import Main from "../pages/Main"
import UploadTrack from "../pages/UploadTrack";
import CreatePlaylist from "../pages/CreatePlaylist";
import Settings from "../pages/Settings";

import Login from "../pages/Login";
import Register from "../pages/Register";

import withPlayer from "../HOCs/withPlayer/withPlayer";

export const routes =  [
  {
    path: MAIN_PAGE,
    component: Main,
    Icon: AudiotrackIcon,
    name: "Player",
    exact: true
  },
  {
    path: UPLOAD_PAGE,
    component: withPlayer(UploadTrack),
    Icon: PublishIcon,
    name: "Upload track",
  },
  {
    path: CREATE_PLAYLIST_PAGE,
    component: withPlayer(CreatePlaylist),
    Icon: PlaylistAddIcon,
    name: "Create playlist",
  },
  {
    path: SETTINGS_PAGE,
    component: withPlayer(Settings),
    Icon: SettingsIcon,
    name: "Settings",
  },
]

export const publicRoutes =  [
  {
    path: LOGIN_PAGE,
    component: Login,
  },
  {
    path: REGISTER_PAGE,
    component: Register,
  },
]