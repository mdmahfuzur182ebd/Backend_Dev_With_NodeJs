// Inheriting EventEmitter class

const  MyEvent = require('./myevent')
const myEvent = new MyEvent();

myEvent.on('event1', ()=>{
    console.log("Event Function 1")
})

myEvent.functionSome()