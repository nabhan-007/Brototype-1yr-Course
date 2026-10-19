PENDING
BUCKET
Add Pendings

J


ReactJS - 3

Aug 7, 2026


dynamic imports

- ESModules

- when not to use redux

- immer, understand why states are immutable

- normalization of state

- middleware

- JWT vs session

- when/where JWT is used

- how JWT signature helps prevent forgery

- HTTP 400

- HTTP 403 vs 401

- common HTTP status codes and where they’re used

- use /entity/<id> with DELETE; no need of /delete

- refer simple OpenAPI examples

- token rotation

- explore browser storages and their security

- rest API response formats

- PermissionsMixin + AbstractBaseUser

- serializer field level validation

- token blacklisting

- SerializerMethodField *

- DRF pagination

- object level permissions

- explore permission classes more

- signup input validation

- signup success message
Jul 28, 2026


-What should NOT be stored in Redux

-Increase the count of cart based on the add, remove button associated with each items using redux.

-Limitations of redux.
Jun 26, 2026


-how other component get data from the redux store

-Properly understand how redux, JWT and DRF work.

- a single react-reducer and context for global state management vs redux

- can multiple stores be added?

- principles of redux

- can redux be used without toolkit?

- combineReducer

- primitive types vs reference types

- arrow functions vs regular functions

- how re-render happens in redux

- connect

- middleware

- store methods

- problems with long lived access tokens

- XSS

- localStorage methods

- JSON.parse

- secure browser storages

- samesite cookies

- JWT claims

- what JWT payload includes

- can JWT be decoded in the frontend

- is JWT encrypted?

- how JWT is protected against forgery

- JWT vs session-based state

- HTTP 200 vs 201

- HTTP 400, 401, common HTTP status codes

- ModelSerializer

- view vs viewset

- parsing form data

- permission classes

- object permissions (ownership)

- refer OpenAPI examples to get a clearer idea about how REST APIs work
May 21, 2026


reset and initialize state-partial completed

call and put-redux saga

add multiple middleware apply Middleware
May 2, 2026


implement server side search for users

when user profile edited from admin side, its not reflecting in user side

handle delete of already logged in user

prevent the unwanted api calls from admin side (check the useEffect)

composition of JWT

working of JWT - lacks clarity

cookie vs local storage

refresh token

axios vs fetch

why we can't use localStorage for global state management

principles of redux

why reducers should be a pure function

redux middlewares

extraReducers

combinedReducer
Apr 7, 2026


Redux vs Redux Toolkit

How Redux works internally

Is reducer mutable? (Explain Yes scenario )

Structure of JWT

Syntax of useReducer

Error boundary lifecycle (Syntax)

MobX & Zustand

* Concepts

* Why to use

* Differences

Increment problem

Theme switcher problem
Mar 27, 2026


User should not be able to navigate back to the login/logout page after successful login.

Restrict admin routes in the frontend

API rate limiting?
Feb 23, 2026


pure component vs react.memo

applications of useCallback

authorization

Task - implement refresh token

what is redux (need clarity)

work flow of redux (reffer more)

redux thunk. vs redux saga

redux toolkit

drawback of useContext

how to persist redux state in refresh

pass data from child to parents
Feb 18, 2026


error messages are overlapping with field names - registration form

don't use JS default alerts

implement server side user search

pure components

purpose of HOF

why we can't use browser's 'window' object instead of redux?

explore components of redux (store, actions & reducer)

what's a slice & what are the benefits of it

principles of redux

workout: fetch current user name from redux store & render it in component - partially done

working of token - lacks clarity
Feb 13, 2026


*Redux Data Flow

*Need clarity on Error Boundaries

*Strict Mode

*MakeObservable vs MakeAutoObservable
Dec 27, 2025


*Redux Thunk

*Redux Saga

*Redux DevTools

*Error Boundaries

*MakeObservable vs MakeAutoObservable

*Boilerplate
Dec 6, 2025


drawbacks of react

props lifting

action types and action creators

event pooling

pure component

forwardRef

error boundary

react portal

render props

parts of jwt

axios interceptors

use .env in FE also
Dec 3, 2025


createAsyncThunk

context api

drawbacks of Context API

context api vs redux

actions in redux

Framework vs library

-redux thunk vs redux library

