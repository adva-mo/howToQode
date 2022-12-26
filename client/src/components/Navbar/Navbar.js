import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ loggedUser, setLoggedUser }) {
  return (
    <ul className="navbar-ul">
      {/* logo */}
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
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/new-snippet"}
        >
          ask a questions
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/ai"}
        >
          ask our experts
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/explore"}
        >
          Questions
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={loggedUser ? `/profile/${loggedUser[1]}` : "/login"}
        >
          {loggedUser ? "profile" : "login"}
        </NavLink>
      </li>
      {!loggedUser ? (
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to={`/signin`}
          >
            signin
          </NavLink>
        </li>
      ) : (
        <button
          onClick={() => {
            console.log("logging");
            setLoggedUser(null);
            localStorage.removeItem("QODE_APP");
          }}
        >
          logout
        </button>
      )}
    </ul>
  );
}

export default Navbar;
