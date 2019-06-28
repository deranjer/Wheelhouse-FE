import { createMuiTheme } from "@material-ui/core/styles";

//.MuiInputLabel-outlined.MuiInputLabel-shrink

function getTheme(theme) {
  const palette = theme.paletteType || "light";
  return createMuiTheme({
    overrides: {
      // adding spacing actually increases the width causing a super annoying horizontal scrollbar
      // this should fix it for all containers and still have the spacing *between* the elements
      MuiGrid: {
        container: {
          width: "100%!important",
          margin: "0!important",
        },
      },
      MuiPaper: {
        root: {
          padding: 10,
        },
      },
    },
    palette: {
      type: palette,
      primary: {
        main: "#532d8e",
        light: "#7b1fa2",
        dark: "#7556a4",
      },
      secondary: {
        main: "#645f61",
        light: "#504c4d",
        dark: "#837e80",
      },
      success: {
        contrastText: "#ffffff",
        main: "#45B880",
        light: "#F1FAF5",
        dark: "#00783E",
      },
      info: {
        contrastText: "#ffffff",
        main: "#1070CA",
        light: "#F1FBFC",
        dark: "#007489",
      },
      warning: {
        contrastText: "#ffffff",
        main: "#FFB822",
        light: "#FDF8F3",
        dark: "#95591E",
      },
      danger: {
        contrastText: "#ffffff",
        main: "#ED4740",
        light: "#FEF6F6",
        dark: "#BF0E08",
      },
      text: {
        primary: palette === "light" ? "#12161B" : "#f8fafc",
        secondary: palette === "light" ? "#66788A" : "#cdcdcd",
        disabled: palette === "light" ? "#A6B1BB" : "#969696",
      },
      background: {
        default: palette === "light" ? "#f8fafc" : "#242424",
        dark: palette === "light" ? "#e6e8ea" : "#121212",
        paper: palette === "light" ? "#fff" : "#000",
      },
      border: "#DFE3E8",
      divider: "#DFE3E8",
    },
  });
}

export default getTheme;
