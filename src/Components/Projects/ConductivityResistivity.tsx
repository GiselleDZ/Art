import conductivityResistivityData from "./ProjectData/conductivityResistivity";
import ProjectTemplate from "./ProjectTemplate";

const ConductivityResistivity = () => {
  return (
    <ProjectTemplate
      title={conductivityResistivityData.title}
      cover={conductivityResistivityData.coverImage}
      projectLink={conductivityResistivityData.projectLink}
    ></ProjectTemplate>
  );
};
export default ConductivityResistivity;
