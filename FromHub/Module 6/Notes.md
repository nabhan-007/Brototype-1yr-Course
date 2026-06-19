# 📘 Module 6: Comprehensive Study Notes

This document contains everything you need to study and master for Module 6. It covers JavaScript DOM manipulation, CSS Frameworks (Bootstrap & Tailwind), Advanced Layouts (Flexbox & Grid), UI/UX (Animations), Web Performance, and Deployment.

---

## 🟡 1. JavaScript & DOM Manipulation

The Document Object Model (DOM) is an object-oriented representation of the web page. JavaScript uses the DOM to dynamically interact with the HTML.

### A. Element Selection (Grabbing Elements)

To modify the page, you must first select the HTML elements.

* `document.getElementById('id')` – Selects a single element by its ID. Very fast.
* `document.querySelector('.class / #id / tag')` – Selects the **first** element that matches the CSS selector. Very versatile.
* `document.querySelectorAll('.class')` – Returns a `NodeList` (like an array) of **all** elements matching the selector. You can loop over this list.

### B. Event Listeners (Listening to the User)

Events are actions that happen in the browser (clicks, key presses, scrolling).

* **Syntax:** `element.addEventListener('event_type', callbackFunction);`
* **Common Events:**
  * `click`: When an element is clicked.
  * `scroll`: When the user scrolls the page.
  * `change`: When an input element's value changes (useful for select dropdowns or checkboxes).
  * `input`: Fires every time the value of an input field changes.
  * `submit`: When a form is submitted. (Always use `event.preventDefault()` to stop the page from reloading).

### C. Class Toggling

Instead of changing inline styles, it is best practice to add or remove CSS classes.

* `element.classList.add('active')`: Adds a class.
* `element.classList.remove('hidden')`: Removes a class.
* `element.classList.toggle('dark-mode')`: Adds the class if it's missing, removes it if it's present. (Perfect for dark mode buttons or hamburger menus).

### D. Content Updates

* `element.innerText = "New Text"`: Changes the visible text inside the element. (Ignores HTML tags).
* `element.innerHTML = "<strong>Bold Text</strong>"`: Parses and renders HTML tags inside the element. (Be careful with user input to avoid XSS attacks).

### E. Style Changes

You can modify inline CSS directly via JavaScript using the `.style` property. CSS properties with hyphens become camelCase.

* `element.style.backgroundColor = "blue";`
* `element.style.display = "none";`

### F. Form Validation

Before submitting data to a server, validate it on the frontend.

```javascript
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email').value;
    if (emailInput === "") {
        event.preventDefault(); // Stops form submission
        alert("Email cannot be empty!");
    }
});
```

---

## 🎨 2. CSS Frameworks: Bootstrap vs Tailwind

### Bootstrap (Component-First)

* **What it is:** A UI toolkit that provides pre-styled, ready-to-use components (Buttons, Navbars, Modals).
* **Pros:** Extremely fast for prototyping. You write very little CSS.
* **Cons:** Websites can look generic ("Bootstrap-y") unless heavily customized. Overriding default styles can be frustrating.
* **Key Concept:** The Grid System (12 columns). Uses classes like `container`, `row`, `col-md-6`.

### Tailwind CSS (Utility-First)

* **What it is:** A framework that provides low-level utility classes (e.g., `flex`, `pt-4`, `text-center`, `text-blue-500`) instead of pre-built components.
* **Pros:** Infinite customization. You never have to leave your HTML file to write CSS. Your design will look unique.
* **Cons:** HTML files can become cluttered with long class strings. Steeper initial learning curve.

---

## 📐 3. Advanced Layouts: Flexbox & CSS Grid

### Flexbox (1-Dimensional)

Used for aligning items in a **single row OR a single column**. Perfect for navbars, centering divs, and distributing space inside a container.

* `display: flex;`
* `justify-content`: Aligns items horizontally (main axis). *Values: `center`, `space-between`, `space-evenly`*.
* `align-items`: Aligns items vertically (cross axis). *Values: `center`, `flex-start`, `flex-end`*.
* `flex-direction`: Changes the axis (`row` or `column`).

### CSS Grid (2-Dimensional)

Used for complex page layouts involving **both rows AND columns**. Perfect for photo galleries, dashboard layouts, and the overall page skeleton.

