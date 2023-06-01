import { Box, Typography, useTheme } from "@mui/material";
import { PageBox } from "./Styled/CustomBoxes";
import { Error } from "@mui/icons-material";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();
  const theme = useTheme();

  const isRouterError = isRouteErrorResponse(error);

  const isDarkMode = theme.palette.mode === "dark";

  return (
    <PageBox
      sx={{
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundImage: `url(https://res.cloudinary.com/delu9m4xu/image/upload/v1681945152/Art-Site/laurie.gif)`,
        filter: isDarkMode ? "invert(100) brightness(90%)" : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          marginTop: `${window.innerHeight / 2.5}px`,
          padding: "20px 60px",
          backgroundColor: isDarkMode ? "#0E1116" : "#D1BCE3",
          borderRadius: "8px",
          opacity: isDarkMode ? 0.8 : 0.8,
          filter: isDarkMode ? "invert(100)" : "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Error />
        <Typography variant="h1" mb={1} mt={1}>
          {isRouterError ? `${error.status}: ${error.statusText}` : "Ooops"}
        </Typography>
        <Typography variant="body1">
          {isRouterError ? error.data : "Something went wrong :("}
        </Typography>
      </Box>
    </PageBox>
  );
}

export default ErrorBoundary;
