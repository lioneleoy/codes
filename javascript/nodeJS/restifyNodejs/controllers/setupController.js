module.exports = function(server, restify){
    server.use(restify.plugins.acceptParser(server.acceptable));
    server.use(restify.plugins.bodyParser({mapParams: true}));
    server.use(restify.plugins.queryParser({mapParams: true}));
}