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
          className={(navData) =>
            navData.isActive ? "active turkiz-font" : "turkiz-font"
          }
          to={"/homepage"}
        >
          QODE
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
          className={(navData) =>
            navData.isActive ? "active navlink-chat" : "navlink-chat"
          }
          to={"/chat"}
        >
          CHAT
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
