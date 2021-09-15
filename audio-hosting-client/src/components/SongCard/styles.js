import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    position: "relative",
    height: theme.constants.songCardValue,
    width: theme.constants.songCardValue,
    margin: "0 auto",
    cursor: "pointer",
  },
  iconContainer: {
    position: "relative",
    lineHeight: 0,
    display: "flex",
    justifyContent: "center",
  },
  iconMusic: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transform: "translate(90%, 50%)",
    color: "white",
    zIndex: 1
  },
  iconFile: {
    fontSize: 48,
  },
  songName: {
    fontSize: 14,
    color: "black",
  },
  fullSongName: {
    fontSize: 14,
    position:"absolute",
    top: 48,
    left: 0,
    backgroundColor: "white",
    zIndex: 2,
    color: "black",
  },
  selected: {
    backgroundColor: theme.color.palette.shadow
  }
}));

export default useStyles;