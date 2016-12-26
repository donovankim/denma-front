var server = require('./server/dist/server');
var config = require('./server/dist/config').conf;
var logger = require('./server/dist/Logger').log;

logger.info('config loaded...');
logger.info(config);

server.Server.newInstance(config.rootContextPath).start(config.listenPort, function () {
    logger.info(`start listening at http://localhost:${config.listenPort}/`);
});
