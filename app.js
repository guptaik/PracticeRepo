const amount = 12

// if(amount>=12){
//     console.log("difficult")
// }

// else{
//     console.log("Easy")
// }

// console.log(__dirname);
// console.log(__filename);
// console.log(module)



//CHECKING THE EXTERNAL MODULE INSTALLED 
const _ = require('lodash')

const arr= [1,[2,[3,[4]]]]
console.log(arr);
const newItems = _.flattenDeep(arr);

console.log(newItems)           //[ 1, 2, 3, 4 ]