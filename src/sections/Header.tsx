export const Header = () => {
  return (
    <>
      <div
        id="HOME"
        className="text-center md:text-start m-2 p-2 md:p-0  items-center  flex flex-col mt-[200px]  text-white mb-[200px]  "
      >
        <div className="flex md:flex-row  md:gap-[100px] flex-col items-center ">
          <div className="playfair md:mt-0 ">
            <h1 className="text-3xl md:text-8xl  m-2">Gabriel</h1>
            <h2 className="text-2xl md:text-6xl  m-2 pb-4">
              {" "}
              Front End <span className="text-[#6b4de5]">Developer</span>
            </h2>
          </div>
        </div>

        <h2 className="text-xl md:text-center roboto tracking-wide text-white pt-2 md:pt-[100px]">
          Creating <span className="text-[#45b5ff]">Solutions</span> for modern
          problems
        </h2>
        <div className="m-2 md:text-center text-xl ">
          <button className="border-2 hover:scale-110 duration-300 border-[#45b5ff] text-[#45b5ff] px-4 py-2 mt-10 md:mt-0 rounded-lg">
            See my Work
          </button>
          <button className="bg-[#0d588a] border-2 border-[#45b5ff] px-4 py-2 rounded-lg m-4 hover:scale-110 hover:font-bold duration-300">
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};
