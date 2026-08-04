const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Home" }));
  } else if (req.url === "/html") {
    fs.readFile(
      path.join(__dirname, "views", "index.html"),
      "utf8",
      (err, data) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      },
    );
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "About" }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

const PORT = process.env.PORT || 3690;
server.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}/`),
);
