import { useReducer } from "react";

const initialInputState = { value: "", isTouched: false };

const inputStateReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      isTouched: true,
      value: state.value,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return initialInputState;
};

const useInput1 = (validateInput) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const isValueValid = validateInput(inputState.value);
  const hasError = !isValueValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
    // setEnteredValue(event.target.value);
    // setIsTouched(true);
  };

  const blurHandler = (event) => {
    dispatch({ type: "BLUR" });
    // setIsTouched(true);
  };

  const reset = () => {
    dispatch({ type: "RESET" });
    // setEnteredValue("");
    // setIsTouched(false);
  };

  return {
    enteredValue: inputState.value,
    isValueValid,
    hasError,
    valueChangeHandler,
    blurHandler,
    reset,
  };
};

export default useInput1;
