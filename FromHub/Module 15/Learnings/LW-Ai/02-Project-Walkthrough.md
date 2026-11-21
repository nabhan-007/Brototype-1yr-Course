# OLX Project — Understanding Doc

**Read this in order:** §1 model → §2 demo path → §3–4 file maps → §5 flows → §6 pendings → §7 Q&A → §8 limits.
**Rule for every section:** if you can't explain a row out loud in one sentence, that row is your next study item.
**Stack:** React 19 + Redux Toolkit + React Hook Form + react-helmet-async ↔ Express + MongoDB + JWT + Multer.
**Code:** `Module 15/Exam/ForEXAM/OLX/` - `olx-frontend/src/` (17 files), `olx-backend/` (17 files).
**Status:** **M15 PASSED 5.8/10** (Theory 6, Practical 5.5) - attempt 4, Sat 21 Nov 2026. Doc kept as the reference for M16+.

---

## 1. The model in 60 seconds

```
Browser (5173)                     Express (5000)                  MongoDB (27017)
┌──────────────────────┐   axios  ┌──────────────────────┐ mongoose ┌──────────┐
│ React pages          │ ───────► │ routes → middleware  │ ───────► │ products │
│ Redux store (4       │ ◄─────── │ → models             │ ◄─────── │ users    │
│ slices)              │   JSON   │ errorMiddleware last │          └──────────┘
└──────────────────────┘          └──────────────────────┘
      │ localStorage: olx-token (access), olx-user, olx-cart
      └ httpOnly cookie: refreshToken (JS can never read it)
```

**One sentence to open with:** "Express + MongoDB API exposes auth, products and checkout; React + Redux Toolkit consumes it through one axios instance — four slices hold global state, `createAsyncThunk` does every API call, React Hook Form handles the forms, and errors are handled by middleware on the server and an Error Boundary on the client."

**Why Redux here and not Context:** four features (auth, products, cart, checkout) read the same data from unrelated components — the navbar needs cart + user, the product page needs products, checkout needs cart. That's prop drilling across the whole tree.

---

## 2. Demo path — rehearse this exact order

| Step | Do                                                                                              | What it proves                                                   |
| ---- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 1    | Open `localhost:5173` logged out                                                                | listing loads without auth; cards say "Log in to add to cart"    |
| 2    | Register a new account (try `name` with a digit → blocked; mismatched confirm → blocked)        | pending 3, validation on both layers                             |
| 3    | Login → navbar shows name, Cart badge appears                                                   | JWT issued, Redux auth slice filled                              |
| 4    | **Reload the page**                                                                             | access token in localStorage + cart in localStorage both survive |
| 5    | Sell → pick a **file** (preview appears) → submit; then Sell → paste an **image link** → submit | pending 5, upload path vs URL path                               |
| 6    | Click a card → modal opens (Esc / backdrop / ×) → Add to cart → Cart → qty +/− → Checkout       | cart state, checkout, `isSold` disappears from listing           |
| 7    | Open browser tab title on each page                                                             | pending 6, Helmet                                                |
| 8    | DevTools → Application → Cookies → see `refreshToken`, `HttpOnly ✓`, `Path=/api/auth`           | pending 7, refresh token                                         |

**Credentials:** `demo@olx.com / demo123` · `testuser@olx.com / test123`. **Reset data:** `cd olx-backend && node seed.js` (wipes products, keeps accounts).

---

## 3. Backend — `olx-backend/`

