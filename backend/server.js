const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000; // frontend runs on 3000

app.use(cors());
app.use(bodyParser.json());

// Dummy login check (can be replaced with real DB)
app.post('/api/login', (req, res) => {
  const { regNumber, password } = req.body;

  if (regNumber === '2020CS001' && password === 'admin123') {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
