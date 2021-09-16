import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  playlistItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "black",
    overflowY: "auto",
    transition: "background-color .3s ease",
    padding: 0,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.color.palette.light
    },
  },
  playBtn: {
    marginRight: theme.spacing(1),
    opacity: 0
  },
  deleteBtn: {
    color: theme.color.palette.red,
    transition: "opacity .4s ease-in-out",
  },
  playBtnHover: {
    opacity: 1
  },
  chosenSong: {
    backgroundColor: theme.color.palette.light
  },
  name: {
    flexGrow: 1,
  },
  duration: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  }
}));

export const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 }
};