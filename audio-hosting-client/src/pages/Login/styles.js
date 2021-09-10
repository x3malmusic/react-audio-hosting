import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  login: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  form: {
    maxWidth: 400,
    width: "100%",
    padding: theme.spacing(2),
    boxShadow: "2px 4px 27px 0px rgba(34, 60, 80, 0.2)",
    borderRadius: 5
  },
  input: {
    width: "100%",
    marginBottom: theme.spacing(1),
    "&:last-of-type": {
      marginBottom: theme.spacing(2)
    }
  },
  btn: {
    padding: "12px 10px"
  },
  controlsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  link: {
    textDecoration: "none",
    marginLeft: theme.spacing(1)
  },
  title: {
    fontWeight: "bold",
    fontSize: 48,
    textShadow: `1px -1px 10px ${theme.color.palette.light}`,
    color: theme.color.palette.sidebar,
    marginBottom: theme.spacing(1),
  },
  errorMessage: {
    fontSize: 12
  }
}));

export default useStyles;