import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import ProjectCard from "../project_card/ProjectCard";
import { projectsInfo } from "../../userInfo";

export default function Projects() {
  return (
    <>
      <div className="xss-min:px-20 px-5 py-1 font-mono my-5" id="Work">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          <span className="text-primaryColor">02&nbsp;</span>Projects
        </h1>

        {/* ProjectCard render w-[95%] */}
        <div className="flex flex-wrap m-auto gap-14 justify-center">
          {
            projectsInfo.map((project, index)=> <ProjectCard key={index} project={project} />)
          }
        </div>
      </div>
    </>
  );
}
