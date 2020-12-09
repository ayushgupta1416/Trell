const express = require('express');
const bodyParser = require('body-Parser');
const mongoose = require('mongose');
const AdminRoute = require("./moongoSchema/Routes/AdminRoute.")
const MovieRoutes = require("./moongoSchema/Routes/MoviesRoute.")
const MongoClient = require('mongodb').MongoClient;

const app = express();


const uri = "mongodb+srv://Trell:Trell@cluster0.uwjyt.mongodb.net/Trell?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.post("/adminLogin",AdminRoute)
app.post("/adminsinup",AdminRoute)
app.get("getMovies",MovieRoutes)
app.post("addMovie",MovieRoutes)


const PORT = 3000

app.listen(PORT, () => {
  console.log(`app is listening to PORT ${PORT}`)
})