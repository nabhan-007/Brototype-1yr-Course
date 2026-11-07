# RUN.md — How to run the OLX clone (MERN + Redux)

Stack: Express + MongoDB (local) backend · Vite + React + Redux Toolkit frontend.
Windows instructions — same idea on Mac/Linux, different paths.

## Fastest way (after the one-time setup below)
Double-click **`start-olx.bat`** inside the OLX folder — starts whatever is down (Mongo → backend → frontend), skips what's already running, waits, and verifies with a live API count. Fresh demo data on top: `node seed.js` from `olx-backend` (or `powershell -NoProfile -ExecutionPolicy Bypass -File start-olx.ps1 -Seed`).

## 0. One-time prerequisites
- **Node.js 18+** — `node -v` should print a version.
- **MongoDB Community, installed locally** — the module's way is a local `mongod`, not Atlas. Note the version folder for step 1 (e.g. `C:\Program Files\MongoDB\Server\8.3\bin\mongod.exe` — yours may differ).
- Backend deps: `cd olx-backend` → `npm install`
- Frontend deps: `cd olx-frontend` → `npm install`
- Create `olx-backend\.env` with exactly these 3 keys:
  ```
  PORT=5000
  MONGO_URL=mongodb://127.0.0.1:27017/olx
  JWT_SECRET=any-long-random-string-you-like
  ```

## Quick check: is it already running?
Open http://localhost:5173 — if the OLX page loads with products, the stack is up. Stop here.

## 1. Start MongoDB (terminal 1 — keep it open)
Make a data folder once (Mongo's default spot works fine):
```powershell
New-Item -ItemType Directory -Force C:\data\db
```
Then start it (adjust the version number to your install):
```powershell
& 'C:\Program Files\MongoDB\Server\8.3\bin\mongod.exe' --dbpath C:\data\db --port 27017
```
The prompt "freezing" without new output = normal, it's running in the foreground.

## 2. Start the backend (terminal 2 — keep it open)
```powershell
cd olx-backend
npm start
```
Good sign: it says it's listening on port 5000. `ECONNREFUSED 127.0.0.1:27017` = Mongo isn't up yet → redo step 1.

## 3. Start the frontend (terminal 3 — keep it open)
```powershell
cd olx-frontend
npm run dev
```
Good sign: `Local: http://localhost:5173/` — open it in the browser.

## 4. Demo data (optional, from the backend folder)
```powershell
node seed.js
```
- Creates two ready accounts if they don't exist + wipes/re-inserts the listings.
- Login: `demo@olx.com` / `demo123` and `testuser@olx.com` / `test123` — or just register your own account on the site.
- Demo gets 6 listings (5 live + 1 SOLD badge), test gets 5 (4 live + 1 SOLD).
- Safe to re-run anytime — it only touches products, never accounts.

## Where does data live? (why the cart empties but products don't)
- **Products/accounts**: MongoDB on disk (the `--dbpath` folder) — they **survive** PC restarts. If everything looks empty after a restart, a *different* dbpath was used (empty folder = empty-looking DB), or someone ran `node seed.js` (wipes products on purpose).
- **Cart**: Redux store = **in-memory only** — resets on every page reload/restart. Login survives because the JWT token is kept in `localStorage`, not in the store. Making the cart survive would be a deliberate feature (localStorage sync or a backend cart collection) — we intentionally skipped it.
- **Rule of thumb**: database = disk = survives; Redux store = RAM = dies with the page.

## If something breaks
| Symptom | Cause → fix |
|---|---|
| Backend: ECONNREFUSED :27017 | Mongo down → step 1 |
| Frontend loads, "Network error" on products | Backend down → step 2 |
| Port already in use | That service is ALREADY running — skip that step |
| Whole PC was rebooted | Run steps 1→2→3 again, in that order |

Order matters: **Mongo → backend → frontend.** Closing a terminal window stops that service.
