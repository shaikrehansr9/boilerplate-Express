const express = require('express');
const app = express();
const path = require('path'); // Required to work with file paths


app.get('/', (req, res) => {
  const absolutePath = path.join(__dirname, 'views', 'index.html'); // Calculate the absolute path
  res.sendFile(absolutePath); // Send the file as a response
});
