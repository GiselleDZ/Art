import { Box, Button, Divider, Typography } from "@mui/material";
import { PageBox } from "../Styled/CustomBoxes";
import VimeoEmbed from "../../Helpers/VimeoEmbbed";
import { projectDataType } from "./ProjectData";
import ThumbnailGallery from "../Styled/ThumbnailGallery";

type ProjectTemplateProps = {
  project: projectDataType;
};

const ProjectTemplate = ({ project }: ProjectTemplateProps) => {
  const projectImgs =
    project.projectPhotos?.map((p) => ({
      src: p,
      caption: project.description,
    })) || null;

  const installImgs =
    project.installPhotos?.map((p) => ({
      src: p,
      caption: project.description,
    })) || null;

  return (
    <PageBox
      sx={{ paddingY: { xs: "58px", sm: "65px" }, alignItems: "center" }}
    >
      <>
        <Box
          component="img"
          src={project.coverImage}
          sx={{
            objectFit: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: { xs: "200px", sm: "400px", md: "600px" },
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

          {!!projectImgs && (
            <Box sx={{ marginY: "30px" }}>
              <Typography variant="h4">Project Images</Typography>
              <ThumbnailGallery images={projectImgs} />
              <Divider />
            </Box>
          )}

          {!!installImgs && (
            <Box sx={{ marginY: "30px" }}>
              <Typography variant="h4">Installation Images</Typography>
              <ThumbnailGallery images={installImgs} />
            </Box>
          )}
        </Box>
      </>
    </PageBox>
  );
};

export default ProjectTemplate;
