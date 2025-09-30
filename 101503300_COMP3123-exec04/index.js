const express = require("express");
const app = express();

// parse JSON bodies
app.use(express.json());

// ✅ Serve static files from /public (so /instruction.html works)
app.use(express.static("public"));

// GET /hello -> "Hello Express JS"
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=&lastname= (defaults to "Pritesh" "Patel")
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Pritesh";
  const lastname = req.query.lastname || "Patel";
  res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// POST /users  (expects an array of { firstname, lastname } in body)
app.post("/users", (req, res) => {
  const body = req.body;
  if (!Array.isArray(body)) {
    return res.status(400).json({ error: "Body must be an array of users" });
  }
  // Optionally validate each item has the two keys (not strictly required by assignment)
  const users = body.map(u => ({
    firstname: u?.firstname ?? "Pritesh",
    lastname: u?.lastname ?? "Patel",
  }));
  res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
