import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contentRoot: {
    maxWidth: theme.constants.mainWidth,
    width: "100%",
    boxSizing: "border-box",
    color: theme.palette.primary.main,
    fontSize: 48,
    padding: theme.spacing(2)
  },
}));

export default useStyles;