import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className=" h-full w-13/5 flex items-center justify-center  flex-col " >
      <h1> Recent Projects </h1>
      <div className= "text-base flex items-center flex-wrap" >
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} img={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;