"use strict";
const express = require("express");
const controllers_1 = require("./controllers");
const app = express();
const port = process.env.PORT || 3000;
app.use('/welcome', controllers_1.WelcomeController);
app.listen(port, () => {
    console.log(`now Listening at http://localhost:${port}/`);
});
