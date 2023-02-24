import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsCheckSquareFill } from "react-icons/bs";

const Contact = () => {
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);

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
      className="bg-gradient-to-t from-[#18122B] to-[#393053] lg:py-32 lg:px-32 p-10"
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
          className="mt-6 flex items-center justify-center bg-[#18122B] lg:px-32 px-8 lg:py-10 py-6 shadow-xl w-full sm:w-4/5"
        >
          <div className="">
            <label className="md:text-3xl text-xl">Name</label>
            <input
              placeholder="John Doe"
              type="text"
              name="user_name"
              className="block bg-[#EAE0DA] text-lg sm:w-96 h-10 mt-4 text-black px-2"
            />

            <div className="mt-6">
              {" "}
              <label className="md:text-3xl text-xl">Email</label>
              <input
                placeholder="johndoe@gmail.com"
                type="email"
                name="user_email"
                className="block bg-[#EAE0DA] text-lg sm:w-96 h-10 mt-4 text-black px-2"
              />
            </div>

            <div className="mt-6">
              <label className="md:text-3xl text-xl">Message</label>
              <textarea
                placeholder="Enter your text..."
                name="message"
                className="block bg-[#EAE0DA] text-lg sm:w-96 h-[116px] w-full mt-4 text-black px-2"
              />
            </div>

            <input
              onClick={() => setAlert(true)}
              type="submit"
              value="Send"
              className="border-2 px-12 py-2 border-[#CFB997] text-[#CFB997]  w-full cursor-pointer mt-6 hover:bg-[#CFB997] hover:text-white duration-300"
              //   hover:scale-105 duration-300
            />
            {alert === true ? (
              <div className="flex items-center text-lg mt-2 p-2 bg-green-400">
                <BsCheckSquareFill className=" mr-4" />
                <div className="">Email sent.</div>
              </div>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
