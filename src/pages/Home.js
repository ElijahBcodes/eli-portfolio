import React from "react";
import Pic from "../assets/portrait.png";

function Home() {
  return (
    <>
      <div>
        <h1> Elijah Barreto</h1>
        {/* <h2>Web Developer</h2> */}
        <div className="container mx-auto px-2.5 m-2 p-0 rounded w-24">
          <img className="mask " alt="portrait of a web developer" src={Pic} />
        </div>
        <p> A Web Developer with a passion for learning and technology.</p>
      </div>
    </>
  );
}

export default Home;
