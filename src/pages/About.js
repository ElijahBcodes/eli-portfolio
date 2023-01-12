import React from "react";
import pic1 from "../assets/portrait.JPG";

const About = () => {
  return (
    <>
      <div className="avatar">
        <div className="max-w-sm rounded-lg ">
          <img src={pic1} />
        </div>
        <div>
          {""}Hello and welcome! My name is Elijah, and I am a full stack web
          developer with a passion for continuous learning and an appreciation
          for the great outdoors. With the completion of a full-stack coding
          bootcamp along with continuous hours of study and hands on training
          over the past year, I have developed a strong skillset in a variety of
          technologies and approaches, allowing me to tackle a wide range of
          projects and challenges. When I'm not coding, you can find me hitting
          the trails for a run or scaling a mountain. I believe that a balance
          between work and play is essential for both personal and professional
          growth, and I am always looking for new ways to challenge myself and
          improve my skills. Thank you for visiting my profile, and I look
          forward to working with you!
        </div>
      </div>
    </>
  );
};

export default About;
