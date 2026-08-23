const http = require("http");

// Create server — callback fires on EVERY request
const server = http.createServer((req, res) => {
  // --- 1. Read the request line ---
  console.log(`Method: ${req.method} | URL: ${req.url}`);

  // --- 2. Manual routing (Express does this for you) ---
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
    return; // always return after responding, else flow continues
  }

  if (req.url === "/api/users" && req.method === "GET") {
    const users = [
      { id: 1, name: "Abhin" },
      { id: 2, name: "Midhun" },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users)); // HTTP only sends strings
    return;
  }

  if (req.url === "/api/users" && req.method === "POST") {
    let body = "";
    // 3. Body arrives in CHUNKS — assemble them
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log("Received:", body);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: true, data: body }));
    });
    return; // response happens later (async), but stop routing now
  }

  // --- 4. 404 fallback ---
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not found");
});

// 5. Start listening
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
