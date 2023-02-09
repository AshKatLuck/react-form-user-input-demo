import { useState } from "react";

const useInput1 = (validateInput) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = validateInput(enteredValue);
  const hasError = !isValueValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouched(true);
  };

  const blurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    isValueValid,
    hasError,
    valueChangeHandler,
    blurHandler,
    reset,
  };
};

export default useInput1;
