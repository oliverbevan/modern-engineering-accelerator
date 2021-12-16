const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/linux', function(req, res) {
    res.sendFile(path.join(__dirname, '/linux.html'));
});

app.get('/git', function(req, res) {
  res.sendFile(path.join(__dirname, '/git.html'));
});

app.use(express.static(path.resolve('./pics')));
    app.use('/pics', express.static(path.resolve('./pics')));

app.listen(port);
console.log('Server started at http://localhost:' + port);