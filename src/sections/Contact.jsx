import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ls0wots',
        'template_14l95vn',
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text),
      );
  };

  return (
    <div className="container">
      <div className="row text-center pt-4">
        <div className="col">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="row pt-5">
        <div className="contact-text col-xl-6 col-lg-12">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="user-name">
              Name
              <input type="text" id="user-name" name="user-name" />
            </label>

            <label htmlFor="user-email">
              Email
              <input type="email" name="user-email" />
            </label>

            <label htmlFor="message">
              Message
              <textarea name="message" id="message" />
            </label>

            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="col-xl-6 col-lg-12 contact-img mb-5 d-flex justify-content-center">
          <img
            src="https://i.imgur.com/G4Xl7Uq.png"
            alt="Brandon Harmon and Warwick"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
