import { ReactComponentElement, ReactNode } from "react";
import ErrorPage from "./ErrorPage";
import GifGallery from "../../Components/GifGallery";
import Home from "../../Components/Home";
import BubbleAnimation from "../../Components/Animations/BubbleAnimation";
import WebsitePieces from "../../Components/WebsitePieces";
import About from "../../Components/About";
import Projects from "../../Components/Projects";
import ConductivityResistivity from "../../Components/Projects/ProjectPages/ConductivityResistivity";
import ModularLandscapes from "../../Components/Projects/ProjectPages/ModularLandscapes";
import TheHarm from "../../Components/Projects/ProjectPages/TheHarm";
import conductivityResistivityData from "../../Components/Projects/ProjectData/conductivityResistivity";
import modularLandscapesData from "../../Components/Projects/ProjectData/modularLandscapes";
import theHarmData from "../../Components/Projects/ProjectData/theHarm";
import alienShipData from "../../Components/Projects/ProjectData/alienShip";
import AlienShip from "../../Components/Projects/ProjectPages/AlienShip";
import cajonDepPenaData from "../../Components/Projects/ProjectData/cajonDePena";
import CajonDePena from "../../Components/Projects/ProjectPages/CajonDePena";
import crudeVesselsData from "../../Components/Projects/ProjectData/crudeVessels";
import CrudeVessels from "../../Components/Projects/ProjectPages/CrudeVessels";
import discreteSystemsData from "../../Components/Projects/ProjectData/discreteSystems";
import DiscreteSystems from "../../Components/Projects/ProjectPages/DiscreteSystems";
import dnsData from "../../Components/Projects/ProjectData/dns";
import DNS from "../../Components/Projects/ProjectPages/DNS";
import hashTagDData from "../../Components/Projects/ProjectData/hashTagD";
import HashTagD from "../../Components/Projects/ProjectPages/HashTagD";
import IcosaTotems from "../../Components/Projects/ProjectPages/IcosaTotems";
import icosaTotemsData from "../../Components/Projects/ProjectData/icosaTotems";
import initiatorFactorOneData from "../../Components/Projects/ProjectData/initiatorFactorOne";
import InitiatorFactorOne from "../../Components/Projects/ProjectPages/InitiatorFactorOne";
import intangibilityData from "../../Components/Projects/ProjectData/intangibility";
import Intangibility from "../../Components/Projects/ProjectPages/Intangibility";
import opalOnyxData from "../../Components/Projects/ProjectData/opalOnyx";
import OpalOnyx from "../../Components/Projects/ProjectPages/OpalOnyx";
import othiData from "../../Components/Projects/ProjectData/othi";
import OTHI from "../../Components/Projects/ProjectPages/OTHI";
import refractionData from "../../Components/Projects/ProjectData/refraction";
import Refraction from "../../Components/Projects/ProjectPages/Refraction";
import swampData from "../../Components/Projects/ProjectData/swamp";
import SwampSwarm from "../../Components/Projects/ProjectPages/SwampSwarm";
import theInternetData from "../../Components/Projects/ProjectData/theInternet";
import TheInternet from "../../Components/Projects/ProjectPages/TheInternet";
import dreamspaceTundraData from "../../Components/Projects/ProjectData/tundra";
import Tundra from "../../Components/Projects/ProjectPages/Tundra";
import waysOfSomethingData from "../../Components/Projects/ProjectData/waysOfSomething";
import WaysOfSomething from "../../Components/Projects/ProjectPages/WaysOfSomthing";

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
    path: `/alienship`,
    title: alienShipData.title,
    description: alienShipData.description,
    year: alienShipData.year,
    element: AlienShip as React.FC,
    image: alienShipData.coverImage,
  },
  {
    path: `/cajondepena`,
    title: cajonDepPenaData.title,
    description: cajonDepPenaData.description,
    year: cajonDepPenaData.year,
    element: CajonDePena as React.FC,
    image: cajonDepPenaData.coverImage,
  },
  {
    path: `/conductivityresistivity`,
    title: conductivityResistivityData.title,
    description: conductivityResistivityData.description,
    year: conductivityResistivityData.year,
    element: ConductivityResistivity as React.FC,
    image: conductivityResistivityData.coverImage,
  },
  {
    path: `/crudevessels`,
    title: crudeVesselsData.title,
    description: crudeVesselsData.description,
    year: crudeVesselsData.year,
    element: CrudeVessels as React.FC,
    image: crudeVesselsData.coverImage,
  },
  {
    path: `/discretesystems`,
    title: discreteSystemsData.title,
    description: discreteSystemsData.description,
    year: discreteSystemsData.year,
    element: DiscreteSystems as React.FC,
    image: discreteSystemsData.coverImage,
  },
  {
    path: `/dns`,
    title: dnsData.title,
    description: dnsData.description,
    year: dnsData.year,
    element: DNS as React.FC,
    image: dnsData.coverImage,
  },
  {
    path: `/hashtagD`,
    title: hashTagDData.title,
    description: hashTagDData.description,
    year: hashTagDData.year,
    element: HashTagD as React.FC,
    image: hashTagDData.coverImage,
  },
  {
    path: `/icosatotems`,
    title: icosaTotemsData.title,
    description: icosaTotemsData.description,
    year: icosaTotemsData.year,
    element: IcosaTotems as React.FC,
    image: icosaTotemsData.coverImage,
  },
  {
    path: `/initiatorFactorOne`,
    title: initiatorFactorOneData.title,
    description: initiatorFactorOneData.description,
    year: initiatorFactorOneData.year,
    element: InitiatorFactorOne as React.FC,
    image: initiatorFactorOneData.coverImage,
  },
  {
    path: `/intangibility`,
    title: intangibilityData.title,
    description: intangibilityData.description,
    year: intangibilityData.year,
    element: Intangibility as React.FC,
    image: intangibilityData.coverImage,
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
    path: `/opalonyx`,
    title: opalOnyxData.title,
    description: opalOnyxData.description,
    year: opalOnyxData.year,
    element: OpalOnyx as React.FC,
    image: opalOnyxData.coverImage,
  },
  {
    path: `/othi`,
    title: othiData.title,
    description: othiData.description,
    year: othiData.year,
    element: OTHI as React.FC,
    image: othiData.coverImage,
  },
  {
    path: `/refraction`,
    title: refractionData.title,
    description: refractionData.description,
    year: refractionData.year,
    element: Refraction as React.FC,
    image: refractionData.coverImage,
  },
  {
    path: `/swampspiritswarm`,
    title: swampData.title,
    description: swampData.description,
    year: swampData.year,
    element: SwampSwarm as React.FC,
    image: swampData.coverImage,
  },
  {
    path: `/theharm`,
    title: theHarmData.title,
    description: theHarmData.description,
    year: theHarmData.year,
    element: TheHarm as React.FC,
    image: theHarmData.coverImage,
  },
  {
    path: `/theinternet`,
    title: theInternetData.title,
    description: theInternetData.description,
    year: theInternetData.year,
    element: TheInternet as React.FC,
    image: theInternetData.coverImage,
  },
  {
    path: `/tundra`,
    title: dreamspaceTundraData.title,
    description: dreamspaceTundraData.description,
    year: dreamspaceTundraData.year,
    element: Tundra as React.FC,
    image: dreamspaceTundraData.coverImage,
  },
  {
    path: `/waysofsomething`,
    title: waysOfSomethingData.title,
    description: waysOfSomethingData.description,
    year: waysOfSomethingData.year,
    element: WaysOfSomething as React.FC,
    image: waysOfSomethingData.coverImage,
  },
];

export default routes;
