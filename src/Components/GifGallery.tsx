import React, { useState, useEffect } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import GifImage from "./GifImage";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from "@cloudinary/react";

type ImageData = {
  src: string;
  caption: string;
};

interface GifGalleryProps {
  images: ImageData[];
}

const GifGallery: React.FC<GifGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageDisplayed, setImageDisplayed] = useState(images[currentIndex]);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "delu9m4xu",
    },
    // url: {
    //   secureDistribution: "www.gisellezatonyl.com",
    //   secure: true,
    // },
  });

  const myImage = cld.image(imageDisplayed.src);
  const styledImage = myImage.resize(fill());

  console.log(styledImage);

  const handlePrev = () => {
    setImageDisplayed(images[currentIndex - 1]);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setImageDisplayed(images[currentIndex + 1]);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Box>
      <Box
        sx={{
          width: "75%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          marginY: 10,
        }}
      >
        <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
          <ArrowBackIos />
        </IconButton>
        {/* <Box sx={{ width: "100%", position: "relative" }}> */}
        <AdvancedImage
          className="lazy"
          cldImg={styledImage}
          alt={imageDisplayed.caption}
          plugins={[lazyload(), responsive(), placeholder()]}
          style={{ maxHeight: "50vh" }}
        />
        <IconButton
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
        >
          <ArrowForwardIos />
        </IconButton>
        {/* </Box> */}
        {/*
        {images.map((imgData, index) => (
            <GifImage
            key={index}
            image={imgData}
            loaded={images.includes(imgData)}
            />
        ))} */}
      </Box>
      <Typography variant="caption">{imageDisplayed.caption}</Typography>
    </Box>
  );
};

export default GifGallery;
