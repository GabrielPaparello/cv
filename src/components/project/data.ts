import trelloMobileProject from "../../assets/projects/trelloMobile.png";
import trelloProject from "../../assets/projects/trello.png";
import SecretSanta from "../../assets/project1.png";
import SecretSantaMobile from "../../assets/project1.png";
import portfolio from "../../assets/projects/portfolio.png";
import portfolioMobile from "../../assets/projects/portfolioMobile.png";
import tateti from "../../assets/projects/tateti.png";
import tatetiMobile from "../../assets/projects/tatetiMobile.png";
import emparejar from "../../assets/project12.png";
import emparejarMobile from "../../assets/project12.png";
import ReduxIcon from "../icons/redux";
import React from "react";
import NextJs from "../icons/next";
import PostgresIcon from "../icons/postgr";
import JsIcon from "../icons/js";
import GitIcon from "../icons/git";
import ReactIcon from "../icons/React";
import Tailwind from "../icons/Tailwind";
import TsIcon from "../icons/Ts";
import Mui from "../icons/Mui";
import Css from "../icons/Css";
type IconComponent = React.ComponentType;
interface project {
  ProjectName?: string;
  ProjectImg: string;
  ProjectDescription: string;
  ProjectTechnologies: string;
  ProjectLink: string;
  ProjectGit?: string;
  ProjectDisabled?: boolean;
  ProjectMobileImg: string;
  ProjectIcons?: IconComponent[];
}

export type projectsType = Partial<project>[];
export type singleProjectType = Partial<project>;
const data: projectsType = [
  {
    ProjectName: "Trello clone",
    ProjectImg: trelloProject,
    ProjectMobileImg: trelloMobileProject,
    ProjectDescription:
      "This project is inspired on Trello , but is just a portfolio piece , it consists of a KanbanBoard with the ability to create an account or log in with a service to save and create projects and boards with data, the web is structured as a sofware presenting trello functionalities and product",
    ProjectTechnologies:
      "For this project i used: Nextjs for the flexibility it provides with the folder structure and api routes deploy on vercel and postgresql for the database , i decided to use redux for the logic and Auth0 for the log in and registration",
    ProjectLink: "https://trello-clone-seven.vercel.app/",
    ProjectGit: "https://github.com/GabrielPaparello/TrelloClone",
    ProjectIcons: [
      ReduxIcon,
      NextJs,
      PostgresIcon,
      JsIcon,
      GitIcon,
      ReactIcon,
      Tailwind,
      TsIcon,
    ],
  },
  {
    ProjectName: "Secret Santa",
    ProjectImg: SecretSanta,
    ProjectMobileImg: SecretSantaMobile,
    ProjectDescription:
      "This is part of my firsts projects , it is The web version of secret Santa.Select the amount of players, log the details and get started, and Email will be sent with the results.",
    ProjectTechnologies:
      "Used Tailwind css for the styling , react for the logic and UI, git as a version control, react router for routing . To avoid backend decided to use EmailJS to handle emails",
    ProjectLink: "/InvisibleFriend",
    ProjectGit: "https://github.com/GabrielPaparello/InvisibleFriend",
    ProjectIcons: [JsIcon, GitIcon, ReactIcon, Tailwind],
  },
  {
    ProjectName: "Position Assignment",
    ProjectImg: emparejar,
    ProjectMobileImg: emparejarMobile,
    ProjectDescription: `This project asigns a random position, "number", to the participants`,
    ProjectTechnologies:
      "Used Tailwind css for the styling , react for the logic and UI, git as a version control, react router for routing . To avoid backend decided to use EmailJS to handle emails",
    ProjectLink: "/numberAsigner",
    ProjectGit:
      "https://github.com/GabrielPaparello/InvisibleFriend/tree/main/src/pages/numberAsigner/invisibleApp",
    ProjectIcons: [JsIcon, GitIcon, ReactIcon, Tailwind],
  },
  {
    ProjectName: "Portfolio for client",
    ProjectImg: portfolio,
    ProjectMobileImg: portfolioMobile,
    ProjectDescription:
      "This project where one of the first one i made i had a friend of a friend that needed a portfolio piece for his acting clases so i decided to help her ",
    ProjectTechnologies:
      "For this project i went with Material UI for the styling as the project needed to be delivered as soon as posible, react for the logic and UI, git as a version control, react router for routing . To avoid backend decided to use EmailJS to handle emails",
    ProjectLink: "https://gabrielacandio.netlify.app/",
    ProjectGit:
      "https://github.com/GabrielPaparello/InvisibleFriend/tree/main/src/pages/numberAsigner/invisibleApp",
    ProjectIcons: [JsIcon, GitIcon, ReactIcon, Tailwind, Mui],
    ProjectDisabled: true,
  },
  {
    ProjectName: "Tic Tac Toe",
    ProjectImg: tateti,
    ProjectMobileImg: tatetiMobile,
    ProjectDescription:
      "This was my first project using javascript i where learning and wanted to try my self so i decided to avoid searching anything and trying to come up with my way of solving the how to creat a tic tac toe",
    ProjectTechnologies:
      "On this one i just used full vanilla javascript for the logic and UI, git as a version control, and a little of css for styles",
    ProjectLink: "/TicTacToe",
    ProjectGit: "https://github.com/GabrielPaparello/tateti/tree/main",
    ProjectIcons: [JsIcon, GitIcon, Css],
  },
];

export default data;
