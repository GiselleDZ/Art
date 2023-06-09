import { Box, Button, Card, Typography } from "@mui/material";
import { BoxforThumbNails, PageBox } from "./Styled/CustomBoxes";
import { Link } from "react-router-dom";
import projectsData from "./Projects/ProjectData";

const Projects = () => {
  return (
    <PageBox sx={{ paddingY: "12vh", height: "100%", width: "100%" }}>
      <BoxforThumbNails>
        {projectsData.map((r) => (
          <Link to={`${window.location}/${r.path}`} key={r.path} style={{textDecoration: "none"}}>
       
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
                    marginTop: "20px",
                    marginBottom: "10px",
                  }}
                />
                <Typography variant="h3" sx={{ lineHeight: "130%" }}>
                  {r.title}
                </Typography>
              </Box>
          </Link>
        ))}
      </BoxforThumbNails>
    </PageBox>
  );
};

export default Projects;
