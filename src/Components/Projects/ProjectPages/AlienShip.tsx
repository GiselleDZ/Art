import alienShipData from "../ProjectData/alienShip";
import ProjectTemplate from "../ProjectTemplate";

const AlienShip = () => {
  return (
    <ProjectTemplate
      title={alienShipData.title}
      cover={alienShipData.coverImage}
      description={alienShipData.description}
      videoLink={alienShipData.videoLink}
    ></ProjectTemplate>
  );
};

export default AlienShip;
