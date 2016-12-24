"use strict";
var express = require("express");
var fs = require("fs");
var path = require("path");
var rootContextPath = '/api';
var app = express();
var port = process.env.PORT || 3000;
var controllerPath = path.join(__dirname, 'controllers');
var controllerNames = fs.readdirSync(controllerPath)
    .filter(function (f) { return fs.statSync(path.join(controllerPath, f)).isDirectory(); });
app.use(function (req, res, next) {
    console.log("access:" + req.path);
    next();
});
controllerNames.forEach(function (controllerName) {
    var controllerObj = require(path.join(controllerPath, controllerName));
    if (controllerObj) {
        var router = controllerObj[controllerName];
        if (router) {
            app.use(rootContextPath + "/" + controllerName, router);
            console.log("controller:[" + controllerName + "] is loaded.");
        }
    }
});
app.listen(port, function () {
    console.log("...Listening at http://localhost:" + port + "/");
});
