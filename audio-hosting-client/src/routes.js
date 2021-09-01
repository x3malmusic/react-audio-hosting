import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import PublishIcon from '@material-ui/icons/Publish';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import Main from "./pages/Main"
import UploadTrack from "./pages/UploadTrack";

const routes =  [
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
]

export default routes