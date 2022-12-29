import React from "react";
import Pic from "../assets/portrait.png";

function Home() {
  return (
    <>
      <div className="bg-slate-200 bg-fill">
        <h1 className="font-serif"> Elijah Barreto</h1>
        <h2>Full Stack Web Developer</h2>
        <div className="container mx-auto px-4">
          <img className="mask mask-circle" alt="portrait" src={Pic} />
        </div>
        <p>The main text lorem ipsum</p>
        <img
          className="mask mask-circle"
          src="https://placeimg.com/160/160/arch"
          alt="portrait"
        />
        
      </div>
 
    </>
  );
}

export default Home;
