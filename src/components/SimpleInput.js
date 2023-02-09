import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(true);
  const name = useRef();
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
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

  const nameFieldClasses = isEnteredNameValid
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
      {!isEnteredNameValid && (
        <p className="error-text">Please enter a username!</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
