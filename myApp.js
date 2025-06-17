let express = require('express');
let app = express();
console.log("Hello World");

app.get("/", (req, res) => {
  const absolutePath = path.join(__dirname, "views", "index.html");
  console.log("Serving file from:", absolutePath); // Debugging
  res.sendFile(absolutePath);
});




































 module.exports = app;
