const EventEmitter = require('events');
const uuid = require('uuid');

// console.log(uuid.v4());
// console.log(uuid.v4());
// console.log(uuid.v4());
// console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        // call event
        this.emit('mesage', { id: uuid.v4(), msg });
    }
}

module.exports = Logger;


// index file

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => 
    console.log('called Listener:', data)
);

logger.log('Hello World!');