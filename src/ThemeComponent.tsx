/**
 * This file exports a React component called ThemeComponent. The component provides a Material-UI theme to its children, and changes the theme based on the user's preference for light or dark mode.
 **/

import { Box, CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import createMyTheme from "./theme";

/**
 * Determines whether the user's device has a preference for dark mode.
 * Returns `true` if the device has a preference for dark mode, `false` otherwise.
 */
const getPrefersDarkMode = () => {
  if (typeof window !== "undefined") {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }
  return false;
};

interface ThemeComponentProps {
  children: React.ReactNode;
}

/**
 * `ThemeComponent` is a React component that provides a Material-UI theme to its children.
 * The theme changes based on the user's preference for light or dark mode.
 */
const ThemeComponent = ({ children }: ThemeComponentProps) => {
  /**
   * State hook to keep track of the theme.
   * The initial theme is created using the `createMyTheme` function,
   * with `getPrefersDarkMode` as the argument.
   */
  const [theme, setTheme] = useState<Theme>(
    createMyTheme(getPrefersDarkMode())
  );

  /**
   * `useEffect` hook to listen for changes in the user's preference for dark mode.
   * The hook adds an event listener to the window's `matchMedia` object,
   * and updates the theme when the preference changes.
   */
  useEffect(() => {
    const updateThemeOnPreferenceChange = (event: MediaQueryListEvent) => {
      setTheme(createMyTheme(event.matches));
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateThemeOnPreferenceChange);

    return () => {
      mediaQuery.removeEventListener("change", updateThemeOnPreferenceChange);
    };
  }, []);

  /**
   * Renders the `ThemeProvider` component from Material-UI,
   * providing the theme to its children.
   * A `CssBaseline` component is also included,
   * providing a consistent base for the styles in the theme.
   * A Material-UI `Box` component is used to provide a background color for the children,
   * with a style of `backgroundColor: theme.palette.primary.main`.
   * The `height` and `paddingY` styles are also set.
   * The children are then rendered within the `Box` component.
   */
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          height: "100%",
          "&::webkit-scrollbar": {
            width: "10px",
            backgroundColor: "#616283",
          },
          "&::webkit-scrollbar-track": {
            backgroundColor: "#616283",
          },
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default ThemeComponent;
