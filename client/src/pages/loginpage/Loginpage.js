import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Loginpaage.css";
import LoginCard from "../../components/LoginCard/LoginCard";

function Loginpage() {
  const [userToRegister, setUserToRegister] = useState(null);
  const [isNewUser, setIsNewUser] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userToRegister) return;
    const path = isNewUser
      ? "http://localhost:3001/users/register"
      : "http://localhost:3001/users/login";
    axios
      .post(path, userToRegister)
      .then(({ data }) => {
        localStorage.setItem("QODE_APP", JSON.stringify([data._id]));
        if (data._id) navigate(`/profile/${data._id}`);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }, [userToRegister]);

  return (
    <div className="login-page page-container">
      <img
        className="test"
        src={process.env.PUBLIC_URL + "/assets/Ellipse1.png"}
      />
      <img
        className="test2"
        src={process.env.PUBLIC_URL + "/assets/Ellipse2.png"}
      />
      <LoginCard
        setUserToRegister={setUserToRegister}
        isNewUser={isNewUser}
        setIsNewUser={setIsNewUser}
      />
    </div>
  );
}

export default Loginpage;
