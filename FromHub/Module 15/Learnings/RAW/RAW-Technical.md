Task Overview
Total Topics: 6




1). Redux for State Management
A) Introduction to Redux and the need for global state management
B) Understanding the Redux data flow
C) Configuring and using the Redux store
D) Working with reducers, actions, and dispatch
Write a short description about this task.

Your Response
Add Attachments
No responses added yet


2). Redux Middleware & DevTools
A) Using middleware (e.g., Redux Thunk)
B) Connecting the app with Redux DevTools for debugging

Write a short description about this task.

Your Response
Add Attachments
No responses added yet


3). Error Handling and Validation
A) Implementing Error Boundaries in React
B) Enabling Strict Mode to identify potential issues
C) Using React Hook Form for handling form data
     C1) Basic validations
     C2) Managing form state


Write a short description about this task.

Your Response
Add Attachments
No responses added yet


OLX-like E-Commerce Platform
Build a simple e-commerce application using Express + MongoDB for the backend and
React + Redux for the frontend with the following core features.
a. Login Page
i. Authenticate users against an Express API backed by MongoDB using
email/password (or a mocked login endpoint).
ii. Use JWT to issue tokens on successful login.
iii. Store the returned token and user details in Redux state.
b. Sell Page
i. Form for authenticated users to add or update product listings.
ii. On submit, send data to Express REST APIs to create/update product
documents in MongoDB.
c. Product Listing Page
i. Fetch all available (not sold) products from the Express API and display
them.
ii. Support basic filters (e.g., by category or price) via query parameters or
client-side Redux state.
d. Cart Page
i. Allow users to add, update quantity, or remove items (cart state
managed in Redux).
ii. Optionally persist cart items for logged-in users via backend APIs.
e. Checkout Page
i. Call an Express checkout endpoint (POST /api/checkout) that:
ii. Marks selected products as isSold: true in MongoDB.
iii. Ensures sold products no longer appear in the product listing API
response.
f. State Management
Use Redux Toolkit to manage:
i. Product listings - list, details, loading/error flags (use createAsyncThunk
for API calls).
ii. Cart items - add, remove, update quantity, clear on checkout.
iii. Auth status - current user, JWT token, login/logout actions.
iv. Checkout status - in-progress, success, failure states.
g. Form Handling
Use React Hook Form to:
i. Capture product details on the Sell Page (title, description, price,
category, image URL).
ii. Validate inputs - required fields, positive price format, minimum
description length.
h. Error Handling
i. Backend: Use Express error-handling middleware to catch errors and
return proper HTTP status codes with structured JSON error responses.
Write a short description about this task. Show less

Your Response
Add Attachments
No responses added yet


5). Zustand
A) Basic setup with the create function.
B) Understand how Zustand avoids boilerplate.
C) Store creation, Use the Store in a Component
D) Read and update the state using hooks.

Write a short description about this task.

Your Response
Add Attachments
No responses added yet


6). MobX
A) What is Mobx, and why is it used 
B) Mobx Concepts → Observables, Actions, Computed values, Reactions 
C) Learn Integration with React 
D) Observable with Class Components and Functional Components
E) Understand the basics of what is makeObservable and makeAutoObservable 

Write a short description about this task. Show less

Your Response
Add Attachments
No responses added yet