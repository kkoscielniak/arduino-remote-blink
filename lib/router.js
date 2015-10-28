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

// GET method because of Smartwatch Pro app
router.get('/lamp', function(req, res, err) {
    robot.toggleLampState();

    // @todo proper message
    res.json({
        message: 'OK'
    })
});

module.exports = router;
