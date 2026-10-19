# From Seniors

---

React Theory

- Lazy Loading and how to implement
- Suspense in Lazy Loading
- Code splitting
- Skeleton loaders
- useCallBack
- useMemo
- React.memo
- useContext , advantages and disadvantages
- Higher order components (HOC)
- Context Api
- useReducer
- useParams
- Pure function
- Event pooling
- controlled component and uncontrolled component
- useLayoutEffect
- useEffect vs useLayoutEffect
- react profiler
- Ways to improve performance of a React app
- Error boundaries
- React compiler. does it obviate the need for memoization?
- React router
- Alternatives to React Router (next.js router, tanstack, wouter)
- arePropsEqual in React.memo: how to implement a custom memo checker function? why would you want to do that?
- Outlet
- Synthetic events
- Custom hooks
- Method binding
- fetch and axios
- window object vs context
- Portals
- Stateless and Statefull component
- useId
- Render props

React Practicals

⦁ Color change text
⦁ Counter using context
⦁ Counter with useReducer and context
⦁ React Memo
⦁ Reducer List
⦁ render component while Resize
⦁ Toggle theme using context
⦁ Stopwatch using context
⦁ useMemo
⦁ useReducer
⦁ Child to parent communication

---

-Example for useMemo.(P)
-Create a counter using useReducer.(P)
-Limitations of ContextAPI.
-Lazy loading.
-Code splitting
-Webpacks.
-Babel

---

React Module Task 14 — Questions in Learning Order

1. React Router and Navigation
   Introduction to React Router DOM
   Defining Routes and Navigation
   Dynamic Routing and Route Parameters (useParams)
   Programmatic Navigation (useNavigate)
   Nested Routing
   Outlet and Its Implementation
   Protected Routes
   Hash Routing
   Alternatives to React Router
2. Context API and Global State Management
   What Is State Management?
   What Is Context API?
   Main Components of Context API
   What Is Provider? How Does It Work?
   What Is useContext()?
   How to Create and Update Context Data?
   Context API Advantages and Disadvantages
   Limitations of useContext()
   Props vs Context API
   Why Use Context Instead of the Window Object?
   Can Multiple Contexts Be Used in One Application?
   One Context vs Multiple Contexts
   Managing Global Authentication State
   Context API vs Redux — Basics
3. useReducer and Global State
   What Is useReducer()?
   useState() vs useReducer()
   When Should We Use useReducer()?
   How Does useReducer() Work?
   How to Manage Actions and State Using a Reducer?
   How to Use useReducer() with Context API?
   How to Update Global State Using Context and Reducer?
4. React Hooks and Reusable Logic
   Rules of Hooks
   What Are Custom Hooks?
   Advantages of Custom Hooks
   How to Create and Use Custom Hooks
   Create a Custom useLocalStorage() Hook
   What Is useCallback()?
   How Does useCallback() Work?
   Use Cases and Limitations of useCallback()
   What Is useMemo()?
   How Does useMemo() Work?
   Use Cases and Limitations of useMemo()
   useCallback() vs useMemo()
   What Is useLayoutEffect()?
   useEffect() vs useLayoutEffect()
   What Is useId()?
5. React Performance Optimization
   What Is React Performance Optimization?
   What Is React.memo()?
   React.memo() vs useMemo()
   React.memo() vs useCallback()
   What Is Memoization?
   How to Prevent Unnecessary Re-renders
   What Is arePropsEqual in React.memo()?
   What Is React Profiler?
   Ways to Improve React Application Performance
   What Is React Compiler?
   Does React Compiler Reduce the Need for Manual Memoization?
6. Advanced React Patterns
   Stateless vs Stateful Components
   Pure Functions and Impure Functions
   Pure Components
   What Is a Higher-Order Component (HOC)?
   How to Create and Implement an HOC
   Applications of HOCs
   What Are Render Props?
   Component Composition
   Method Binding in React
   What Are Error Boundaries?
7. Lazy Loading and Code Splitting
   What Is Lazy Loading?
   How Does Lazy Loading Improve Performance?
   What Is React.lazy()?
   How to Implement Lazy Loading
   What Is Suspense?
   How to Use Suspense with Lazy Loading
   What Is Code Splitting?
   How Is Code Splitting Related to Lazy Loading?
   What Are Skeleton Loaders?
   What Is Tree Shaking?
8. Events and Component Communication
   What Are Synthetic Events?
   Synthetic Events vs Native Events
   What Was Event Pooling in React?
   Controlled vs Uncontrolled Components
   Parent-to-Child Communication
   Child-to-Parent Communication
   What Is Prop Drilling?
   What Is Lifting State Up?
   What Are React Portals?
   How Do Portals Work?
9. API Integration
   What Is API Integration in React?
   How to Fetch API Data Using fetch()
   How to Fetch API Data Using Axios
   fetch() vs Axios
   How to Handle Loading and Error States
   How to Fetch API Data and Store It in Context
   How to Share API Data Across Components
10. Babel, Webpack and Build Tools
    What Is Babel?
    Why Do We Use Babel in React?
    What Is Webpack?
    Babel vs Webpack
    What Are Build Tools?
    How Are React Projects Bundled?
    What Is a Bundle?
    What Is Code Transformation?
    What Is Tree Shaking?
    How to Build a Production-Ready React Application
    Development Build vs Production Build
    How to Serve a Production Build
11. Additional React Concepts
    What Is Reconciliation?
    What Is StrictMode?
    How Does the React Rendering Process Work?
    What Is the Difference Between Rendering and Re-rendering?
    What Are Named and Default Exports?
    What Is the Latest Version of React?
12. React Practical Questions
    Create a counter using Context API.
    Create a counter using useReducer() with increment, decrement and reset.
    Create a counter using useReducer() and Context API.
    Create a list using useReducer().
    Fetch API data and store it in Context API.
    Toggle a theme using Context API.
    Create a stopwatch using Context API.
    Change text color using state.
    Implement useMemo() with an example.
    Implement useCallback() with an example.
    Implement React.memo().
    Create a custom useLocalStorage() hook.
    Create a timer using useEffect().
    Display a component when the window resizes.
    Implement child-to-parent communication.
    Implement nested routing using Outlet.
    Create a protected route using authentication Context.
    Implement lazy loading using React.lazy() and Suspense.
    Create a skeleton loader.
    Build a page using dynamic route parameters with useParams().
    Navigate programmatically using useNavigate().
    Create a Higher-Order Component.
    Use Context API to manage login and logout.
    Optimize a component using React.memo(), useMemo() and useCallback().

---

React Topics — Best Learning Order
1
useReducer
Start here
Learn how to manage state, dispatch, action, and reducer.
Practice: Counter with Increment, Decrement, Reset.
2
useContext
Learn how to share data between components without passing props.
Practice: Share username.
3
useMemo
Learn how to cache the result of an expensive calculation.
Practice: Run the calculation only when the number changes.
4
useCallback
Learn how to cache a function reference.
Practice: Pass a function from Parent to a memoized Child.
5
React.memo
Learn how to avoid unnecessary re-renders of a Child component when props do not change.
Practice: Parent counter + Child component.
