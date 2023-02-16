import React from "react";
import ParticleBackground from "../components/ParticlesBackground";

function Home() {
  return (
    <>
<div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60")` }}>
  
  <ParticleBackground/>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hi, my name is Elijah</h1>
      <p className="mb-5"> I am a Web Developer experienced in Full Stack Applications primarily in React and Ruby on Rails.</p>
      <button className="btn btn-primary">Projects</button>
    </div>
  </div>
</div>
    </>
  );
}

export default Home;
