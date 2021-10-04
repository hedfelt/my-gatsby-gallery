import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  //validity:
  const valueIsValied = validateValue(enteredValue);
  //only error if entered alue is not valid and the input field was not touched:
  const hasError = !valueIsValied && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  //clear the input field:

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false); //reset the touched state because we now have "a brand nw form" after submission
  };

  return {
    value: enteredValue,
    isValid: valueIsValied,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
