import { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { ImageListItem } from "@mui/material";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { getPage } from "@cloudinary/url-gen/actions/extract";

type GifImageProps = {
  image: {
    src: string;
    caption: string;
  };
  setDisplayedImage: Function;
};

const GifImage = ({ image, setDisplayedImage }: GifImageProps) => {
  const [hoveredImage, setHoveredImage] = useState<boolean>(false);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "delu9m4xu",
    },
  });

  const formattedImg = cld.image(`${image.src}`);
  const hoveredTransformations = formattedImg.resize(
    fill().width(220).height(220)
  );

  const setHoveredImageValue = (e: React.MouseEvent, value: boolean) => {
    e.preventDefault();
    setHoveredImage(value);
  };

  return (
    <ImageListItem
      key={image.caption}
      onClick={() => setDisplayedImage(image)}
      onMouseEnter={(e) => setHoveredImageValue(e, true)}
      onMouseLeave={(e) => setHoveredImageValue(e, false)}
    >
      {/* Perhaps lay the hovered image OVER the still so we don't get a flash? */}
      {hoveredImage ? (
        <AdvancedImage
          cldImg={hoveredTransformations}
          alt={image.caption}
          plugins={[lazyload(), placeholder()]}
        />
      ) : (
        <AdvancedImage
          cldImg={hoveredTransformations.extract(getPage().byNumber(2))}
          alt={image.caption}
          plugins={[lazyload(), placeholder()]}
        />
      )}
    </ImageListItem>
  );
};

export default GifImage;
