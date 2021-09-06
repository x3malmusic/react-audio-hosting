import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  createPlaylistContainer: {
    overflow: "hidden",
    borderRadius: theme.spacing(1),
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    boxShadow: "2px 4px 27px 0px rgba(34, 60, 80, 0.2)",
  },
  allSongs: {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${theme.constants.songCardValue}px, 1fr))`,
    gridTemplateRows: `repeat(auto-fill, minmax(${theme.constants.songCardValue}px, 1fr))`,
    height: theme.constants.playlistHeight,
    boxSizing: "border-box",
    padding: theme.spacing(2),
    boxShadow: theme.constants.shadow,
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
    height: theme.constants.playlistHeight,
    boxShadow: "-1px 0 0 0 rgba(34, 60, 80, 0.2)",
  }
}));

export default useStyles;