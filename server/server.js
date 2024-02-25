const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Viraj_2000',
  database: 'ud',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.post('/saveUsername', (req, res) => {
  const { username } = req.body;

  pool.query('INSERT INTO users (username) VALUES (?)', [username], (err, result) => {
    if (err) {
      console.log('Error inserting data into the database:', err);
      res.json({ success: false, error: err.message });
    } else {
      console.log('Data inserted into the database');
      res.json({ success: true });
    }
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
