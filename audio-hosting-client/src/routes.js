import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import PublishIcon from '@material-ui/icons/Publish';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import SettingsIcon from '@material-ui/icons/Settings';

import Main from "./pages/Main"
import UploadTrack from "./pages/UploadTrack";
import CreatePlaylist from "./pages/CreatePlaylist";
import Settings from "./pages/Settings";

import Login from "./pages/Login";
import Register from "./pages/Register";

import withPlayer from "./components/withPlayer/withPlayer";

export const routes =  [
  {
    path: "/",
    component: Main,
    Icon: AudiotrackIcon,
    name: "Player",
    exact: true
  },
  {
    path: "/upload",
    component: withPlayer(UploadTrack),
    Icon: PublishIcon,
    name: "Upload track",
  },
  {
    path: "/create-playlist",
    component: withPlayer(CreatePlaylist),
    Icon: PlaylistAddIcon,
    name: "Create playlist",
  },
  {
    path: "/settings",
    component: withPlayer(Settings),
    Icon: SettingsIcon,
    name: "Settings",
  },
]

export const publicRoutes =  [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
]