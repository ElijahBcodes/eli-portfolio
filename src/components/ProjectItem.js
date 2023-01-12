import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="rounded w-3 h-3 m-10 shadow-inherit"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bg-fill" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;
