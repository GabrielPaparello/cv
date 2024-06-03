export const About = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="text-white flex flex-col  md:flex-row  mt-10 text-start   ">
        <section className="w-[400px] md:w-[580px]">
          <h2 className="text-2xl md:text-3xl font-serif text-[#00df9a] m-2"> About Me</h2>
          <p className="text-lg font-serif md:text-2xl m-2 pb-4 ">
            Im  passionate on learning how things work and how they can be improved.
            
          </p>
            <p className="mt-2 md:w-[400px] md:text-lg w-[300px] text-md">
            On the constant search for learning and improving my knowlegde, I consider myself a comunicative person and a responsabilities addict.
            
            </p>
        </section>
        <section className="ml-2 md:w-[400px] w-[360px]">
          <h2 className="text-2xl mb-2 md:text-3xl text-[#00df9a]">Tecnologies</h2>
          <p className="text-lg md:text-xl font-serif ">
            Currently my stack is: <br />
          </p>
            <p className="font-bold text-md  font-sans text-[#d1ff00]  ">
              HTML, CSS, JavaScript, React, Tailwind, Material UI, Git, Github.
            </p>
          <p className="text-sm md:text-lg font-sans mt-2 w-[300px]">
            A  basic understanding of  <span className="text-[#d1ff00]">Node, Express,  Api
            Rest-full , Back end development ( http
            methods ) , and crud apps</span> 
          </p>
        </section>
                
      </div>
    </div>
  );
};
