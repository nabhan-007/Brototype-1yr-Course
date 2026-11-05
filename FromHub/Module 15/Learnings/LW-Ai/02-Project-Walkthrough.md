# 02 — OLX Project Walkthrough (per-file, for the teach phase + exam demo)

Built 2 Nov 2026 (agent-written per user override; explain-backs owed by Nabhan). All flows verified live: API tests (9 checks) + real-browser run (login → sell → list → cart → checkout).

**Run it:**
```powershell
# 1. MongoDB (service "MongoDB" may need Start-Service as admin, OR:)
& 'C:\Program Files\MongoDB\Server\8.3\bin\mongod.exe' --dbpath C:\Users\mhodn\data\db --port 27017
# 2. Backend
cd "Module 15\Exam\ForEXAM\OLX\olx-backend"; npm start        # → localhost:5000
# 3. Frontend
cd "Module 15\Exam\ForEXAM\OLX\olx-frontend"; npm run dev     # → localhost:5173
```
Demo credentials: **demo@olx.com / demo123** and **testuser@olx.com / test123** (both seeded; `other@olx.com / demo123` also exists — used to prove 403).
Mock data: run `node seed.js` (in `olx-backend`) to reset products to a fresh demo state — demo 6 items (5 live + 1 SOLD), test 5 items (4 live + 1 SOLD), category-colored placehold.co image tiles. Safe to re-run any time (wipes products only; accounts stay).
In-process fixes (2 Nov): duplicate "Add one" cart button removed; `/mine` returns sold listings too (SOLD badge); UI sizes bumped; services run as DETACHED processes (Start-Process) because background shells die between chat turns — logs: `OLX/logs/`.

