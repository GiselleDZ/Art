import { Route, Routes } from "react-router-dom";
import routes, { RouteType } from "./routes";

const MainRouter = () => {
  return (
    <Routes>
      {routes.map((r: RouteType) => (
        <Route path={r.path} Component={r.element} key={r.path} />
      ))}
    </Routes>
  );
};

export default MainRouter;
