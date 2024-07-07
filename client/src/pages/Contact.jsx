import React, { useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({
    email: "",
    username: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...user, [name]: value });
  };
  const handleSubmint = (e) => {
    e.preventDefault();
    try {
      console.log(contact);
    } catch (error) {}
  };
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-image">
            <img
              src="/images/support.png"
              alt="We are always ready to help"
              width="500"
              height="500"
            />
          </div>
          <div className="section-form">
            <h1 className="main-heading mb-3">Contact form</h1>
            <br />
            <form onSubmit={handleSubmint}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  required
                  type="text"
                  id="username"
                  name="username"
                  value={contact.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={contact.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message">message</label>
                <textarea
                  required
                  type="textarea"
                  id="message"
                  cols="30"
                  rows="5"
                  name="message"
                  value={contact.message}
                  onChange={handleChange}
                  placeholder="Type your message here "
                />
              </div>
              <br />
              <button type="submit" className="btn btn-submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
