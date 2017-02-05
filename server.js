// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
fs = require('fs');
var cors = require('cors');
app.use(cors());

app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb'}));


app.post('/a', function(req, res) {
    var item = req.body;
    console.log(JSON.stringify(item));  
   
 fs.truncate("C:\\Users\\HP\\Desktop\\a\\weather\\src\\jsonData\\mainData.json", 0, function() {
    fs.writeFile("C:\\Users\\HP\\Desktop\\a\\weather\\src\\jsonData\\mainData.json", JSON.stringify(item), function (err) {
        if (err) {
            return console.log("Error writing file: " + err);
        }

    });
});
 res.send({"suc":true});
});




app.get('/', function (req, res) {
  res.send('Hello World!');
});
 
var server = app.listen(3000, function () {
  var host = server.address().address;
  host = (host === '::' ? 'localhost' : host);
  var port = server.address().port;
 
  console.log('listening at http://%s:%s', host, port);
});
