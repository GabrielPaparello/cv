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
        className="flex flex-col w-[350px] bg-[#252b37] p-7 rounded-2xl text-sm shadow-lg shadow-black justify-center align-middle gap-2 mb-10"
      >
        <h2 className="text-3xl font-serif text-white text-center mb-3">
          Contact Me
        </h2>
        <label className="text-white" htmlFor="Name">
          Name
        </label>
        <input
          type="text"
          required
          name="Name"
          placeholder="Your Name"
          className="p-2 rounded-xl bg-gray-200"
        />

        <label className="text-white text-xl" htmlFor="Subject">
          Subject
        </label>
        <input
          type="text"
          required
          name="Subject"
          placeholder="Subject"
          className="p-2 rounded-xl bg-gray-200"
        />

        <label className="text-white" htmlFor="Email">
          Email
        </label>
        <input
          type="text"
          required
          name="Email"
          placeholder="Email"
          className="p-2 rounded-xl bg-gray-200"
        />

        <label className="text-white" htmlFor="Message">
          Message
        </label>
        <textarea
          required
          name="Message"
          placeholder="Message"
          className="p-2 rounded-xl text-start bg-gray-200"
        />
        <button
          className="ml-[50px] bg-black border-2 border-[#45b5ff] text-white font-bold text-md hover:bg-[#45b5ff] hover:text-black w-[200px] p-2 rounded-xl"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
