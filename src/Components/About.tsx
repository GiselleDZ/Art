import { Box, Typography } from "@mui/material";

import BlobbyHexagon from "./Animations/BlobbyHexagon";
import aboutText from "../Helpers/aboutText";

const About = () => {
  return (
    <Box
      sx={{
        width: "100%",
        margin: 0,
        padding: "15vh",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {aboutText.map((par, i) => (
        <Typography variant="body2" key={`About-Para-${i}`} mb={2}>
          {par}
        </Typography>
      ))}
    </Box>
  );
};

export default About;
