var Cylon = require('cylon');

Cylon.robot({
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
        every((1).second(), function () {
            my.led.toggle();
        });
    }
}).start();