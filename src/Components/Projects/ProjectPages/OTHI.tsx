import othiData from "../ProjectData/othi";
import ProjectTemplate from "../ProjectTemplate";

const OTHI = () => {
  return (
    <ProjectTemplate
      title={othiData.title}
      cover={othiData.coverImage}
      description={othiData.description}
      videoLink={othiData.videoLink}
    ></ProjectTemplate>
  );
};

export default OTHI;
