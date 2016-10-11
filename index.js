var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static("./"));

app.listen(port);

console.log(`Bulletin app running on port ${port}`);
