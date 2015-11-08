var shell = require('shelljs/global'),
    Afplay = require('afplay');

player = new Afplay;

module.exports.sleep = function(){
    console.log('sleep');
    exec('pmset sleepnow',
        {
            silent:true
        }
    ).output;
}

module.exports.baby = function() {

    player.play('~/Documents/arduino-remote-blink/lib/baby-crying-08.mp3')
        .then(function(){
            console.log('Audio playing');
        })
        .catch(function(error){
             console.log(error);
        });
}
