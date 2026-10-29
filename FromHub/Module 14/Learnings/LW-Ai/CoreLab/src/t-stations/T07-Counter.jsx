import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <br />
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        +2(!)
      </button>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          setCount((c) => c + 1);
        }}
      >
        +2
      </button>
    </>
  );
}
