import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const name = useRef();
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim() === "") {
      return;
    }
    console.log(enteredName);
    console.log(name.current.value);
    setEnteredName("");
    // name.current.value = "";
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          ref={name}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
