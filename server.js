

var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var PORT = 8080;
var bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


http.createServer(app).listen(PORT);

app.use(express.static(path.join(__dirname)));

app.use(express.static(path.join(__dirname, 'views')));
//app.use(express.static(path.join(__dirname 'css')));
//app.use(express.static(path.join(__dirname + 'scripts')));

//app.use(express.static('views'))

app.get('/', function (req, res){
	res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/signup', function (req, res){
	res.sendFile(path.join(__dirname, 'views/signup.html'))
})

app.get('/faq', function (req, res){
	res.sendFile(path.join(__dirname, 'views/faq.html'))
})

app.post('/signup', function(req, res){
	//res.end(JSON.stringify(req.body));
	var fName = req.body.firstname;
	var lName = req.body.lastname;
	var addr = req.body.address;
	var city = req.body.city;
	var state = req.body.state;
	var zip = req.body.zip;
	var eMail = req.body.emailEntry;
	var paid = req.body.paid;
	var shop = req.body.shop;
	var purchased = req.body.purchased;
	var textBox = req.body.text1;
	res.render('signUpConfirmation', {f:fName, l:lName, a:addr, c:city, s:state, z:zip, e:eMail, pans:paid, ians:shop, purans:purchased, minebetter:textBox});
})



app.set('view engine', 'pug');

// set up the root route for the site  and the response (res)
// set up the signUp route for the site  and the response (res)
// set up the faq route for the site  and the response (res)




//app.post method here for signUp






console.log("Server running on port "+ PORT);







