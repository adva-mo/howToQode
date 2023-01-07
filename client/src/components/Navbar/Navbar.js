import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import currentLoggedUser from "../../context/loggedUserContext";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const { loggedUser, setLoggedUser } = useContext(currentLoggedUser);

  return (
    <ul className="navbar-ul">
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/homepage"}
        >
          <img
            className="logo-img"
            src="https://firebasestorage.googleapis.com/v0/b/sharry-1319e.appspot.com/o/QODE%2FASSETS%2FScreen%20Shot%202023-01-04%20at%205.28.15%20PM_prev_ui.png?alt=media&token=638f374e-e17a-46cf-8e6e-e70317864c48"
            alt=""
          />{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/new-snippet"}
        >
          POST A QEUSTION
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/ai"}
        >
          ASK OUR EXPERTS
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/explore"}
        >
          EXPLORE
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={loggedUser ? `/profile/${loggedUser}` : "/login"}
        >
          {loggedUser ? "PROFILE" : "LOGIN"}
        </NavLink>
      </li>
      {!loggedUser ? (
        <li className="turkiz-btn">
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to={`/login`}
          >
            SIGN UP
          </NavLink>
        </li>
      ) : (
        <button
          className="turkiz-btn"
          onClick={() => {
            setLoggedUser(null);
            localStorage.removeItem("QODE_APP");
            navigate("/login");
          }}
        >
          LOGOUT
        </button>
      )}
    </ul>
  );
}

export default Navbar;
