'use strict';
var express = require('express');
var auth = require('../auth.service');
var User = require('../../api/user/user.model');

var router = express.Router();

router.post('/', function(req, res, next) {

    var user = User.getUser(req.body.email,req.body.password);
    if (!user) {
        res.json(401,{message: 'Wrong user or password'});
        return;
    }
    var token = auth.signToken(user.id);

    res.json({ token: token,id:user.id});

});

module.exports = router;
