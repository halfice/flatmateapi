// routes/api/books.js
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var uuid = require('node-uuid');
var async = require('async');
var sql = require("mssql");
var Bids = express.Router();

Bids.get('/:id', (req, res) => res.send('book route testing!'));

Bids.get('/', (req, res) => {

    var userId = req.query.id;
    var db = require("./db");
    var data = [];
    data.push(userId);
    db.GetBids(data, function (err, rows) {
      if (err) {  
      } else if (rows) {
        // Process the rows returned from the database
        res = res.json(rows);
        //console.log('Reapnose is ->'+res);
        return res;
      } else {
        // No rows returns; handle appropriately
      }
    }); //DB.LOG IS END
  





});

Bids.post('/register', (req, res) => {
    var db = require("./db");
    var data = [];
    data=req.body;
    console.log(req);
   
    db.OwnerRegister(data, function (err, rows) {
      if (err) {  
      } else if (rows) {
        // Process the rows returned from the database
        res = res.json(rows);
        //console.log('Reapnose is ->'+res);
        return res;
      } else {
        // No rows returns; handle appropriately
      }
    });
    //console.log('Reapnose is ->'+result);
  
  


});




module.exports = Bids;