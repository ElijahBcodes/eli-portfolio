import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="h-full w-full justify-center   bg-stone-200" >
      <h1> Recent Projects </h1>
      <div className= "text-base flex flex-wrap" >
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
      
    </div>
  );
}

export default Projects;