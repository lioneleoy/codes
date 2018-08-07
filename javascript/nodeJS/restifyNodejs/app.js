var restify = require('restify');
var plugins = require('restify-plugins');
var validator = require('restify-validator');
var server = restify.createServer();
var setupController = require('./controllers/setupController.js');
var userController = require('./controllers/userController.js');
var config =require('./config/dbConnection.js'); 
var mongoose = require('mongoose');

mongoose.connect(config.getMongoConnection() );
setupController(server, restify, validator);
userController(server);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});