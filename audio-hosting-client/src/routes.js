import { Redirect } from "react-router-dom";

import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import PublishIcon from '@material-ui/icons/Publish';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import Main from "./pages/Main"
import UploadTrack from "./pages/UploadTrack";

import Login from "./pages/Login";
import Register from "./pages/Register";

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
    component: UploadTrack,
    Icon: PublishIcon,
    name: "Upload track",
  },
  {
    path: "/create-playlist",
    component: null,
    Icon: PlaylistAddIcon,
    name: "Create playlist",
  },
  {
    path: "/songs",
    component: null,
    Icon: LibraryMusicIcon,
    name: "My songs",
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
  {
    path: "*",
    component: () => <Redirect to="/login" />,
  },
]