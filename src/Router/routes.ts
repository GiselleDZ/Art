import { ReactComponentElement, ReactNode } from "react";
import ErrorPage from "./ErrorPage";
import GifGallery from "../Components/GifGallery";
import Home from "../Components/Home";

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
  // {
  //     path: "/",
  //     // element: <Home />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  //   {
  //     path: "/blog",
  //     element: <BlogPage />,
  //   },
];

export default routes;
