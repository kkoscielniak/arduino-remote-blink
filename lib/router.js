var express = require('express'),
    router = express.Router();

var shell = require('./shell');

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
    });
});

router.get('/sleep', function (req, res, err) {
    shell.sleep();

    res.json({
        message: 'OK'
    });
});

router.get('/baby', function(req, res, err) {
    shell.baby();

    res.json({
        message: 'OK BABY'
    })
});

module.exports = router;
