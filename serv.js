var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");
 
var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css",
    "svg": "image/svg+xml"
};
 
var server = http.createServer(function(request, response) {
 
    var uri = url.parse(request.url).pathname;
 
    uri = "./" + uri;
 
    if (uri.charAt(uri.length - 1) == "/") {
        uri += "index.html";
    }
 
    if (uri.indexOf("..") != -1) {
        response.writeHead(403);
        response.end();
    }
 
    var filename = path.join(process.cwd(), uri);
 
    console.log("\tAttempting to serve: " + filename);
 
    path.exists(filename, function(exists) {
 
        if (!exists) {
            console.log("File not found: " + filename);
            response.writeHead(404);
            response.end("Sorry, the file you requested was not found. Don't let it ruin your day! :)");
            return;
        }
 
        var mimeType = mimeTypes[path.extname(filename).split(".")[1]];
        response.writeHead(200, {'Content-Type':mimeType});
        console.log(mimeType);
        var fileStream = fs.createReadStream(filename);
        fileStream.pipe(response);
    });
 
 
}).listen(8081);