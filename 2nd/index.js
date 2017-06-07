const server = require('./server');
const requestHandlers = require('./requestHandlers');

let handle = {
    "/": requestHandlers.start,
    "/favicon.ico": requestHandlers.favicon,
    "/start" : requestHandlers.start,
    "/upload" : requestHandlers.upload,
    "/show": requestHandlers.show
};

server.start(handle);