
import { faBars, faBriefcase, faClose, faEnvelope, faHome, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const nav = [
    {
      name: "Home",
      href: "/",
      icon: faHome,
    },

    {
      name: "Projects",
      href: "/",
      icon: faBriefcase,
    },
    {
      name: "About",
      href: "/",
      icon: faUserAlt,
    },
    {
      name: "Contact",
      href: "/",
      icon: faEnvelope,
    },
  ];
  return (
    <>
      <nav className="hidden ">
        <ul>
          {nav.map((item, index) => (
            <li key={index} className="">
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="xs:block m-2 ">
        <FontAwesomeIcon
          
          icon={faBars}
          onClick={() => {
            setOpen(!open);
          }}
          className="text-2xl fixed top-2 text-white cursor-pointer md:invisible"
        />
        <ul
          className={`fixed mt-1 rounded-lg z-10 duration-700 border-t-2 border-r-2 border-[#FFC145] text-[#FFC145] bg-[#0D1321] h-screen w-fit p-2 ${
            open ? "left-0 top-0" : "top-0  -left-96 invisible "
          }`}
        >
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => {
              setOpen(!open);
            }}
            className="text-2xl  text-[] text-white cursor-pointer md:invisible"
          />
          {nav.map((item, index) => (
            <li key={index} className="m-7 text-md hover:bg-white">
              <FontAwesomeIcon icon={item.icon} className="mr-4" />
              
              {window.location.pathname === '/'?
                <LinkScroll to={item.name} smooth={true} duration={500} href={item.href} className="ml-4" onClick={() => setOpen(!open)}>{item.name}</LinkScroll>
                :
                <a href={item.href} className="ml-4" onClick={() => setOpen(!open)}>{item.name}</a>
            }
              <div className="border-b-2 border-[#7D8491] mt-4"></div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
