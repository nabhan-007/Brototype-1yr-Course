// D02 — Click → change text with useRef · practices: useRef DOM (EXAM PENDING — 3 modules)
// TODO (you): type your whole component here, replacing this placeholder.
import { useRef } from "react";

export default function D02UseRefDOM() {
  console.log("Hello World");

  const btnRef = useRef(null);
  const handleClick = () => {
    btnRef.current.textContent = "Clicked!";
    console.log("Clicked");
  };

  return (
    <>
      <button ref={btnRef} onClick={handleClick}>
        Click me
      </button>
    </>
  );
}
