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
      <div />
      <figure>
        <img
          className="h-30 w-30 rounded-xl"
          src={image}
          alt="project display"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {name} </h2>
        {/* <div style={{ backgroundImage: `url(${image})` }} className="bg-fill rounded-xl" /> */}
      </div>
    </div>
  );
}

export default ProjectItem;
