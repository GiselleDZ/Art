import GifGallery from "./GifGallery";

import { gifImages } from "../Images/Cloud/images";

export type GifsProps = {};

const Gifs: React.FC = ({}: GifsProps) => {
  return <GifGallery images={gifImages}></GifGallery>;
};

export default Gifs;
