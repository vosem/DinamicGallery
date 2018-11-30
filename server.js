const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname = 'dist'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.listen(process.env.PORT || 8080);

app.get('/', function (req, res) {
	res.render('index');
});

console.log('Console listening!');