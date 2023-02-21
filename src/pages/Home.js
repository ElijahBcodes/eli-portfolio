import React from "react";
import Typewriter from "react-typewriter-animate";
import "react-typewriter-animate/dist/Typewriter.css";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import ParticleBackground from "../components/ParticlesBackground";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <div
        className="hero h-screen  "
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60")`,
        }}
      >
        <ParticleBackground />

        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="mb-5 text-5xl font-bold">
              <Typewriter
                dataToRotate={[
                  // Banner 1
                  [
                    { type: "word", text: "Welcome" },
                    {
                      type: "word",
                      text: "!",
                      cursor: { char: "😀", cursorClass: "css-class" },
                    },
                  ],
                  // Banner 2
                  [{ type: "word", text: "I'm Elijah Barreto." }],
                ]}
              />
            </div>
            <button className="btn btn-secondary mr-2">
              <a className="no-underline text-white" href="#projects">
                Projects{" "}
              </a>
            </button>
            <button className="btn btn-secondary mr-2 ">
              <NavLink className="text-white no-underline" to="/about">
                {" "}
                About{" "}
              </NavLink>{" "}
            </button>
            <button className="btn btn-secondary mr-2">Resume </button>
          </div>
        </div>
      </div>
      <div className="h-full text-center " id="projects">
        <h1> Recent Projects </h1>
        <div className="text-base justify-center flex flex-wrap space-x-4">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem id={idx} name={project.name} image={project.image} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
