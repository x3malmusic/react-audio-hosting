import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "fixed",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    height: theme.constants.headerHeight,
    width: "100%",
    boxSizing: "border-box"
  },
}));

export default useStyles;