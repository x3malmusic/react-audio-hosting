import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  playerContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    overflowX: "hidden",
    boxShadow: "0 0 2px 0 #ccc",
  },
  canvas: {
    display: "none",
    width: "100%",
    boxShadow: `0px 0px 3px 0 ${theme.color.palette.shadow}`,
  },
  show: {
    display: "block",
  },
}));

export default useStyles;