import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <ul className="navbar-ul">
      logo
      {/* <img
        className="logo-img"
        src="https://firebasestorage.googleapis.com/v0/b/sharry-1319e.appspot.com/o/assets%2Flogo.png?alt=media&token=026310f7-4bdc-4b4b-ba0a-52f0696d5988"
        alt=""
      /> */}
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/homepage"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.is ? "active" : "")}
          to={"/explore"}
        >
          Explore
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/new-snippet"}
        >
          ask a questions
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/questions"}
        >
          top questions
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/login"}
        >
          login
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={`/signin`}
        >
          signin
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
