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
      "I can architect and develop websites and applications using web technologies ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "I can handle database, server, api using <b>Express </b> & other popular frameworks.",
  },
  {
    Icon: AiOutlineApi,
    title: "Mobile Development",
    about:
      "I can develop software applications that are compatible with multiple mobile operating systems.",
  },
  {
    Icon: FaCode,
    title: "JavaScript Developer",
    about:
      "I design, test and implement software using the JavaScript programming language."
  }

];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "React.Js",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Vue.Js",
    level: "60",
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
    name: "React Native",
    level: "60",
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
    id: 1,
    name: "Soft-link",
    image_path: "/images/soft-link.png",
    github_url: "https://github.com/AbdulQuayyum/soft-link.git",
    deployed_url: "https://soft-link-facebook-clone.vercel.app/",
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
    id: 2,
    name: "Soft Tours",
    image_path: "/images/Screenshot 2022-04-12 004846.png",
    github_url: "https://github.com/AbdulQuayyum/Tour-guide-site.git",
    deployed_url: "https://tour-guide-site.vercel.app/",
    category: ["HTML", "Vanilla.Js"],
    description:
      "A Website For a Touring Company",
    key_techs: [
      "HTML",
      "CSS",
      "Vanilla.Js",
    ],
  },
  {
    id: 3,
    name: "Banking App",
    description:
      "This Bank App that you can use to perform numerous transactions, {you can log in using 'qa' as user and '1111' as pin or 'fa' as user and '2222' as pin} ",
    image_path: "/images/banking-app.png",
    github_url: "https://github.com/AbdulQuayyum/Banking-App/tree/main/(Project%2043)Banking%20App",
    deployed_url: "https://bank-app-gold.vercel.app/",
    category: ["Vanilla.Js"],
    key_techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    name: "Bank Website",
    image_path: "/images/banking-website.png",
    github_url: "https://github.com/AbdulQuayyum/banking-webstie.git",
    deployed_url: "https://bank-website-vert.vercel.app/",
    category: ["HTML", "Vanilla.Js"],
    description:
      "A Bank WebSite which gibes you information about the bank then allows you to register an account",
    key_techs: ["HTML", "CSS", "Vanilla.Js"],
  },
  {
    id: 5,
    name: "Movie Suggestion App",
    image_path: "/images/movies.png",
    github_url: "https://github.com/AbdulQuayyum/MovieApp",
    deployed_url: "https://movie-suggestion-website.vercel.app/",
    category: ["Vanilla.Js", "HTML"],
    description:
      "An web app that brings movies suggestion and information about the movie storyline",
    key_techs: ["HTML", "CSS", "Vanilla.Js", "APIs"],
  },


  // {
  //   id: 6,
  //   name: "Youtube Clone",
  //   image_path: "/images/youtube-clone.png",
  //   github_url: "https://github.com/AbdulQuayyum/Youtube-Clone-.git",
  //   deployed_url: "https://youtube-website-clone.vercel.app/",
  //   category: ["HTML", "Vanilla.Js"],
  //   description:
  //     "A youtube clone where a user has access to videos via an API",
  //   key_techs: ["HTML", "CSS", "Node", "Vanilla.Js", "Youtube Api"],
  // },

  {
    id: 6,
    name: "Admin Dashboard",
    image_path: "/images/Admin.png",
    github_url: "https://github.com/AbdulQuayyum/admin-dashboard.git",
    deployed_url: "https://dash-board-woad.vercel.app/",
    category: ["React.Js"],
    description:
      "iI build an Admin dashboard using React.JS ",
    key_techs: ["React.Js", "Sass",],
  },

  {
    id: 7,
    name: "Netflix Clone",
    image_path: "/images/netflix.png",
    github_url: "https://github.com/AbdulQuayyum/MERN-Netflix-clone.git",
    deployed_url: "https://soft-link-facebook-clone.vercel.app/",
    category: ["React.Js", "Express.Js", "Node.Js"],
    description:
      "A Netflix WebApp Clone  ",
    key_techs: ["React", "Redux", "Express.Js", "API", "Sass", "Mongo"],
  },

  // {
  //   id:9,
  //   name: "Recipe App",
  //   image_path: "/images/portfolio.png",
  //   github_url: "https://github.com/AbdulQuayyum/Portfolios",
  //   deployed_url: "https://soft-link-facebook-clone.vercel.app/",
  //   category: ["HTML", "Vanilla.Js"],
  //   description:
  //     "A Portfolio Website I created using HTML, CSS, JavaScript  ",
  //   key_techs: ["HTML", "CSS", "Vanilla.Js" ],
  // },
];
