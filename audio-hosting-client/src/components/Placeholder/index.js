import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';

import { history } from "../../utils/history";
import { fn } from "../../utils"
import { CREATE_PLAYLIST_PAGE } from '../../routes/pathnames';

export const ADD_PLAYLIST = "ADD_PLAYLIST"
export const DROP_SONGS_HERE = "DROP_SONGS_HERE"

export const placeholderItems = {
  [ADD_PLAYLIST]: {
    title: "Create your first playlist",
    icon: LibraryAddIcon,
    action: () => history.push(CREATE_PLAYLIST_PAGE),
    isButton: true,
  },
  [DROP_SONGS_HERE]: {
    title: "Drag and drop your songs here",
    icon: OpenInBrowserIcon,
    action: fn
  },
}