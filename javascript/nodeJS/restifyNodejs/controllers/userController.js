var helper = require('../config/helperFunction.js');
var UserModel = require('../models/UserModel.js');


module.exports = function(server){
    server.get("/", function(req,res,next){
        UserModel.find({}, function (err, users) {
            helper.success(res, next, users);
          });
    });
    
    server.get("/user/:id", function(req,res,next){
        req.assert('id', 'id is required and must be int').notEmpty();
        var errors = req.validationErrors();
        if (errors){
            helper.failure(res, next, errors[0], '400');
        }
        else
        UserModel.findOne({_id: req.params.id}, function (err, user) {
            if (err){
                helper.failure(res, next, 'internal error', '500');
            }
            if (user === null){
                helper.failure(res, next, 'user could not be found', '404');
            }
            helper.success(res, next, user);
          });
    });
    
    server.put("/user/:id", function(req,res,next){
        req.assert('id', 'id must be valid').notEmpty();
        var errors = req.validationErrors();
        if (errors){
            helper.failure(res, next, errors[0], '400');
        }
        else{
            UserModel.findOne({_id: req.params.id}, function (err, user) {
                if (err){
                    helper.failure(res, next, 'internal error', '500');
                }
                if (user === null){
                    helper.failure(res, next, 'user could not be found', '404');
                }
        var updates = req.params;
        delete updates.id;
        for (var field in updates){
            user[field] = updates[field];
        }
        user.save(function(err){
            if (err){
            helper.failure(res, next, 'error saving to mongo', '500');}
        });
        helper.success(res, next, user);});
    }});
 
    
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
        req.assert('id', 'id must be valid').notEmpty();
        var errors = req.validationErrors();
        if (errors){
            helper.failure(res, next, errors[0], '400');
        }
        else{
            UserModel.findOne({_id: req.params.id}, function (err, user) {
                if (err){
                    helper.failure(res, next, 'internal error', '500');
                }
                if (user === null){
                    helper.failure(res, next, 'user could not be found', '404');
                }
            });
            user.remove(function(err){
                if (err){
                helper.failure(res, next, 'error saving to mongo', '500');}
            });
            helper.success(res, next, user);
        }});
}