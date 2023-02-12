import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lel2yec",
        "template_7b9gjzd",
        form.current,
        "0qV1X2bFXrsppuZOe"
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
    <>
      <h1 className="text-center text-blk text-5xl mb-10 mt-4">
        Send me a message
      </h1>
      <div className="space-y-2 flex justify-center mb-2 text-md font-medium">
        <form className=" " ref={form} onSubmit={sendEmail}>
          <div className="w-96">
            <label className="block">Name</label>
            <input
              className="w-96"
              type="text"
              placeholder="What is your name?"
              name="user_name"
            />
          </div>

          <div>
            <label className="block">Email</label>
            <input
              className="w-96"
              placeholder="Enter email"
              type="email"
              name="user_email"
            />
          </div>

          <div>
            <label className="block">Message</label>
            <textarea
              className="w-96 h-52"
              placeholder="Enter message here"
              name="message"
            />
          </div>
          <div>
            <button
              htmlFor="my-modal"
              value="send"
              className="btn btn-outline btn-secondary text-white mt-4 w-96"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
