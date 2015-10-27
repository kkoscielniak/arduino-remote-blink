var express = require('express'),
    router = express.Router();

var robot = require('./robot');
robot.robot.start();

router.use(function(req, res, next) {
    console.log('Something is happening: %s %s %s', req.method, req.url, req.path);
    next();
});

router.get('/', function(req, res){
    res.json({
        message: 'Welcome to cylon.js simple API'
    });
});

router.post('/blink', function(req, res, err) {
    console.log(req.body);

    if (req.body.action === 'on') {
        console.log('On');
        robot.turnLEDOn();
    } else if (req.body.action === 'off') {
        robot.turnLEDOff();
    } else if (req.body.action === 'disco') {
        if (req.body.timeout === undefined) {
            // @todo error handling
            return;
        } else {
            robot.disco(req.body.timeout);
        }
    } else if (req.body.action === 'stopDisco') {
        robot.stopDisco();
    }

    // @todo
    res.json({
        message: 'OK'
    })
});

module.exports = router;
