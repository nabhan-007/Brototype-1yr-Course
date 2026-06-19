# Resources From Seniors

## Bootstrap Theory Questions

### What is Bootstrap?

Bootstrap is a free and open-source CSS framework used to design responsive and mobile-first websites quickly.

### Why use Bootstrap?

- Easy to use
- Saves development time
- Responsive design
- Built-in components and classes
- Works on all browsers

### What are the main components of Bootstrap?

- HTML structure
- CSS classes (for layout and styling)
- JavaScript plugins (for interactivity)

### Latest version

Bootstrap 5.3.7 is the latest stable version (as of 2025).

### What is a container in Bootstrap?

A container is a wrapper for content. It provides padding and alignment.

- `.container` – fixed width
- `.container-fluid` – full width (100%)

## Grid System Questions

### What is the Bootstrap Grid System?

A layout system that divides the page into 12 columns. You can create responsive layouts using rows and columns.

### What is the use of `.row` and `.col` classes?

- `.row` – creates a horizontal group of columns
- `.col` – creates columns inside rows

### How do you create a 3-column layout in Bootstrap?

```html
<div class="row">
  <div class="col-4">Column 1</div>
  <div class="col-4">Column 2</div>
  <div class="col-4">Column 3</div>
</div>
```

## Responsive Design & Breakpoints

### What are Bootstrap breakpoints?

Breakpoints are screen sizes where the layout changes.

- `xs` – `<576px` (extra small)
- `sm` – `≥576px`
- `md` – `≥768px`
- `lg` – `≥992px`
- `xl` – `≥1200px`
- `xxl` – `≥1400px`

### What is the use of media queries in Bootstrap?

Media queries are used to apply styles based on screen size, helping with responsive design.

## Classes & Components

### What is the use of `.form-control` and `.form-group`?

- `.form-group` – groups label + input
- `.form-control` – styles inputs for consistent design

### What are utility classes in Bootstrap?

Utility classes are short classes for spacing, alignment, colors, etc.

Examples: `mt-3` (margin-top), `text-center`, `bg-primary`

### What are display classes like `.d-none`, `.d-block`, `.d-flex`?

- `.d-none` – hide element
- `.d-block` – show as block
- `.d-flex` – show as flex container

### What are responsive visibility classes?

They control the visibility of elements on different screen sizes.

Example:

- `d-none d-md-block` = hidden on small, shown on medium+

## Advanced / Extra

### How to include Bootstrap in a project?

- CDN link
- Download and use local files
- Install via npm

### What is the difference between Bootstrap 4 and Bootstrap 5?

- No jQuery in Bootstrap 5
- New utility classes
- Better grid system and responsive features
- Improved form controls

### What are Bootstrap components?

Pre-built UI pieces like:

- Navbar
- Buttons
- Modals
- Cards
- Forms
- Carousel

---

## Bootstrap Topics

1. **Bootstrap Container**: A Bootstrap container is a `div` element with predefined classes that centers your content and gives it horizontal padding. Options include `.container` for fixed-width and `.container-fluid` for full-width, responsive layouts.
2. **Bootstrap Grid Templating**: Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s based on a 12-column layout, making it easy to create responsive designs.
3. **Bootstrap Class**: Bootstrap classes are pre-defined CSS classes that provide various design styles and utilities, such as `.btn` for buttons, `.text-center` for centered text, etc.
4. **Bootstrap Modal**: A modal is a dialog box/popup window that is displayed on top of the current page. Bootstrap modals are created with the `.modal` class and can be triggered by JavaScript or attributes like `data-toggle="modal"`.
5. **Breadcrumb**: A breadcrumb is a navigation aid showing the user’s location within a hierarchy of pages. The `.breadcrumb` class creates a horizontal breadcrumb navigation in Bootstrap.
6. **Accordion**: The accordion in Bootstrap is a collapsible content panel that can show/hide information when clicked. The `.accordion` component enables dynamic, nested collapsible content.
7. **Bootstrap Customization**: You can customize Bootstrap’s styles by overriding CSS classes or by using SASS variables. This customization allows you to adapt Bootstrap to fit a unique brand style.
8. **Bootstrap 4 & 5**: Bootstrap 4 introduced Flexbox-based layouts and custom utility classes, while Bootstrap 5 removed jQuery dependency, introduced RTL support, and made some changes to form controls and classes.
9. **Jumbotron**: A Jumbotron in Bootstrap is a large box used to showcase key content or information. It’s traditionally a header-like component but has been removed in Bootstrap 5 in favor of utility classes.
10. **Col (Columns)**: Bootstrap columns are used within the grid system to create responsive layouts. Each column (`col`) is nested inside a row (`row`) and can span from 1 to 12 parts of the row’s width.
11. **Spacing Utilities**: Bootstrap provides spacing utilities, such as `.m-0` for margins and `.p-0` for padding. These classes are shorthand for applying consistent spacing across elements.

