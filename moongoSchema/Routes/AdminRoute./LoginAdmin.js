var express = require('express')
var app = express()


app.post('/signup', function (req, res) {
    res.send('GET request to the homepage')
  })
  
  // POST method route
  app.post('/login', function (req, res) {
    res.send('POST request to the homepage')
  })