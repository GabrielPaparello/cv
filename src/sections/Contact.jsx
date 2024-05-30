export const Contact = () => {
  return (
    <div className="flex content-center mt-10 justify-center  items-center  ">
      <form className="flex flex-col bg-[#252b37] p-7 rounded-2xl text-lg justify-center align-middle gap-2 ">
        <h2 className="text-4xl font-serif text-white text-center mb-3">Contact Me</h2>
        <label className="text-white text-xl mt-2" htmlFor="Name">
          Nombre
        </label>
        <input
          type="text"
          name="Name"
          placeholder=" RecruiterName"
          className="p-2 rounded-xl"
        />

        <label className="text-white text-xl mt-2" htmlFor="Subject">
          Subject
        </label>
        <input
          type="text"
          name="Subject"
          placeholder=" I want to hire you!"
          className="p-2 rounded-xl"
        />

        <label className="text-white text-xl mt-2" htmlFor="Email">
          Email
        </label>
        <input
          type="text"
          name="Email"
          placeholder=" sendEmail@example"
          className="p-2 rounded-xl"
        />

        <label className="text-white text-xl mt-2" htmlFor="Message">
          Message
        </label>
        <textarea
          type="text"
          name="Message"
          placeholder=" We want to work with you!!"
          className="p-2 rounded-xl text-start"
        />

        <button className="text-white text-xl mt-2" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
