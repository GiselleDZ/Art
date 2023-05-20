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
import conductivityResistivityData from "../Helpers/ProjectData/conductivityResistivity";

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
  // {
  //   path: "/video",
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
    title: "Modular Landscapes",
    description:
      "A series of ship windows traveling to an array of landscapes.",
    year: 2016,
    element: ModularLandscapes as React.FC,
    image:
      "https://res.cloudinary.com/delu9m4xu/image/upload/v1684540837/Art-Site/Modular-Landscapes/ggrphcllyindtrmntfntss-modulardoc-03_kvwl8l.jpg",
  },
  {
    path: `/theharm`,
    title: "The Harm Of Coming To Existence",
    description:
      "A music video for the song The Harm of Coming into Existence by ambient musician Richard Cruz.",
    year: 2016,
    element: TheHarm as React.FC,
    image:
      "https://res.cloudinary.com/delu9m4xu/image/upload/v1684541479/Art-Site/theHarm/theharm-still-05_zh4ceq.jpg",
  },
];

export default routes;
