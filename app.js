//this creates the express app and tells NODE to use it
const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const app = express();
const data = require("./data.js");

//this tells the browser to use PORT 3003
app.listen(3003, function () {
  console.log('Deez nutz');
})

//this sets up mustache to run as an engine for our code
app.engine('mustache', mustacheExpress());
app.set('views', './public/views')
app.set('view engine', 'mustache')

// this tells the app to use the files in the PUBLIC folder
app.use(express.static('public'));

//this sends my INDEX.HTML page to the browser
app.get('/', function(req, res) {
    res.render("index", data)
})




