import { useLocation, useMatch, useParams } from "react-router-dom";
import projectsData, { projectDataType } from "./ProjectData";
import ProjectTemplate from "./ProjectTemplate";
import { Typography } from "@mui/material";

const Project = () => {
  const { id } = useParams();

  const project = projectsData.find(
    (project: projectDataType) => project.path === id
  );

  if (!project) return <Typography>This project doesn't exist</Typography>;

  return <ProjectTemplate project={project} />;
};

export default Project;
