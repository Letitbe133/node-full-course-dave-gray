// import modules
const logger = require("./log");

const emitter = require("events");

// create custom emitter
class CustomEmitter extends emitter {}

const logEmitter = new CustomEmitter();

// create custom event
logEmitter.on("log", (msg) => {
  logger(msg);
});

// emit event for testing purpose
setTimeout(() => {
  logEmitter.emit("log", "Event emitted");
}, 3000);
