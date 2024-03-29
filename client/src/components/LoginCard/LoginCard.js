import React from "react";
import "./LoginCard.css";
import useInput from "../../hooks/useInput";

const isEmailInputValid = (value) => value.trim() !== "" && value.includes("@");
const isPasswordInputValid = (value) =>
  value.trim() !== "" && value.length >= 6;

function LoginCard({ setUserToRegister, isNewUser, setIsNewUser }) {
  const {
    value: emailValue,
    isValid: isEmailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHndler,
  } = useInput(isEmailInputValid);

  const {
    value: passwordValue,
    isValid: isPasswordValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(isPasswordInputValid);

  const {
    value: confirmedPasswordValue,
    isTouched,
    valueChangeHandler: confirmedpasswordChangeHandler,
    inputBlurHandler: confirmedpasswordBlurHandler,
  } = useInput(isPasswordInputValid);

  const confirmedPasswordHasError =
    isTouched && confirmedPasswordValue !== passwordValue;

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

  const loginGuest = () => {
    setIsNewUser(false);
    setUserToRegister({
      username: "guest@gmail.com",
      password: "123456",
    });
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
      <div>
        <button className="select-primary">
          {isNewUser ? "Sign up" : "Login"}
        </button>
        <button onClick={() => loginGuest()} style={{ marginLeft: "1rem" }}>
          enter as a guest
        </button>
      </div>

      <div>
        <button
          style={{ fontSize: "0.7rem" }}
          className="select-primary"
          type="button"
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
