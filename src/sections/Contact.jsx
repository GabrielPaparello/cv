import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (e.target.Email.value.toLowerCase().includes("@gmail.com")) {
      emailjs
        .sendForm("service_v4znwzs", "template_2o8n997", form.current, {
          publicKey: "6DQJxnCew0qoEVF6r",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      e.target.reset();
      alert("mensaje enviado");
    } else if (
      e.target.Email.value.toLowerCase().includes("@outlook.com") ||
      e.target.Email.value.toLowerCase().includes("@hotmail.com") ||
      e.target.Email.value.toLowerCase().includes("@live.com") ||
      e.target.Email.value.toLowerCase().includes("@outlook.es")
    ) {
      emailjs
        .sendForm("service_7bg3xeu", "template_2o8n997", form.current, {
          publicKey: "6DQJxnCew0qoEVF6r",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      e.target.reset();
      alert("mensaje enviado");
    }
    return (
      <div id="Contact" className="flex flex-col content-center mt-10  justify-center  items-center  ">
        <form
          onSubmit={sendEmail}
          ref={form}
          id="Contact"
          className="flex flex-col w-[350px] bg-[#252b37] p-7 rounded-2xl text-sm justify-center align-middle gap-2 mb-10"
        >
          <h2 className="text-3xl font-serif text-white text-center mb-3">
            Contact Me
          </h2>
          <label className="text-white  " htmlFor="Name"></label>
          <input
            type="text"
            required
            name="Name"
            placeholder=" Your Name"
            className="p-2 rounded-xl bg-gray-200"
          />

          <label className="text-white  text-xl " htmlFor="Subject"></label>
          <input
            type="text"
            required
            name="Subject"
            placeholder=" Subject"
            className="p-2 rounded-xl bg-gray-200"
          />

          <label className="text-white  " htmlFor="Email"></label>
          <input
            type="text"
            required
            name="Email"
            placeholder=" Email"
            className="p-2 rounded-xl bg-gray-200"
          />

          <label className="text-white " htmlFor="Message"></label>
          <textarea
            type="text"
            required
            name="Message"
            placeholder=" Message"
            className="p-2 rounded-xl text-start bg-gray-200"
          />
          <button
            className="ml-[50px] bg-black border-2 border-[#b47c03] text-[#F7AB0A] font-bold text-md hover:bg-[#F7AB0A] hover:text-black w-[200px]  p-2 rounded-xl"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    );
  };
};
