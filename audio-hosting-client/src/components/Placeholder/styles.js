import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  addPlaylist: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  icon: {
    width: theme.constants.iconSize,
    height: theme.constants.iconSize,
    marginBottom: theme.spacing(0.5),
  },
  text: {
    fontSize: 18
  }
}));

export default useStyles;