import initiatorFactorOneData from "../ProjectData/initiatorFactorOne";
import ProjectTemplate from "../ProjectTemplate";

const InitiatorFactorOne = () => {
  return (
    <ProjectTemplate
      title={initiatorFactorOneData.title}
      cover={initiatorFactorOneData.coverImage}
      description={initiatorFactorOneData.description}
      videoLink={initiatorFactorOneData.projectVideo}
    ></ProjectTemplate>
  );
};

export default InitiatorFactorOne;
