export const About = ({ id }: { id: string }) => {
  return (
    <>
      <h2 className="text-3xl id={id} md:text-5xl font-title text-center text-[#45b5ff] m-2">
        {" "}
        Who am I
      </h2>
      <section className="flex flex-col md:flex-row m-2 mt-5 md:mt-10 justify-center gap-10 ">
        <section className="text-white flex flex-col md:flex-row items-center   justify-center   ">
          <article className=" text-wrap text-start max-w-[400px] ">
            <p className="text-lg roboto md:text-2xl my-4 pb-2 ">
              Im a Junior/trainee Front end Developer eager to Learn and to put
              trough test my abilities trough a developer job
            </p>
            <p className=" md:text-lg  text-md">
              Constantly seeking to learn and expand my knowledge, I consider
              myself a communicative person and highly dedicated to my
              responsibilities.
            </p>
          </article>
        </section>
        <section className="text-white flex flex-col items-center gap-10  md:flex-row  justify-center   ">
          <article className="max-w-[400px]  text-wrap text-start">
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
                Node, Express, Api Rest-full , Back end development ( http
                methods ) , and crud apps
              </span>
            </p>
          </article>
        </section>
      </section>
    </>
  );
};
