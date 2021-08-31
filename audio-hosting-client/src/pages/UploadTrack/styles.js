import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  uploadProgress: {
    position: "relative",
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    maxWidth: 430,
    width: "100%",
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
  }
}));

export default useStyles;