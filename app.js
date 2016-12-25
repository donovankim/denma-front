var server = require('./server/dist/server');

const port = process.env.PORT || 3000;

server.Server.instance('api').start(port, function(){
    console.log(`...Listening at http://localhost:${port}/`);
});