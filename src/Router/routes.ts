import { ReactComponentElement, ReactNode } from "react";
import Gifs, { GifsProps } from "../Components/Gifs";
import ErrorPage from "./ErrorPage";

export type RouteType = {
  path: string;
  element: React.FC;
  errorElement?: JSX.Element;
};

const routes: RouteType[] = [
  {
    path: "/gifs",
    element: Gifs as React.FC,
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
