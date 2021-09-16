import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    overflow: "hidden",
    borderRadius: theme.spacing(1),
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    boxShadow: "2px 4px 27px 0px rgba(34, 60, 80, 0.2)",
    height: theme.constants.playlistHeight,
    position: "relative",
  },
  playerContainer: {
    boxShadow: theme.constants.shadow,
  },
  controls: {
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  marginRight: {
    marginRight: theme.spacing(2)
  },
  drawer: {
    maxWidth: "50%",
  },
  drawerPaper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    border: "none",
    maxWidth: "50%",
    boxShadow: theme.constants.shadow,
    zIndex: 5,
  },
}));

export default useStyles;