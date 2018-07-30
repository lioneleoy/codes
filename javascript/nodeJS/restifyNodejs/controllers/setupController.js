module.exports = function(server, restify, validator){
    server.use(restify.plugins.acceptParser(server.acceptable));
    server.use(restify.plugins.bodyParser({mapParams: true}));
    server.use(restify.plugins.queryParser({mapParams: true}));
    server.use(validator);
}