---

## JavaScript Topics

1. **JavaScript Data Types**: JavaScript has several data types, including primitive types like String, Number, Boolean, Undefined, Null, and Symbol, as well as objects.
2. **DOM vs BOM**: DOM (Document Object Model) is a representation of HTML documents, enabling access and modification of HTML elements. BOM (Browser Object Model) represents the browser's API, providing control over the browser itself (e.g., `window`, `navigator`).
3. **Offset**: In the DOM, `offsetTop` and `offsetLeft` represent an element’s position relative to its offset parent. It’s commonly used for positioning and layout calculations.
4. **Async & Defer**: The `async` and `defer` attributes for `<script>` tags control the loading behavior of JavaScript files. `async` loads scripts asynchronously, while `defer` loads them after HTML parsing.
5. **InnerText vs InnerHTML**: `innerText` retrieves or sets the text inside an element, ignoring HTML tags, while `innerHTML` allows access to HTML tags and structures within the element.
6. **Event Handler & Listeners**: Event handlers (e.g., `onclick`) are single-function bindings, while listeners (`addEventListener`) allow multiple functions on the same event.
7. **DOM Manipulation Workouts**: DOM manipulation refers to accessing and modifying the structure or style of HTML elements using JavaScript. Common actions include creating, updating, and removing elements.
8. **Event Propagation**: Event propagation determines how events move through the DOM tree. It includes phases like capturing (from top to target), target, and bubbling (from target up).
9. **Combinator Selectors**: In CSS, combinators are used to select elements based on their relationship to other elements. Examples include descendant (` `), child (`>`), adjacent sibling (`+`), and general sibling (`~`) selectors.
10. **Tooltip**: A tooltip is a small, interactive message that appears when hovering over an element. In JavaScript, it’s often managed by event listeners, while in Bootstrap, the `.tooltip` class enables easy tooltips.
11. **Template Literals**: Introduced in ES6, template literals allow embedded expressions within strings using backticks (`` ` ``) and `${expression}` syntax.
12. **Push and Pop**: `push()` adds elements to the end of an array, while `pop()` removes the last element. Both are array manipulation methods in JavaScript.
13. **JavaScript Validation**: JavaScript form validation is used to check data correctness on the client-side before it’s submitted to the server.
14. **Regex (Regular Expressions)**: Regular expressions are patterns used for matching character combinations in strings. In JavaScript, they’re commonly used for validation.
15. **JavaScript Basics**: JavaScript basics include variables, data types, control structures (loops, conditionals), functions, and event handling.
16. **Let vs Var**: `let` is block-scoped, whereas `var` is function-scoped and can be redeclared. `let` helps avoid issues related to scope and hoisting.
17. **ES6**: ECMAScript 6 (ES6) introduced many JavaScript features, including `let`, `const`, arrow functions, template literals, default parameters, and classes.
18. **Higher-Order Function**: A higher-order function is a function that takes other functions as arguments or returns a function as its result, such as `map`, `filter`, and `reduce`.
19. **Null vs Undefined**: `null` is an assigned value representing "no value", while `undefined` means a variable has been declared but has not yet been assigned a value.
20. **Pseudo-Elements vs Pseudo-Classes**: Pseudo-elements create and style specific parts of an element (e.g., `::before`), while pseudo-classes style elements based on their state (e.g., `:hover`).
21. **Hoisting**: Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before code execution, affecting variables declared with `var` but not with `let` or `const`.
22. **Types of Input Field**: HTML input types include `text`, `number`, `email`, `password`, `radio`, `checkbox`, `file`, `date`, and more, each providing different behaviors and validation.
23. **AJAX**: AJAX (Asynchronous JavaScript and XML) allows updating parts of a web page without reloading it, by exchanging data with the server asynchronously.
24. **`<iframe>` vs `<embed>`**: `<iframe>` is used to embed an entire webpage, while `<embed>` is for embedding media files, such as videos or images, directly within a page.
25. **Accessibility Features in HTML**: HTML accessibility includes attributes like `alt`, `aria-*`, and semantic elements that help users with disabilities navigate and interact with web pages.
26. **Why JavaScript is called synchronous, single-threaded**: JavaScript executes code sequentially in a single call stack, but it uses asynchronous operations (via the event loop) to handle background tasks, allowing a responsive UI.
27. **Arrow Function**: Arrow functions are a concise syntax for functions introduced in ES6. They don’t have their own `this` context, which is useful for callbacks.

---

## Study Checklist

### Why use Bootstrap

- `form-control`, `form-group`
- Bootstrap's grid system
- Difference between `var`, `let`, and `const`
- Primitive data types
- String concatenation
- Event listener implementation
- Difference between `onclick` and `addEventListener`
- `classList.add()`
- `innerHTML`
- Loop implementation
- Difference between `for...in` and `for...of`
- Functions

### Practice Tasks

- Create Add and Remove buttons to add/remove a CSS class.
- Toggle background color between yellow and red.
- Click button → change all cards' color (use `querySelectorAll`).
- Click button → change only first card.
- Create increment (+) and decrement (-) buttons.
- Add two numbers from input fields and show result.
- Subtract two numbers using another button.
- Reset input fields on button click.
- Count number of times a button is clicked.
- Disable a button after one click.

### JavaScript Fundamentals

1. **JavaScript Basics**
   - What is JavaScript?
   - `<script>` tag usage
   - Variables: `let`, `const`
   - Functions
   - `if / else`
   - Basic understanding only (deep detail not required)
2. **DOM Manipulation**
   - Browser HTML change via JS
   - `document`
   - Element selection:
     - `getElementById`
     - `querySelector`
     - `querySelectorAll`
   - Content update:
     - `innerText`
     - `innerHTML`
   - Style change:
     - `element.style.color`
     - `element.style.backgroundColor`
3. **Event Listeners**
   - Detect user actions: button click, scroll, etc.
   - Must know events:
     - `click`
     - `change`
     - `scroll`
   - Example:

     ```js
     button.addEventListener("click", function() {
       alert("Clicked!");
     });
     ```

4. **Class Toggling**
   - Add/remove CSS classes via JS
   - `classList.add()`
   - `classList.remove()`
   - `classList.toggle()`
   - Useful for dark mode, menu toggles, animations
5. **Form Validation**
   - Check if input is empty before submit
   - Use `input.value`
   - `if (input.value === "")`
6. **Bootstrap**
   - Fast UI framework
   - Learn:
     - Bootstrap CDN
     - Container
     - Grid system (`row`, `col`)
     - Buttons
     - Forms
     - Navbar
   - Bootstrap JS can be learned later
7. **Tailwind CSS**
   - Utility-first CSS
   - Learn:
     - `p-4`
     - `m-2`
     - `bg-blue-500`
     - `flex justify-center`
     - `hover:bg-red-500`
8. **Flexbox**
   - Layout tool for horizontal/vertical alignment
   - Learn:
     - `display: flex`
     - `justify-content`
     - `align-items`
     - `flex-direction`
9. **CSS Grid**
   - Build page structure
   - Learn:
     - `display: grid`
     - `grid-template-columns`
     - `gap`
10. **Hover Animations & Transitions**
    - Smooth transitions for UI
    - Learn:
      - `transition`
      - `:hover`
      - `transform: scale()`

### Pending Topics

- `d-flex`
- Accordion
- `tailwind.config`
- Primitive vs non-primitive data types
- Badge
- Hamburger Menu
- Practice Tailwind CSS
- DOM vs BOM
- Class toggling
- `.style`
- `onClick` vs `addEventListener`
- Add proper validation for form submission in Portfolio

Primitive vs non primitive data types

---

Pendings

- Badge
- Hamburger Menu
- Practice Tailwind CSS
- DOM vs BOM
- Class toggling
- `.style`
- `onClick` vs `addEventListener`
- Add proper validation for form submission in Portfolio

---

## Example: Bootstrap page structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bootstrap eg</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous" />
  <link href="Pastry.CSS" rel="stylesheet" type="text/css" />
</head>
<body>
  <div class="card" style="width: 150px; height: auto;">
    <img src="" alt="samsung phone" />
    <h2 class="card-title">samsung</h2>
    <p class="card-title">
      New samsung Android smart phone
      <h4 class="text-danger">Rs:12,999</h4>
    </p>
    <button class="btn btn-primary">Buy Now</button>
  </div>

  <div class="card" style="width: 150px; height: auto;">
    <img src="" alt="samsung phone" />
    <h2 class="card-title">samsung</h2>
    <p class="card-title">
      New samsung Android smart phone
      <h4 class="text-danger">Rs:12,999</h4>
    </p>
    <button class="btn btn-primary">Buy Now</button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
</body>
</html>
```

> Note: This first example is a complete HTML page, but the original markup was broken because the card markup appeared after `</body>` and there was an extra closing `</div>`.

---

## Example: Bootstrap grid layout 1

```html
<div class="container mt-4">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-3 bg-primary text-white p-3 border border-2">
      Box 1
    </div>
    <div class="col-12 col-md-6 col-lg-3 bg-success text-white p-3 border border-2">
      Box 2
    </div>
    <div class="col-12 col-md-6 col-lg-3 bg-danger text-white p-3 border border-2">
      Box 3
    </div>
    <div class="col-12 col-md-6 col-lg-3 bg-warning p-3 border border-2">
      Box 4
    </div>
  </div>
</div>
```

---

## Example: Bootstrap grid layout 2

```html
<div class="container mt-5">
  <div class="row">
    <div class="box1 bg-primary col-12 col-md-6">1</div>
    <div class="box2 bg-danger col-12 col-md-6">2</div>
  </div>
</div>
```

---
