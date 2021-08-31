import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  playlistItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "black",
    overflowY: "auto",
    transition: "background-color .3s ease",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.color.palette.light
    },
  },
  playBtn: {
    marginRight: theme.spacing(1),
    opacity: 0
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
    marginLeft: theme.spacing(2)
  }
}));

export default useStyles;