import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y5idbla",
        "template_qvsvvwo",
        form.current,
        "jdpUo1KDQ-bDTL7Wx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="bg-gradient-to-t from-[#18122B] to-[#393053] py-32 px-32"
      id="contact"
    >
      <h2 className="text-4xl font-bold text-[#EAE0DA]">
        CONTACT
        <div className="h-[1px] mt-2 bg-[#EAE0DA]"></div>
      </h2>

      <div className="flex items-center justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-6 flex items-center justify-center bg-[#18122B] px-32 py-10"
        >
          <div className="">
            <label className="text-3xl">Name</label>
            <input
              type="text"
              name="user_name"
              className="block bg-[#EAE0DA] text-lg w-96 h-10 mt-4"
            />

            <div className="mt-6">
              {" "}
              <label className="text-3xl">Email</label>
              <input
                type="email"
                name="user_email"
                className="block bg-[#EAE0DA] text-lg w-96 h-10 mt-4"
              />
            </div>

            <div className="mt-6">
              <label className="text-3xl">Message</label>
              <textarea
                name="message"
                className="block bg-[#EAE0DA] text-lg w-96 h-[116px] mt-4"
              />
            </div>

            <input
              type="submit"
              value="Send"
              className="border-2 px-12 py-2 border-[#CFB997] text-[#CFB997]  w-full cursor-pointer mt-6 hover:bg-[#CFB997] hover:text-white duration-300"
              //   hover:scale-105 duration-300
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
