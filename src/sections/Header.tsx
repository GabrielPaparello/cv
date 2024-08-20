import video from "../assets/bgVideo.mp4";

export const Header = () => {
  return (
    <>
      <header className="flex flex-col text-white text-center relative py-[200px] px-8 ">
        <section>
          <video
            autoPlay
            muted
            loop
            className="absolute  inset-0 object-cover w-full h-full"
          >
            <source src={video} type="video/mp4" />
          </video>
          <span className="absolute inset-0 bg-gradient-to-b from-transparent  to-black/50" />
        </section>
        <section className="relative flex text-start  justify-evenly items-center ">
          <article className="flex flex-col">
            <h3 className="text-lg ">Welcome I am</h3>
            <h1 className="text-3xl md:text-5xl  m-2">
              Gabriel
              <span className="text-[#6b4de5]/90 "> Front End Developer</span>
            </h1>
            <p className="  text-xl md:text-start roboto tracking-wide text-wrap max-w-[400px] md:max-w-[600px] text-white p-5 ">
              I specialize in creating{" "}
              <span className="text-[#45b5ff]">Solutions</span> for modern
              problems trough web development. <br />
              Passionate about technology and the way things work as im
              constanly <span className="text-[#45b5ff]">Seeking</span> new
              challenges and learning new technologies
            </p>
          </article>
          <div className="rounded-xl bg-blue-500 w-[400px]  h-[400px]">
            ACA VA LA FOTO
          </div>
        </section>
        <section className="flex flex-col relative pt-5">
          <article className="">
            <button className="border-2 hover:scale-110 duration-300 border-[#45b5ff] text-[#45b5ff] px-4 py-2 mt-10 md:mt-0 rounded-lg">
              See my Work
            </button>
            <button className="bg-[#0d588a] border-2 border-[#45b5ff] px-4 py-2 rounded-lg m-4 hover:scale-110 hover:font-bold duration-300">
              Contact Me
            </button>
          </article>
        </section>
      </header>
    </>
  );
};
