var express = require("express");
var cors = require("cors");
var app = express();

app.use(express.static("public"), cors());

//make way for some custom css, js and images
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/assests", express.static(__dirname + "/public/assests"));

var server = app.listen(3000, function () {
	var port = server.address().port;
	console.log("Server started at http://localhost:%s", port);
});
