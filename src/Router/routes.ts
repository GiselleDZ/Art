import { ReactComponentElement, ReactNode } from "react";
import ErrorPage from "./ErrorPage";
import GifGallery from "../Components/GifGallery";
import Home from "../Components/Home";
import BubbleAnimation from "../Components/Animations/BubbleAnimation";
import WebsitePieces from "../Components/WebsitePieces";
import About from "../Components/About";
import Projects from "../Components/Projects";
import ConductivityResistivity from "../Components/Projects/ConductivityResistivity";
import ModularLandscapes from "../Components/Projects/ModularLandscapes";
import TheHarm from "../Components/Projects/The Harm";
import conductivityResistivityData from "../Components/Projects/ProjectData/conductivityResistivity";
import modularLandscapesData from "../Components/Projects/ProjectData/modularLandscapes";
import theHarmData from "../Components/Projects/ProjectData/theHarm";

export type RouteType = {
  path: string;
  element: React.FC;
  errorElement?: JSX.Element;
};

const projectsPath = "/projects";

const routes: RouteType[] = [
  {
    path: "/gifs",
    element: GifGallery as React.FC,
  },
  {
    // INDEX ROUTE - ADD INDEX TO <ROUTE>
    path: "/",
    element: Home as React.FC,
  },
  // {
  //   path: "/images",
  //   element: WebsitePieces as React.FC,
  // },
  {
    path: projectsPath,
    element: Projects as React.FC,
  },
  // {
  //   path: "/sites/bubble",
  //   element: BubbleAnimation as React.FC,
  // },
  {
    path: "/about",
    element: About as React.FC,
  },
  // {
  //     path: "/",
  //     // element: <Home />,
  //     errorElement: <ErrorPage />,
  //   },
];

interface ProjectRouteType extends RouteType {
  title: string;
  description: string;
  image: string;
  year: number;
}

export const projectsRoutes: ProjectRouteType[] = [
  {
    path: `/conductivityresistivity`,
    title: conductivityResistivityData.title,
    description: conductivityResistivityData.description,
    year: conductivityResistivityData.year,
    element: ConductivityResistivity as React.FC,
    image: conductivityResistivityData.coverImage,
  },
  {
    path: `/modularlandscapes`,
    title: modularLandscapesData.title,
    description: modularLandscapesData.description,
    year: modularLandscapesData.year,
    element: ModularLandscapes as React.FC,
    image: modularLandscapesData.coverImage,
  },
  {
    path: `/theharm`,
    title: theHarmData.title,
    description: theHarmData.description,
    year: theHarmData.year,
    element: TheHarm as React.FC,
    image: theHarmData.coverImage,
  },
];

export default routes;
