import Lottie from "react-lottie";
import animationData from "../assets/Animation.json";
import { Link as LinkScroll } from "react-scroll";
export const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div
        id="Home"
        className="text-center md:text-start m-2  p-2 md:p-0  flex flex-col text-white"
      >
        <div className="md:absolute     md:left-[13vw] lg:left-[20vw]
        md:top-[30vh] ">
          <h1 className="text-3xl md:text-5xl  font-serif m-2">Gabriel</h1>
          <h2 className="text-2xl md:text-4xl font-serif m-2 pb-4">
            Front End <span className="text-[#FFC145]">Developer</span>
          </h2>
        </div>
        <div className="bg-[#FFC145] md:relative md:left-[50vw] md:pr-10 md:w-[450px] rounded-3xl md:mt-10">
          <Lottie options={defaultOptions} height={350} width={350}/>
        </div>

        <h2 className="text-lg md:text-center text-white pt-2 md:pt-10">
          Creating <span className="text-[#FFC145]">Solutions</span> for modern
          problems
        </h2>
        <div className="m-2 md:text-center">
          <LinkScroll to='Projects' smooth={true} duration={500}>
          <button className="border-2 hover:scale-110 duration-300 border-[#FFC145] text-[#FFC145] px-4 py-2 rounded-lg">
            See my Work
          </button>
          </LinkScroll>
          <LinkScroll to='Contact' smooth={true} duration={500}>
          <button className="bg-[#FFC145] border-2 border-[#FFC145] px-4 py-2 rounded-lg m-4 hover:scale-110 hover:font-bold duration-300">
            Contact Me
          </button>
          </LinkScroll>
         
        </div>
      </div>
    </>
  );
};
