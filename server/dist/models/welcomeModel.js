"use strict";
var database_1 = require("../database");
var mongoose_1 = require("mongoose");
var welcomeSchema = new mongoose_1.Schema({
    name: String,
    adult: Boolean
});
var Welcome = database_1.MongoDB.model("Welcome", welcomeSchema);
exports.Welcome = Welcome;
