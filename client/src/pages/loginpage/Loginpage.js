import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Loginpaage.css";
import LoginCard from "../../components/LoginCard/LoginCard";
import currentLoggedUser from "../../context/loggedUserContext";

function Loginpage() {
  const [userToRegister, setUserToRegister] = useState(null);
  const [isNewUser, setIsNewUser] = useState(true);
  const { setLoggedUser } = useContext(currentLoggedUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userToRegister) return;
    const path = isNewUser
      ? "https://howtoqode.onrender.com/users/register"
      : "https://howtoqode.onrender.com/users/login";
    axios
      .post(path, userToRegister)
      .then(({ data }) => {
        localStorage.setItem("QODE_APP", JSON.stringify([data._id]));
        setLoggedUser(data._id);
        if (data._id) navigate(`/profile/${data._id}`);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
    // eslint-disable-next-line
  }, [userToRegister]);

  return (
    <div className="login-page page-container">
      <img
        className="test"
        src={process.env.PUBLIC_URL + "/assets/Ellipse1.png"}
        alt=""
        key="1"
      />
      <img
        className="test2"
        src={process.env.PUBLIC_URL + "/assets/Ellipse2.png"}
        alt=""
        key="2"
      />

      <div className=" secondary-box page-title-container login-page-title-container">
        <h1 className="page-title">
          <span className="turkiz-font page-title">Join</span> the community and
          start asking questions today!{" "}
        </h1>
      </div>

      <LoginCard
        setUserToRegister={setUserToRegister}
        isNewUser={isNewUser}
        setIsNewUser={setIsNewUser}
      />
    </div>
  );
}

export default Loginpage;
