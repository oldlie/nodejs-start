function route(pathName, handle, response, postData) {
    console.log(`About to route a request for ${pathName}.`);
    if (typeof handle[pathName] === 'function') {
        return handle[pathName](response, postData);
    } else {
        console.log(`No request handle found for ${pathName}`);
        return "404 Not found.";
    }
}

exports.route = route;