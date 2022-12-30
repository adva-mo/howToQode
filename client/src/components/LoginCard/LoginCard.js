import React, { useState } from "react";
import "./LoginCard.css";
import useInput from "../../hooks/useInput";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const isEmailInputValid = (value) => value.trim() !== "" && value.includes("@");
const isPasswordInputValid = (value) =>
  value.trim() !== "" && value.length >= 6;

function LoginCard({ setUserToRegister, isNewUser, setIsNewUser }) {
  // const [isNewUser, setIsNewUser] = useState(true);

  const {
    value: emailValue,
    isValid: isEmailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHndler,
    reset: resetEmail,
  } = useInput(isEmailInputValid);

  const {
    value: passwordValue,
    isValid: isPasswordValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPasswordInputValid);

  const {
    value: confirmedPasswordValue,
    isTouched,
    valueChangeHandler: confirmedpasswordChangeHandler,
    inputBlurHandler: confirmedpasswordBlurHandler,
    reset: resetConfirmedPassword,
  } = useInput(isPasswordInputValid);

  const confirmedPasswordHasError =
    isTouched && confirmedPasswordValue !== passwordValue;

  if (confirmedPasswordHasError) console.log("kkk");
  const emailClasses = emailHasError
    ? "error-class and bottom-border"
    : "bottom-border";
  const passwordClasses = passwordHasError
    ? "error-class and bottom-border"
    : "bottom-border";
  const confirmedPasswordClasses = confirmedPasswordHasError
    ? "error-class and bottom-border"
    : "bottom-border";

  let isFormValid = false;

  if (isEmailValid && isPasswordValid) {
    if (isNewUser) {
      if (!confirmedPasswordHasError) isFormValid = true;
    } else isFormValid = true;
  }

  const formSubmissionHandler = async (e) => {
    try {
      e.preventDefault();
      if (!isFormValid) return;
      setUserToRegister({
        username: emailValue,
        password: passwordValue,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <form
      onSubmit={formSubmissionHandler}
      className="flex-column login-card primary-box"
    >
      <h3>{isNewUser ? "Sign up" : "Sign in"} </h3>
      <div className="input-container">
        <input
          className={emailClasses}
          placeholder="enter your email"
          type="email"
          name="username"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHndler}
        />
        {emailHasError && (
          <p className="error-text">please enter a valid email</p>
        )}
      </div>
      <div className="input-container">
        <input
          className={passwordClasses}
          placeholder="enter password"
          type="password"
          name="password"
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        {passwordHasError && (
          <p className="error-text">password must contain at least 6 digits</p>
        )}
      </div>
      <div className="input-container">
        {isNewUser && (
          <>
            <input
              className={confirmedPasswordClasses}
              placeholder="repeat password"
              type="password"
              name="confirmedPassword"
              value={confirmedPasswordValue}
              onChange={confirmedpasswordChangeHandler}
              onBlur={confirmedpasswordBlurHandler}
            />
            {confirmedPasswordHasError && (
              <p className="error-text">password must be the same</p>
            )}
          </>
        )}
      </div>

      <button className="purple-btn">{isNewUser ? "Sign up" : "Login"}</button>
      <div>
        <button
          type="button"
          // className="blue-btn"
          onClick={() => {
            setIsNewUser((prev) => !prev);
          }}
        >
          {isNewUser ? "Already have an account? SIGN IN" : "new account"}
        </button>
      </div>
    </form>
  );
}

export default LoginCard;
