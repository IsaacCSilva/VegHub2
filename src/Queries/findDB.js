
import React, { Component } from 'react';


var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var MongoUserName = "kimwilsonngo";
var MongoPSWD = "12345";
var url = "mongodb+srv://kimwilsonngo:12345@veghubclusteralpha-bem9t.mongodb.net/test?retryWrites=true";

//prints out the first user in the data set
export class findFirst1 extends Component
{

  findFirst=()=>
  {
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    dbo.collection("users").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
    });
  });
  }

}
/*
//gets all users and their info from the user table
export class getAllUsers extends Component
{
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    dbo.collection("users").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}

export class getAllPlants extends Component
{
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    dbo.collection("plants").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}

//gets the userID for the passed user, verified by username and email
//https://docs.mongodb.com/manual/reference/method/ObjectId/
export class getUserID extends Component
{

    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("veg_users");
    dbo.collection("users").findOne({"name":username,"email":email}, function(err, result) {
      if (err) throw err;
      print((String(result._id)));
      return result._id.valueOf;
      db.close();
    });
  });
}
*/



