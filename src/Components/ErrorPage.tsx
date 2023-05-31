import { Box, Typography } from "@mui/material";
import { PageBox } from "./Styled/CustomBoxes";

const ErrorPage = () => {
  return (
    <PageBox
      p={4}
      sx={{
        paddingY: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Typography variant="h1">oops</Typography>
      <Typography variant="h5">We couldn't find that page.</Typography>
    </PageBox>
  );
};

export default ErrorPage;
