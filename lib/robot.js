var Cylon = require('cylon');

var robot = Cylon.robot({
    connections: {
        arduino: {
            adaptor: 'firmata',
            port: '/dev/cu.usbmodem1421'
        }
    },

    devices: {
        led: {
            driver: 'led',
            pin: 13
        }
    },

    work: function(my) {
        // do nothing
    }
});

module.exports.turnLEDOn = function() {
    if (!robot.devices.led.isOn()) {
        robot.devices.led.turnOn();
    }
};

module.exports.turnLEDOff = function() {
    if (robot.devices.led.isOn()) {
        robot.devices.led.turnOff();
    }
};

var interval;
module.exports.disco = function (seconds) {
    console.log('Discooo!');

    interval = setInterval(function () {
        robot.devices.led.toggle();
    }, seconds * 1000);
};

module.exports.stopDisco = function () {
    clearInterval(interval);
};

module.exports.robot = robot;
