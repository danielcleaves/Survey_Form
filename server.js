// require express
var express = require("express");
// require body-parser
var bodyParser = require('body-parser');

// path module -- try to figure out where and why we use this
var path = require("path");

// create the express app
var app = express();

// static content 
app.use(express.static(path.join(__dirname, "./static")));

// use it!
app.use(bodyParser.urlencoded());


// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})

app.get("/home", function(req, res) {
 res.redirect("/");
})


// post route for adding a user
app.post('/result', function(req, res) {
	var user = {};
	user.full_name = req.body.full_name;
	user.location = req.body.location;
	user.language= req.body.language;
	user.comment= req.body.comment;
	res.render("result", user);
 
});

app.get('/result', function(req, res){
		res.render('result', {title: 'Survey Form'});
	});

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
})