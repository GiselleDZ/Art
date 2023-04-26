import React, { useState, useEffect } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Backdrop, ImageList, ImageListItem, Modal } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from "@cloudinary/react";
import theme from "../theme";

type ImageData = {
  src: string;
  caption: string;
};

interface GifGalleryProps {
  images: ImageData[];
}

const blankImage = { src: "", caption: "" };

const slotComponentProps = {
  sx: {
    backdropFilter: "blur(8)",
  },
};

const GifGallery: React.FC<GifGalleryProps> = ({ images }) => {
  const [displayedImage, setDisplayedImage] = useState<ImageData>(blankImage);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "delu9m4xu",
    },
    // url: {
    //   secureDistribution: "www.gisellezatonyl.com",
    //   secure: true,
    // },
  });

  return (
    <Box
      sx={{
        backgroundColor: "#0E1116",
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
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
            style={{ maxHeight: "80vh" }}
          />
          <Box my={3}>
            <Typography variant="h4">{displayedImage.caption}</Typography>
          </Box>
        </Box>
      </Modal>
      <ImageList>
        {images.map((img) => {
          const formattedImg = cld.image(img.src);
          return (
            <ImageListItem key={img.caption}>
              <AdvancedImage
                cldImg={formattedImg.resize(fill())}
                alt={img.caption}
                plugins={[lazyload(), placeholder()]}
                style={{
                  width: "262px",
                  height: "262px",
                  objectFit: "cover",
                }}
                onClick={() => setDisplayedImage(img)}
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
};

export default GifGallery;
