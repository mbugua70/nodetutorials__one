//  learning about javascript callbacks and event loop with node.js

console.log("testing web api");

setTimeout(() => {
  console.log("Hello there!");
}, 6000);

console.log("testing three");

// javascript run as a single thread

console.log("first task");

console.time();

for (let i = 0; i < 100000; i++) {
  console.log("Hey, everyone is waiting on me");
}

console.timeEnd();
console.log("next trial");
