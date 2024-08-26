import { faLinkedin, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons/faSquarePhone";

interface Data {
  link: string;
  href: string;
  icon: IconDefinition;
}

export const columnData: Data[] = [
  {
    link: "About me",
    href: "#",
    icon: faUser,
  },
  {
    link: "Privacy",
    href: "#",
    icon: faCircleInfo,
  },
  {
    link: "Contact",
    href: "#",
    icon: faSquarePhone,
  },
];

export const columnTwoData: Data[] = [
  {
    link: "Git hub",
    href: "#",
    icon: faGithub,
  },
  {
    link: "Linked in",
    href: "#",
    icon: faLinkedin,
  },
  {
    link: "Apps@contract@mail.com",
    href: "#",
    icon: faEnvelope,
  },
];
