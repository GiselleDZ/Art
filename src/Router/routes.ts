import { ReactComponentElement, ReactNode } from "react";
import ErrorPage from "./ErrorPage";
import GifGallery from "../Components/GifGallery";
import Home from "../Components/Home";
import BubbleAnimation from "../Components/Animations/BubbleAnimation";
import WebsitePieces from "../Components/WebsitePieces";
import About from "../Components/About";

export type RouteType = {
  path: string;
  element: React.FC;
  errorElement?: JSX.Element;
};

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
  {
    path: "/sites",
    element: WebsitePieces as React.FC,
  },
  {
    path: "/sites/bubble",
    element: BubbleAnimation as React.FC,
  },
  // {
  //     path: "/",
  //     // element: <Home />,
  //     errorElement: <ErrorPage />,
  //   },
  {
    path: "/about",
    element: About as React.FC,
  },
];

export default routes;