-redux toolkit

-lifting state-up

-drawback of  contextApi
Oct 14, 2025


Take a complete understanding of Redux

Need to improve practical understanding in react & react both (learn how to debug the code)

Create nested dropdown and map the array of object

Create auto inc/dec counter with/without range 0-10 using/without using redux

Learn react optimisation technics

Pending

-Purpose of middleware in redux

-Send data from child to parent component using redux

-Difference between access token and refresh token
Oct 10, 2025


how JWT is verified

- contents of JWT headers

- issues with JWT with long TTL

- httpOnly cookies

- disadvantages of localStorage

- HTTP 403, 401, 400, Common HTTP status codes

- HTTP 200 vs 201

- ask strong password

- improve signup input validation

- user edit failed due to duplicate email but showed success in UI

- user proper endpoint naming, methods and status codes (refer OpenAPI)

- improve error handling

Communication is fine!
Oct 4, 2025


Advantage of redux over context

Redux Persist Syntax

Principles of Redux

extraReducers

createAsyncThunk

Parts of JWT

Refresh Token
Sep 19, 2025


Redux data flow

Actions and reducers

useReducer

useSelector

Middlewares

Redux thunk

Redux saga

Redux toolkit

Redux devtool (need clarity)

When to use redux

Context api vs redux

useMemo

useRef

JWT Token generation

Local vs session storage

Learn all the aspects of redux. Avoid using chatgpt as much as you can while learning
Aug 12, 2025


initial state

reset state

siblings communication using use Context

call and put in redux saga

redux thunk vs redux saga

combineReducers

child to parent communication

synthetic events

create a custom hooks
Aug 7, 2025


application logs out when the page is refreshed

constants in Redux

mapStateToProps vs mapDispathToProps
Aug 6, 2025


- No exception handling in Netflix

- OLX task not done

- useMemo

- React.memo

- useReducer

- useContext

- portals

- Creating custom hooks
Aug 4, 2025


What is the exact purpose of Redux DevTools?

Learn Correct definition

Counter app using redux toolkit
Aug 3, 2025


-fiber

-reconciliation

-virtual dom

-shadow dom
Jul 31, 2025


Limitations of redux

Why we use Saga for complex applications

Outlet

How to improve the performance of react application
Jul 31, 2025


Provider component work in Redux

mapStateToProps

mapDispatchToProps

redux-thunk (Need More Clarity )

createAsyncThunk

HTTP Status Codes (Need More Clarity )

204
Jul 28, 2025


What is configureStore in Redux Toolkit?

What is createAsyncThunk in Redux Toolkit?

Components of JWT token

Implement a counter using Redux
Jul 23, 2025


Scripts in package.json

Devdependecies, dependencies

Browser dom node - html structure

createRoot

StrictMode

Axios vs fetch

response.json()

interceptors

React fiber - reconciliation

Polifills
Jul 23, 2025


What is an Action Creator?

What is the use of combineReducers?

What is Immer?

Practical

Create a component to add an item to a list using Redux

→ Partially done, missing the dispatch function in implementation

Do more practicals by fully understanding the

Redux flow (Action → Reducer → Store → UI)
Jul 22, 2025


APIS are not protected

access token vs refresh token

axios interceptors

axios vs fetch

principles for redux

redux middlewares

redux toolkit clarity

advantages of redux

Pure components
Jul 16, 2025


pending

combineReducer

- connect

- XSS

- httpOnly cookies

- JWT headers

- JWT claims, can client decode JWT?

- role of JWT signature, how JWT verification works

- understand how JWT works

- HTTP 401 (vague)

- HTTP 403, 400, 201

- REST API

- refer OpenAPI examples
Jul 16, 2025


React Thunks

JWT structure

Axis interceptor and insurances

use dispatch
Jul 14, 2025


Signup is broken

Success/failed msg should be there after register

Edit Profile is broken in user

Implement the search using api with debouncing

Edit user : should check email existing or not

Implement Refresh Token

Theory

Why do we need redux?

Advantage of redux over context hooks

Principles of redux

Redux Persist (Implement)

extra reducers

createAsyncThunk

How will you authenticate a jwt token
Jul 12, 2025


Theory

What is the exact purpose of an Access Token and Refresh Token?

What is the exact purpose of an Action Creator?

