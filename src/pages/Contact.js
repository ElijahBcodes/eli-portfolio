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
      <form ref={form} onSubmit={sendEmail}>
        <ul>
          <li>
            <label>Name</label>
            <input type="text" name="user_name" />
          </li>
          <li>
            <label>Email</label>
            <input type="email" name="user_email" />
          </li>
          <li>
            <label>Message</label>
            <textarea name="message" />
          </li>
          <li>
            <input type="submit" value="Send" />
          </li>
        </ul>
      </form>
    </>
  );
};

export default Contact;
