import theHarmData from "../ProjectData/theHarm";
import ProjectTemplate from "../ProjectTemplate";

const TheHarm = () => {
  return (
    <ProjectTemplate
      title={theHarmData.title}
      cover={theHarmData.coverImage}
      description={theHarmData.description}
      videoLink={theHarmData.videoLink}
    ></ProjectTemplate>
  );
};

export default TheHarm;
