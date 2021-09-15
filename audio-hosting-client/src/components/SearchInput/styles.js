import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    padding: theme.spacing(1.5),
    fontSize: 14,
  },
  inputWrapper: {
    maxWidth: theme.constants.sidebarWidth,
    width: "100%",
  }
}));

export default useStyles;