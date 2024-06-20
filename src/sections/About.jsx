export const About = () => {
  return (
    <div id="ABOUT" className="flex flex-col m-2 md:flex-row justify-center gap-10 ">
      <div className="text-white flex flex-col items-center  mt-10 text-start   ">
        <section className=" text-wrap text-start max-w-[400px] ">
          <h2 className="text-2xl md:text-5xl roboto text-[#45b5ff] m-2">
            {" "}
            About Me
          </h2>
          <p className="text-lg roboto md:text-2xl my-4 pb-2 ">
            I am passionate about understanding <br />
            how things work and finding ways to improve them.
          </p>
          <p className=" md:text-lg  text-md">
            Constantly seeking to learn and expand my knowledge, I consider
            myself a communicative person and highly dedicated to my
            responsibilities.
          </p>
        </section>
      </div>
      <div className="text-white flex flex-col items-center gap-10  md:flex-row  text-start   ">
        <section className="max-w-[400px]  text-wrap text-start">
          <h2 className="text-2xl md:text-5xl text-[#45b5ff]">Tecnologies</h2>
          <p className="text-lg md:text-2xl roboto mt-4 ">
            Currently my stack is: <br />
          </p>
          <p className="font-bold text-md md:text-2xl md:mb-4  font-sans text-[#6b4de5]  ">
            HTML, CSS, JavaScript, React, Tailwind, Material UI, Git, Github.
          </p>
          <p className="text-sm md:text-lg font-sans mt-2 ">
            A basic understanding of{" "}
            <span className="">
              Node, Express, Api Rest-full , Back end development ( http methods
              ) , and crud apps
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};
