import React, { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmint = (e) => {
    e.preventDefault();
    try {
      console.log(user);
    } catch (error) {}
  };
  return (
    <>
      <section className="container">
        <div className="section-contact">
          <div className="container grid grid-two-cols">
            <div className="contact-image">
              <img
                src="/images/support.png"
                alt="We are always ready to help"
                width="500"
                height="500"
              />
            </div>
            <div className="contact-form">
              <h1 className="main-heading mb-3">Contact form</h1>
              <br />
              <form onSubmit={handleSubmint}>
                <div>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      required
                      type="text"
                      id="username"
                      name="username"
                      value={user.username}
                      onChange={handleChange}
                      placeholder="Enter your username"
                    />
                  </div>
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={user.email}
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
                    name="message"
                    value={user.message}
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
        </div>
      </section>
    </>
  );
};

export default Contact;