What is the exact purpose of Axios Interceptors?

Practical

Create a component to add an item to a list using Redux – Code is almost correct, but encountered an issue in the slice.
Jul 11, 2025


immutability in redux

- ⁠combineReducers

- ⁠mapStateToprops vs mapDispatchToprops

- ⁠Redux Thunk and Redux Saga

- ⁠jwt : header, payload, signature

- ⁠ Bearer keyword

- ⁠access token and refresh token

- ⁠signing algorithm example

- ⁠redux : to do ( accept an todo task from user and display the tasks in the same page )

- ⁠need improvement in practical and theory
Jul 11, 2025


redux is unidirectional why?

redux dev Tool

mobX vs Z-stand
Jul 10, 2025


index.html

createRoot

Div vs fragment

What can be a key

Life cycle methods - clarity

Creating a counter - setInterval

Work on practical and core concepts
Jul 10, 2025


core components of Redux

Redux devTools

constants in Redux

redux store methods

mapStateToProps() vs mapDispatchToProps()
Jul 9, 2025


redux limitations

when to use redux and context api

mapStateToProps

mapDispatchToProps

kearn and practice redux practicals
Jul 8, 2025


Frontend

- viewport size

- navigator

- httpOnly cookies

- disadvantages of localStorage

- immutability of state

- types of routers

- Outlet

- advantages of synthetic events

- why shouldn’t array index be used as key prop?

- key prop

- reading query params and path params

- lifting state up (poor understanding)

- Link props

Score: 2.5

Vishnu GR in Second full domain
Jul 3, 2025


Pendings ( Rahul Ranjan )

Throttling vs debouncing

CreateRef

Conbine reducer

Create auto inc/dec counter using redux and range is 0-10
Jul 3, 2025


JWT tokens

Protected route

access token vs refresh token

redux toolkit clarity
Jul 3, 2025


- redux thunk

- redux saga

- generator functions

- custom hook

- axios interceptors

- refreshtoken in depth

- axios canceltoken

- webpack

- babel

- reactjs performance

- code splitting

- lazyloading

- error handling

- JWT flow
Jun 27, 2025


store

toolkit

useReducer

useDipatch

state

useSelector

reducer
Jun 27, 2025


Parent to child communication

Child to Parent communication

React fiber-need clarity

class component vs function component

renrender component when page resized

useContext implementation

synthetic events-need clarity
Jun 26, 2025


1. Reconciliation

2. One way data binding

3. Event pooling

4. Portals

5. Limitations of functional based components

6. Polyfill

7. Nested routing
Jun 21, 2025


- Referential equality

- Batching in React

- png vs jpg

- vector images

- decryption vs decoding

- base64

- hydration

- ESModules
Jun 20, 2025


- library vs framework

- single page vs multipage

- custom hook

- proptypes

- error boundary

- babel

- axios interceptor

- axios canceltoken
Jun 20, 2025


What are Action Creators?

How can we handle asynchronous actions in Redux?

What is the purpose of the Provider component?

Practical

Create a component to add an item to a list by clicking a button using Redux – ❌ Not done

⚠️ Understand the concept correctly and do more practicals to strengthen Redux understanding.

Feedback

Basic understanding of Redux theory.

Practical implementation needs improvement — focus on:

Correct use of Provider and store setup

Using useDispatch and useSelector

Implementing reducers properly

Handling async actions using Redux Thunk
Jun 15, 2025


Pendings

1. Ask for confirmation before delete

2. Admin should be able to create and edit users

3. Suppress unwanted error messages

4. Email should be unique and show proper error messages

5. Add pagination on the user list

6. Understand Request-Response cycle
Jun 11, 2025


•⁠ ⁠Benefits of using slices

•⁠ ⁠Redux-Thunk

•⁠ ⁠Redux-Saga

•⁠ ⁠combineReducers

•⁠ ⁠How the server validates a JWT

•⁠ ⁠Token storage

•⁠ ⁠What happens when a user logs out
Jun 10, 2025


1. Add proper error messages

2. Edit profile not working

3. Ask for confirmation before delete

4. Add logging

5. Need more clarity on: authorization, authentication, middlewares in Redux

6. Functions vs hooks
Jun 9, 2025


more on ways to optimise component

useMemo vs React.memo

context and context workflow

