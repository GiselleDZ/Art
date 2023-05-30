import { Route, Routes } from "react-router-dom";
import routes, { RouteType } from "./routes";

import projectsData, {
  projectDataType,
} from "../../Components/Projects/ProjectData";
import Project from "../../Components/Projects/Project";

const MainRouter = () => {
  return (
    <Routes>
      {routes.map((r: RouteType) => (
        <Route path={r.path} Component={r.element} key={r.path} />
      ))}
      {projectsData.map((project: projectDataType) => {
        console.log(project);
        return (
          <Route
            key={project.path}
            path={`/projects/:id`}
            Component={Project as React.FC}
          />
        );
      })}
    </Routes>
  );
};

export default MainRouter;