## Bug-fix ledger (2 Nov review pass — 4 must-fix bugs found & verified fixed)
1. **Register crash (triple bug: import clash + shadowing)** — `Register.jsx` imported the auth thunk `register`, then `useForm()` shadowed it with its own field-wiring `register` → dispatch hit the wrong function → submit crashed. Never walktested (only Login was). Fix: `registerUser` alias + logged-in guard added. **Proved in browser:** new account registered → auto-redirect → logged in as Test User → sees own empty Sell page.
2. **Junk `:id` → HTTP 500** — mongo `CastError` unmapped: `PUT /api/products/xyz` said "Server error". Fix: `errorMiddleware` maps `CastError` → 400 "Invalid ID format". Proved: junk-id PUT now returns **400**.
3. **Checkout race wiped carts wrongly** — second buyer (item already sold by someone else) got `purchased: 0` BUT frontend cleared the whole cart. Fix: backend returns exact `purchasedIds` (find-unsold first, updateMany re-checks `isSold` in Mongo); frontend removes ONLY those; zero-bought shows "already bought by someone else". Proved: other@olx.com checkout on sold item → `purchased=0 ids=[]` (200), cart intact.
4. **Expired-token trap** — every call 401'd with raw error strings, nothing recovered ("token expiry not handled" is an examiner-feedback line!). Fix: `api.js` response interceptor → 401 → clear localStorage → redirect /login (skipped when already on /login so a wrong password doesn't reload the page).
5. **Self-purchase allowed (found by Nabhan)** — a seller could add their OWN listing to the cart and buy it. Fix on both layers: backend `checkoutRoutes` rejects any checkout containing own-listing ids with **400 "You cannot buy your own listing"** (the trust boundary — browser checks can always be bypassed); frontend `Products.jsx` shows "Your listing — buyers see the cart button here" instead of the button (`p.seller === user.id`). Proved: own-item checkout → HTTP 400; cross-user checkout → purchased=1; browser as Test User → 4 own notes + 5 buy buttons.
6. **Cart + "Checkout done" leak across users (second review pass)** — `logout` reset only `auth`; user A's cart items and success message stayed in Redux for user B in the same tab (B could even buy A's leftovers on B's token). Fix: both `cartSlice` and `checkoutSlice` gained `extraReducers → logout.fulfilled` resets. Proved in browser: Test User cart (1) → logout → login demo → Cart (0), no message residue; own-listing notes still render correctly (no regression). Junk-input probes all clean (minPrice=abc → 400, checkout junk id → 400 via CastError, junk token → 401).
7. **Quantity is an OLX lie — made honest (Nabhan's question)**: real OLX has NO quantity (one ad = one physical item; no cart in classic OLX either — buyers chat with sellers). The quantity control exists ONLY because the portal rubric demands "add, update quantity, remove". Consequence fixed: a cart line with qty 2 used to send the same listing id TWICE to `/api/checkout` — now `Cart.jsx` dedupes (`[...new Set(ids)]`), so checkout sells each unique ad exactly once (probed: duplicate ids → purchased=1, uniqueIds=1). Exam line: "Quantity lives in the cart as a rubric-required e-commerce primitive; checkout treats each ad as a unique one-off — the isSold flag, not stock, is the real OLX model."

## Additions from Nabhan's UX doubts (2 Nov)
- **Auth cross-links** (Login ↔ Register had none; dead text only): Login gets a `<Link to="/register">Register`, Register gets `<Link to="/login">Log in`. Browser-verified both directions.
- **DELETE listing** (portal only demands add/update — added as a beyond-rubric completeness feature when Nabhan asked "where is the remove button?"): `DELETE /api/products/:id` + `deleteProduct` thunk + Delete button on Sell rows (refetches public listing so a deleted unsold ad disappears there too). Full status family probed: own → 200, not-mine → 403, junk id → 400, missing → 404; browser: row count 6 → 5 live. Exam line: **"DELETE mirrors PUT's ownership check — 404 when the doc doesn't exist, 403 when it exists but isn't yours; that symmetry is the whole authorization story."**

## Review pass 3 — four more UX fixes (2 Nov, browser-verified)
- **Register → Login email prefill**: success navigates with `navigate('/login', { state: { email } })`; Login reads `useLocation().state.email` as a RHF `defaultValues` — the email is typed once, never twice. Say-line: **"Location state is hand-off data between two routed screens — it survives one navigation, not a refresh, which is the right lifetime for a prefill."** (Verified: registered prefill-probe@olx.com → Login showed it prefilled.)
- **Visitor affordance on cards**: logged-out users see "Log in to add to cart" as a link on every product card instead of dead cards. Say-line: **"If you can't act on a screen, the screen must say why and show the way — affordances don't get to be invisible."**
- **Honest empty-state**: `Products.jsx` renders two different messages — "No products match your filters." (filter result) vs "No products yet. Sell something!" (DB empty). Say-line: **"Empty states must name their cause — same blank screen, two different reasons, two different messages."** (Verified: 900000+ filter → filters message; Clear → items back.)
- **Two-click delete**: first click ARMS (label flips to "Sure?"), second click confirms; `finally` always disarms. Say-line: **"Destructive actions get friction — the first click changes state on purpose, only the second commits."** (Verified: DOM showed "Sure?" after arm; confirm removed the target row — via CSS selector clicks, since snapshot refs go stale on re-render.)

Not fixed (known limits — say them as decisions): cart price is a snapshot (add-time price), `−` at qty 1 does nothing silently, no un-sell (fresh demo = list a new item or reset DB).

## The one-sentence architecture (say this first in the exam)
"Express + MongoDB API exposes auth/products/checkout; React + Redux Toolkit consumes it — one store with auth, products, cart, checkout slices; async work via createAsyncThunk; forms via React Hook Form; errors handled by middleware on both sides and an Error Boundary in React."

## Backend — `olx-backend/`
| File | What it is | Say in exam |
|---|---|---|
| `server.js` | Express entry: json parser → CORS → routes → notFound → errorHandler → listen. | "Middlewares stack top-to-bottom; error middleware is LAST." |
| `config/db.js` | `mongoose.connect(MONGO_URL)` once at boot. | "DB connected before the server accepts requests." |
| `models/User.js` | email unique + password; **pre-save hook** bcrypt-hashes. | "Password never stored raw; hashing lives in one place." |
| `models/Product.js` | title/description/price/category/image + `seller` ref + `isSold` flag. | "isSold is the flag that hides sold items from listings." |
| `routes/authRoutes.js` | POST register (201), POST login → `jwt.sign({id,email}, secret, {expiresIn:'1d'})`. | "JWT = header.payload.signature; payload holds claims; signature prevents forgery." |
| `routes/productRoutes.js` | GET `/` unsold + filters (query params), GET `/mine` (ALL own listings, sold included → UI shows SOLD badge), POST `/` (auth, 201), PUT `/:id` (auth + **ownership → 403**), DELETE `/:id` (auth + ownership; 200 own / 403 not-yours / 404 missing — deletedObj by id). | "401 = not authenticated; 403 = authenticated but not allowed; 404 = no such doc. DELETE completes CRUD." |
| `routes/checkoutRoutes.js` | POST `/api/checkout` → `updateMany` $in ids, isSold false→true. | "Marks products sold; listing endpoint filters isSold:false so they disappear." |
| `middleware/authMiddleware.js` | verifies `Bearer` token, attaches `req.user`. | "Authentication middleware guards protected routes." |
| `middleware/errorMiddleware.js` | catches everything → structured JSON + proper status (400 validation, 401 JWT, 500 default). | "Centralized error handling = one response shape everywhere." |
| `.env` | PORT 5000 · MONGO_URL mongodb://127.0.0.1:27017/olx · JWT_SECRET. | "Secrets live in .env, never in code." |

## Frontend — `olx-frontend/src/`
| File | What it is | Say in exam |
|---|---|---|
| `main.jsx` | **StrictMode + ErrorBoundary + Provider + BrowserRouter** — the four wrappers. | "Provider injects the store into React's tree." |
| `store.js` | `configureStore({reducer:{auth,products,cart,checkout}})` — **the single source of truth**. | "One store = all global state; each reducer owns a slice." |
| `slices/authSlice.js` | login/register as asyncThunks; extraReducers set loading/error; login persists token+user to localStorage. | "Async actions go through thunks; Redux state is memory — refresh survives via localStorage." |
| `slices/productsSlice.js` | fetchProducts (filters→query params), fetchMine, createProduct, updateProduct + loading/error flags. | "Server-side filtering via query parameters." |
| `slices/cartSlice.js` | PURE reducers: addItem (dedupe+qty), updateQty (min 1), removeItem, clearCart; extraReducers — `logout.fulfilled` wipes the cart (no cross-user leak). | "Cart is client state; reducers are pure functions. Logout resets private slices — one user's cart must never leak to the next. And: real OLX has no quantity at all — this control exists only because the portal rubric demands it; checkout treats each ad as a unique one-off (`isSold`, not stock)." |
| `slices/checkoutSlice.js` | checkout thunk + status: idle/loading/succeeded/failed + error; logout returns it to idle (no "Checkout done" leak). | "Checkout status states live in Redux, per portal." |
| `api.js` | ONE axios instance; interceptor adds `Authorization: Bearer <token>` to every request. | "Interceptors centralize the token header." |
| `components/ErrorBoundary.jsx` | CLASS component; getDerivedStateFromError + componentDidCatch + fallback UI. | "The one thing function components can't do; doesn't catch event-handler or async(thunk) errors." |
| `components/ProtectedRoute.jsx` | token? `<Outlet/>` : Navigate to /login. | "Route guards in the router layer." |
| `components/Layout.jsx` | navbar READS user + cart count from store (no props from pages!) + logout. | "Two components sharing global state without prop drilling." |
| `pages/Login.jsx` / `Register.jsx` | RHF: register() + handleSubmit + errors; login unlocks Sell/Cart; **logged-in users can't see /login again**. | "RHF manages form state; validation errors come from rules." |
| `pages/Products.jsx` | reads store; filter inputs are local useState (results go to store); Add to cart dispatches. | "Ephemeral input state is local; shared result state is global." |
| `pages/Sell.jsx` | THE RHF page: required fields, price>0 number, description minLength 10, image URL pattern; Edit prefills via reset() → PUT. | "Portal g: validations + add-or-update on one form." |
| `pages/Cart.jsx` | qty +/−, remove, total; Checkout → unwrap → deduped ids (`[...new Set]`) → remove only `purchasedIds` + refetch → success/failure text (no JS alerts). | "After checkout, sold items vanish because listing filters isSold." |
| ⭐ quantity-vs-OLX say-line (Nabhan's question — teach it AT the Cart page) | Real OLX has NO quantity — one ad = one physical item, and classic OLX has no cart at all (buyers chat with sellers). Quantity exists here ONLY because the portal rubric demands "add, update quantity, remove (cart state in Redux)"; checkout still sells each ad exactly once — deduped ids, `isSold` flag. | "Quantity is a rubric-required e-commerce primitive; the `isSold` flag — not stock counting — is the real OLX model." |

## M14 carry-overs — kill these in the teach phase
- **`useContext` ⭐**: full Context-vs-Redux capsule Tue (why Redux wins at scale: consumer re-renders, no tooling, no flow discipline).
- **`useLayoutEffect` ⭐**: capsule Tue, tied to StrictMode double-render (main.jsx shows StrictMode live).
- "What is a store?" / "global state management": answered by store.js row above — memorize the say-lines.

## Known limits (be ready to name them like strengths)
- No refresh tokens (single 1d access token; say: "production would add refresh-token rotation, pendings topic").
- No pagination; filters are category + price range (q param exists on backend but unused in UI).
- Cart not persisted to backend (portal marks it optional) and not persisted across refresh.
- Zustand/MobX are teaching capsules, not in this project (portal asks concepts only).