* `display: grid;`
* `grid-template-columns: repeat(3, 1fr);` (Creates 3 equal columns).
* `gap: 16px;` (Adds spacing between grid items).

---

## ✨ 4. Animations & Transitions

Making the UI feel interactive and responsive to the user.

### Hover Effects & Transitions

Transitions smoothly animate a property change over time.

```css
.button {
    background-color: blue;
    transition: background-color 0.3s ease, transform 0.2s;
}
.button:hover {
    background-color: darkblue;
    transform: scale(1.05); /* slightly enlarges the button */
}
```

---

## 📱 5. Responsive Design & Media Queries

Your website must look good on mobile, tablet, and desktop.

* **Mobile-First Approach:** Write your base CSS for mobile phones first. Then use media queries to adjust the layout for larger screens.
* **Media Queries:**

```css
/* Base styles apply to mobile */
.container { width: 100%; }

/* Tablet and larger */
@media (min-width: 768px) {
    .container { width: 750px; }
}

/* Desktop and larger */
@media (min-width: 1024px) {
    .container { width: 960px; }
}
```

* **In Frameworks:** Bootstrap uses prefixes like `md-`, `lg-`. Tailwind uses `md:`, `lg:`.

---

## 🚀 6. Performance & Deployment

### Website Performance Check (Lighthouse)

* **Goal:** Score 90+ in Google Chrome's Lighthouse extension.
* **How to improve:**
  * Compress and optimize images (use WebP format, ensure correct dimensions).
  * Minify your CSS and JavaScript.
  * Use semantic HTML.

# 📘 Module 6: Comprehensive Study Notes

This document contains everything you need to study and master for Module 6. It covers JavaScript DOM manipulation, CSS Frameworks (Bootstrap & Tailwind), Advanced Layouts (Flexbox & Grid), UI/UX (Animations), Web Performance, and Deployment.

---

## 🟡 1. JavaScript & DOM Manipulation

The Document Object Model (DOM) is an object-oriented representation of the web page. JavaScript uses the DOM to dynamically interact with the HTML.

### A. Element Selection (Grabbing Elements)

To modify the page, you must first select the HTML elements.

* `document.getElementById('id')` – Selects a single element by its ID. Very fast.
* `document.querySelector('.class / #id / tag')` – Selects the **first** element that matches the CSS selector. Very versatile.
* `document.querySelectorAll('.class')` – Returns a `NodeList` (like an array) of **all** elements matching the selector. You can loop over this list.

### B. Event Listeners (Listening to the User)

Events are actions that happen in the browser (clicks, key presses, scrolling).

* **Syntax:** `element.addEventListener('event_type', callbackFunction);`
* **Common Events:**
  * `click`: When an element is clicked.
  * `scroll`: When the user scrolls the page.
  * `change`: When an input element's value changes (useful for select dropdowns or checkboxes).
  * `input`: Fires every time the value of an input field changes.
  * `submit`: When a form is submitted. (Always use `event.preventDefault()` to stop the page from reloading).

### C. Class Toggling

Instead of changing inline styles, it is best practice to add or remove CSS classes.

* `element.classList.add('active')`: Adds a class.
* `element.classList.remove('hidden')`: Removes a class.
* `element.classList.toggle('dark-mode')`: Adds the class if it's missing, removes it if it's present. (Perfect for dark mode buttons or hamburger menus).

### D. Content Updates

* `element.innerText = "New Text"`: Changes the visible text inside the element. (Ignores HTML tags).
* `element.innerHTML = "<strong>Bold Text</strong>"`: Parses and renders HTML tags inside the element. (Be careful with user input to avoid XSS attacks).

### E. Style Changes

You can modify inline CSS directly via JavaScript using the `.style` property. CSS properties with hyphens become camelCase.

* `element.style.backgroundColor = "blue";`
* `element.style.display = "none";`

### F. Form Validation

Before submitting data to a server, validate it on the frontend.

```javascript
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email').value;
    if (emailInput === "") {
        event.preventDefault(); // Stops form submission
        alert("Email cannot be empty!");
    }
});
```

---

## 🎨 2. CSS Frameworks: Bootstrap vs Tailwind

### Bootstrap (Component-First)

