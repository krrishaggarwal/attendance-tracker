// index.js
const express = require('express');
const mysql = require('mysql'); // For MySQL. For SQLite, use sqlite3.
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection (MySQL example)
// Database connection (MySQL example)
const db = mysql.createConnection({
  host: process.env.DB_HOST,       // Set in Railway's environment
  user: process.env.DB_USER,       // Set in Railway's environment
  password: process.env.DB_PASSWORD, // Set in Railway's environment
  database: process.env.DB_NAME     // Set in Railway's environment
});

db.connect(err => {
  if (err) throw err;
  console.log('Database connected!');
});


// Create table if not exists
const createTableQuery = `
CREATE TABLE IF NOT EXISTS attendance (
  id INT AUTO_INCREMENT PRIMARY KEY,
  date DATE NOT NULL,
  className VARCHAR(100) NOT NULL,
  status VARCHAR(10) NOT NULL
)`;
db.query(createTableQuery, (err) => {
  if (err) throw err;
  console.log("Attendance table ensured");
});

// Routes
app.post('/attendance', (req, res) => {
  const { date, className, status } = req.body;
  const query = 'INSERT INTO attendance (date, className, status) VALUES (?, ?, ?)';
  db.query(query, [date, className, status], (err, result) => {
    if (err) throw err;
    res.send('Attendance record added');
  });
});

app.get('/attendance', (req, res) => {
  const query = 'SELECT * FROM attendance';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(8080, () => {
  console.log('Server running on // index.js
const express = require('express');
const mysql = require('mysql'); // For MySQL. For SQLite, use sqlite3.
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection (MySQL example)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', // Replace with your MySQL password
  database: 'attendance_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('Database connected!');
});

// Create table if not exists
const createTableQuery = `
CREATE TABLE IF NOT EXISTS attendance (
  id INT AUTO_INCREMENT PRIMARY KEY,
  date DATE NOT NULL,
  className VARCHAR(100) NOT NULL,
  status VARCHAR(10) NOT NULL
)`;
db.query(createTableQuery, (err) => {
  if (err) throw err;
  console.log("Attendance table ensured");
});

// Routes
app.post('/attendance', (req, res) => {
  const { date, className, status } = req.body;
  const query = 'INSERT INTO attendance (date, className, status) VALUES (?, ?, ?)';
  db.query(query, [date, className, status], (err, result) => {
    if (err) throw err;
    res.send('Attendance record added');
  });
});

app.get('/attendance', (req, res) => {
  const query = 'SELECT * FROM attendance';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const PORT = process.env.PORT || 8080; // Railway provides PORT, default to 3000 for local dev

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

});');
});
