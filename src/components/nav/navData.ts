import { Header } from "./../../sections/Header";
import {
  faBars,
  faBriefcase,
  faClose,
  faEnvelope,
  faHome,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
export const nav = [
  {
    name: "HOME",
    href: "/",
    icon: faHome,
    to: "Header",
  },

  {
    name: "PROJECTS",
    href: "/",
    icon: faBriefcase,
    to: "projects",
  },
  {
    name: "ABOUT",
    href: "/",
    icon: faUserAlt,
    to: "about",
  },
  {
    name: "CONTACT",
    href: "/",
    icon: faEnvelope,
    to: "contact",
  },
];
