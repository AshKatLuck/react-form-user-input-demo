import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const isEnteredEmailValid =
    enteredEmail.trim() !== "" &&
    enteredEmail.includes("@") &&
    enteredEmail.includes(".");
  const emailInputIsInvalid = !isEnteredEmailValid && enteredEmailTouched;

  let formIsValid = false;
  if (enteredNameIsValid && isEnteredEmailValid) {
    formIsValid = true;
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setEnteredEmailTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const submitFormHandler = (event) => {
    console.log("submit handler");
    event.preventDefault();
    setEnteredEmailTouched(true);
    if (!enteredNameIsValid || !isEnteredEmailValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);

    nameReset();

    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const nameFieldClasses = !nameHasError
    ? "form-control"
    : "form-control invalid";

  const emailFieldClasses = !emailInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameFieldClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
      </div>
      {nameHasError && <p className="error-text">Please enter a username!</p>}
      <div className={emailFieldClasses}>
        <label htmlFor="email">E-mail id</label>
        <input
          id="email"
          type="email"
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
      </div>
      {emailInputIsInvalid && (
        <p className="error-text">Please enter an email id!</p>
      )}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
