import waysOfSomethingData from "../ProjectData/waysOfSomething";
import ProjectTemplate from "../ProjectTemplate";

const WaysOfSomething = () => {
  return (
    <ProjectTemplate
      title={waysOfSomethingData.title}
      cover={waysOfSomethingData.coverImage}
      description={waysOfSomethingData.description}
      videoLink={waysOfSomethingData.videoLinks}
    ></ProjectTemplate>
  );
};

export default WaysOfSomething;