code splitting

Suspense

principles of redux

custom hook
May 31, 2025


1. Task: implement search

2. Subscribe refer more

3. Outlet

4. Access token, refresh tokens

5. Limitations of redux
May 29, 2025


Reviewer- Vishnu G R

- limitations of context library

- accessing and modifying specific states in redux

- redux toolkit

- generic views in Django(not react)

- what determines the lifetime of access token

- JWT claims

- JWT structure

- security offered by JWT

- usage of path params in APIViews

- reading query params

- signup input validation

- profile info edit (optional)

- edit user in admin side

- user add error messages not communicated properly
May 24, 2025


•⁠ ⁠Jwt.verify v/s decode

•⁠ ⁠useReducer vs Redux

•⁠ ⁠useContext

•⁠ ⁠Current react Version

•⁠ ⁠useCallback

•⁠ ⁠Disadvantages of redux

•⁠ ⁠useTransition

•⁠ ⁠Use hook

•⁠ ⁠useFormState

•⁠ ⁠JIT

•⁠ ⁠React Fibre

•⁠ ⁠memoization (not clear)

•⁠ ⁠optimistic updates

•⁠ ⁠selector in redux
May 23, 2025


feedback:

1. Redux store

2. Single source of Truth

3. Why actions are important

4. Components of Redux

5. Advantages and disadvantages of redux..
May 19, 2025


Whats the purpose of access token and refresh token?

Whats the use of serializers

Whats the action creator

Whats the combined reducers?

What is the purpose of the Provider component in React Redux?

What is immer and how is it used in Redux?

Create a todo app using redux toolkit
May 17, 2025


- Implement pagination

- Move user list search to the backend API instead of handling it on the frontend

-shadow DOM

- Implement debouncing
May 15, 2025


8. Email should be unique

9. User listing shows duplicate entries

10. Ask for confirmation before delete

11. Edit/delete user is not working

12. Do not print/log tokens in code

13. Authentication and authorization

14. JWT

15. Redux middleware

16. Redux Thunk & Redux Saga

17. Use logging libraries

18. last week topics : react
May 9, 2025


Error should be meaningful

Once the user is logged in restrict the auth pages

Profile placeholder

File type and file size

Don't have permission page

Authorization

Parts of token

Use of refresh token

Principles of redux

Student need to understand the flow of redux, dispatching the action
Apr 27, 2025


ReactDOMClient

ReactDOMServer

PropTypes

Render props

HOC - need clarity

Suspense

Redux vs Flux

Controlled vs uncontrolled component

Debouncing

Throttling

Polyflls

Error boundary

Redux persistence

Diffing algorithm

Drawbacks of CSR

Drawbacks of useMemo & react.memo

React portals

Transpiler vs compiler

Function vs custom hook

React.memo

Dynamic import

useLayoutEffect

React concurrent

React Fiber

dynamic routing

changing value in useRef

useref vs regular variable to hold value

why can't hooks be used in conditions

one way data binding - clarity

unmounting in functional component

accessing data from uncontrolled element

advantages of useRef

for wardRef

useLocation

dynamic rendering

What are React Mixins?

Context API vs Redux?

Practical: Send data from child to parent using useRef.

Practical: Send data from child to parent using callback functions

PropTypes in React: How to validate props?

Which lifecycle hooks are replaced by useEffect in functional components?

Practical: Create a custom hook for increment/decrement counter.

-send data from child to parent using context

What is the purpose of the callback function in setStateQ?

Practical: Example of Context API usage?

Hook vs function

Custom hook scenario

useMemo dependency list

Lazy loading code

Error boundary

Hooks in Redux

Redux Thunk

difference between useeffect and useLayoutEffect

-difference between context and redux

mapstatedispatchtoprops

mapstatetoprops

replace usstate by usereducer

-need practical exposure of useMamo an useCallback

-purpose of middleware in redux

Code Splitting

useMemo

Shadow DOM

dangerouslySetinnerHTML

Rules of using hooks

React profiler

Axios interceptors

Examples for HOF

Pure components

Core principles of Redux

Synthetic events

Conditional rendering

Latest features in React

Automatic batching

axios cancelToken

limitations of functional components

limitations of useMemo & useCallback

starvation

Create Props Proxy for HOCForwardref

