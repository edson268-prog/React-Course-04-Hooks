import { useState } from "react";

export const useCounter = (initialValue: Number = 1) => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter((prev) => {
      return prev + 1;
    });
  };

  const decrement = () => {
    if (counter <= 1) return;

    setCounter((prev) => {
      return prev - 1;
    });
  };

  return {
    // Properties
    counter,

    //Methods
    increment,
    decrement,
  };
};
