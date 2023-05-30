import { Box, Button, Card, Typography } from "@mui/material";
import { BoxforThumbNails } from "./Styled/CustomBoxes";
import { Link } from "react-router-dom";
import projectsData from "./Projects/ProjectData";

const Projects = () => {
  return (
    <BoxforThumbNails sx={{ paddingY: "12vh" }}>
      {projectsData.map((r) => (
        <Link to={`${window.location}/${r.path}`} key={r.path}>
          <Button>
            <Box
              sx={{
                width: "200px",
                textOverflow: "wrap",
                margin: "0 20px 20px 0",
              }}
            >
              <Card
                sx={{
                  backgroundImage: `url(${r.coverImage})`,
                  backgroundSize: "cover",
                  marginBottom: "20px",
                }}
              />
              <Typography variant="h3">{r.title}</Typography>
            </Box>
          </Button>
        </Link>
      ))}
    </BoxforThumbNails>
  );
};

export default Projects;
