var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

var router = require('./lib/router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var port = process.env.PORT || 8080;

app.use('/api', router);
app.listen(port);

console.log('Magic happens at port ' + port);
