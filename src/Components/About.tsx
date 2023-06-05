import { Box, Typography } from "@mui/material";

import aboutText from "../Helpers/aboutText";
import { PageBox } from "./Styled/CustomBoxes";

const About = () => {
  return (
    <PageBox
      sx={{
        width: "100%",
        margin: 0,
        padding: "15vh",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ height: { xs: "100%", sm: "100vh" } }}>
        {aboutText.map((par, i) => (
          <Typography variant="body2" key={`About-Para-${i}`} mb={2}>
            {par}
          </Typography>
        ))}
      </Box>
    </PageBox>
  );
};

export default About;
