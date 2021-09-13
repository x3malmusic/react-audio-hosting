import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  settings: {
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    display: "grid",
    gap: theme.spacing(2),
    width: theme.constants.mainWidth / 3,
    gridTemplateColumns: "repeat(1, 1fr)",
    boxShadow: "2px 4px 27px 0px rgba(34, 60, 80, 0.2)",
    height: "100%",
  },
  columnContainer: {
    display: "grid",
    gap: theme.spacing(1),
  },
  formRow: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    padding: theme.spacing(1.5),
    width: "100%",
  },
  range: {
    cursor: "pointer",
  },
  grow: {
    flexGrow: 1,
  },
  checkbox: {
    marginLeft: "auto",
  },
  label: {
    flexBasis: theme.constants.mainWidth / 11,
    textAlign: "right",
    marginRight: theme.spacing(2),
  },
  btn: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2)
  },
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end",
  }
}));

export default useStyles;