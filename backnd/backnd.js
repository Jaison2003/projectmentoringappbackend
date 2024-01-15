const express = require('express');
const bodyParser = require('body-parser');

const backnd = express();
const port = 3000; // Choose a port number

// Middleware to parse JSON data
backnd.use(bodyParser.json());

// Serve static files from the Angular app (assuming Angular files are in the 'dist' directory)
backnd.use(express.static('dist'));

// Handle POST request for login
backnd.post('/login', (req, res) => {
  // Assuming you have a user authentication logic here
  const { email, password } = req.body;

  // Implement your authentication logic here
  // For example, check the email and password against a database

  // Dummy authentication (replace this with your actual authentication logic)
  if (email === 'user@example.com' && password === 'password') {
    res.status(200).json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Start the server
backnd.listen(port, () => {
  console.log("Server is running on http:localhost:3000");
});