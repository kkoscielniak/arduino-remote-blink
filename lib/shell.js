var shell = require('shelljs/global');

module.exports.sleep = function(){
    console.log('sleep');
    exec('pmset sleepnow',
        {
            silent:true
        }
    ).output;
}
