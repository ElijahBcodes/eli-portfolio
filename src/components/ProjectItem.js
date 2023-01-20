import React from "react";
import { useNavigate } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-lg w-50 h-50  shadow-inherit text-sm"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div  />
      <div style={{ backgroundImage: `url(${image})` }} className="bg-fill" />
      <h1> {name} </h1>
      <img className="h-20 w-20 rounded-full"
                  src={image} alt="project-image"
                />
    </div>
  );
}

export default ProjectItem;
