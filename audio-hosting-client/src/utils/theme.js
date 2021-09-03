import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  constants: {
    mainWidth: 1280,
    headerHeight: 80,
    sidebarWidth: 300,
    btnWidth: 120,
    playlistHeight: 600,
  },
  color: {
    palette: {
      sidebar: "#4d61d3",
      light: "#d9dfff",
      shadow: "rgba(34, 60, 80, 0.2)",
    }
  }
});

export default theme;