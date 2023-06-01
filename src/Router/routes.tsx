import GifGallery from "../Components/GifGallery";
import Home from "../Components/Home";
import BubbleAnimation from "../Components/Animations/BubbleAnimation";
import WebsitePieces from "../Components/WebsitePieces";
import About from "../Components/About";
import Projects from "../Components/Projects";
import projectsData from "../Components/Projects/ProjectData";
import ProjectTemplate from "../Components/Projects/ProjectTemplate";
import ErrorBoundary from "../Components/ErrorPage";
import { RouteObject } from "react-router-dom";

const projectsPath = "/projects";

export const projectRoutes = projectsData.map((project) => ({
  path: `/projects/${project.path}`,
  element: <ProjectTemplate project={project} />,
}));

const routes: RouteObject[] = [
  {
    path: "/gifs",
    element: <GifGallery />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: projectsPath,
    element: <Projects />,
    children: projectRoutes,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <ErrorBoundary />,
  },
  // {
  //   path: "/sites/bubble",
  //   element: BubbleAnimation as React.FC,
  // },
  // {
  //     path: "/",
  //     // element: <Home />,
  //     errorElement: <ErrorPage />,
  //   },
];

export default routes;
