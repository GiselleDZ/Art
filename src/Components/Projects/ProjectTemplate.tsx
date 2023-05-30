import { Box, Button, Typography } from "@mui/material";
import { PageBox } from "../Styled/CustomBoxes";
import VimeoEmbed from "../../Helpers/VimeoEmbbed";
import { projectDataType } from "./ProjectData";

type ProjectTemplateProps = {
  project: projectDataType;
};

const ProjectTemplate = ({ project }: ProjectTemplateProps) => {
  return (
    <PageBox sx={{ paddingY: 0, alignItems: "center" }}>
      <>
        <Box
          sx={{
            backgroundImage: `url(${project.coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "50vh",
          }}
        />
        <Box sx={{ padding: "40px", textAlign: "center" }}>
          <Button
            onClick={() =>
              !!project.link && window.open(project.link, "_blank")
            }
          >
            <Typography variant="h1" mb={3}>
              {project.title}
            </Typography>
          </Button>
          <Typography variant="body1" mb={3} sx={{ lineHeight: "150%" }}>
            {project.description}
          </Typography>
          {!!project.link && (
            <Button onClick={() => window.open(project.link, "_blank")}>
              <Typography variant="h5">View Project</Typography>
            </Button>
          )}
          {!!project.videos && (
            <Box sx={{ position: "relative" }}>
              {project.videos.map((video) =>
                video.includes("vimeo") ? (
                  <VimeoEmbed link={video} key={video} />
                ) : null
              )}
            </Box>
          )}
          {/* image gallery */}
        </Box>
      </>
    </PageBox>
  );
};

export default ProjectTemplate;
