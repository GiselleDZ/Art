import { Route, Routes } from "react-router-dom";
import routes, { RouteType } from "./routes";
import ErrorPage from "./ErrorPage";
import Gifs from "../Components/Gifs";

const MainRouter = () => {
  return (
    <Routes>
      {routes.map((r: RouteType) => (
        <Route path={r.path} Component={Gifs} key={r.path} />
      ))}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainRouter;
