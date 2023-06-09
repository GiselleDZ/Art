import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import {
  Box,
  ImageList,
  ImageListItem,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import GifImage from "../GifImage";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

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
  const [displayedIndex, setDisplayedIndex] = useState<number | null>(null);
  const location = useLocation();
  const isGifGallery = location.pathname === "/gifs";

  const cld = new Cloudinary({
    cloud: {
      cloudName: "delu9m4xu",
    },
  });

  const setImageToBeDisplayed = (image: ImageData, ind: number | null) => {
    setDisplayedImage(image);
    setDisplayedIndex(ind);
  };

  const handleBack = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (displayedIndex === 0) setImageToBeDisplayed(blankImage, null);
    else if (displayedIndex !== null) {
      const newIndex = displayedIndex - 1;
      setImageToBeDisplayed(images[newIndex], newIndex);
    }
  };

  const handleForward = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (displayedIndex === images.length - 1)
      setImageToBeDisplayed(blankImage, null);
    else if (displayedIndex !== null) {
      const newIndex = displayedIndex + 1;
      setImageToBeDisplayed(images[newIndex], newIndex);
    }
  };

  return (
    <Box>
      <Modal
        open={!!displayedImage.src}
        onClose={() => setImageToBeDisplayed(blankImage, null)}
        aria-labelledby="lightbox"
        aria-describedby={`lightbox image ${displayedImage.caption}`}
        sx={{ paddingTop: "5vh" }}
      >
        <Box
          onClick={() => setImageToBeDisplayed(blankImage, null)}
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            height: "100%",
            width: "100%",
            overflowY: "scroll",
            paddingBottom: "5vh",
            "&:focus": {
              outline: "none",
            },
          }}
        >
          <ArrowBack
            onClick={(e) => handleBack(e)}
            sx={{
              position: "absolute",
              left: "10px",
              top: "50%",
              zIndex: 4000,
            }}
          />
          {displayedImage?.src.includes("gif") ? (
            <AdvancedImage
              cldImg={cld.image(displayedImage.src).resize(fill())}
              alt={displayedImage.caption}
              plugins={[lazyload(), placeholder()]}
              style={{ maxHeight: "80vh", maxWidth: "90vw" }}
            />
          ) : (
            <Box
              component="img"
              loading="lazy"
              src={displayedImage.src}
              alt={displayedImage.caption}
              sx={{ maxHeight: "80vh", maxWidth: "90vw" }}
            />
          )}
          <ArrowForward
            onClick={(e) => handleForward(e)}
            sx={{ position: "absolute", right: "10px", top: "50%" }}
          />
          <Box
            sx={{ textAlign: "center", maxWidth: "700px", paddingTop: "10vh" }}
          >
            {isGifGallery && (
              <Typography variant="h4">{displayedImage.caption}</Typography>
            )}
            {displayedImage?.src.includes("gif") && (
              <Typography variant="subtitle1">
                ( GIFS may take a moment to load fully )
              </Typography>
            )}
            <Typography variant="subtitle1">Click anywhere to exit</Typography>
          </Box>
        </Box>
      </Modal>
      <ImageList>
        {images.map((img, i) => (
          <Box key={img.src}>
            {img.src.includes("gif") ? (
              <GifImage
                image={img}
                setDisplayedImage={() => setImageToBeDisplayed(img, i)}
              />
            ) : (
              <ImageListItem>
                <Box
                  component="img"
                  src={img.src}
                  alt={`${componentCaption}-${i}`}
                  sx={{ width: "220px", height: "220px", objectFit: "cover" }}
                  onClick={() => setImageToBeDisplayed(img, i)}
                />
              </ImageListItem>
            )}
          </Box>
        ))}
      </ImageList>
    </Box>
  );
};

export default ThumbnailGallery;
