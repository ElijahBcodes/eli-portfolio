import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id, description }) {
  const navigate = useNavigate();
  return (
    <div
      className="card w-96 bg-base-100 shadow-xl"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div />
      <figure>
        <img className="h-full w-30 " src={image} alt="project display" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
