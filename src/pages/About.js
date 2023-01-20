import React from "react";
import pic1 from "../assets/portrait.png";

const About = () => {
  return (
    <>
      <div className="card w-98 bg-base-100 shadow-xl m-2">
        <figure className="h-50">
          <img src={pic1} alt="profile pic" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">About Me</h2>
          <p>
            My name is Elijah, a full stack web developer specializing in React
            and Ruby on Rails. Thank you for visiting my portfolio!{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
