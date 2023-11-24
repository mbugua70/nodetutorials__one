//  learning how to import dependency

const _ = require('lodash')

const items = [1, [2, [4,[5,6]]]]

//  we will use the method flattenDeep()

const storeOne = _.flattenDeep(items)

console.log(storeOne)

// javascript callback function

console.log("start track");
console.time();
setTimeout(() => {
  for (let i = 0; i < 100000; i++) {
    console.log("Hey there we are testing the callback");
  }
});

console.timeEnd();
console.log("last trial");
