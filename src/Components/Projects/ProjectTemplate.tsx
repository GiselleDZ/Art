import { Box, Button, Typography } from "@mui/material";
import { PageBox } from "../Styled/CustomBoxes";
import { Link } from "react-router-dom";

type ProjectTemplateProps = {
  title: string;
  cover: string;
  projectLink: string;
};

const ProjectTemplate = ({
  title,
  cover,
  projectLink,
}: ProjectTemplateProps) => {
  return (
    <PageBox sx={{ paddingY: 0, alignItems: "center" }}>
      <Box
        sx={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "50vh",
          marginBottom: "4vh",
        }}
      />
      <Button onClick={() => window.open(projectLink, "_blank")}>
        <Typography variant="h4">{title}</Typography>
      </Button>
      {/* description */}
      {/* image gallery */}
    </PageBox>
  );
};

export default ProjectTemplate;
