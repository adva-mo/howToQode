import React, { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import { useHttp } from "../../hooks/useHttp";

const isEmailInputValid = (value) => value.trim() !== "" && value.includes("@");
const isPasswordInputValid = (value) =>
  value.trim() !== "" && value.length >= 6;

function Loginpage() {
  const [isNewUser, setIsNewUser] = useState(true);
  const [userData, setUserData] = useState(null);
  const [connectedUser, setConnectedUser] = useState(null);

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

  const { getData } = useHttp(setConnectedUser);

  useEffect(() => {
    console.log(userData);
    getData({
      url: "users/login",
      method: "POST",
      body: userData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    //send req to the server to login the user
  }, [userData]);

  let isFormValid = true;

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setUserData({ username: emailValue, password: passwordValue });
  };

  return (
    <div>
      <form onSubmit={formSubmissionHandler} className="flex-column login-card">
        <h3>{isNewUser ? "Sign up" : "Sign in"} </h3>
        <label htmlFor="username">email</label>
        <input
          //   className={emailClasses}
          placeholder="enter your email"
          type="email"
          name="username"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHndler}
        />
        {/* {emailHasError && (
          <p className="error-text">
            please enter a valid email
            <br />
            for example: example@example.com
          </p>
        )} */}
        <label htmlFor="password">password</label>
        <input
          //   className={passwordClasses}
          placeholder="enter your password"
          type="password"
          name="password"
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        {/* {passwordHasError && (
          <p className="error-text">password must contain at least 6 digits</p>
        )} */}
        {isNewUser && (
          <>
            <label htmlFor="confirmedPassword">password</label>
            <input
              //   className={confirmedPasswordClasses}
              placeholder="repeat your password"
              type="password"
              name="confirmedPassword"
              value={confirmedPasswordValue}
              onChange={confirmedpasswordChangeHandler}
              onBlur={confirmedpasswordBlurHandler}
            />
            {/* {confirmedPasswordHasError && (
              <p className="error-text">password must be the same</p>
            )} */}
          </>
        )}

        <button className="red-round-btn">
          {isNewUser ? "Sign up" : "Login"}
        </button>

        <button
          type="button"
          className="blue-btn"
          onClick={() => {
            setIsNewUser((prev) => !prev);
            // setPasswordToRegister(null);
            // setEmailToRegister(null);
          }}
        >
          {isNewUser ? "Already have an account? SIGN IN" : "new account"}
        </button>
      </form>
    </div>
  );
}

export default Loginpage;
