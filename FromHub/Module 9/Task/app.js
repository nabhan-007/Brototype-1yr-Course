const path = require("path");
const express = require("express");
const session = require("express-session");
const nocache = require("nocache");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Predefined credentials
const VALID_USER = {
  username: process.env.APP_USER,
  password: process.env.APP_PASS,
};

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 60 * 1000 }, // 30 minutes
  }),
);

// Back-button protection: prevent loading pages from cache after logout
app.use(nocache());

// Auth middleware
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  res.redirect("/login");
}

// Routes
app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  );
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  if (req.session && req.session.user) {
    return res.redirect("/home");
  }
  res.render("login", { error: null });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === VALID_USER.username && password === VALID_USER.password) {
    req.session.user = username;
    res.redirect("/home");
  } else {
    res.render("login", { error: "Incorrect username or password" });
  }
});

app.get("/home", isAuthenticated, (req, res) => {
  res.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  );
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  res.render("home", { user: req.session.user });
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.clearCookie("connect.sid"); // clear session cookie
    res.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate",
    );
    res.redirect("/login");
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
