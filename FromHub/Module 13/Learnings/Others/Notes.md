# React - Notes

## Introduction

- React is a JavaScript library for building user interfaces (UIs).
- React is an open-source frontend JavaScript library, developed by Facebook (Meta) — created by engineer Jordan Walke in 2013 — for building component-based user interfaces from data. Also called React.js or ReactJS.
  - Terms to mention in exam: library, Facebook/Meta, Jordan Walke, UI, component-based.
- This "tell me the desired UI, I'll update it" style is called declarative (vs imperative: "now grab this node, now change that style...").

## SPA (Single Page Application)

- A Single Page Application (SPA) loads a single HTML document and dynamically updates the view via JavaScript, without full page reloads.
- First, the shell loads then, navigation doesn't request new HTML — JS swaps views; data still comes via API calls.

## CSR vs SSR

- SSR: Browser request ──→ Server renders HTML ──→ Browser paints content immediately
- CSR: Browser request ──→ Server sends shell ──→ Download JS ──→ React renders ──→ paint

- CSR: the browser renders the UI by executing JavaScript (React), rather than receiving pre-rendered HTML from the server.
- SSR: the server produces the complete HTML for each request and sends it to the browser.

## initial load time difference

- CSR first load: download HTML shell + entire JS bundle + parse + execute + render = slower TTFV (time to visible).
- SSR first load: HTML arrives with content → paint immediately, then download JS for interactivity (hydration).
  After that first load: CSR wins (no server round trips). SSR pays the render cost on every request — that's the trade.
- One-level-deeper: neither is "better" — modern apps mix: SSR for landing/marketing pages (SEO), CSR for the app behind login (speed). Static sites (SSG) for docs/blogs.
- In some sites we can see: `site.com`, `app.site.com` and `docs.site.com`.

## Vite (pronunciation: vee-t)(french for fast/quick)

- Vite is a frontend build tool that provides a fast development server (using native ES modules + esbuild) and an optimized production bundler (Rollup).

## JSX (JavaScript XML)

- You write this in App.jsx:
  return <h1 className="title">Hello {name}</h1>;
  But JavaScript has no <h1> — so something must convert it. That's JSX: a syntax extension (sugar) that compiles to plain JS function calls:
  // what you wrote → what the compiler (Babel/esbuild) produces:
  React.createElement("h1", { className: "title" }, "Hello ", name)
- JSX (JavaScript XML) is a syntax extension for JavaScript that resembles HTML and compiles to React.createElement(...) calls, letting you describe UI declaratively inside JS.
- Is JSX mandatory? No. You can write React.createElement(...) by hand — unreadable for real UIs. JSX is convention, not requirement. (Seniors ask this — answer "optional but near-universal.")

### JSX vs HTML (the differences table)

HTML JSX
class class="x" className="x"
for for="i" htmlFor="i"
style style="color:red" style={{ color: "red" }} (object!)
Void tags <br> ok unclosed must <br />, <img />
Dynamic none {expression}
Comments <!-- --> {/\* \*/}

Why className? class is a reserved word in JavaScript — can't be an object key the way HTML attribute works. React maps to DOM's className property. Same reason for → htmlFor (DOM property is htmlFor).
Empty tags: JSX is XML-flavored — every tag closes. <input> → <input />. HTML allows bare void tags; JSX won't compile them.

### Rules of JSX (number them in exam)

One root element (or fragment <>...</>) — JS function returns one value
All tags closed, incl. void (<img />)
camelCase: className, htmlFor, onClick, tabIndex
{ } = expressions only — no if, no for statements inside
Lists: stable key on each item
Comments inside JSX: {/\* \*/}
// ❌ two roots
return <h1>Hi</h1><p>Bye</p>;
// ✅
return (<><h1>Hi</h1><p>Bye</p></>);

// ❌ statement
return { if (x) <p>y</p> };
// ✅ expression
return {x && <p>y</p>};

## Components

A component = a reusable function that returns JSX. EJS parallel: a partial (<%- include('header') %>). React takes it further — a component can be a whole page, a card, a button, with its own logic.

```JavaScript
// Card.jsx
function Card() {
return <div className="card">Hello</div>;
}
```

// use it — capital letter = JSX tag means "component"
<Card />
Why capital letter? JSX treats lowercase tags as HTML strings (div, span) and capitalized as component references. card → HTML element; Card → your function. Exam loves this.
Official:
A React component is an independent, reusable piece of UI — a JavaScript function that returns JSX (or null). Components can be nested and composed to build any interface.

## Lifecycle

Every component goes through three stages, like a human: born → living → dies.
Stage What happens React term
Birth Component created & first inserted into DOM Mount
Living Re-renders from state/props changes Update
Death Removed from DOM (conditional render, route change) Unmount

A component's lifecycle is the series of phases (mount, update, unmount) it goes through — React lets you run side-effect code at each phase via lifecycle methods (class) or useEffect (function components).

## DOM Events

A SyntheticEvent is React's cross-browser wrapper around the browser's native event. It provides a consistent event API across browsers while supporting methods such as preventDefault() and stopPropagation().

Q. Synthetic event?
A: React's cross-browser wrapper around the native event; same e.target/preventDefault everywhere. Pooling removed in React 17.

## useEffect

useEffect(fn, deps) runs side effects after render. The second argument (dependency array) controls when: [] = once after mount, [a, b] = only when a/b change, omitted = after every render.
