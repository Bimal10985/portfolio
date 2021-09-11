import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light  navbar-bg">
        <section className="container">
          <NavLink class="nav-link nav-brand" to="/">
            Bimal Thapa <span class="sr-only">(current)</span>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <NavLink class="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="services">
                  Services <span class="sr-only">(current)</span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="about">
                  About <span class="sr-only">(current)</span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="contact">
                  Contact <span class="sr-only">(current)</span>
                </NavLink>
              </li>
              {/* <li>
            <button className="btn btn-outline-success btn-navbar">Sign Up</button>
            </li>
            <li>
            <button className="btn btn-outline-success btn-navbar">Login</button>
            </li> */}
            </ul>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
