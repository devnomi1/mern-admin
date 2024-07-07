import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="error-page">
        <div id="error-page" className="container content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page not found</h4>
          <p>
            Opps! It seems like the page you are trying to access does not
            exist. If you belive there's an issue, feel free to report it, and
            we'll look inot it.
          </p>
          <div className="btns">
            <NavLink to="/">Return Home</NavLink>
            <NavLink to="/contact">Report problem</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
