var http = require("http"),
	fs = require("fs"),
	url = require("url"),
	path = require("path");

var server = http.createServer(function(req,res){
	req.url = req.url === "/" ? "/index.html" : req.url;
	req.url = url.parse(req.url,true);
	var resourcePath = path.join(__dirname, req.url.pathname);
	console.log(req.method, " ", resourcePath);
	if (fs.existsSync(resourcePath)){
		var stream = fs.createReadStream(resourcePath, {encoding : "utf8"});
		stream.pipe(res);
	} else {
		res.statusCode = 404;
		res.end();
	}
});
server.listen(8080);
console.log("server listening on port 8080!");