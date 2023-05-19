import { Box } from "@mui/material";
import "./blobbyHexagon.css";
import { blobbySVGp1, blobbySVGp2 } from "../../Images/blobby-shape-svg1";

type BlobbyHexagonProps = {
  width: string;
  height: string;
};
const BlobbyHexagon = ({ width, height }: BlobbyHexagonProps) => {
  return (
    <Box sx={{ position: "absolute", zIndex: "1" }}>
      <svg
        width={`${width}px`}
        height={`${height}px`}
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 680 572"
      >
        {/* One blobby shape */}
        <defs>
          <filter id="turbulenceFilter">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.01"
              numOctaves="34"
              result="turbulence"
              seed="10"
            />
            <feDisplacementMap
              in2="turbulence"
              in="SourceGraphic"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <path
          filter="url(#turbulenceFilter)"
          className="blob"
          d={blobbySVGp1}
        />
        <path
          filter="url(#turbulenceFilter)"
          className="cls-1"
          d={blobbySVGp2}
        />
      </svg>
    </Box>
  );
};

export default BlobbyHexagon;
