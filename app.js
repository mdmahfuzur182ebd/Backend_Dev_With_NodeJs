// Event module.

//node no Dom.

// addEventListener('click', (e)=>{

// })

const EventEmitter = require('events')
//console.log(EventEmitter)
const emitter = new EventEmitter();
//console.log(emitter)

emitter.on('eventName', ()=>{
 console.log("Event One Called")
})

emitter.on("event2", () => {
  console.log("Event two Called");
});

emitter.emit('eventName')
emitter.emit('event2')