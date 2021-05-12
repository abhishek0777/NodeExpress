const _=require('lodash')

// these are functionality of lodash
const items=[1,[2,[3,4]]]
const newItems=_.flattenDeep(items)
console.log(items)
console.log(newItems)