creating a pure component

purpose of using spread operator when update(react)
Apr 25, 2025


flux

implementation using useContext(partial)

react context vs redux

useState replace useReducer

mapStateToProps() and mapDispatchToProps()(need clarity)

create custom hook(partial)

forward ref

applyMiddleware
Apr 24, 2025


Actions

Subscribe

useSelector

Role of a store - refer more

How to handle asynchronous operations in redux

How to improve the performance of react application

useCallback

pure components

JWT working -refer more
Apr 18, 2025


- Write a middleware to console the Jwt token

- what is Cors ?

- Use of express.json ?

- Jwt decode vs verify (not clear)

- useLayoutEffect vs useEffect (not clear)

- Disadvantages of redux

- Current react version

- Why we keep the component name in pascal case in react ?

- Why We can’t use the hooks inside a if case ?

- useTransition ?

- optimistic updates ?

- What are the phases state updation ?
Apr 11, 2025


Library vs framework

Custom higher order components

Axios interceptors

Axios canceltoken
Apr 11, 2025


Subscribe

Redux thunk vs Redux saga

Implement a counter using redux

Outlet

How to improve performance of react application

React.memo vs useMemo
Apr 11, 2025


- use redux Devtools

- Suspense

- Fragment

- built in components in react

- JWT flow

- immer, thunk
Apr 10, 2025


state management

core principles of Redux

Actions

middlewares

Redux devTools

redux store methods
Apr 4, 2025


Assignmnet not completed

Flux

Redux sage

call()

put()

mapstatetoprops

mapDispatchtoprops

React context vs Redux

Redux Thunk

add middlewares in redux

siblings communication in react

child to parent communication

communication use usRef

forward ref
Apr 2, 2025


useReducer

redux devTools

constants in Redux

redux store methods
Mar 28, 2025


Provider component work in Redux

mapStateToProps

mapDispatchToProps

redux-thunk (Need More Clarity )

createAsyncThunk

HTTP Status Codes (Need More Clarity )

204

working of jwt

use of signature in jwt

learn about redux folder structure - large scale application
Mar 26, 2025


redux-saga

call()

put()

react fiber

mapStateToProps

mapDispatchToProps

applyMiddleware

siblings communication using middle ware

semantic kernel

custom hook(partial)

replace useState with useReducer
Mar 26, 2025


1.If the user is logged in, redirect to login

2. Edit/create user from admin not completed

3. User is still able to access his dashboard after admin deleted his account

4. Manage sessions and cookies

5. Need of specifying bearer in token

6. Redux vs Context API

7. Synchronous and asynchronous actions in Redux
Mar 26, 2025


useLocation

Redux saga

Redux thunk

Component will unmount using useffect
Mar 26, 2025


useState() → State handling

useEffect() → Side effects handling

useContext() → Global state sharing

useReducer() → Alternative to useState()

useRef() → Reference handling

useMemo() → Optimization

useCallback() → Performance tuning
Mar 26, 2025


Redux Principles

jwt.verify arguments

Redux Persist

how to dispatch an action with payload
Mar 19, 2025


Redux and redux toolkit difference

configureStore

Redux thunk
Mar 19, 2025


project is incomplete

Context vs Redux

dispatcher

redux devTools

core principles of Redux

redux store methods

constants in Redux
Mar 17, 2025


sessions vs tokens

access token vs refresh tokens

explore the usecases of browser storages

extraReducer

localStorage vs redux

hash router & memory router

react portals

How to dispatch an action

Create an action

Jwt verify

When to use thunk and saga

Configure store
Mar 15, 2025


Redux

Reduce dev tools

Redux constants

Redux store core methods
Mar 14, 2025


Updating expired jwt token

Clear redux state

Call and put in redux saga

How redux ensure the components updated correctly
Mar 14, 2025


Subscribe

Limitations of Redux

Dynamic imports

Suspense

Code Splitting

JWT and its working

Different components of JWT

Outlet

Synthetic event

Redux toolkit
Mar 13, 2025


mapStateToProps

mapDispatchToProps

How should you structure a Redux application?

What is the purpose of selectors in Redux?

combineReducers function in Redux

How can you detect token expiry in a frontend application?

access and refresh tokens (need clarity)

Where should access and refresh tokens be stored on the client side?

