/**
 * theme.js
 *
 * This file defines a custom MUI theme for the application. The theme
 * includes custom colors, typography, and component overrides.
 *
 * Usage:
 *
 * Import this theme in your application and wrap your application with
 * a ThemeProvider that uses this custom theme.
 *
 */
import { createTheme } from "@mui/material/styles";

const createMyTheme = (prefersDarkMode) =>
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    direction: "ltr",
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            margin: 0,
            paddingX: 0,
          },
        },
      },
      MuiBox: {
        styleOverrides: {
          root: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            display: "flex",
            justifyContent: "space between",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: "rgb(97, 98, 131, 0.3)",
            backgroundFilter: "blur(8px)",
            boxShadow: "10px 10px 42px -14px rgba(0, 0, 0, .8)",
          },
        },
      },
      MuiImageList: {
        styleOverrides: {
          root: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gridGap: "24px !important",
            overflowY: "visible",
          },
        },
      },
      MuiImageListItem: {
        styleOverrides: {
          root: {
            width: "220px",
            height: "220px !important",
            boxSizing: "border-box",
            overflow: "hidden",
            borderRadius: "8px",
            border: prefersDarkMode
              ? "1px solid rgb(209, 188, 227, .5)"
              : "1px solid rgb(14,17,22,0.5)",
            position: "relative",
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.01)",
            },
          },
        },
      },
      MuiModal: {
        styleOverrides: {
          root: {
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          },
          backdrop: {
            background: "rgb(97, 98, 131, 0.1)",
            backdropFilter: "blur(8px)",
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: "#F1F1EC",
            textDecoration: "underline",
            textDecorationThickness: ".5px",
            textUnderlineOffset: "2px",
          },
        },
      },
    },
    mixins: {
      toolbar: {
        minHeight: 56,
        "@media (min-width: 0px) and (orientation: landscape)": {
          minHeight: 48,
        },
        "@media (min-width: 600px)": {
          minHeight: 64,
        },
      },
    },
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
      primary: {
        main: prefersDarkMode ? "#0E1116" : "#D1BCE3",
        dark: "#0E1116",
        light: "#D1BCE3",
      },
      secondary: {
        main: prefersDarkMode ? "#616283" : "#CB9CF2",
        dark: "#616283",
        light: "#CB9CF2",
      },
      error: {
        main: "#AA3E98",
      },
      warning: {
        main: "#E08E45",
      },
      info: {
        main: "#3ABEFF",
      },
      success: {
        main: "#06D6A0",
      },
      background: {
        default: "#0E1116",
        paper: "#D1BCE3",
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.54)",
        disabled: "rgba(0, 0, 0, 0.38)",
        hint: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
    },
    shape: {
      borderRadius: 4,
    },
    spacing: 8,
    typography: {
      fontFamily: "Ubuntu', sans-serif",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      htmlFontSize: 16,
      h1: {
        fontFamily: "MuseoModerno, cursive",
        fontSize: 32,
        fontWeight: 700,
        lineHeight: "112%",
        color: prefersDarkMode ? "#D1BCE3" : "#0E1116",
        fontStyle: "normal",
      },
      h2: {
        fontFamily: "MuseoModerno, cursive",
        fontSize: 12,
        fontWeight: 700,
        lineHeight: "100%",
        color: prefersDarkMode ? "#D1BCE3" : "#0E1116",
        fontStyle: "normal",
      },
      body1: {
        fontFamily: "Ubuntu, sans-serif",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "100%",
        color: prefersDarkMode ? "#D1BCE3" : "#0E1116",
        fontStyle: "normal",
      },
      body2: {
        fontFamily: "Ubuntu, sans-serif",
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "150%",
        color: prefersDarkMode ? "#616283" : "#CB9CF2",
        fontStyle: "normal",
      },
      subtitle2: {
        fontFamily: "Ubuntu Mono, monospace",
        fontSize: 12,
        fontWeight: 600,
        lineHeight: "150%",
        color: prefersDarkMode ? "#616283" : "#CB9CF2",
        fontStyle: "normal",
      },
    },
    zIndex: {
      mobileStepper: 1000,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
  });

export default createMyTheme;
