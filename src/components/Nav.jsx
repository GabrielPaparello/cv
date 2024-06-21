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
export const Nav = ({ handleNav, handleNextScroll }) => {
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
      to: 0
    },

    {
      name: "PROJECTS",
      href: "/",
      icon: faBriefcase,
      to: 2
    },
    {
      name: "ABOUT",
      href: "/",
      icon: faUserAlt,
      to: 1
    },
    {
      name: "CONTACT",
      href: "/",
      icon: faEnvelope,
      to: 4
    },
  ];
   const handleClick = (a) => {
    setOpen(!open);
    handleNextScroll(a)
  };
  return (
    <>
      {/* <nav className="invisible  md:visible md:h-[50px] md:mb-[140px] text-white flex   z-10   justify-center items-center">
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
                    onClick={() =>  handleClick(item.to)}
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
                    onClick={() =>  handleClick(item.to)}
                  >
                    {item.name}
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav> */}

      
      {/* mobile */}
      <nav className="xs:block  m-2  ">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            setOpen(!open) ;
          }}
          className={`text-3xl fixed top-2 z-10 bg-[#0D1321]  p-1 rounded-lg text-white cursor-pointer md:text-5xl  duration-500 ${
            !open ? "" : "invisible"
          }`}
        />

        <ul
          className={`fixed  flex justify-center  flex-col items-start tracking-widest  ease-in-out text-base rounded-2xl w-[150px] z-10 duration-700 bg-gradient-to-b from-[#0D1321] to-[#252b37]  text-[#f5f5f5] bg-[#252b37] p-3 pr-4 ${
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
                    onClick={() =>  handleClick(item.to)}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className=" mr-2 rounded-full text-[#45b5ff]   cursor-pointer "
                    />
                  </LinkScroll>
                  <LinkScroll
                    to={item.name}
                    smooth={true}
                    duration={500}
                    href={item.href}
                    className="tracking-widest text-sm "
                    onClick={() =>  handleClick(item.to)}
                  >
                    {item.name}
                  </LinkScroll>
                </div>
              ) : (
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className=" text-base  text-[#45b5ff] p-2    cursor-pointer "
                  />
                  <a
                    href={item.href}
                    className=" text-bold text-white"
                    onClick={() =>  handleClick(item.to)}
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