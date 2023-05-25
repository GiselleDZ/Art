import cajonDepPenaData from "../ProjectData/cajonDePena";
import ProjectTemplate from "../ProjectTemplate";

const CajonDePena = () => {
  return (
    <ProjectTemplate
      title={cajonDepPenaData.title}
      cover={cajonDepPenaData.coverImage}
      description={cajonDepPenaData.description}
      videoLink={cajonDepPenaData.videoLink}
    ></ProjectTemplate>
  );
};

export default CajonDePena;
