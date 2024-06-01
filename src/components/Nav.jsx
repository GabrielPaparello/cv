import {
  faBars,
  faBriefcase,
  faClose,
  faEnvelope,
  faHome,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = ({ handleNav }) => {
  const [open, setOpen] = useState(false);


  useEffect(() => {
    if (handleNav === true){
      setOpen(false);}
  }, [handleNav]);



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
      <nav className="invisible md:visible text-white flex mt-2 w-full font-semibold  z-10  bg-gradient-to-b from-[#0D1321] to-[#252b37] opacity-90   justify-end items-center">
        <ul
          className={` text-lg flex flex-row justify-center gap-4 mr-4 items-center font-semibold  `}
        >
          {nav.map((item, index) => (
            
            <li
              key={index}
              className=" flex flex-row items-center   text-lg "
            >
              {window.location.pathname === "/" ? (
                <div className="flex   flex-row items-center  ">
                  <LinkScroll
                    to={item.name}
                    smooth={true}
                    duration={500}
                    href={item.href}
                    className=""
                    onClick={() => setOpen(!open)}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="rounded-full text-[#00df9a] border-2 border-[#00df9a] mr-2 text-lg p-2 bg-[#0D1321] cursor-pointer "
                    />
                  </LinkScroll>
                  <LinkScroll
                    to={item.name}
                    smooth={true}
                    duration={500}
                    href={item.href}
                    className="font-light tracking-wider font-[Poppins] text-white"
                    onClick={() => setOpen(!open)}
                  >
                    {item.name}
                  </LinkScroll>
                </div>
              ) : (
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="ml-2 mt-2 rounded-full text-xl text-[#00df9a] border-2 border-[#00df9a]  p-2 bg-[#0D1321] cursor-pointer "
                  />
                  <a
                    href={item.href}
                    className="ml-4 text-white"
                    onClick={() => setOpen(!open)}
                  >
                    {item.name}
                  </a>
                </div>
              )}
              
            </li>
          ))}
        </ul>
      </nav>
      <nav className="xs:block m-2  ">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            setOpen(!open);
          }}
          className="text-3xl fixed top-2 z-10 bg-[#0D1321]  p-1 rounded-lg text-white cursor-pointer md:invisible"
        />
        
        <ul
          className={`fixed text-lg flex justify-center  flex-row tracking-wider font-semibold ease-in-out text-start rounded-b-[80px] w-screen z-10 duration-700 bg-gradient-to-b from-[#0D1321] to-[#252b37] opacity-90 text-[#efc22b] bg-[#252b37]    p-3 pr-4 ${
            open ? "left-0 top-0" : "-top-96  -left-0 invisible "
          }`}
        >
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => {
              setOpen(!open);
            }}
            className="text-3xl -ml-6 mr-3 text-white cursor-pointer md:invisible"
          />
          {nav.map((item, index) => (
            
            <li
              key={index}
              className=" flex flex-row items-center  -ml-3 text-md "
            >
              {window.location.pathname === "/" ? (
                <div className="flex flex-col items-center">
                  <LinkScroll
                    to={item.name}
                    smooth={true}
                    duration={500}
                    href={item.href}
                    className=""
                    onClick={() => setOpen(!open)}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="ml-2 mt-2 rounded-full text-[#00df9a] border-2 border-[#00df9a] text-2xl p-2 bg-[#0D1321] cursor-pointer "
                    />
                  </LinkScroll>
                  <LinkScroll
                    to={item.name}
                    smooth={true}
                    duration={500}
                    href={item.href}
                    className="pl-4 font-light tracking-wider font-[Poppins] text-white"
                    onClick={() => setOpen(!open)}
                  >
                    {item.name}
                  </LinkScroll>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="ml-2 mt-2 rounded-full text-xl text-[#00df9a] border-2 border-[#00df9a]  p-2 bg-[#0D1321] cursor-pointer "
                  />
                  <a
                    href={item.href}
                    className="ml-4 text-white"
                    onClick={() => setOpen(!open)}
                  >
                    {item.name}
                  </a>
                </div>
              )}
              {item.name === "Contact" ? null : (
                <div className="border-r-2 rounded-full h-9 border-[#7D8491]  mx-2 "></div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
