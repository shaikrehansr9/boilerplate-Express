const express = require('express');
const app = express.Router();
const path = require('path'); 

app.use('/public',express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
   // Calculate the absolute path
  res.sendFile(path.join(__dirname,'public','index.html')); // Send the file as a response
});
module.exports = app;