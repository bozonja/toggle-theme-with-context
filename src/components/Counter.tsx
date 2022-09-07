import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h4>This is counter:</h4>
      <p>{count}</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCount((c) => c - 1)}>
        -
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  );
};
