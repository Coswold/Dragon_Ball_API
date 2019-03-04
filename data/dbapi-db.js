/* Mongoose Connection */
const mongoose = require("mongoose");
assert = require("assert");

const url = process.env.MONGOLAB_ORANGE_URI || 'mongodb://localhost/dbapi-db';
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/dbapi-db",
  { useNewUrlParser: true },
  function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to database");

    // db.close(); turn on for testing
  }
);
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);

module.exports = mongoose.connection;
