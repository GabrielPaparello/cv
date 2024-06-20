/* eslint-disable react/prop-types */
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
import { Link as LinkScroll } from "react-scroll";
import '../App.css'
export const Nav = ({ handleNav }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (handleNav === true) {
      setOpen(false);
    }
  }, [handleNav]);

  const nav = [
    {
      name: "HOME",
      href: "/",
      icon: faHome,
    },

    {
      name: "PROJECTS",
      href: "/",
      icon: faBriefcase,
    },
    {
      name: "ABOUT",
      href: "/",
      icon: faUserAlt,
    },
    {
      name: "CONTACT",
      href: "/",
      icon: faEnvelope,
    },
  ];
  return (
    <>
      <nav className="invisible  md:visible md:h-[50px] md:mb-[140px] text-white flex   z-10   justify-center items-center">
        <ul className={` text-base flex flex-row  gap-[150px] items-baseline `}>
          {nav.map((item, index) => (
            <li key={index} className=" flex flex-row items-center   ">
              {window.location.pathname === "/" ? (
                <div className="flex   flex-row items-center  ">
                  <LinkScroll
                    to={item.name}
                    smooth={true}
                    duration={500}
                    href={item.href}
                    className="navFont"
                    onClick={() => setOpen(!open)}
                  >
                    <FontAwesomeIcon
                      listItem
                      icon={item.icon}
                      className=" text-baseline text-lg md:text-lg pr-2 cursor-pointer "
                    />
                  </LinkScroll>
                  <LinkScroll
                    to={item.name}
                    smooth={true}
                    duration={500}
                    href={item.href}
                    className=" tracking-wide     md:text-xl duration-300 text-md  text-white"
                  >
                    {item.name}
                  </LinkScroll>
                </div>
              ) : (
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-baseline text-md md:text-md pr-2 cursor-pointer "
                  />
                  <a
                    href={item.href}
                    className=" text-white navFont"
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

      
      {/* mobile */}
      <nav className="xs:block m-2  ">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            setOpen(!open);
          }}
          className={`text-3xl fixed top-2 z-10 bg-[#0D1321]  p-1 rounded-lg text-white cursor-pointer  md:invisible duration-500 ${
            !open ? "" : "invisible"
          }`}
        />

        <ul
          className={`fixed  flex justify-center  flex-col items-start tracking-widest  ease-in-out text-base rounded-md w-[130px] z-10 duration-700 bg-gradient-to-b from-[#0D1321] to-[#252b37]  text-[#f5f5f5] bg-[#252b37] p-3 pr-4 ${
            open ? "left-0 top-0" : "-top-0  -left-96 invisible "
          }`}
        >
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => {
              setOpen(!open);
            }}
            className="text-xl    left-20 relative bg-[#0D1321] -top-0  p-1 rounded-lg text-white cursor-pointer md:invisible"
          />
          {nav.map((item, index) => (
            <li key={index} className=" flex flex-col items-center  text-md ">
              {window.location.pathname === "/" ? (
                <div className="flex flex-row w-[100px] border-[#3d4543] border-b p-2 items-baseline">
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
                      className=" mr-2 rounded-full    cursor-pointer "
                    />
                  </LinkScroll>
                  <LinkScroll
                    to={item.name}
                    smooth={true}
                    duration={500}
                    href={item.href}
                    className="tracking-widest text-sm text-[#c4c930]"
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
                    className="ml-4 text-bold text-white"
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
      {/* mobile */}
    </>
  );
};
