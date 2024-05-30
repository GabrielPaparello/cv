export const Contact = () => {
  return (
    <div className="flex content-center mt-10 justify-center  items-center  ">
      <form className="flex flex-col bg-[#252b37] p-7 rounded-2xl text-sm justify-center align-middle gap-2 ">
        <h2 className="text-3xl font-serif text-white text-center mb-3">Contact Me</h2>
        <label className="text-white  " htmlFor="Name">
          
        </label>
        <input
          type="text"
          required
          name="Name"
          placeholder=" Your Name"
          className="p-2 rounded-xl bg-gray-200"
        />

        <label className="text-white  text-xl " htmlFor="Subject">
          
        </label>
        <input
          type="text"
          required
          name="Subject"
          placeholder=" Subject"
          className="p-2 rounded-xl bg-gray-200"
        />

        <label className="text-white  " htmlFor="Email">
         
        </label>
        <input
          type="text"
          required
          name="Email"
          placeholder=" Email"
          className="p-2 rounded-xl bg-gray-200"
        />

        <label className="text-white " htmlFor="Message">
         
        </label>
        <textarea
          type="text"
          required
          name="Message"
          placeholder=" Message"
          className="p-2 rounded-xl text-start bg-gray-200"
        />

        <button className="text-white  " type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
