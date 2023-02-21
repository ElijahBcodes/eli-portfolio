import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="card w-96 bg-base-100 shadow-xl"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div  />
      <div style={{ backgroundImage: `url(${image})` }} className="bg-fill" />
      <h1> {name} </h1>
      <img className="h-20 w-20 rounded-full"
                  src={image} alt="a project"
                />
    </div>
  );
}

export default ProjectItem;
