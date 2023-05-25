import dnsData from "../ProjectData/dns";
import ProjectTemplate from "../ProjectTemplate";

const DNS = () => {
  return (
    <ProjectTemplate
      title={dnsData.title}
      cover={dnsData.coverImage}
      description={dnsData.description}
      videoLink={dnsData.projectVideo}
    ></ProjectTemplate>
  );
};

export default DNS;
