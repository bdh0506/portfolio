/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const nav = useNavigate();

  function formSuccess(r) {
    if (r.status === 200) {
      const submitBtn = document.getElementById('submit-btn');
      const loader = document.getElementById('submit-loading');
      loader.classList.add('d-none');
      submitBtn.value = 'Send Complete';
      submitBtn.style.display = 'inline-block';
      setTimeout(() => {
        submitBtn.value = 'Send Message';
      }, 3000);
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('submit-btn');
    const loader = document.getElementById('submit-loading');
    submitBtn.style.display = 'none';
    loader.classList.remove('d-none');

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
      .then(
        (result) => formSuccess(result),
        (error) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          useEffect(() => {
            nav('/Error404');
          }, [error]),
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
          <div className="row">
            <div className="col-xl-12 mb-4">
              For professional inquiries please use the contact form below or
              contact me using the email at the bottom of the&nbsp;page.
            </div>
          </div>
          <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="row">
              <label className="form-label" htmlFor="name">
                Name
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="user_name"
                />
              </label>
            </div>
            <div className="row">
              <label className="form-label" htmlFor="email">
                Email
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="user_email"
                />
              </label>
            </div>
            <div className="row">
              <label className="form-label" htmlFor="message">
                Message
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                />
              </label>
            </div>
            <div className="row mt-4">
              <div className="col-xl-6">
                <div id="submit-loading" className="loader d-none" />
                <input
                  id="submit-btn"
                  className="btn btn-main px-4 py-2"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </div>
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
