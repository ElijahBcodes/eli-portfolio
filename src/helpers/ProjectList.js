import Proj1 from "../assets/proj1.jpg";
import Proj2 from "../assets/proj2.jpg";
import Proj4 from "../assets/proj4.png";
import Proj5 from "../assets/proj5.jpg";
import Proj6 from "../assets/portfolio.png";
import Proj7 from "../assets/stycker.png";

export const ProjectList = [
  {
    name: "Stycker",
    image: Proj7,
    skills: "React, Next.JS, JavaScript, HTML, tailwindCSS, daisyUI, MongoDB",
    description:
      " Application where developers can collaborate on projects and contribute to them. App is currently in development.",
    gitHub: "https://github.com/chingu-voyages/v42-bears-team-41",
    link: "https://stycker.vercel.app/",
  },
  {
    name: "Portfolio ",
    image: Proj6,
    skills: "React, JavaScript, HTML, tailwindCSS, daisyUI",
    description:
      " I recently constructed a new portfolio using React, Tailwind CSS, and DaisyUI. The combination of these technologies allowed me to create a visually stunning and functional portfolio that effectively showcases my skills and projects.",
    gitHub: "https://github.com/capstone-capos-2022-echo/mood-music",
    link: "https://beautiful-churros-ce97f9.netlify.app/",
  },

  {
    name: "Müd Müzik",
    image: Proj1,
    skills: "React, JavaScript, HTML, CSS, Ruby on Rails",
    description:
      "Our team, consisting of music enthusiasts, created Müd Müzik as a capstone project at LEARN Academy. Utilizing React and Rails, we developed a music app that allows users to discover new songs based on their mood. With an account created through the Ruby Devise gem, users can perform common actions such as creating, reading, updating, and deleting songs. Our app also features a built-in media player for seamless listening experience. Check out our app by clicking the project demo or visiting our GitHub repository",
    gitHub: "https://github.com/capstone-capos-2022-echo/mood-music",
    link: "https://youtu.be/kK4e3nY6CfU",
  },
  {
    name: "Mr. Jingles",
    image: Proj2,
    skills: "React, HTML, CSS, JavaScript, Ruby on Rails",
    description:
      " This application is a decoupled system, featuring a front-end implemented in React and a back-end powered by Rails. The React component handles the user interface while Rails manages the data storage, effectively dividing the responsibilities for optimized performance.",
    gitHub: "https://github.com/ElijahBcodes/cat-tinder-frontend-mr-jingles",
    link: "https://mrjingles-react-app.netlify.app/",
  },
  {
    name: "City of Larendale text Game",
    image: Proj4,
    skills: "Ruby",
    gitHub:
      "https://github.com/learn-academy-2022-echo/text-based-game-larendale/tree/test",
    link: "",
    description:
      " This programming project, built with Ruby, utilizes ASCII art to create an interactive and visually appealing text-based game for players to enjoy.",
  },
  {
    name: "Blog App",
    image: Proj5,
    skills: "Ruby, Rails ",
    gitHub:
      "https://github.com/learn-academy-2022-echo/full-stack-rails-strong",
    link: "",
    description:
      " Full Stack Rails blog application built with another developer. Full CRUD actions.",
  },
];
