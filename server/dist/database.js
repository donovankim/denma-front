"use strict";
var MongoDB = require("mongoose");
exports.MongoDB = MongoDB;
MongoDB.connect("mongodb://127.0.0.1:27017/test", function () {
    console.log("connected to mongo.");
});
