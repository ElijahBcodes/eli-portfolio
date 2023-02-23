import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="h-full w-full  justify-center text-center  bg-accent" >
      <h1> Recent Projects </h1>
      <div className= "text-base flex flex-wrap justify-center  space-y-2 space-x-4" >
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} description={project.description} />
            
          );
        })}
        
      </div>  
    </div>
  );
}

export default Projects;