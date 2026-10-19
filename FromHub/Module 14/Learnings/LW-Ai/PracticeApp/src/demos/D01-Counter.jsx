// D01 — Counter · practices: useState + event handlers

import { useState } from "react";

// TODO (you): type your whole component here, replacing this placeholder.
export default function D01Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="count">Count: {count}</h1>
      <button className="row" onClick={() => setCount((p) => p + 1)}>
        +
      </button>
      <button className="row" onClick={() => setCount((p) => p - 1)}>
        -
      </button>
      <button className="row" onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  );
}
