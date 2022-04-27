import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  loading: {
    marginLeft: theme.spacing(1)
  }
}));

export default useStyles;