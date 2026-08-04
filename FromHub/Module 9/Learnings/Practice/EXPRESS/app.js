// ============================================================
//  Simple Express App
//  Run with:  npm run dev   (or: node app)
// ============================================================

// 1. Import the packages we need
const express = require("express");
const path = require("path");

// 2. Create the Express app
const app = express();

// 3. Middleware — these run on EVERY request, in order

//    Read JSON data sent in the request body (e.g. from fetch/AJAX)
app.use(express.json());

//    Read form data sent in the request body (e.g. from a <form>)
app.use(express.urlencoded({ extended: true }));

//    Serve static files (css, images, js) from the "public" folder.
//    Example: public/style.css is available at http://localhost:3690/style.css
app.use(express.static(path.join(__dirname, "public")));

// ============================================================
//  Routes — what the server does for each URL
// ============================================================

// Home page -> show the login form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// A simple route that sends plain HTML text
app.get("/direct", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Login check — the form sends email & password here using POST
app.post("/login", (req, res) => {
  // Get the email and password the user typed
  const { email, password } = req.body;

  // Check if they match our hard-coded values
  if (email === "123@gmail.com" && password === "123") {
    res.sendFile(path.join(__dirname, "views", "hello-world.html"));
  } else {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  }
});

// Catch-all handler: if no route above matched, show the 404 page.
// IMPORTANT: this must be the LAST thing, after all other routes.
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// ============================================================
//  Start the server
// ============================================================
const PORT = process.env.PORT || 3690;

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}/`);
});
