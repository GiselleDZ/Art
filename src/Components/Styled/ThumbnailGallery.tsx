import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Box, ImageList, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import GifImage from "../GifImage";

export type ImageData = {
  src: string;
  caption: string;
};

const blankImage: ImageData = { src: "", caption: "" };

type GalleryProps = {
  images: ImageData[];
  componentCaption?: string;
};

const ThumbnailGallery = ({ images, componentCaption }: GalleryProps) => {
  const [displayedImage, setDisplayedImage] = useState<ImageData>(blankImage);
  const location = useLocation();
  const isGifGallery = location.pathname === "/gifs";

  const cld = new Cloudinary({
    cloud: {
      cloudName: "delu9m4xu",
    },
  });

  return (
    <Box>
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
          {displayedImage?.src.includes("gif") ? (
            <AdvancedImage
              cldImg={cld.image(displayedImage.src).resize(fill())}
              alt={displayedImage.caption}
              plugins={[lazyload(), placeholder()]}
              style={{ maxHeight: "90vh", maxWidth: "90vw" }}
            />
          ) : (
            <Box
              component="img"
              loading="lazy"
              src={displayedImage.src}
              alt={displayedImage.caption}
              sx={{ maxHeight: "90vh", maxWidth: "90vw" }}
            />
          )}
          <Box m={6} sx={{ textAlign: "center" }}>
            {isGifGallery && (
              <Typography variant="body2">{displayedImage.caption}</Typography>
            )}
            <Typography variant="subtitle1">Click anywhere to exit</Typography>
          </Box>
        </Box>
      </Modal>
      <ImageList>
        {images.map((img, i) => (
          <>
            {img.src.includes("gif") ? (
              <GifImage
                image={img}
                key={img.src}
                setDisplayedImage={setDisplayedImage}
              />
            ) : (
              <Box
                component="img"
                src={img.src}
                alt={`${componentCaption}-${i}`}
                sx={{ width: "200px", height: "200px", objectFit: "cover" }}
                onClick={() => setDisplayedImage(img)}
              />
            )}
          </>
        ))}
      </ImageList>
    </Box>
  );
};

export default ThumbnailGallery;
