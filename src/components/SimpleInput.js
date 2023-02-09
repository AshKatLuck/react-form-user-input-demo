import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const name = useRef();
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameTouched(true);
  };
  useEffect(() => {
    if (isEnteredNameValid) {
      console.log("Entered name is valid");
    }
  }, [isEnteredNameValid]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setIsEnteredNameValid(false);
      return;
    }
    setIsEnteredNameValid(true);
    console.log(enteredName);
    console.log(name.current.value);
    setEnteredName("");
    // name.current.value = "";
  };

  const nameInputIsInvalid = !isEnteredNameValid && enteredNameTouched;
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
          ref={name}
          value={enteredName}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Please enter a username!</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
