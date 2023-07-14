let dotenv = require('dotenv').config()

const mongoose = require('mongoose')

const dburl = process.env.MONGODB_URI


let conn = mongoose.connect(
  dburl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
conn ? console.log("connection from conn.js") : console.log("not connected")





// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/loginpage_project";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// } );