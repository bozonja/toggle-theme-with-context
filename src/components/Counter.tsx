import React, { useReducer } from "react";

// function init(initialCount) {
//   return { count: initialCount };
// }

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("");
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h4>This is counter:</h4>
      <p>{state.count}</p>
      <button type="button" onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
      <button type="button" onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
      <button type="button" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </>
  );
};
