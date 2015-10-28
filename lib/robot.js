var Cylon = require('cylon');

var robot = Cylon.robot({
    connections: {
        arduino: {
            adaptor: 'firmata',
            port: '/dev/cu.usbmodem1421'
        }
    },

    devices: {
        // for test purposes
        led: {
            driver: 'led',
            pin: 13
        },

        // relay is connected to 7th pin
        lamp: {
            driver: 'relay',
            pin: 7,
            type: 'closed'
        }
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

module.exports.toggleLampState = function() {
    robot.devices.lamp.toggle();
}

module.exports.robot = robot;
