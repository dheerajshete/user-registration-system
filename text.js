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


app.get("/", (req, res) => {
    console.log("ROOT HIT");
    res.send("API WORKING");
});
app.post("/user", (req, res) => {
    const { name, email } = req.body;

    db.query(
        "INSERT INTO users(name,email) VALUES (?,?)",
        [name, email],
        (err) => {
            if (err) return res.send("Error");
            res.send("User Saved!");
        }
    );
});
process.on("uncaughtException", (err) => {
  console.log("CRASH:", err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on", PORT);
});
