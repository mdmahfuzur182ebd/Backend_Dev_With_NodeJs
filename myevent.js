const EventEmitter = require("events");

class MyEvent extends EventEmitter {
  functionSome = () => {
    this.emit("event1");
  };
}

module.exports = MyEvent;
