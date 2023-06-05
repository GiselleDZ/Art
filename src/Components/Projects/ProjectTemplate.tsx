import { Box, Button, Typography } from "@mui/material";
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
      sx={{
        paddingY: { xs: "58px", sm: "65px" },
        alignItems: "center",
      }}
    >
      <>
        <Box
          component="img"
          src={project.coverImage}
          sx={{
            objectFit: "cover",
            backgroundPosition: "center",
            width: "100%",
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
              <Typography variant="h4">View Project</Typography>
            </Button>
          )}
          {!!project.videos && (
            <Box sx={{ position: "relative", marginY: "30px" }}>
              {project.videos.map((video) =>
                video.includes("vimeo") ? (
                  <Box>
                    <VimeoEmbed link={video} key={video} />
                  </Box>
                ) : null
              )}
            </Box>
          )}

          {!!projectImgs && (
            <Box sx={{ marginY: "50px" }}>
              <Typography variant="h4" mb={3}>
                Project Images
              </Typography>
              <ThumbnailGallery images={projectImgs} />
              <Typography variant="subtitle1" mt={3}>
                Click image to view
              </Typography>
            </Box>
          )}

          {!!installImgs?.length && (
            <Box sx={{ marginY: "50px" }}>
              <Typography variant="h4" mb={3}>
                Installation Images
              </Typography>
              <ThumbnailGallery images={installImgs} />
              <Typography variant="subtitle1" mt={3}>
                Click image to view
              </Typography>
            </Box>
          )}
        </Box>
      </>
    </PageBox>
  );
};

export default ProjectTemplate;