please do explore more in JWT
Mar 12, 2025


Which is the ideal place to store jwt token,

What is jwt token,

Difference between use context and redux,

How to store a data to redux store,

What is Babel?

How do u unmount a functional component
Mar 7, 2025


Add protected routes

redux slice

Redux middlewares

Access token vs refresh token

Jwt components

Reconciliation

Event pooling
Mar 4, 2025


one way data binding

passing data from child to parent- scenarios

react concurrent mode

principles of redux
Feb 28, 2025


react drawbacks

HTML sanitization

forwardRef

error boundary

why immutability important in redux, and how is it achieved

flux architecture

redux-thunk
Feb 28, 2025


- axios interceptors

- axios canceltoken

- webpack

- babel

- redux thunk vs saga

- react latest features

- react concurrentmode

- automatic batching

- custom hook
Feb 15, 2025


Pros and cons of redux

useDispatch hook

Redux thunk

Jwt structure

Jwt generation and verification code

What are Middleware in Redux?

How does Redux Persist work?

Combine reducer

What is the difference between mapStateToProps and useSelector?
Feb 9, 2025


- Redux devtools

- redux middleware : gain more clarity

- createAsyncThunk

- context api vs redux
Feb 7, 2025


- what are actions in redux?

- redux saga vs redux thunk?

- working of persist in redux?

- what is combinereducers?
Feb 7, 2025


