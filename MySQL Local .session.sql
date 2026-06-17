CREATE DATABASE practice_db;
USE practice_db;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);
TRUNCATE TABLE users;
INSERT INTO users(name, email)
VALUES ('Dheeraj', 'dheeraj@gmail.com');
SELECT * FROM users;