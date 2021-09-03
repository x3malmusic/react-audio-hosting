import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  createPlaylistContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    boxShadow: "2px 4px 27px 0px rgba(34, 60, 80, 0.2)",
  },
  allSongs: {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${theme.constants.songCardValue}px, 1fr))`,
    maxHeight: theme.constants.playlistHeight,
    overflowX: "hidden",
    padding: theme.spacing(2),
    "&::-webkit-scrollbar": {
      width: 5
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#ccc",
      borderRadius: 5
    },
  }
}));

export default useStyles;