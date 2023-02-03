import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { AiFillGithub } from "react-icons/ai";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl ">
      <figure>
        <a href={project.link} target="_blank" rel="noreferrer">
          <img src={project.image} alt="Project" />
        </a>
      </figure>{" "}
      <p>{project.description}</p>
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <div className="card-actions justify-end ">
          <p>
            <b>Tech used:</b> {project.skills}
          </p>
        </div>
          <a href={project.gitHub} target="_blank" rel="noreferrer">
            <AiFillGithub size="2.5rem" />
          </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
