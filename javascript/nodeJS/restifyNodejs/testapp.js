function respond(res, next, status, data, http_code){
var response= {
    'status': status,
    'data': data,
};
res.setHeader('content-type', 'application/json');
res.writeHead(http_code);
res.end(JSON.stringify(response));
return next();
}
        
function success(res, next, data){
    respond(res, next, 'success', data, '200');
}
        
function failure(res, next, data, http_code){
    respond(res, next, 'failure', data, http_code);
}

var restify = require('restify');
var plugins = require('restify-plugins');
var server = restify.createServer();


server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.bodyParser({mapParams: true}));
server.use(restify.plugins.queryParser({mapParams: true}));

var users = {};
var max_user_id = 0;


server.get("/", function(req, res, next){
    success(res, next, users);
});

server.post("/user", function(req, res, next){
    var user = req.params;
    user.id = max_user_id;
    max_user_id++;
    users[user.id] = user;
    res.setHeader('content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(user));
    return next();
});
server.listen(8000, function(){
    console.log("%s listening on %s", server.name, server.url)
});