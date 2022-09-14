// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date", function(req, res){
  let date = req.params.date;
  let data;
 
  if(date.length === 0) {
  date = Date.now()
  }

let utc = date.indexOf('-') === (-1) ? new Date(parseInt(date)).toString() : new Date(date).toString();
console.log(utc);
if(!utc) {
  data = {
    error : "Invalid Date"
  }
  res.json(data);
}

console.log(date)
let unix = date.indexOf('-') === (-1) ? date : (new Date(date)).getTime();
  console.log(unix);
  console.log(utc);

data = { utc, unix  };
  res.json(data);
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

