import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: theme.color.palette.sidebar,
    width: "100%",
    maxWidth: theme.constants.sidebarWidth,
    color: "white",
    top: theme.constants.headerHeight,
    border: 'none'
  },
  img: {
    marginRight: theme.spacing(3),
    transform: "scale(1.5)"
  },
  links: {
    padding: 0,
  },
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "white",
  },
  icon: {
    marginRight: theme.spacing(2)
  }
}));

export default useStyles;