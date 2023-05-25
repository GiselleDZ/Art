import { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import axios from "axios";

type VimeoEmbedProps = {
  link: string;
};

const VimeoEmbed = ({ link }: VimeoEmbedProps) => {
  const [iframeSrc, setiFrameSrc] = useState<string | null | undefined>("");
  const theme = useTheme();

  const color = theme.palette.mode === "light" ? "D1BCE3" : "0E1116";
  const width = window.innerWidth - 80;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://vimeo.com/api/oembed.json?url=${link}?responsive=true&title=false&byline=false&portrait=false&color=${color}`
        );
        const parser = new DOMParser();
        const doc = parser.parseFromString(res.data.html, "text/html");
        const iframe = doc.querySelector("iframe");
        const src = iframe?.getAttribute("src");
        setiFrameSrc(src);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Box mb={3}>
      {!!iframeSrc && (
        <iframe
          src={iframeSrc}
          allowFullScreen
          style={{
            width: width,
            height: width * 0.57,
            border: "none",
          }}
        />
      )}
    </Box>
  );
};

export default VimeoEmbed;
