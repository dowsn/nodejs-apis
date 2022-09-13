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
// app.get("/api/hello", function (req, res) {
//   res.json({greeting: 'hello API'});
// });

app.get("api/:date?", function(req, res){
  let date = req.params.date;
  let data;
 
  if(date.length === 0) {
  date = Date.now()
  }

   let utc = new Date(date).toString();

if(!utc) {
  data = {
    error : "Invalid Date"
  }
  res.json(data);
}
  
let unix = date.indexOf('-') === (-1) ? date  : Math.floor(date.getTime())
                                                           data = {
    utc, unix                                            };
  res.json(data);
})
