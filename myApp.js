let express = require('express');

let app = express.Router();
// console.log("Hello World");

// app.get("/", (req, res) => {
//   const absolutePath = path.join(__dirname, "views/index.html");
//   console.log("Received GET request for /");
//   console.log("Serving file from:", absolutePath);
//   res.sendFile(absolutePath, (err) => {
//     if (err) {
//       console.error("Error sending file:", err);
//     } else {
//       console.log("File sent successfully!");
//     }
//   });
// 
//  module.exports = app;

const path = require('path'); // Import the path module

app.get('/', (req, res) => {
  const absolutePath = path.join(__dirname, 'views', 'index.html'); // Calculate the absolute path
  res.sendFile(absolutePath); // Send the file as a response
});
