import {
  Route,
  RouteObject,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import routes, { projectRoutes } from "./routes";
import ErrorBoundary from "../Components/ErrorPage";
import NavBar from "../Components/NavBar";

interface LayoutProps {
  children: RouteObject[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Routes>
        {children.map((c) => (
          <Route path={c.path} element={c.element} />
        ))}
      </Routes>
    </>
  );
};

export const allRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout children={[...routes, ...projectRoutes]} />,
    children: routes,
  },
];

const MainRouter = createBrowserRouter(allRoutes);

export default MainRouter;
