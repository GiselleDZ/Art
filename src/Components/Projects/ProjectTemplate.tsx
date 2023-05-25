import { Box, Button, Typography } from "@mui/material";
import { PageBox } from "../Styled/CustomBoxes";
import { Link } from "react-router-dom";
import VimeoEmbed from "../../Helpers/VimeoEmbbed";

type ProjectTemplateProps = {
  title: string;
  cover: string;
  description?: string;
  projectLink?: string;
  videoLink?: string[];
  children?: React.FC;
};

const ProjectTemplate = ({
  title,
  cover,
  description,
  projectLink,
  videoLink,
  children,
}: ProjectTemplateProps) => {
  return (
    <PageBox sx={{ paddingY: 0, alignItems: "center" }}>
      <>
        <Box
          sx={{
            backgroundImage: `url(${cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "50vh",
          }}
        />
        <Box sx={{ padding: "40px", textAlign: "center" }}>
          <Button
            onClick={() => !!projectLink && window.open(projectLink, "_blank")}
          >
            <Typography variant="h1" mb={3}>
              {title}
            </Typography>
          </Button>
          <Typography variant="body1" mb={3} sx={{ lineHeight: "150%" }}>
            {!!description && description}
          </Typography>
          {!!projectLink && (
            <Button onClick={() => window.open(projectLink, "_blank")}>
              <Typography variant="h5">View Project</Typography>
            </Button>
          )}
          {!!videoLink && (
            <Box sx={{ position: "relative" }}>
              {videoLink.map((link) =>
                link.includes("vimeo") ? (
                  <VimeoEmbed link={link} key={link} />
                ) : null
              )}
            </Box>
          )}
          {/* image gallery */}
        </Box>
        {!!children && children}
      </>
    </PageBox>
  );
};

export default ProjectTemplate;
