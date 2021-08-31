import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(3)
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoText: {
    marginLeft: theme.spacing(2)
  },
  logoImg: {
    transform: "scale(1.3)"
  }
}));

export default useStyles;