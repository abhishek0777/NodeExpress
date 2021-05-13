const EventEmitter=require('events')

//customEmitter will be object of EventEmitter class
const customEmitter=new EventEmitter()

//on -listen to an event
// emit-emit an event

/*
order should be maintained,first listen to an event before emitting an event
*/

customEmitter.on('response',()=>{
    console.log('data received')
})
customEmitter.on('response',()=>{
    console.log('data received-2');
})
customEmitter.on('hello',(name,age)=>{
    console.log(`hello received ${name} ${age}`)
})
//where response is event name
customEmitter.emit('response')
customEmitter.emit('hello','Bittu',18)