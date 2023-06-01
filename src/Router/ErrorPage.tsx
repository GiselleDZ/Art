import { Box, Typography } from "@mui/material";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  const isResError = isRouteErrorResponse(error);

  return (
    <Box>
      <Typography variant="h1">Oops</Typography>
      <Typography variant="h3">Sorry an unexpected error occured.</Typography>
      {isResError ? (
        <Box id="detailed-error">
          <Typography variant="h2">
            {error.status}: {error.statusText}
          </Typography>
          <Typography variant="body1">{error.data}</Typography>
        </Box>
      ) : (
        <i>Unknown Error</i>
      )}
    </Box>
  );
}
