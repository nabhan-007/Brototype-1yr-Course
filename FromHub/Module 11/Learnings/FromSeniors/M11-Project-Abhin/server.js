const express = require("express");
const app = express();
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const path = require("path");
const connectDB = require("./db/connectDB");
const session = require("express-session");
const nocache = require("nocache");

connectDB();

app.use(nocache());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "this_is_my_secret",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
  }),
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
  console.log("The server is running...");
});
