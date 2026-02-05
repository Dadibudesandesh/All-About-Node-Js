import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('start', () => {
    console.log("Runnnnnnnn.....")
  setTimeout(() => {
    console.log("1");
  }, 1000);
  setTimeout(() => {
    console.log("2");
  }, 2000);
  setTimeout(() => {
    console.log("3");
  }, 3000);
  setTimeout(() => {
    console.log('go fast.......');
  }, 4000);
});
myEmitter.emit('start');

console.log("Script is running....");
console.log("Script is Still running....");
