import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "noumanijaz03@gmail.com",
    password: "hellonomi12",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmint = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      navigate("/");
      console.log(await res.json());
    } catch (error) {
      console.log("signup: ", error);
    }
  };
  return (
    <section className="container">
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img
                src="/images/login.png"
                alt="Let fil the login form"
                width="500"
                height="500"
              />
            </div>
            <div className="registration-form">
              <h1 className="main-heading mb-3">Login form</h1>
              <br />
              <form onSubmit={handleSubmint}>
                <div>
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
                  <label htmlFor="password">password</label>
                  <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="password"
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
      </main>
    </section>
  );
};

export default Login;
