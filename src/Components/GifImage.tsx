import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Box, Typography } from "@mui/material";

type GifImageProps = {
  image: {
    src: string;
    caption: string;
  };
  loaded: boolean;
  //   onImageLoad: Function;
};

const GifImage = ({ image, loaded }: GifImageProps) => {
  // TODO: test whether it is more efficient to instantiate Cloudinary once in the parent component instead

  const cld = new Cloudinary({
    cloud: {
      cloudName: "delu9m4xu",
    },
    // url: {
    //   secureDistribution: "www.gisellezatonyl.com",
    //   secure: true,
    // },
  });

  const myImage = cld.image(image.src);
  const styledImage = myImage.resize(fill());

  return (
    <Box>
      <Box sx={{ width: "100%", position: "relative" }}>
        <AdvancedImage
          className="lazy"
          cldImg={styledImage}
          alt={image.caption}
          plugins={[lazyload(), responsive(), placeholder()]}
        />
      </Box>
      <Typography variant="caption">{image.caption}</Typography>
    </Box>
  );
};

export default GifImage;
