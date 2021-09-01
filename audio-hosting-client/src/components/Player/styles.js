import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  playerContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    textAlign: "center"
  },
  canvas: {
    boxShadow: "0px 0px 1px",
  }
}));

export default useStyles;