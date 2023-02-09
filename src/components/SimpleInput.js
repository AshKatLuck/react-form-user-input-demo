import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const isEnteredNameValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !isEnteredNameValid && enteredNameTouched;

  useEffect(() => {
    if (isEnteredNameValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [isEnteredNameValid]);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (isEnteredNameValid) {
      return;
    }
    setEnteredNameTouched(true);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if (!isEnteredNameValid) {
      return;
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!isEnteredNameValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameFieldClasses = !nameInputIsInvalid
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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
