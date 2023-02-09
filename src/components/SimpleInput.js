import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !isEnteredNameValid && enteredNameTouched;

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const isEnteredEmailValid =
    enteredEmail.trim() !== "" &&
    enteredEmail.includes("@") &&
    enteredEmail.includes(".");
  const emailInputIsInvalid = !isEnteredEmailValid && enteredEmailTouched;

  let formIsValid = false;
  if (isEnteredNameValid && isEnteredEmailValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameTouched(true);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setEnteredEmailTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (!isEnteredNameValid || !isEnteredEmailValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const nameFieldClasses = !nameInputIsInvalid
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
          onBlur={nameInputBlurHandler}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Please enter a username!</p>
      )}
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
