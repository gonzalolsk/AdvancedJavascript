//Pure Functions =
//    - No side effects.
//    - Input -> output (Referencial Transparency: same input -> same output).




//Side effects:
const array = [1,2,3];
function mutateArray(arr) {
  arr.pop()
}
function mutateArray2(arr) {
  arr.forEach(item => arr.push(1
  ))
}
//The order of the function calls will matter.


mutateArray(array)
mutateArray2(array)
array
console.log('with side effects, array: ', array);

//No side effects:
// map and concat methods can fix this issue of mutation:
// concat:
const array2 = [1,2,3];

function removeLastItem(arr){
    const newArray = [].concat(arr);
    newArray.pop()
    return newArray
}

console.log('with concat: ', removeLastItem(array2) );

// map:

function multiplyBy2(arr){
    return arr.map(item => item*2)
}
multiplyBy2(array2)
console.log('with map: ', multiplyBy2(array2) );

console.log('with map and concat, array remains pure: ', array2);

