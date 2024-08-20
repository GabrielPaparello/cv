import video from "../assets/bgVideo.mp4";

export const Header = () => {
  return (
    <>
      <header className="flex flex-col text-white text-center relative pb-[200px] pt-[80px] md:pt-[150px] px-8 ">
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
        <section className="relative flex md:flex-row flex-col md:order-1  text-start  justify-evenly items-center ">
          <article className="flex flex-col order-2 bg-gray-700/55 p-6 rounded-2xl   ">
            <span className="ring-gray-700 ring-1 p-5 rounded-xl">
              <h3 className="text-lg md:-ml-4 -ml-2 italic ">Welcome I am</h3>
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
            </span>
          </article>
          <div className="rounded-xl bg-blue-500 w-[400px] md:mb-0 mb-5 md:order-2 order-1 h-[400px]">
            ACA VA LA FOTO
          </div>
        </section>
        <section className="flex flex-col relative order-3 pt-5">
          <article className="">
            <button className="border-2 hover:scale-110 duration-300 border-[#45b5ff] text-[#45b5ff] px-4 py-2 mt-4 md:mt-0 rounded-lg">
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
