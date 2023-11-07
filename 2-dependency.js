//  learning how to import dependency

const _ = require('lodash')

const items = [1, [2, [4,[5,6]]]]

//  we will use the method flattenDeep()

const storeOne = _.flattenDeep(items)

console.log(storeOne)