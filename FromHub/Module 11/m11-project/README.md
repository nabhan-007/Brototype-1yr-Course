# M11 — User Management Web App

Users sign up and log in to a personal home page. Admins log in separately and manage those users — view, search, add, edit, delete.

**Stack:** Node.js · Express 5 · MongoDB (Mongoose) · EJS · Bootstrap 5

## Run it in 2 minutes

```shell
npm install
npm run seed-admin     # creates the admin account
npm run seed-users     # optional: adds 25 sample users (handy for testing)
npm run dev            # starts on http://localhost:3007
```

MongoDB must be running locally. Settings live in `.env`:

```
PORT=3007
SESSION_SECRET=some_long_random_string
MONGO_URI=mongodb://localhost:27017/authUsers
```

## Logins

| Who         | Where            | Credentials                                            |
| ----------- | ---------------- | ------------------------------------------------------ |
| Admin       | `/admin/login`   | `admin@test.com` / `admin123` (via seed-admin)         |
| Sample user | `/user/login`    | any seeded email (e.g. `aarav@gmail.com`) / `User@123` |
| New account | `/user/register` | whatever you sign up with                              |

## What each side can do

**User side:** register → login → personal home page → logout.

**Admin side:** dashboard lists every user with pagination → type-to-search (name or email) → add / edit / delete users via Bootstrap pop-ups.

Both sides: session-based auth, back-button protection after logout, green success / red error messages.

## Every route

| Method | Path                     | Does what                         | Who can hit it    |
| ------ | ------------------------ | --------------------------------- | ----------------- |
| GET    | `/user/register`         | Signup page                       | logged-out users  |
| POST   | `/user/register`         | Create account                    | anyone            |
| GET    | `/user/login`            | Login page                        | logged-out users  |
| POST   | `/user/login`            | Log in                            | anyone            |
| GET    | `/user/home`             | Personal home page                | logged-in users   |
| POST   | `/user/logout`           | Log out                           | logged-in users   |
| GET    | `/admin/login`           | Admin login page                  | logged-out admins |
| POST   | `/admin/login`           | Admin log in                      | anyone            |
| GET    | `/admin/dashboard`       | User list (+ `?search=` `?page=`) | admins only       |
| POST   | `/admin/add-user`        | Create a user                     | admins only       |
| POST   | `/admin/edit-user`       | Update name/email/password        | admins only       |
| POST   | `/admin/delete-user/:id` | Delete a user                     | admins only       |
| POST   | `/admin/logout`          | Admin log out                     | admins only       |

Note: everything that changes data is a **POST** — plain GET links stay read-only.

## How a request travels

Open `diagram.excalidraw` for the picture version.

1. **Browser** sends the request.
2. **Middleware** (`server.js`): no-cache headers → logger → session lookup → body parsing.
3. **Routes** match URL + method (`/user/...` or `/admin/...`).
4. **Auth guard** checks the session: allowed through, bounced to login, or redirected home?
5. **Controller** reads the request and calls a service.
6. **Service** holds the real rules: validate input, hash passwords with bcrypt, query the DB.
7. **Model** is the Mongoose schema — what a "user" or "admin" looks like.
8. **MongoDB** stores the data; the response travels back out the same chain.

Each layer has exactly one job — that's why bugs are easy to locate.

## Folder map

```
m11-project/
├── server.js        # wires everything: middleware, sessions, routes
├── db/connectDB.js  # connects to MongoDB
├── routes/          # URL → which controller handles it
├── middlewares/     # doorkeepers: auth guards, logger, error handler
├── controllers/     # read request → call service → send response
├── services/        # the rules: validation, bcrypt hashing, DB queries
├── models/          # Mongoose schemas: what a user/admin looks like
├── utils/           # shared validation helpers
├── views/           # EJS pages (user/, admin/)
├── public/styles/   # stylesheet
└── scripts/         # seed-admin + seed-users helpers
```

## Tech stack

| Layer            | Technology                                                |
| ---------------- | --------------------------------------------------------- |
| Server           | Express 5                                                 |
| Database         | MongoDB via Mongoose                                      |
| View engine      | EJS                                                       |
| UI framework     | Bootstrap 5 (CDN)                                         |
| Sessions         | express-session                                           |
| Password hashing | bcrypt                                                    |
| Security         | nocache (back-button block), env-based secrets via dotenv |
| Dev tooling      | nodemon                                                   |

## Short Description

Built a web application using Node.js, Express, and MongoDB, implementing CRUD operations and incorporating all previously learned concepts — authentication & authorization with role-based access, Express Router for organized routing, middleware for logging/auth/error handling, a clean Routes → Controllers → Services → Models structure, and ES6 classes for modular, scalable code.

## Tutorials Followed

- Senior reference project: `Learnings/FromSeniors/M11-Project-Abhin`
- Express docs: https://expressjs.com
- Mongoose docs: https://mongoosejs.com/docs
- Node.js docs: https://nodejs.org/docs/latest/api/
