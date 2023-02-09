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

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    console.log("submit handler");
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);

    nameReset();
    emailReset();
  };

  const nameFieldClasses = !nameHasError
    ? "form-control"
    : "form-control invalid";

  const emailFieldClasses = !emailHasError
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
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>
      {emailHasError && <p className="error-text">Please enter an email id!</p>}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
