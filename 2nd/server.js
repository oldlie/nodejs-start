const http = require("http");
const url = require('url');

function start(handle) {

    http.createServer((request, response) => {

        let pathName = url.parse(request.url).pathname;

        // 路由处理
        ((pathName, handle, response, request) => {
            console.log(`About to route a request for ${pathName}.`);
            if (typeof handle[pathName] === 'function') {
                return handle[pathName](response, request);
            } else {
                console.log(`No request handle found for ${pathName}`);
                return "404 Not found.";
            }
        })(pathName, handle, response, request);

    }).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
