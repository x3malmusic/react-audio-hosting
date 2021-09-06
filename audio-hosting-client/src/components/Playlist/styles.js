import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  playlist: {
    overflowX: "auto",
    width: "100%",
    maxHeight: theme.constants.playlistHeight,
    padding: 0,
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