import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  controls: {
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  marginRight: {
    marginRight: theme.spacing(2)
  },
}));

export default useStyles;