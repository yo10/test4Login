'use strict';

var User = require('./user.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');
var validationError = function(res, err) {
  return res.json(422, err);
};


exports.index = function(req, res) {

    var userId = req.params.id;
    var user = data.findById(userId);
    if(user) {
        res.json(user);
    }else {
        res.json(401,{message: 'User is not found'});
    }
};




exports.show = function (req, res, next) {

  var userId = req.params.id;
  var user = User.findById(userId);
  if(user) {
      res.json(user);
  }else {
      res.json(401,{message: 'User is not found'});
  }
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};
