var server = require('./server/dist/server');

const port = process.env.PORT || 3000;

server.Server.newInstance('api').start(port, function(){
    console.log(`...Listening at http://localhost:${port}/`);
});