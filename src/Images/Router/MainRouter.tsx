import { Navigate, Route, Routes } from "react-router-dom";
import routes, { RouteType } from "./routes";

import projectsData, {
  projectDataType,
} from "../../Components/Projects/ProjectData";
import Project from "../../Components/Projects/Project";
import ErrorPage from "./ErrorPage";

const MainRouter = () => {
  return (
    <>
      <Routes>
        {routes.map((r: RouteType) => (
          <Route path={r.path} Component={r.element} key={r.path} />
        ))}
        {projectsData.map((project: projectDataType) => (
          <Route
            key={project.path}
            path={`/projects/:id`}
            element={<Project project={project} />}
          />
        ))}
        {/* <Route path="*" errorElement={<ErrorPage />} /> */}
      </Routes>
    </>
  );
};

export default MainRouter;
