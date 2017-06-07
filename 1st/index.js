const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

let handle = {
    "/": requestHandlers.start,
    "/favicon.ico": requestHandlers.favicon,
    "/start" : requestHandlers.start,
    "/upload" : requestHandlers.upload,
    "/show": requestHandlers.show
};

server.start(router.route, handle);