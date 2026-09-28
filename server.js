const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  if (req.url === "/health") return res.end(JSON.stringify({ status: "ok" }));
  if (req.url === "/api/hello") return res.end(JSON.stringify({ message: "Hello from Render API", status: "ok" }));
  res.end(JSON.stringify({ name: "render-demo-api", message: "API is running" }));
});
server.listen(port, "0.0.0.0", () => console.log(`API listening on ${port}`));
