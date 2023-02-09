import useInput1 from "../hooks/use-input1";

const BasicForm = (props) => {
  const {
    enteredValue: fName,
    isValueValid: isFNameValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    blurHandler: fNameBlurHandler,
    reset: fNameReset,
  } = useInput1((value) => value.trim() !== "");
  const {
    enteredValue: lName,
    isValueValid: isLNameValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    blurHandler: lNameBlurHandler,
    reset: LNameReset,
  } = useInput1((value) => value.trim() !== "");
  const {
    enteredValue: email,
    isValueValid: isEmailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput1((value) => value.includes("@"));

  let formIsValid = false;
  if (isFNameValid && isLNameValid && isEmailValid) {
    console.log("form valid");
    formIsValid = true;
  }
  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!isFNameValid || !isLNameValid || !isEmailValid) {
      return;
    }
    console.log(fName, lName, email);
    fNameReset();
    LNameReset();
    emailReset();
  };

  const fNameClassList = !fNameHasError
    ? "form-control"
    : "form-control invalid";
  const lNameClassList = !lNameHasError
    ? "form-control"
    : "form-control invalid";
  const emailClassList = !emailHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={fNameClassList}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            value={fName}
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
          />
          {fNameHasError && <p className="error-text">Enter First Name!</p>}
        </div>
        <div className={lNameClassList}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            value={lName}
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
          />
          {lNameHasError && <p className="error-text">Enter Last Name!</p>}
        </div>
      </div>
      <div className={emailClassList}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Enter Email ID!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
