export const About = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="text-white flex flex-col  md:flex-row  mt-10 text-start   ">
        <section className="w-[340px] md:w-[600px]">
          <h2 className="text-xl md:text-3xl font-serif text-[#00df9a] m-2"> About Me</h2>
          <p className="text-md font-serif md:text-2xl m-2 pb-4">
            Im a passionate and creative Front-End Developer with a knack for
            crafting seamless and engaging user experiences.
            <p className="md:mt-2 md:text-lg">
            I specialize in
            transforming ideas into interactive, responsive, and visually
            stunning websites.
            
            </p>
            
          </p>
        </section>
        <section className="md:w-[400px] w-[340px]">
          <h3 className="text-xl md:text-3xl text-[#00df9a]">Tecnologies</h3>
          <p className="text-lg md:text-2xl font-serif">
            Currently my stack is: <br />
            <span className="font-bold text-md  font-sans text-[#d1ff00]">
              HTML, CSS, JavaScript, React, Tailwind, Material UI, Git, Github.
            </span>
          </p>
          <p className="text-sm md:text-lg font-sans md:mt-2">
            A little bit of a basic understanding of this Tecnologies <span className="text-[#d1ff00]">Node, Express,  Api
            Rest-full , Back end development ( http
            methods ) , and crud apps</span> 
          </p>
        </section>
      </div>
    </div>
  );
};
