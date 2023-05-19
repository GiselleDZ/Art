import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { ImageList, Modal } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import GifImage from "./GifImage";
import { gifImages } from "../Images/Cloud/gifs";

type ImageData = {
  src: string;
  caption: string;
};

const blankImage = { src: "", caption: "" };

const GifGallery: React.FC = () => {
  const [displayedImage, setDisplayedImage] = useState<ImageData>(blankImage);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "delu9m4xu",
    },
  });

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        margin: 0,
        paddingY: "12vh",
      }}
    >
      <Modal
        open={!!displayedImage.src}
        onClose={() => setDisplayedImage(blankImage)}
        aria-labelledby="lightbox"
        aria-describedby={`lightbox image ${displayedImage.caption}`}
      >
        <Box
          onClick={() => setDisplayedImage(blankImage)}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginY: "5vh",
            "&:focus": {
              outline: "none",
            },
          }}
        >
          <AdvancedImage
            cldImg={cld.image(displayedImage.src).resize(fill())}
            alt={displayedImage.caption}
            plugins={[lazyload(), placeholder()]}
            style={{ maxHeight: "80vh", maxWidth: "80vw" }}
          />
          <Box my={3}>
            <Typography variant="h4">{displayedImage.caption}</Typography>
          </Box>
        </Box>
      </Modal>
      <ImageList>
        {gifImages.map((img) => (
          <GifImage image={img} setDisplayedImage={setDisplayedImage} />
        ))}
      </ImageList>
    </Box>
  );
};

export default GifGallery;
