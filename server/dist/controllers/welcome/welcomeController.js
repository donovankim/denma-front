"use strict";
var express_1 = require("express");
var welcomeModel_1 = require("../../models/welcomeModel");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send('Hello, World.');
});
router.get('/:name', function (req, res) {
    var name = req.params.name;
    var welcome = new welcomeModel_1.Welcome({ name: name, adult: true });
    welcome.save();
    res.send("Helo, " + name + ".");
});
exports.welcome = router;
