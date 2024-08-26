import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// Define the props interface for the Contact component
interface ContactProps {
  id: string;
}

export const Contact: React.FC<ContactProps> = ({ id }) => {
  // Properly type the form ref
  const form = useRef<HTMLFormElement | null>(null);

  // Type the event parameter correctly
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ensure form.current is not null before calling sendForm
    if (form.current) {
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
        )
        .finally(() => {
          // Reset the form after sending the email
          (form.current as HTMLFormElement).reset();
          alert("Mensaje enviado");
        });
    }
  };

  return (
    <div
      id={id}
      className="flex flex-col content-center mt-10 justify-center items-center"
    >
      <form
        onSubmit={sendEmail}
        ref={form}
        id="Contact"
        className="flex flex-col min-w-[350px]  md:min-w-[500px] font-body bg-[#252b37] p-7 rounded-2xl text-sm shadow-lg shadow-black justify-center align-middle gap-2 "
      >
        <h2 className="text-3xl font-title text-white text-center mb-5">
          Contact Me
        </h2>
        <label className="text-white text-lg" htmlFor="Name">
          Name
        </label>
        <input
          type="text"
          required
          name="Name"
          placeholder="Jhon Doe/ Jane Doe"
          className="p-2 rounded-md bg-gray-200"
        />

        <label className="text-white text-lg" htmlFor="Subject">
          Subject
        </label>
        <input
          type="text"
          required
          name="Subject"
          placeholder="Subject"
          className="p-2 rounded-md bg-gray-200"
        />

        <label className="text-white text-lg" htmlFor="Email">
          Email
        </label>
        <input
          type="text"
          required
          name="Email"
          placeholder="yourEmail@com"
          className="p-2 rounded-md bg-gray-200"
        />

        <label className="text-white text-lg" htmlFor="Message">
          Message
        </label>
        <textarea
          required
          name="Message"
          placeholder="Insert here your message..."
          className="p-2 rounded-md mb-2 text-start bg-gray-200"
        />
        <button
          className="bg-[#0d588a]/30 cursor-pointer border-2  border-[#45b5ff]/20 px-3 py-1 rounded-lg   hover:bg-[#0d588a]/60 font-title  tracking-wider text-lg text-white duration-100"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
