import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  allSongs: {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${theme.constants.songCardValue}px, 1fr))`,
    gridTemplateRows: `repeat(auto-fill, minmax(${theme.constants.songCardValue}px, 1fr))`,
    height: theme.constants.playlistHeight,
    boxSizing: "border-box",
    padding: theme.spacing(2),
    boxShadow: theme.constants.shadow,
    overflow: "auto",
    "& .selectable-selectbox": {
      Zindex: 9000,
      position: "absolute",
      cursor: "default",
      background: "none",
      border: "1px dashed grey",
    },
    "&::-webkit-scrollbar": {
      width: 5
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#ccc",
      borderRadius: 5
    },
  },
}));

export default useStyles;