| File                            | Does                                                                                                                                             | Say                                                                                                            |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `server.js`                     | json → cors(credentials) → cookieParser → static `/uploads` → static `public` → health → 3 route groups → `notFound` → `errorHandler` → `listen` | "Middlewares run top to bottom; the error handler is last."                                                    |
| `config/db.js`                  | one `mongoose.connect(MONGO_URL)` at boot                                                                                                        | "DB connects before the server accepts requests."                                                              |
| `models/User.js`                | email unique + password; `pre('save')` bcrypt-hashes; name `match: /^\D*$/`                                                                      | "Password never stored raw — hashing is in one hook."                                                          |
| `models/Product.js`             | title, description, price, category, image (`default: /placeholder.svg`), `seller` ref, `isSold`                                                 | "`isSold` is the flag that hides sold items; the placeholder is set in the model, so every save path gets it." |
| `routes/authRoutes.js`          | register (201), login (200 + access token + refresh cookie), refresh, logout                                                                     | "201 = created, 200 = token issued, 401 = bad credentials."                                                    |
| `routes/productRoutes.js`       | GET `/` (unsold + filters), GET `/mine` (all own, incl. sold), POST (auth + multer), PUT `/:id` (auth + ownership), DELETE `/:id`                | "401 = no valid token, 403 = valid token but not your listing, 404 = no such document."                        |
| `routes/checkoutRoutes.js`      | POST → `updateMany` `isSold:true`; returns `purchasedIds`; rejects own-listings                                                                  | "The frontend removes only what was actually bought — a race can't wipe the cart."                             |
| `middleware/authMiddleware.js`  | reads `Bearer`, `jwt.verify`, attaches `req.user`                                                                                                | "Route guard: the token is verified before any handler runs."                                                  |
| `middleware/errorMiddleware.js` | `notFound` → 404; `errorHandler` maps CastError→400, JWT→401, else 500                                                                           | "One response shape for every failure."                                                                        |
| `middleware/upload.js`          | multer disk storage, safe filename, 2 MB cap, images only                                                                                        | "Never trust a client filename; DB stores the path, not the bytes."                                            |
| `public/placeholder.svg`        | static "No photo" tile                                                                                                                           | "Local asset — works offline, no external image service."                                                      |
| `seed.js`                       | 11 demo listings with real Wikimedia photos                                                                                                      | "Seeding is idempotent; it only wipes products."                                                               |
| `.env`                          | PORT, MONGO_URL, JWT_SECRET, JWT_REFRESH_SECRET, ACCESS_TOKEN_TTL, REFRESH_TOKEN_TTL                                                             | "Secrets in `.env`, never in code."                                                                            |

**Auth constants (know these numbers):** access `15m` · refresh `7d` · cookie `httpOnly`, `sameSite: lax`, `path: /api/auth`, `secure` only in production.

---

## 4. Frontend — `olx-frontend/src/`

| File                            | Does                                                                                                                                                                     | Say                                                                                                |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| `main.jsx`                      | `StrictMode > ErrorBoundary > Provider > HelmetProvider > BrowserRouter > App`                                                                                           | "Five wrappers, each with one job."                                                                |
| `App.jsx`                       | all routes; `/sell` and `/cart` inside `ProtectedRoute`; `*` → `/`                                                                                                       | "Route guards live in the router layer, not in the pages."                                         |
| `store.js`                      | `configureStore` with 4 slices; cart hydrated from `localStorage` via `preloadedState`; `subscribe` re-saves it                                                          | "Redux is memory — the cart is mirrored to storage so reload doesn't wipe it."                     |
| `api.js`                        | one axios instance, `withCredentials`; request interceptor adds `Bearer`; response interceptor on 401 → refresh once → replay, else wipe + `/login`; exports `fileUrl()` | "Interceptors mean no page ever sets a token header."                                              |
| `slices/authSlice.js`           | `login`/`register` thunks; extraReducers set loading/error; login saves token+user to `localStorage`; logout posts to the API then clears                                | "Logout must clear the httpOnly cookie too — clearing only localStorage leaves the session alive." |
| `slices/productsSlice.js`       | `fetchProducts` (filters → query params), `fetchMine`, `createProduct`, `updateProduct`, `deleteProduct`                                                                 | "Filtering is server-side; the client only sends query params."                                    |
| `slices/cartSlice.js`           | pure reducers: `addItem` (dedupe + qty), `updateQty` (min 1), `removeItem`, `clearCart`; `logout.fulfilled` wipes it                                                     | "Cart is client state; logout resets it so the next user can't inherit it."                        |
| `slices/checkoutSlice.js`       | checkout thunk + `idle/loading/succeeded/failed`                                                                                                                         | "Status states live in Redux, not in component state."                                             |
| `components/ErrorBoundary.jsx`  | CLASS: `getDerivedStateFromError` + `componentDidCatch` → fallback UI                                                                                                    | "Class because hooks can't implement it; it catches render errors only."                           |
| `components/ProtectedRoute.jsx` | token? `<Outlet/>` : `<Navigate to="/login"/>`                                                                                                                           | "Nested-route guard via Outlet."                                                                   |
| `components/Layout.jsx`         | navbar reads user + cart count from the store (no props) + per-route `<Helmet>` titles + two-click logout ("Sure?")                                                                          | "Two components sharing global state without prop drilling."                                       |
| `pages/Login.jsx`               | RHF; redirects if already logged in; own `<Helmet>` (it renders outside Layout)                                                                                          | "Auth pages are outside Layout, so each carries its own Helmet."                                   |
| `pages/Register.jsx`            | RHF + confirm-password rule + name rejects digits; prefills email for Login on success                                                                                   | "Client validation is a courtesy; the server repeats it."                                          |
| `pages/Products.jsx`            | filters as local `useState`, results from the store; Add-to-cart; modal viewer; "Your listing" instead of buy button                                                     | "Ephemeral input is local; shared results are global."                                             |
| `pages/Sell.jsx`                | RHF + `FormData` (file) or link; edit prefills and PUTs; delete uses two-click confirm                                                                                   | "One form does create and update; the file wins over the link."                                    |
| `pages/Cart.jsx`                | qty ± (`−` disabled at qty 1), remove, total, checkout; sends **deduped** ids; removes only `purchasedIds`                                                                                      | "Checkout sells each ad once — `isSold`, not stock, is the model."                                 |
| `index.css`                     | all styling + the modal + thumbnails                                                                                                                                     | "No CSS framework — it's 94 lines of plain CSS."                                                   |

