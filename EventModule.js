//import events module
var events = require("events"); 

//create new EventEmitter object
var eventEmitter = new events.EventEmitter(); 

// listener #1
var listener1 = function listener1() {
  console.log("1st Listener executed.");
};

// listener #2
var listener2 = function listener2() {
  console.log("2nd Listener executed.");
};

// Bind the connection event with the listener1 function
eventEmitter.addListener("connection", listener1);

// Bind the connection event with the listener2 function
eventEmitter.on("connection", listener2);

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,"connection");
console.log(eventListeners + " listener(s) listening to connection event");

// Fire the connection event
eventEmitter.emit("connection");

// Remove the binding of listener1 function
eventEmitter.removeListener("connection", listener1);
console.log("1st Listener connection removed.");

// Fire the connection event
eventEmitter.emit("connection");

eventListeners = require("events").EventEmitter.listenerCount(
  eventEmitter,
  "connection"
);
console.log(eventListeners + " listener(s) listening to connection event");

console.log("Program Ended.");

// all console.logs should output the following:
// 2 listener(s) listening to connection event
// 1st Listener executed.
// 2nd Listener executed.
// 1st Listener connection removed.
// 2nd Listener executed.
// 1 listener(s) listening to connection event
// Program Ended.