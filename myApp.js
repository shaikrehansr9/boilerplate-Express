const express = require('express');
const app = express;
const path = require('path');
require('dotenv').config();


app.use('/public', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  // Calculate the absolute path
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Send the file as a response
});
app.get("/json", (req, res) => {
  let response = "Hello json";

  // Check environment variable
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = response.toUpperCase();
  }
  res.json({ message: response }); // Must use key: "message"
});
module.exports = app;