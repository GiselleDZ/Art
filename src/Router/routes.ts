import { ReactComponentElement, ReactNode } from "react";
import ErrorPage from "./ErrorPage";
import GifGallery from "../Components/GifGallery";

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
  // {
  //   path: "/",
  // INDEX ROUTE - ADD INDEX TO <ROUTE>
  //   element: <Gifs />,
  // },
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
