import React from "react";
import { gifImages } from "../Images/Cloud/gifs";
import ThumbnailGallery from "./Styled/ThumbnailGallery";
import { PageBox } from "./Styled/CustomBoxes";

const GifGallery: React.FC = () => {
  return (
    <PageBox
      sx={{
        width: "100%",
        height: "100%",
        margin: 0,
        paddingY: "12vh",
      }}
    >
      <ThumbnailGallery images={gifImages} />;
    </PageBox>
  );
};

export default GifGallery;
