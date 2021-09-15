import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  createPlaylistContainer: {
    overflow: "hidden",
    borderRadius: theme.spacing(1),
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    boxShadow: "2px 4px 27px 0px rgba(34, 60, 80, 0.2)",
  },
}));

export default useStyles;