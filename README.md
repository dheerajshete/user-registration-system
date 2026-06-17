📌 User Registration System

A simple full-stack project where users can submit their details through a form and the data is stored in a MySQL database using a Node.js backend.

🚀 Features
Simple user registration form
Sends data from frontend to backend using fetch API
Stores user data in MySQL database
Built with Express.js server
Basic full-stack project (Frontend + Backend + Database)
🛠️ Tech Stack
HTML
CSS
JavaScript
Node.js
Express.js
MySQL
📂 Project Structure
user-registration-system/
│
├── index.html        # Frontend UI
├── main.css          # Styling
├── text.js           # Backend server (Node.js + Express)
├── package.json      # Dependencies
└── package-lock.json
⚙️ How it works
User fills the form (name + email)
Frontend sends data to backend using fetch API
Node.js server receives data
Data is inserted into MySQL database
Data is stored permanently in table
▶️ How to Run Locally
Install dependencies:
npm install
Start server:
node text.js
Open index.html in browser
📊 Database Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);
👨‍💻 Author

Dheeraj Shete

📌 Note

This is a beginner full-stack project made for learning how frontend, backend, and database work together.
