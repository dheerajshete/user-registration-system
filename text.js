console.log("🔥 text.js LOADED");
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
console.log("FILE LOADED");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "thomas.proxy.rlwy.net",
  user: "root",
  password: "VxoAgmcneeyPJziNFzEUgKDqHkIPJSAN",
  database: "railway",
  port: 11920,
  ssl: { rejectUnauthorized: false },
  waitForConnections: true,
  connectionLimit: 10
});


app.get("/check", (req, res) => {
    db.query("SHOW COLUMNS FROM users", (err, result) => {
        if (err) {
            return res.send(err.message);
        }
        res.json(result);
    });
});
app.post("/user", (req, res) => {
    console.log("🔥 REQUEST BODY:", req.body);

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send("Missing name or email");
    }

    db.query(
        "INSERT INTO users(name,email) VALUES (?,?)",
        [name, email],
        (err, result) => {
            if (err) {
                console.log("💥 MYSQL ERROR:", err);
                return res.status(500).send(err.message);
            }

            console.log("✅ INSERT SUCCESS");
            res.send("User Saved!");
        }
    );
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on", PORT);
});
