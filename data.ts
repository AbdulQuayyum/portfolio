import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaCode } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi, } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "APP Development",
    about:
      "I can develop a single application that can run on various operating systems.",
  },
  {
    Icon: FaCode,
    title: "JavaScript Developer",
    about:
       "I specialise in the design, testing and implementation of software using the JavaScript programming language."
  }
 
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React.Js",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Next.Js",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "60",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Flutter",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Dart",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Firebase",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "80",
  },
];

export const projects: IProject[] = [
  {
    id:1,
    name: "Netflix Clone",
    image_path: "/images/netflix.png",
    github_url: "https://github.com/AbdulQuayyum/MERN-Netflix-clone.git",
    category: ["React.Js", "Express.Js", "Node.Js", "Mongo"],
    description:
      "A Netflix WebApp Clone  ",
    key_techs: ["React", "Redux", "Express.Js", "API", "Sass", "Mongo"],
  },
  { 
    id:2,
    name: "Banking App",
    description:
      "This App shows transaction of the registerd user",
    image_path: "/images/banking-app.png",
    github_url: "https://github.com/AbdulQuayyum/Banking-App/tree/main/(Project%2043)Banking%20App",
    category: ["Vanilla.Js"],
    key_techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    id:3,
    name: "Movie Suggestion App",
    image_path: "/images/movies.png",
    github_url: "https://github.com/AbdulQuayyum/MovieApp",
    category: ["Vanilla.Js"],
    description:
      "An web app that brings movies suggestion and information about the movie storyline",
    key_techs: ["HTML", "CSS", "Vanilla.Js", "APIs"],
  },

  {
    id:4,
    name: "Soft-link",
    image_path: "/images/soft-link.png",
    github_url: "https://github.com/AbdulQuayyum/soft-link.git",
    category: ["Node.Js", "Vanilla.Js"],
    description:
      "Social Media app inspired by facebook, where the user can share project,create posts,etc...",
    key_techs: [
      "HTML",
      "CSS",
      "Node",
      "Express",
      "Vanilla.Js",
    ],
  },

  {
    id:5,
    name: "WhatsApp Clone",
    image_path: "/images/whatsapp-clone.png",
    github_url: "https://github.com/AbdulQuayyum/Whatsapp-Clone-.git",
    category: ["HTML", "Vanilla.Js"],
    description:
      "A WhatsApp Clone",
    key_techs: [
      "HTML",
      "CSS",
      "Vanilla.Js",
    ],
  },

  {
    id:6,
    name: "Youtube Clone",
    image_path: "/images/youtube-clone.png",
    github_url: "https://github.com/AbdulQuayyum/Youtube-Clone-.git",
    category: ["HTML", "Vanilla.Js"],
    description:
      "A youtube clone where a user has access to videos via an API",
    key_techs: ["HTML", "CSS", "Node", "Vanilla.Js" , "Youtube Api"],
  },

  {
    id:7,
    name: "Candy Crush Clone",
    image_path: "/images/candy-crush-clone.png",
    github_url: "https://github.com/AbdulQuayyum/Project-Games/tree/master/(Project%2040)Candy%20Crush",
    category: ["HTML", "Vanilla.Js"],
    description:
      "A Candy Crush Clone built with Vanilla.Js ",
    key_techs: ["HTML", "CSS", "Vanilla.Js" ],
  },

  {
    id:8,
    name: "Bank Website",
    image_path: "/images/banking-website.png",
    github_url: "https://github.com/AbdulQuayyum/banking-webstie.git",
    category: ["HTML", "Vanilla.Js"],
    description:
      "A Bank WebSite which gibes you information about the bank then allows you to register an account",
    key_techs: ["HTML", "CSS", "Vanilla.Js" ],
  },

  {
    id:9,
    name: "Portfolio",
    image_path: "/images/portfolio.png",
    github_url: "https://github.com/AbdulQuayyum/Portfolios",
    category: ["HTML", "Vanilla.Js"],
    description:
      "A Portfolio Website I created using HTML, CSS, JavaScript  ",
    key_techs: ["HTML", "CSS", "Vanilla.Js" ],
  },

  {id:10,
    name: "Quiz App",
    image_path: "/images/quiz-app.png",
    github_url: "https://github.com/AbdulQuayyum/Quiz-App.git",
    category: ["HTML", "Vanilla.Js"],
    description:
      "A Quiz Web App that generates random questions using an API ",
    key_techs: ["HTML", "CSS", "Vanilla.Js", "API" ],
  },
];
