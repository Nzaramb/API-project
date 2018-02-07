const express = require('express');
const app = express();
var path = require('path');
var fs = require("fs");
var bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '/show.html'));
});


app.post('/addDirection', function(req, res) {
	console.log("here: " + req.body.instr);
	fs.appendFile("datafile.txt", req.body.instr);
	//fs.writeFile("datafile.txt", req.body.instr);
	//res.send('You sent the name "' + req.body + '".');
});

	
app.listen(3000, () => {
  console.log('Web App running on port 3000!');
});
