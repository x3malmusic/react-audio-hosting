import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  playerContainer: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1250,
    backgroundColor: "white",
    "& canvas": {
      display: "none"
    }
  },
}));

export default useStyles;