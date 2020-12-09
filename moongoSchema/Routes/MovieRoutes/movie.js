var express = require('express')
var app = express()

app.get('/movies', function (req, res, next) {
    // res.send('GET request to the homepage')
    try {
        
    } catch (error) {
        res.send("Something went wrong while fetching movies")
    }
  })
  
//   // POST method route
//   app.post('/login', function (req, res) {
//     res.send('POST request to the homepage')
//   })