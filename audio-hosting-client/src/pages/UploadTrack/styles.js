import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "max-content",
  },
  uploadProgress: {
    position: "relative",
    marginTop: theme.spacing(2),
  },
  progressBar: {
    width: "100%",
    height: 32
  },
  progressValue: {
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  loader: {
    color: "white",
  },
  controls: {
    display: "flex",
  },
  input: {
    marginRight: theme.spacing(2)
  }
}));

export default useStyles;