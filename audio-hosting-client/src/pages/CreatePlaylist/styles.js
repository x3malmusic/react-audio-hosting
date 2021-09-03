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
    padding: theme.spacing(2),
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: 5
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#ccc",
      borderRadius: 5
    },
  },
  newPlaylist: {
    overflowX: "auto",
    width: "100%",
    padding: 0,
    boxShadow: "-1px 0 0 0 rgba(34, 60, 80, 0.2)",
    maxHeight: theme.constants.playlistHeight,
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