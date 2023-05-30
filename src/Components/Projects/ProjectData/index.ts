import alienShipData from "./alienShip";
import cajonDePenaData from "./cajonDePena";
import conductivityResistivityData from "./conductivityResistivity";
import crudeVesselsData from "./crudeVessels";
import discreteSystemsData from "./discreteSystems";
import dnsData from "./dns";
import hashTagDData from "./hashTagD";
import icosaTotemsData from "./icosaTotems";
import initiatorFactorOneData from "./initiatorFactorOne";
import intangibilityData from "./intangibility";
import modularLandscapesData from "./modularLandscapes";
import opalOnyxData from "./opalOnyx";
import othiData from "./othi";
import refractionData from "./refraction";
import swampData from "./swamp";
import theHarmData from "./theHarm";
import theInternetData from "./theInternet";
import tundraData from "./tundra";
import waysOfSomethingData from "./waysOfSomething";

export type projectDataType = {
  path: string;
  title: string;
  coverImage: string;
  description: string;
  year: number;
  projectPhotos?: string[];
  detailedDescription?: string;
  link?: string;
  videos?: string[];
  installPhotos?: string[];
  invitations?: string[];
};

const projectsData = [
  alienShipData,
  cajonDePenaData,
  conductivityResistivityData,
  crudeVesselsData,
  discreteSystemsData,
  dnsData,
  hashTagDData,
  icosaTotemsData,
  initiatorFactorOneData,
  intangibilityData,
  modularLandscapesData,
  opalOnyxData,
  othiData,
  refractionData,
  swampData,
  theHarmData,
  theInternetData,
  tundraData,
  waysOfSomethingData,
];

export default projectsData;
