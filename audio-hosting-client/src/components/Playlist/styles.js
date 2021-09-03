import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  playlist: {
    overflowX: "auto",
    width: "100%",
    maxHeight: theme.constants.playlistHeight,
    padding: 0,
    boxShadow: "-1px 0 0 0 rgba(34, 60, 80, 0.2)",
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