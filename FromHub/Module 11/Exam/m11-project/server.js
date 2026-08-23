const express = require("express");
const session = require("express-session");
const nocache = require("nocache");
const path = require("path");
require("dotenv").config({ quiet: true });
const connectDB = require("./db/connectDB");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

const app = express();
connectDB();

app.use(nocache());
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 1000 * 60 * 60, httpOnly: true }, // 1 hour
  }),
);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.get("/", (req, res) => res.redirect("/user/login"));

app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Server running on: http://localhost:${process.env.PORT}`),
);
