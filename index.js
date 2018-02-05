const express = require('express');
const app = express();
var path = require('path');
var fs = require("fs") 
var bodyParser = require("body-parser")

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '/show.html'));
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/addDirection', function(req, res) {
	console.log("here " + req)
  res.send('You sent the name "' + req.body + '".');
});

//fs.writeFile("datafile.txt", dat)	

app.listen(3000, () => {
  console.log('Web App running on port 3000!');
});
