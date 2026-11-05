# Notes

- React is a library. The main difference between a library and a framework is the inversion of control. In a library, You call the library, versus the framework calls your code.

- A component in React is a reusable, self-contained building block of a React UI. It is a JavaScript function that accepts props as inputs and returns React elements (JSX) describing what should appear on the UI.

- StrictMode (dev-only): It is a wrapper that runs with no visual change, but in development, it deliberately double-invokes component functions to expose impure renders and missing cleanups.

- Why use fragments?
  - Cleaner DOM: Avoids unnecessary wrapper elements.
  - CSS layouts: Extra `<div>` elements can interfere with Flexbox and Grid layouts.
  - HTML validity: Helps when a parent expects specific child elements, such as `<tbody>` expecting table rows.
  - Less clutter: No need to create elements just to group JSX.

- `<div style="background-color: red; font-size: 20px;">` : `<div style={{ backgroundColor: "red", fontSize: "20px" }}>` : Why the double curly braces?
  - Outer {} means you're embedding a JavaScript expression.
  - Inner {} creates a JavaScript object.
  - CSS property names generally use camelCase: background-color becomes backgroundColor.
  - So, it can also be written as:
    ```JavaScript
    const style= { backgroundColor: "red", fontSize: "20px" }
    <div style={style}>
    ```

- When to use index as a key?
  - Your list items don't have a unique ID (If you have a unique ID, always use that).
  - Your list is completely static - you never add or remove items.
  - The list is never reordered or filtered.

- Two Golder rules of Hooks:
  1. Only call hooks at the top level of your function
  2. Only call hooks from React functions (React components and custom hooks)
