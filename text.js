const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@dheeraj@1805",
  database: "practice_db"
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

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
});


