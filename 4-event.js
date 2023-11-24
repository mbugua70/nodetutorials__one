// Events in node.js

const EventEmmiter = require("events");

const customeEvents = new EventEmmiter();

// response event
// on method will listen to a specific event
customeEvents.on("response", (name, id) => {
  console.log(`data saved ${name} ${id}`);
});

// we can saveral event listening to but have different logic

customeEvents.on("response", () => {
  console.log("date saved again");
});

// nb:: you should first listen to an event then emit it
// passing in the arguement to the emit method
customeEvents.emit("response", "john", 34);
