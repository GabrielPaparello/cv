export const About = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="text-white flex flex-col  mt-10 text-start  w-[340px] ">
        <section>
          <h2 className="text-xl font-serif text-[#00df9a] m-2"> About Me</h2>
          <p className="text-md font-serif m-2 pb-4">
            Im a passionate and creative Front-End Developer with a knack for
            crafting seamless and engaging user experiences. I specialize in
            transforming ideas into interactive, responsive, and visually
            stunning websites.
          </p>
        </section>
        <section>
          <h3 className="text-xl text-[#00df9a]">Tecnologies</h3>
          <p className="text-lg font-serif">
            Currently my stack is: <br />
            <span className="font-bold text-md font-sans text-[#d1ff00]">
              HTML, CSS, JavaScript, React, Tailwind, Material UI, jquery.
            </span>
          </p>
          <p className="text-sm font-sans">
            A little bit of a basic understanding of this Tecnologies <span className="text-[#d1ff00]">Node, Express,  Api
            Rest-full , Back end development ( http
            methods ) , and crud apps</span> 
          </p>
        </section>
      </div>
    </div>
  );
};
