let express = require('express');
let path=require('path');
let app = express.Router();
console.log("Hello World");

app.get("/", (req, res) => {
  const absolutePath = path.join(__dirname, "views/index.html");
  console.log("Received GET request for /");
  console.log("Serving file from:", absolutePath);
  res.sendFile(absolutePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("File sent successfully!");
    }
  });
});





































 module.exports = app;
