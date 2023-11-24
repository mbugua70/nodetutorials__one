//  learning about setInterval with node js

console.log("start of the code");

setInterval(() => {
  console.log("node app in progress");
}, 2000);

console.log("end of the node app");

// EVERY 2 sec the event loop will evoc the code. hence the event loop will keep on running after 2 sec
