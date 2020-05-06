"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
router.post('/login', function (req, res) {
    res.send('login Success');
});
module.exports = router;
