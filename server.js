const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/dist/DinamicGallery')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/DinamicGallery/index.html'));
});

app.listen(process.env.PORT || 8080);
console.log(process.env.PORT);