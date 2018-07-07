var restify = require('restify');
var server = restify.createServer();

var users = {};
var max_user_id = 0;

server.get("/", function(req,res,next){
    res.setHeader('content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(users));
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