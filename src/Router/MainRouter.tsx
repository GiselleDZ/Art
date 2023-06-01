import { createBrowserRouter } from "react-router-dom";
import routes, { RouteType } from "./routes";

import projectsData, {
  projectDataType,
} from "../Components/Projects/ProjectData";
import Project from "../Components/Projects/Project";
import ErrorBoundary from "../Components/ErrorPage";

const mainRoutes = routes.map((r: RouteType) => ({
  path: r.path,
  Component: r.element as React.FC,
  errorElement: <ErrorBoundary />,
  // errorElement: <div>OOOOOPS</div>,
}));

const projectRoutes = projectsData.map((project: projectDataType) => ({
  path: `/projects/${project.path}`,
  element: <Project project={project} />,
  errorElement: <ErrorBoundary />,
  // errorElement: <div>OOOOOPS</div>,
}));

const allRoutes = [
  ...mainRoutes,
  ...projectRoutes,
  // { errorElement: <ErrorBoundary /> },
  // { path: "*", element: <ErrorPage /> },
];

const MainRouter = createBrowserRouter(allRoutes);

export default MainRouter;
