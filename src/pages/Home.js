import React from "react";
import Pic from "../assets/portrait.png";
import ParticlesBackground from "../components/ParticlesBackground"

function Home() {
  return (
    <>
    
      <div className="relative z-100"><ParticlesBackground />
        <h1 className="font-serif text-center"> Elijah Barreto</h1>
        <h2 className="font-serif text-center">Full Stack Web Developer</h2>
        <div className="container mx-auto px-4">
          <img className="mask mask-circle" alt="portrait" src={Pic} />
        </div>
          <p> A React Developer with a passion for learning and technology.</p>
      </div>
      
    </>
  );
}

export default Home;