Setting Up ReactJS Environment with Vite (Create-react-app is outdated now, Don't use it.)

Introduction to Vite

What is Vite?

Advantages of Vite over CRA: Fast development server, optimized builds, lightweight configuration.

Setting up a React project using Vite.

Understanding vite.config.js and basic project structure.

DOM concepts in Javascript

Difference between actual DOM and virtual DOM

Difference between single Page and multi-page application

CSR vs SSR

Concept of reusability

Learn about es6 versions syntaxes

Arrow functions

Map

Destructuring

Filter

Reduce

Import/Export

Difference between JSX and HTML

Learn about components

Class (basic- lifecycle methods)

Functional

Dynamic rendering

Lifecycle methods

Learn the concept of hooks

useState

useEffect

useRef

useHistory vs useNavigate

Learn the concept of event handlers

onClick

onChange

Learn the concept of React router

useCallback

useMemo

React.memo vs useMemo

useContext and context API

useReducer

React.lazy – code splitting

JWT authentication and authorization

Redux

redux-react

redux toolikit
Feb 7, 2025


react drawbacks

webpack

useState

state variable vs normal variables

useEffect dep arrays

rules of using hook

native events

synthetic events

event pooling

forwardRef

useCallback

useMemo

useCallback

action creators and action types in redux
Feb 4, 2025


What is combineReducers() in Redux?

What is mapStateToProps and mapDispatchToProps?

How to test Redux reducers?

Purpose of useCallback,useMemo,Reat.memo

Actions and Action Creators

useSelector and useDispatch hooks

Middleware in Redux

What is Redux Toolkit

How does React-Redux’s Provider work

Redux DevTools
Feb 2, 2025


-structure of JWT

-access token vs refresh token

-redux is not covered

-localStorage vs redux

-axios vs fetch

-benefits of uncontrolled elements
Jan 31, 2025


core principles of redux,

how to handle impure actions in redux?,

side effects,

why is reducer a pure function,

jwt signature,

jwt claims,

practice implementation of combined reducers.
Jan 31, 2025


-option to add new items - pending OLX.

-core principles of Redux,

-Middleware,

-redux-thunk and redux-saga,

-limitations of Redux,

-combineReducers

-implement createAsyncThunk.
Jan 25, 2025


context vs Redux

core components of Redux

store

reducers

redux devTools

redux store methods

constants in Redux

core principles of Redux
Jan 23, 2025


-How react works

-How to get values from uncontrolled component

-stateless and statefull component

-Life cycle methods in react

-Higher order component

-Pure component

-Disadvantage of prop drilling

-Lazy Loading

-Props.children
Jan 16, 2025


Action Creators

reducer concept

connect function

Middleware
Jan 16, 2025


-UseState vs useReducer

-Dispatch vs subscribe

-Where we should do api call in redux

-Write the code for auto inc and dec counter with range 0-10
Jan 16, 2025


1. Redux flow

2. Difference b/w Context API & Redux

3. Optimization techniques for redux app
Jan 15, 2025


- JWT claims

- JWT signature

- httpOnly cookies

- login request contains a token before login even happens

- token expiry not handled

- logout doesn’t remove cookies
Jan 10, 2025


mapStateToProps

mapDispatchToProps

connect function

redux thunk

redux saga

asynchornous operations
Jan 10, 2025


purpose of access token and refresh token

use of serializers

store,dispatch,action reducers

combined reducers

redux middlewears

core principles of Redux

action in Redux

reducer in Redux

Redux store

middleware in Redux

handle asynchronous actions in Redux

difference between Redux Thunk and Redux Saga

implement a reducer to handle multiple action types

mapstatetoprops and mapdispatchtoprops

concept of ""immutable state"" and why it is important in Redux

common performance optimizations for Redux applications

Redux Toolkit

debug a Redux application
Jan 6, 2025


error handling in react

pure components

react profiler

synthetic events

render props

redux store methods
Jan 6, 2025


-purpose of middleware in redux

-what is difference between useeffect and useLayoutEffect

-rules of custom hooks
Jan 3, 2025


flux

implementation using useContext(partial)

react context vs redux

useState replace useReducer

mapStateToProps() and mapDispatchToProps()(need clarity)

create custom hook(partial)

forward ref

applyMiddleware
Dec 14, 2024


middlewares,

redux-thunk vs saga,

use typescript code in react,

redux principles.
Dec 1, 2024


protect admin urls using JWT

extraReducers

Why can't we use localStorage instead of redux
Nov 13, 2024


jwt.verify()

Redux thunk senario
Nov 4, 2024


context vs Redux

core principles of Redux

constants in Redux

Redux store methods
Oct 25, 2024


- React Fiber

- Flux

- Redux slice

- Redux dev tools

- React profiler

- Error Boundaries

- Web workers

- Uncontrolled components

- prop lifting

- use parms

- Map state props

-MapDispatchToProps

- CORS
Oct 25, 2024


- Synthetic Events

- cross browser wrapper

- Suspense

- useHistory b/w useNavigator

- useValue

- Redux Thunk

- Axios cancelToken

- principlies of redux

- local storage s redux

- hashrouters

- how to handle query/params in react router

- purpose & examples of hoc

- jwt structure
Oct 25, 2024


- mapStateToProps

- mapDispatchToProps

- constants

- Reducer

- Logger middleware

- Thunk middleware or Redux think

- Redux saga b/w redux thunk

- Redux toolkit

- What is store

- What is the dffrnts b/w redux and context api

- Reducer

- React redux

- What is jwt

- jwt Claims

- Jwt signth

- Jwt verify token
Oct 25, 2024


- pure function

- action

- slice

- combine reducer

- axios interceptors and cancel tokens

- access token vs refresh token

- deadcode elminiation

- polyfills

- getstate and dispatch

- react-redux

- context api vs store

- core principle of redux

- create a counter using redux

- middleware in redux

- why redux unidirection dataflow
Oct 25, 2024


- Redux

- Toolkit

- store

- provider

- useSelector

- useDispatch

- middleware

- redux saga

- redux thunk

- core principle

- lifecycle

- jwt

- jwt structure

- use of secret key in jwt

- uncontrolled components

- reducer
Oct 25, 2024


- refer axios instances and interceptors

- components of jwt

- role of store - detail

- how to handle asynchronous operations in redux

- redux thunk vs redux saga

- disadvantages of redux

- prevent default - purpose

- axios vs fetch

- role of token

- axios interceptors

- why can’t we use local storage instead of redux

- httpOnlyCookies

- forwardRef

- advantages of useRef

- workout: dispatching and accessing state from store.
Oct 22, 2024


principles of redux

workout: save the user email in redux store &

render the data in component

why can't we use localStorage in redux?

react portals

synthetic events

Hash router
Oct 22, 2024


Session/cookie/local storage

Best practice for storing token

Implemented use middleware
Oct 22, 2024


explore the browser storages & it's usecases

explore refresh token workflows

principles of redux

why can't we use redux instead of localStorage?

extraReducers

workouts: update the data inside redux store by dispatching an action from a component
Pending Bucket © 2025 | Developed bySujith V S