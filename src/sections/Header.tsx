import { useContext } from "react";
import video from "../assets/bgVideo.mp4";
import logo from "../assets/logo/ghapzh.png";
import { Link } from "react-scroll";

type HeaderProps = {
  id: string;
};

export const Header = ({ id }: HeaderProps) => {
  return (
    <>
      <header
        id={id}
        className="flex flex-col  text-white text-center relative pb-[200px] pt-[80px] md:pt-[150px]  "
      >
        <section className=" ">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 object-cover w-full h-full "
          >
            <source src={video} type="video/mp4" />
          </video>
          <span className="absolute  inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1321]" />
        </section>
        <section className="relative flex lg:flex-row flex-col md:order-1 gap-5 m-5   text-start  justify-evenly items-center ">
          <article className=" flex flex-col order-2 bg-gray-700/25 p-5 rounded-2xl     ">
            <span className="ring-gray-700/60 ring-1 md:p-7 p-3 rounded-xl">
              <h3 className="text-lg md:-ml-4 -ml-2 mb-3 tracking-wider italic  ">
                Welcome I am
              </h3>
              <h1 className="text-3xl md:text-5xl    m-2">
                Gabriel
                <span className="text-[#6b4de5]/90 "> Front End Developer</span>
              </h1>
              <p className="  text-xl md:text-start  tracking-wide   text-wrap min-w-[350px] max-w-[630px] text-white p-5 ">
                I specialize in creating{" "}
                <span className="text-[#45b5ff]">Solutions</span> for modern
                problems trough web development. <br />
                Passionate about technology and the way things work as im
                constanly <span className="text-[#45b5ff]">Seeking</span> new
                challenges and learning new technologies
              </p>
              <article className="text-end">
                <Link
                  className=" font-title cursor-pointer duration-100 tracking-wider text-lg   text-[#45b5ff]/60 px-4 py-2 mt-4 md:mt-0  hover:text-[#45b5ff]/30"
                  duration={500}
                  smooth
                  to={"projects"}
                >
                  My Work
                </Link>
                <Link
                  className="bg-[#0d588a]/30 cursor-pointer border-2  border-[#45b5ff] px-3 py-1 rounded-lg mx-4  hover:bg-[#0d588a]/60 font-title  tracking-wider text-lg  duration-100"
                  duration={500}
                  smooth
                  to={"contact"}
                >
                  Contact Me
                </Link>
              </article>
            </span>
          </article>
          <img
            className="rounded-xl  w-[400px] md:w-[550px] lg:mb-0 mb-10 lg:order-2 order-1 h-auto"
            src={logo}
            alt="logo"
          ></img>
        </section>
      </header>
    </>
  );
};