---

## 5. Flows — trace them in this order

**5.1 Login**
`Login.jsx` RHF submit → `dispatch(loginUser({email,password}))` → thunk `api.post('/api/auth/login')` → server compares bcrypt → returns access token + sets refresh cookie → slice saves token+user to `localStorage` and state → `navigate('/')` → navbar re-renders from `useSelector`.

**5.2 Token expiry (the pending-7 flow)**
Any request 401s → `api.js` response interceptor sets `_retry`, calls `POST /api/auth/refresh` (cookie goes automatically because `withCredentials`) → server verifies the refresh JWT → returns a new access token → interceptor rewrites the header and **replays the original request** → user never notices. Refresh fails → wipe storage → `/login`.

**5.3 Product listing**
`useEffect` → `dispatch(fetchProducts(filters))` → query string built from `category/minPrice/maxPrice` → server builds a Mongo filter with `isSold:false` → JSON → `productsSlice` stores `items/loading/error` → page maps cards.

**5.4 Sell with image**
`Sell.jsx` builds `FormData` → `createProduct` thunk → multer parses the multipart body → `req.file` → `image = /uploads/<file>` → `Product.create` → 201 → refetch. No file and no link → model default `/placeholder.svg`.

**5.5 Cart → reload**
`addItem` dispatches → reducer updates `state.cart.items` → `store.subscribe` writes `localStorage['olx-cart']` → reload → `preloadedState` reads it back → badge shows the same count.

**5.6 Checkout**
`Cart.jsx` sends `[...new Set(ids)]` → server finds unsold ones, `updateMany` sets `isSold:true`, returns `purchasedIds` → frontend removes only those from the cart → refetch → sold items are gone because the listing filters `isSold:false`.

---

## 6. The 7 pendings → where the code is

| Pending                       | Lives in                                                       | Prove it in 5 seconds                                                                        |
| ----------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 1 state management incomplete | `store.js` (preloadedState + subscribe)                        | add item → reload → `Cart (1)` still there                                                   |
| 2 dummy-API fetch + display   | separate app `ForEXAM/dummyapi`                                | page shows title, price, category, rating, stock, SKU; blocking the API shows the error text |
| 3 registration validation     | `Register.jsx` + `authRoutes.js` + `models/User.js`            | name with a digit → blocked twice (client and server)                                        |
| 4 UI polish                   | `index.css`, `Products.jsx` modal, `Layout.jsx`                | click a card → modal; thumbnails in "Your listings"                                          |
| 5 image upload                | `upload.js`, `productRoutes.js`, `Sell.jsx`, `placeholder.svg` | file upload + link upload + no-image fallback                                                |
| 6 React Helmet                | `main.jsx` (provider), `Layout.jsx` + auth pages (titles)      | tab title changes per route                                                                  |
| 7 access/refresh tokens       | `authRoutes.js`, `api.js`, `authSlice.js`                      | DevTools cookie is `HttpOnly`; session survives past 15 min                                  |

