import React from "react";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <header className=" topnav-container px-5">
      <nav className="navbar navbar-expand-lg navbar-expand-md px3">
        <NavLink to="/" className=" navbar-brand text-dark  ">
          <i className="fa fa-home fa-2x  "></i>
        </NavLink>
        <button
          className=" navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#myNav"
        >
          <span className="navbar-icon ">
            <i className=" fa fa-bars text-dark"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="myNav">
          <ul className=" navbar-nav mx-auto ">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-dark ">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link text-dark">
                Project
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resume" className="nav-item nav-link text-dark">
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
