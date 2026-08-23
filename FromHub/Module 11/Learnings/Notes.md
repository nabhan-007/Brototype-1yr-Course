# Notes

## To Check

- DONE!!

## JavaScript

- `Hoisting` is the behavior where JavaScript moves all variable and function declarations to the top of their scope during the creation phase of the execution context, before code execution begins. Variables declared with var are initialized as undefined, while let and const remain in the Temporal Dead Zone (TDZ) until their declaration line is reached. Each function call creates a new Function Execution Context that is pushed onto the call stack.

- A `Promise` in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It was introduced in ES6 to solve the problem of Callback Hell (Pyramid of Doom). A Promise always exists in one of three states: Pending: Initial state, neither fulfilled nor rejected. Fulfilled: The operation completed successfully (resolve() was called). Rejected: The operation failed (reject() was called). Promises are consumed using .then() for success, .catch() for errors, and .finally() for cleanup, or more commonly via async/await syntax sugar. Promise callbacks execute asynchronously inside the Microtask Queue, giving them higher execution priority over regular Macrotasks like setTimeout. `Promise.all`, `Promise.allSettled`, `Promise.race` and `Promise.any`.

- `Memoization` is an optimization technique used to speed up programs by caching the results of expensive function calls and returning the cached result when the same inputs occur again. In JavaScript, it's primarily implemented using closures to maintain a private cache object, and it works best with pure functions where the same arguments always guarantee the same output.

## NodeJS

- An `HttpOnly cookie` is a cookie with the HttpOnly flag enabled by the server in the Set-Cookie header When this flag is set, the browser blocks client-side JavaScript (document.cookie) from reading or modifying the cookie. However, the browser still automatically attaches the cookie to every HTTP request sent back to the server. Its main purpose is to prevent Cross-Site Scripting (XSS) token theft. Even if an attacker injects malicious JavaScript into your site, they cannot read or steal your session ID or JWT token. Note: It protects against XSS token theft, but it does not stop CSRF attacks—so it should be paired with SameSite=Strict or SameSite=Lax.

- `Content Security Policy (CSP)`: A security header that tells the browser which sources (domains) are allowed to load and run scripts, styles, or images on your website.

- `HTTP Strict Transport Security (HSTS)`: A security header that forces the browser to communicate with your server only over secure HTTPS, never over unencrypted HTTP.

---

## MongoDB