---

## 7. Q&A you will get

| Question                                              | Answer                                                                                                                                                                                                          |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Why Redux instead of Context?                         | Context re-renders every consumer on any change and has no DevTools or middleware. Redux gives one store, `useSelector` re-renders only the components that read the changed value, plus time-travel debugging. |
| What is a slice?                                      | One reducer + its auto-generated action creators for one feature. `configureStore` combines the slices into the single store.                                                                                   |
| `reducers` vs `extraReducers`?                        | `reducers` = actions this slice creates. `extraReducers` = reacts to actions created elsewhere — a thunk's pending/fulfilled/rejected, or another slice's action like `logout.fulfilled`.                       |
| `useReducer` vs `extraReducers`?                      | `useReducer` is a React hook for complex **local** state, returns `[state, dispatch]`, dies with the component. `extraReducers` is an RTK slice field for **foreign** actions in the global store.              |
| Where does async live in Redux?                       | `createAsyncThunk`. Reducers must stay pure, so the API call can't be in them.                                                                                                                                  |
| Why two tokens?                                       | Access is short-lived and sent on every request (header). Refresh is long-lived, `httpOnly`, and only used to mint new access tokens — stealing it needs a real browser compromise, not XSS.                    |
| 401 vs 403?                                           | 401 = not authenticated (no/invalid token). 403 = authenticated but not allowed (someone else's listing).                                                                                                       |
| Why is the error middleware last?                     | Express finds error handlers by arity and position — four-argument middleware placed after all routes catches everything forwarded by `next(err)`.                                                              |
| What can't an Error Boundary catch?                   | Event handlers, async code (thunks/promises), and its own errors. Hence try/catch in the thunk and `message` state in the slices.                                                                               |
| Why `StrictMode`?                                     | Development-only double-invoke of renders/effects to expose unsafe side effects, plus warnings for deprecated APIs. No effect on the production build.                                                          |
| Why does the cookie need `credentials: true` on CORS? | Without it the browser silently drops the `Set-Cookie` header and the refresh call is anonymous.                                                                                                                |
| Why does checkout return `purchasedIds`?              | Two buyers can race on one item; the buyer who lost must not lose their whole cart.                                                                                                                             |

---

## 8. Known limits — say them as decisions

1. **No pagination** — the listing returns everything; fine at demo scale.
2. **Cart stores the price at add-time** — a later price edit doesn't update the cart.
3. **Quantity is a rubric artefact** — real OLX has no quantities and no cart; each ad is a one-off physical item, hence `isSold` and deduped checkout.
4. **No un-sell** — sold is terminal; reseed or post a new listing.
5. **Refresh-token rotation** isn't implemented — the same refresh token is reused until it expires.

---

## 9. Troubleshooting

| Symptom                        | Cause                                                             | Fix                                                          |
| ------------------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------ |
| "Could not load products"      | backend or Mongo down                                             | `.\start-olx.ps1` from the OLX folder                        |
| `ECONNREFUSED 127.0.0.1:27017` | mongod not running                                                | same script starts it first                                  |
| Images broken (uploaded ones)  | frontend resolving `/uploads/x` against :5173                     | use `fileUrl()` — it prefixes the API origin                 |
| Logged out after 15 min        | `/refresh` failing                                                | check the cookie in DevTools: `Path=/api/auth`, `HttpOnly ✓` |
| Login "succeeds" but stays out | same refresh cookie issue, or CORS origin mismatch (5174 vs 5173) | CORS allows both; check the network tab for `Set-Cookie`     |
| Cart empty after reload        | `olx-cart` missing/corrupt                                        | DevTools → Application → Local Storage                       |
