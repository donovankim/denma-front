"use strict";
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send('Hello, World');
});
router.get('/:name', function (req, res) {
    var name = req.params.name;
    res.send("Hello, " + name);
});
exports.welcome = router;
