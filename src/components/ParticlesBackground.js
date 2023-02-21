import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";


const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
          
            onhover: {
              enable: true,
              mode: "repulse",
              parallax: { enable: false, force: 60, smooth: 10 }
            },
        background: {
          color: "#e4eaef",
          opacity: 0,
        },   resize: true
      },
      modes: {
        push: { quantity: 4 },
        attract: { distance: 200, duration: 0.4, factor: 5 }
      }
    },
        
        particles: {
          color: { value: "#ffffff" },
          line_linked: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1
          },      
          size: {
            value: { min: 5, max: 10 },
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: false,
            speed: 2,
            straight: false
          },
          number: { density: { enable: true, value_area: 800 }, value: 80 },
          opacity: {
            anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
            random: false,
            value: 0.5
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "200"
            },
            
          },
        },
        polygon: {
          draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
          move: { radius: 10 },
          scale: 1,
          type: "none",
          url: ""
        },
        detectRetina: true,
        
      }}
    />
  );
};

export default ParticleBackground;
