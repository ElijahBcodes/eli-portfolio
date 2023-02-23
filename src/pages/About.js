import React from "react";
import pic1 from "../assets/portrait2.jpg";


const About = () => {
  return (
    <>
      <div className="card w-98 bg-base-100 shadow-xl m-2">
        <figure className="h-50">
          <img src={pic1} alt="profile pic" />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title justify-center">About Me</h2>
          <p>
            A little bit about me, I drink a lot of coffee mostly pour over. For fun I like to run trails and ultras. Thank you for visiting my portfolio!{" "}
          </p>
        </div>     
      </div>
    </>
  );
};

export default About;
