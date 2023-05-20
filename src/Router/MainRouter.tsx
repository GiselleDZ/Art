import { Route, Routes } from "react-router-dom";
import routes, { RouteType, projectsRoutes } from "./routes";

const MainRouter = () => {
  return (
    <Routes>
      {routes.map((r: RouteType) => (
        <Route path={r.path} Component={r.element} key={r.path} />
      ))}
      {projectsRoutes.map((pr) => (
        <Route
          path={`/projects${pr.path}`}
          Component={pr.element}
          key={pr.path}
        />
      ))}
    </Routes>
  );
};

export default MainRouter;
