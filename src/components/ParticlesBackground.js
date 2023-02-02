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
        fpsLimit: 120,
        background: {
          color: "#e4eaef",
          opacity: 0.3,
        },
        particles: {
          number: {
            value: 10,
          },
          color: {
            value: [
              "#F4F7BE",
              "#E5F77D",
              "#DEBA6F",
              "#823038",
              "#1E000E",
              "#F45623",
              "#D62E32",
              "#EB586E",
              "#9952CF",
            ],
          },
          shape: {
            type: "square",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 5, max: 10 },
          },
          move: {
            enable: true,
            angle: {
              value: 30,
              offset: 0,
            },
            speed: {
              min: 1,
              max: 4,
            },
            direction: "top",
            outModes: {
              default: "destroy",
              bottom: "none",
            },
          },
        },
        detectRetina: true,
        emitters: {
          position: {
            x: 50,
            y: 150,
          },
          rate: {
            delay: 0.2,
            quantity: 3,
          },
          size: {
            width: 50,
            height: 25,
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
