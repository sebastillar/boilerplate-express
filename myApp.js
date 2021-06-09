var express = require('express');
var bodyParser = require('body-parser');
var app = express();

/*
console.log("Hello World");

app.get('/', function(req, res) {
    res.send('Hello Express');
});

app.get('/json', function(req, res) {
  if(process.env.MESSAGE_STYLE == 'uppercase')
      res.json({ "message": "HELLO JSON" });


  else
    res.json({ "message": "Hello json" });
});


app.use("/", function(req, res, next) {
  var string = req.method + " " + req.path + " - ::ffff:" + req.ip;
  console.log(string);
  next();
});

app.get("/now", function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.send(req.time);
});

app.get("/:word/echo", function(req, res, next) {
  var {word,echo} = req.params
    res.json({echo:word});
  next();
});


app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`
  });
});

*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post("/name", function(req, res) {
    // Handle the data in the request
    var string = req.body.first + " " + req.body.last;
    res.json({ name: string });
});





























module.exports = app;