var restify = require('restify');
var plugins = require('restify-plugins');
var server = restify.createServer();


var users = {};
var max_user_id = 0;

server.use(plugins .acceptParser(server.acceptable));
server.use(plugins.bodyParser());

server.get("/", function(req,res,next){
    res.setHeader('content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(users));
    return next();
});

server.get("/user/:id", function(req,res,next){
    res.setHeader('content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(users[parseInt(req.params.id)]));
    return next();
});

server.put("/user/:id", function(req,res,next){
    var user = users[req.params.id];
    var updates = req.params;
    for (var field in updates){
        user[field] = updates[field];
    }
    res.setHeader('content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(user));
    return next();
});

server.post("/user", function(req,res,next){
    var user = req.params;
    max_user_id++;
    user.id = max_user_id;
    users[user.id] = user;
    res.setHeader('content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(user));
    return next();
});


server.del("/user/:id", function(req,res,next){
    delete users[parseInt(req.params.id)];
    res.setHeader('content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(true));
    return next();
});


// function respond(req, res, next) {
//   res.send('hi ' + req.params.name);
//   next();
// }


// server.get('/hello/:name', respond);
// server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});