const exec = require('child_process').exec;
const querystring = require('querystring');
const fs = require("fs");

function writeBody(response, message) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(message);
    response.end();
}

function start(response, postData) {
    console.log("Request handler 'start' was called.");
    let body =
`<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;UTF-8">
        <title>Hello.</title>
    </head>
    <body>
        <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="upload">
            <button type="submit"> Submit</button>
        </form>
    </body>
</html>`;

    writeBody(response, body);
}

function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    let text = querystring.parse(postData).text;
    writeBody(response, `You've sent: ${text}`);
}

function favicon(response, postData) {
    writeBody(response, "...");
}

function show(response, postData) {
    console.log(`Request handle 'show' was called.`);
    fs.readFile(__dirname + '/tmp/test.png', 'binary', (error, file) => {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, 'binary');
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.favicon = favicon;
exports.show = show;