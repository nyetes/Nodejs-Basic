const EventEmitter = require('events');
//const { EventEmitter } = require('stream');

// Create Class
class MyEmmitter extends EventEmitter {}

// Init Object 
const myEmitter =new MyEmmitter();

// Event listener
myEmitter.on('event', () => 
    console.log('Event Fired')    
);

// Init Event 
myEmitter.emit('event');


 