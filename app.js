var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var port = process.env.PORT || 8080;

var router = express.Router();

var theRobot = require('./lib/robot');
theRobot.robot.start();

router.use(function(req, res, next) {
    console.log('Something is happening: %s %s %s', req.method, req.url, req.path);
    next();
});

router.get('/', function(req, res){
    res.json({
        message: 'Welcome to cylon.js simple API'
    });
});

router.post('/blink', function(req, res) {
    console.log(req.body);

    if (req.body.action === 'on') {
        console.log('On');
        theRobot.turnLEDOn();
    } else if (req.body.action === 'off') {
        theRobot.turnLEDOff();
    }

    // @todo
    res.json({
        message: 'OK'
    })
});

app.use('/api', router);

app.listen(port);

//console.log(robot.robot);
console.log('Magic happens at port ' + port);