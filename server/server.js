const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const cors = require('cors');

const apiRouter = require('./router/api');

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log(`listening port 8080`);
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(path.join(__dirname, `../client/build`)));

app.use('/api', apiRouter);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, `../client/build/index.html`));
});
