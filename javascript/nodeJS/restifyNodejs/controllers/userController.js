var helper = require('../config/helperFunction.js');
var UserModel = require('../models/UserModel.js');
var users = {};
var max_user_id = 0;

module.exports = function(server){
    server.get("/", function(req,res,next){
        helper.success(res, next, users);
    });
    
    server.get("/user/:id", function(req,res,next){
        req.assert('id', 'id is required and must be int').notEmpty().isInt();
        var errors = req.validationErrors();
        if (errors){
            helper.failure(res, next, errors[0], '400');
        }
        else if(typeof(users[req.params.id]) === 'undefined'){
            helper.failure(res, next ,"specified user not found in DB", '404');
        }
        else
        helper.success(res, next, users[parseInt(req.params.id)]);
    });
    
    server.put("/user/:id", function(req,res,next){
        req.assert('id', 'id must be valid').notEmpty().isInt();
        var errors = req.validationErrors();
        if (errors){
            helper.failure(res, next, errors[0], '400');
        }
        else if(typeof(users[req.params.id]) === 'undefined'){
            helper.failure(res, next ,"specified user not found in DB", '404');
        }
        else{
        var user = users[req.params.id];
        var updates = req.params;
        for (var field in updates){
            user[field] = updates[field];
        }
        helper.success(res, next, user);}
    });
    
    server.post("/user", function(req,res,next){
        req.assert('name', 'name is required and must be string').notEmpty();
        req.assert('email', 'sex is required and must be email').notEmpty().isEmail();
        req.assert('age', 'age is required and must be int').notEmpty().isInt();
        req.assert('career', 'career is required and must be IT/Student/Doctor').isIn(['IT','Student','Doctor']);
        var errors = req.validationErrors();
        if (errors){
            helper.failure(res, next, errors, '400');
        }
        else{
            var user = new UserModel();
            user.name = req.params.name;
            user.email = req.params.email;
            user.age = req.params.age;
            user.career = req.params.career;
            user.save(function(err){
                if (err){
                helper.failure(res, next, 'error saving to mongo', '500');}
            });
        helper.success(res, next, user);}
    });
    
    
    server.del("/user/:id", function(req,res,next){
        req.assert('id', 'id must be valid').notEmpty().isInt();
        var errors = req.validationErrors();
        if (errors){
            helper.failure(res, next, errors[0], '400');
        }
        else if(typeof(users[req.params.id]) === 'undefined'){
            helper.failure(res, next ,"specified user not found in DB", '404');
        }
        else{
        delete users[parseInt(req.params.id)];
        helper.success(res, next, []);}
    });
}