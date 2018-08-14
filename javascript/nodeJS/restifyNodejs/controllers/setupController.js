module.exports = function(server, restify, validator){
    server.use(restify.plugins.acceptParser(server.acceptable));
    server.use(restify.plugins.bodyParser({mapParams: true}));
    server.use(restify.plugins.queryParser({mapParams: true}));
    server.use(validator);

    server.use(restify.plugins.authorizationParser());


//ip whitelisting

server.use(function(req, res, next){
    var whitelisted = ['172.23.24.12'];
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (whitelisted.indexOf(ip)=== -1){
        var response = {
            'status' : 'failure',
            'data' : 'invalid ip'
        };
        res.setHeader('content-type', 'application/json');
        res.writeHead(403);
        res.end(JSON.stringify(response));
        return next();
    }
    else{
    return next();}
});


//authentication
    server.use(function(req, res, next){
        var apiKeys = {
            'leo' : 'hj87832ksbcsyg23efe='
        };
        if(typeof(req.authorization.basic)==='undefined' || !apiKeys[req.authorization.basic.username] || req.authorization.basic.password !== apiKeys[req.authorization.basic.username]){
            var response = {
                'status' : 'failure',
                'data' : 'You mustspecify a valid API key'
            };
            res.setHeader('content-type', 'application/json');
            res.writeHead(403);
            res.end(JSON.stringify(response));
            return next();
        }
        else{
        return next();}
    });
}