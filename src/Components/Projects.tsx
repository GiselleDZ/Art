import { Box, Button, Card, Typography } from "@mui/material";
import { BoxforThumbNails } from "./Styled/CustomBoxes";
import { Link } from "react-router-dom";
import { projectsRoutes } from "../Router/routes";

const Projects = () => {
  return (
    <BoxforThumbNails sx={{ paddingY: "12vh" }}>
      {projectsRoutes.map((r) => (
        <Link to={`${window.location}${r.path}`} key={r.path}>
          <Button>
            <Box
              sx={{
                width: "200px",
                textOverflow: "wrap",
                margin: "0 20px 60px 0",
              }}
            >
              <Card
                sx={{
                  backgroundImage: `url(${r.image})`,
                  backgroundSize: "cover",
                  marginBottom: "20px",
                }}
              />
              <Typography variant="h3" mb={2}>
                {r.title}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: "150%" }}>
                {r.description}
              </Typography>
            </Box>
          </Button>
        </Link>
      ))}
    </BoxforThumbNails>
  );
};

export default Projects;
