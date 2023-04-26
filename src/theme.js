/**
 * theme.ts
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

const theme = createTheme({
  // Define custom colors for the theme
  palette: {
    colors: {
      bg: {
        primary: "#0E1116",
        secondary: "#616283",
        // 70: "rgba(21, 21, 21, 0.7)",
      },
      fg: {
        primary: "#D1BCE3",
        secondary: "#CB9CF2",
        // 50: "rgba(241, 241, 236, 0.5)",
        // 25: "rgba(241, 241, 236, 0.25)",
      },
      accent: {
        sky: "#3ABEFF",
        emerald: "#06D6A0",
        slate: "#374A67",
        orange: "#E08E45",
        green: "#D6FFB7",
        yellow: "#FAFF7F",
        indigo: "#420E6C",
        magenta: "#AA3E98",
      },
    },
  },
  // Google Fonts:
  // font-family: 'Cutive Mono', monospace;
  // font-family: 'MuseoModerno', cursive;
  // font-family: 'Ubuntu', sans-serif;
  // font-family: 'Ubuntu Mono', monospace;
  // Define custom typography settings for the theme
  typography: {
    fontFamily: "Ubuntu', sans-serif",
    h1: {
      fontFamily: "MuseoModerno, cursive",
      fontSize: 32,
      fontWeight: 700,
      lineHeight: "112%",
      color: "#F1F1EC",
      fontStyle: "normal",
    },
    h2: {
      fontFamily: "MuseoModerno, cursive",
      fontSize: 12,
      fontWeight: 700,
      lineHeight: "100%",
      color: "#F1F1EC",
      fontStyle: "normal",
    },
    body1: {
      fontFamily: "Ubuntu, sans-serif",
      fontSize: 12,
      fontWeight: 400,
      lineHeight: "100%",
      color: "#F1F1EC",
      fontStyle: "normal",
    },
    body2: {
      fontFamily: "Ubuntu, sans-serif",
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "150%",
      color: "#F1F1EC",
      fontStyle: "normal",
    },
    subtitle2: {
      fontFamily: "Ubuntu Mono, monospace",
      fontSize: 12,
      fontWeight: 600,
      lineHeight: "150%",
      color: "#F1F1EC",
      fontStyle: "normal",
    },
  },
  // Define custom component style overrides for the theme
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
    MiuBox: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
          border: "1px solid rgba(241, 241, 236, 0.5)",
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
    MuiTooltip: {
      styleOverrides: {
        root: {
          arrow: true,
          placement: "top-start",
          borderRadius: "4px",
          border: "1px solid rgba(241, 241, 236, 0.5)",
          color: "#F1F1EC",
          background: "rgba(21, 21, 21, 0.7)",
          fontFamily: "Ubuntu', sans-serif",
          fontSize: 12,
        },
      },
    },
  },
});

export default theme;
