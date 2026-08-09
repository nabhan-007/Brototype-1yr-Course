# User Management Web Application

A full-stack web application built with **Node.js, Express, MongoDB, and EJS** that implements authentication, sessions, and admin-driven CRUD operations on user data.

## Features

### User Application

- Signup with password hashing (`bcrypt`, 10 salt rounds)
- Login with credential validation against MongoDB
- Session-based authentication (`express-session`)
- Logout with `nocache()` back-button protection
- Deleted-account guard: sessions of removed users are destroyed mid-request

### Admin Panel

- Admin login with validation against a separate `admins` collection
- View all users, **search by email** using MongoDB `$regex` (case-insensitive)
- **Create** users with duplicate-email rejection
- **Edit** users (email, optional password reset — blank keeps current)
- **Delete** users with browser confirmation
- Session-protected routes via custom middleware (`checkSession`, `isLogin`)

## Tech Stack

| Layer            | Technology                                                |
| ---------------- | --------------------------------------------------------- |
| Server           | Express 5                                                 |
| Database         | MongoDB via Mongoose                                      |
| View engine      | EJS                                                       |
| Sessions         | express-session                                           |
| Password hashing | bcrypt                                                    |
| Security         | nocache (back-button block), env-based secrets via dotenv |
| Dev tooling      | nodemon                                                   |

## Project Structure

```
Task/
├── server.js            # Entry point — middleware + route mounting
├── db/connectDB.js      # Mongoose connection
├── models/              # Mongoose schemas (user, admin)
├── services/            # Business logic (UserService, AdminService classes)
├── controllers/         # HTTP handlers (UserController, AdminController classes)
├── middlewares/         # auth, adminAuth, logger, errorHandler
├── routes/              # Express routers (user, admin)
├── views/               # EJS templates (user/, admin/)
├── public/styles/       # Shared stylesheet
└── scripts/createAdmin.js  # Admin seeding utility
```

## Getting Started

1. Install dependencies:

   ```shell
   npm install
   ```

2. Create a `.env` file (see `.env` for the expected keys):

   ```
   PORT=3007
   SESSION_SECRET=change_me_to_something_long
   MONGO_URI=mongodb://localhost:27017/authUsers
   ```

3. Seed an admin account (defaults: `admin@test.com` / `admin123`):

   ```shell
   npm run seed-admin
   ```

4. Start the server:

   ```shell
   npm run dev
   ```

5. Visit:
   - User app: `http://localhost:3007/user/register`
   - Admin panel: `http://localhost:3007/admin/login`

## Short Description

Built a web application using Node.js, Express, and MongoDB, implementing CRUD operations and incorporating all previously learned concepts — authentication & authorization with role-based access, Express Router for organized routing, middleware for logging/auth/error handling, a clean Routes → Controllers → Services → Models structure, and ES6 classes for modular, scalable code.

## Tutorials Followed

- Senior reference project: `Learnings/FromSeniors/M11-Project-Abhin`
- Express docs: https://expressjs.com
- Mongoose docs: https://mongoosejs.com/docs
- Node.js docs: https://nodejs.org/docs/latest/api/
