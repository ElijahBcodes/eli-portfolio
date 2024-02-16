import React from "react";
import pic1 from "../assets/portrait2.jpg";

const About = () => {
  return (
    <>
      <div className="h-screen ">
        <div className="card w-98 mt-6 bg-base-100 shadow-xl m-2 self-center">
          <figure className="h-50 ">
            <img src={pic1} alt="profile pic" />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">About Me</h2>
            <p>
              Hey there! I'm Eli, a passionate full stack developer specializing
              in React and Ruby on Rails. Take a look around and see some my
              recent projects. If you have a project you would like to
              collaborate with please feel free reach out to me.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
