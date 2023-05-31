import { Navigate, useParams } from "react-router-dom";
import projectsData, { projectDataType } from "./ProjectData";
import ProjectTemplate from "./ProjectTemplate";
import { Typography } from "@mui/material";

type ProjectProps = {
  project: projectDataType;
};

const Project = ({ project }: ProjectProps) => {
  return <ProjectTemplate project={project} />;
};

export default Project;
