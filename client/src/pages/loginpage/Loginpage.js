import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Loginpaage.css";
import LoginCard from "../../components/LoginCard/LoginCard";

function Loginpage() {
  const [userToRegister, setUserToRegister] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userToRegister) return;
    axios
      .post("http://localhost:3001/users/register", userToRegister)
      .then(({ data }) => {
        localStorage.setItem("QODE_APP", JSON.stringify([data._id]));
        if (data._id) navigate(`/profile/${data._id}`);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [userToRegister]);

  return (
    <div className="login-page page-container">
      <LoginCard setUserToRegister={setUserToRegister} />
    </div>
  );
}

export default Loginpage;
