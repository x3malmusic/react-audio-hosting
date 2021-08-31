import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import PublishIcon from '@material-ui/icons/Publish';

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
]

export default routes