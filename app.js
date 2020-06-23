// require dependencies
const express = require('express');


// set up express app
const app = express();
// PORT determined by whether it's live or local
// need this to upload to Heroku
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.urlencoded({ extended: true }));
// body parsing
app.use(express.json());
// route for index.js
app.use(express.static("public"));

// route for index.html
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, function () {
    console.log("Listening on PORT " + PORT);
  });