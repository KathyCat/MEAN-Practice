var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kw:kw@mean-nnydw.mongodb.net/test?retryWrites=true&w=majority";


// Get All Tasks
router.get('/tasks', function (req, res, next) {
  MongoClient.connect(uri, function (err, db) {
    var dbo = db.db('test');
    dbo.collection("tasks").find({}).toArray(function (err, tasks) {
      if (err) throw err;
      res.json(tasks);
      db.close();
    });

  });
});


module.exports = router;
