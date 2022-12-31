import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import currentLoggedUser from "../../context/loggedUserContext";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const { loggedUser, setLoggedUser } = useContext(currentLoggedUser);

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
          LOGO
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
