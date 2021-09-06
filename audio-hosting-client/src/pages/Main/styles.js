import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    boxShadow: "2px 4px 27px 0px rgba(34, 60, 80, 0.2)",
  },
  playlistContainer: {
    boxShadow: "-1px 0 0 0 rgba(34, 60, 80, 0.2)",
    height: theme.constants.playlistHeight,
  }
}));

export default useStyles;