# OLX Clone — MERN + Redux Toolkit

A small OLX-style marketplace built for a MERN + Redux course module.
Express + MongoDB API · React + Vite + Redux Toolkit frontend · JWT auth.

**Features:** register/login (JWT) · browse listings with category + price filters · sell (create/update/delete own listings, ownership enforced) · cart with quantities · checkout that marks listings SOLD · server-side + client-side error handling · React Hook Form validation · four Redux slices (auth, products, cart, checkout).

## Quick start (Windows)

Prerequisites: **Node.js 18+** and **MongoDB Community installed locally** (local `mongod`, not Atlas).

1. Install deps in both folders:
   ```
   cd olx-backend  && npm install
   cd olx-frontend && npm install
   ```
2. Environment file: copy `olx-backend\.env.example` → `olx-backend\.env` (only needed once).
3. Start everything: **double-click `start-olx.bat`** (or `.\start-olx.ps1` in a terminal).
   It starts MongoDB → backend → frontend, skips whatever is already running, and verifies with a live API count.
4. Fresh demo data (optional but recommended): `cd olx-backend && node seed.js`
   — creates two accounts + 11 listings (two already SOLD for the badge demo).
5. Open http://localhost:5173

**Demo accounts:** `demo@olx.com` / `demo123` · `testuser@olx.com` / `test123` — or register your own.

## How it fits together

```
olx-backend/
  server.js                  Express app, middleware, route mounting
  config/db.js               Mongoose connection
  models/User.js             email + hashed password (bcrypt pre-save hook)
  models/Product.js          title, description, price, category, image, seller, isSold
  routes/authRoutes.js       POST /api/auth/register | /api/auth/login  (JWT)
  routes/productRoutes.js    GET list+filters · GET /mine · POST · PUT /:id · DELETE /:id
  routes/checkoutRoutes.js   POST /api/checkout — marks ids SOLD, rejects own listings
  middleware/authMiddleware  Bearer-token verify (401s)
  middleware/errorMiddleware catches thrown errors, maps to JSON + status codes
  seed.js                    demo data reset (wipes products, keeps accounts)

olx-frontend/src/
  api.js                     axios instance + token interceptor (401 → logout)
  store.js                   configureStore with 4 reducers
  slices/authSlice.js        login/register thunks, token in localStorage
  slices/productsSlice.js    fetch/filter list, fetch own, create/update/delete thunks
  slices/cartSlice.js        add/update/remove + quantity, resets on logout
  slices/checkoutSlice.js    checkout thunk + result state, resets on logout
  pages/                     Login, Register, Products, Sell, Cart
  components/                Layout (navbar), ProtectedRoute, ErrorBoundary
```

## API status codes (by design)
| Endpoint | Success | Meaning of failures |
|---|---|---|
| register / login | 201 / 200 + token | 400 validation, 400 wrong credentials |
| products list / mine | 200 | 401 no/invalid token (mine) |
| create product | 201 | 400 validation, 401 |
| update / delete own product | 200 | 403 not yours, 404 missing, 400 junk id |
| checkout | 200 | 400 already sold, 400 own listing, 401 |

## Why the cart is empty after reload
MongoDB persists to disk — listings and accounts survive restarts. The **cart lives only in the Redux store (RAM)**, so it resets on page reload; login survives because the JWT is kept in `localStorage`. Persisting the cart would be a deliberate feature (localStorage sync or a backend cart collection) — intentionally skipped here.

## Troubleshooting
| Symptom | Fix |
|---|---|
| Backend: `ECONNREFUSED 127.0.0.1:27017` | MongoDB isn't running → `start-olx.bat` handles order for you |
| `mongod.exe not found` | Install MongoDB Community locally, then re-run the script |
| Page loads but "Network error" on products | Backend down → re-run `start-olx.bat` |
| Port already in use | That service is already running — the script skips it automatically |
| `.env` missing | Copy `.env.example` (the script does this automatically if absent) |