* **What it is:** A UI toolkit that provides pre-styled, ready-to-use components (Buttons, Navbars, Modals).
* **Pros:** Extremely fast for prototyping. You write very little CSS.
* **Cons:** Websites can look generic ("Bootstrap-y") unless heavily customized. Overriding default styles can be frustrating.
* **Key Concept:** The Grid System (12 columns). Uses classes like `container`, `row`, `col-md-6`.

### Tailwind CSS (Utility-First)

* **What it is:** A framework that provides low-level utility classes (e.g., `flex`, `pt-4`, `text-center`, `text-blue-500`) instead of pre-built components.
* **Pros:** Infinite customization. You never have to leave your HTML file to write CSS. Your design will look unique.
* **Cons:** HTML files can become cluttered with long class strings. Steeper initial learning curve.

---

## 📐 3. Advanced Layouts: Flexbox & CSS Grid

### Flexbox (1-Dimensional)

Used for aligning items in a **single row OR a single column**. Perfect for navbars, centering divs, and distributing space inside a container.

* `display: flex;`
* `justify-content`: Aligns items horizontally (main axis). *Values: `center`, `space-between`, `space-evenly`*.
* `align-items`: Aligns items vertically (cross axis). *Values: `center`, `flex-start`, `flex-end`*.
* `flex-direction`: Changes the axis (`row` or `column`).

### CSS Grid (2-Dimensional)

Used for complex page layouts involving **both rows AND columns**. Perfect for photo galleries, dashboard layouts, and the overall page skeleton.

* `display: grid;`
* `grid-template-columns: repeat(3, 1fr);` (Creates 3 equal columns).
* `gap: 16px;` (Adds spacing between grid items).

---

## ✨ 4. Animations & Transitions

Making the UI feel interactive and responsive to the user.

### Hover Effects & Transitions

Transitions smoothly animate a property change over time.

```css
.button {
    background-color: blue;
    transition: background-color 0.3s ease, transform 0.2s;
}
.button:hover {
    background-color: darkblue;
    transform: scale(1.05); /* slightly enlarges the button */
}
```

---

## 📱 5. Responsive Design & Media Queries

Your website must look good on mobile, tablet, and desktop.

* **Mobile-First Approach:** Write your base CSS for mobile phones first. Then use media queries to adjust the layout for larger screens.
* **Media Queries:**

```css
/* Base styles apply to mobile */
.container { width: 100%; }

/* Tablet and larger */
@media (min-width: 768px) {
    .container { width: 750px; }
}

/* Desktop and larger */
@media (min-width: 1024px) {
    .container { width: 960px; }
}
```

* **In Frameworks:** Bootstrap uses prefixes like `md-`, `lg-`. Tailwind uses `md:`, `lg:`.

---

## 🚀 6. Performance & Deployment

### Website Performance Check (Lighthouse)

* **Goal:** Score 90+ in Google Chrome's Lighthouse extension.
* **How to improve:**
  * Compress and optimize images (use WebP format, ensure correct dimensions).
  * Minify your CSS and JavaScript.
  * Use semantic HTML.
  * Ensure good color contrast for Accessibility (A11y).

### Hosting via GitHub Pages

* **What it is:** A free way to host static websites (HTML/CSS/JS) directly from a GitHub repository.
* **Steps:**
  1. Push your code to a GitHub repo.
  2. Go to Repo Settings > Pages.
  3. Select the `main` branch as the source and save.
  4. Wait a minute or two, and your site will be live at `https://[username].github.io/[repo-name]`.

---

## 🎯 7. Final Project Deliverables Checklist

While the sections above cover all the *technical theory*, you must ensure your final **Personal Website Project** meets these exact grading criteria:

* [ ] **Used a Template:** The project should be built by customizing an existing template (don't build entirely from scratch if the task specifies using a template).
* [ ] **Scale:** The website must contain **at least six pages**.
* [ ] **Real Content Only:** **NO dummy content or placeholder images (Lorem Ipsum)**. Everything must be real data about you.
* [ ] **Working Form:** The Enquiry form must have JavaScript validation and actual submission capabilities.
* [ ] **Contact Info:** Must include valid social media links and proper contact details.
* [ ] **Fully Responsive:** Must look perfect on Mobile, Tablet, and Desktop.
* [ ] **Performance:** Lighthouse score is definitively **above 90**.
