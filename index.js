const express = require('express');
const app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '/show.html'));
});	

app.listen(3000, () => {
  console.log('Web App running on port 3000!');
});
