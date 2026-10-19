# Notes

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
