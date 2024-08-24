import "@/App.css";
export const About = ({ id }: { id: string }) => {
  return (
    <>
      <section className="flex flex-col  mt-5 md:mt-10  bg-[#e3f2fd]  justify-center m-auto  items-center ">
        <section className="text-body m-2 p-5 md:max-w-[80%]  flex items-center justify-center">
          <article className="text-wrap text-start font-body ">
            <h2
              id={id}
              className="text-3xl text-subtitle text-start italic font-semibold    mt-8 mb-5 font-title"
            >
              Who Am I
            </h2>
            <p className="text-lg  md:text-2xl my-4 pb-2 first-letter:text-2xl first-letter:font-semibold first-letter-dancing">
              Hi, I'm Gabriel, a passionate Junior Front-End Developer from
              Buenos Aires, Argentina.
              <br /> While I currently work in customer service, my true passion
              lies in web development. I spend every spare moment exploring new
              technologies and honing my skills. For me, programming is like a
              game where time flies, and I am constantly excited to learn and
              create.
            </p>
            <p className="text-lg first-letter:text-2xl first-letter:font-semibold first-letter-dancing  ">
              With a strong enthusiasm for front-end development, I'm eager to
              dive into professional opportunities where I can contribute my
              skills and continue growing. I see myself as a dedicated,
              communicative individual who thrives on solving problems and
              building user-friendly interfaces.
            </p>
          </article>
        </section>
        <section className="text-body m-2 p-5 md:max-w-[80%]  flex items-center justify-center">
          <article className="text-wrap text-start font-body ">
            <h3
              id={id}
              className="text-3xl text-subtitle text-start italic font-semibold    mt-8 mb-5 font-title"
            >
              Technologies
            </h3>
            <h3 className="text-base text-body/60  md:text-xl pb-5">
              My current tech stack includes a range of modern tools and
              technologies that enable me to build dynamic and responsive web
              applications. I am proficient in:
            </h3>
            <ul className="list-disc   ">
              <li className="font-semibold">
                HTML, CSS, JavaScript, TypeScript:{" "}
              </li>
              <p className="text-base  pb-2 ">
                Core technologies for creating and styling web content.
              </p>
              <li className="font-semibold">React, Next.js, and Redux: </li>
              <p className="text-base  pb-2 ">
                For building interactive user interfaces and managing
                application state.
              </p>
              <li className="font-semibold">Tailwind CSS and Material UI: </li>
              <p className="text-base  pb-2 ">
                For designing and implementing aesthetically pleasing and
                responsive layouts.
              </p>
              <li className="font-semibold">Git and GitHub: </li>
              <p className="text-base  pb-2 ">
                For version control and collaboration.
              </p>
            </ul>
            <p className="text-lg first-letter-dancing first-letter:text-2xl first-letter:font-semibold ">
              In addition, I have a foundational understanding of Node.js,
              Express, RESTful APIs, and CRUD applications. I am constantly
              expanding my knowledge and am excited about applying these skills
              to real-world projects.
            </p>
          </article>
        </section>
      </section>
    </>
  );
};
