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
    boxSizing: "border-box",
    zIndex: 10
  },
  btnContainer: {
    display: "flex",
    alignItems: "center"
  },
  username: {
    marginRight: theme.spacing(2),
    fontSize: 18,
    fontStyle: "italic"
  }
}));

export default useStyles;