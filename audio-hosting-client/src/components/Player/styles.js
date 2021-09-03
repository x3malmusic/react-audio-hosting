import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  playerContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    textAlign: "center",
    overflowX: "hidden",
  },
  canvas: {
    width: "100%",
    boxShadow: `0px 0px 3px 0 ${theme.color.palette.shadow}`,
  }
}));

export default useStyles;