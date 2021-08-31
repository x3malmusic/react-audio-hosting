import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  constants: {
    mainWidth: 1280,
    headerHeight: 80,
    sidebarWidth: 300,
    btnWidth: 120
  },
  color: {
    palette: {
      sidebar: "#4d61d3",
      light: "#d9dfff",
    }
  }
});

export default theme;