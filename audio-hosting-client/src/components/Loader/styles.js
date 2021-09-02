import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
}));

export default useStyles;