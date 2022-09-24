// Exercise: call(), apply()
// How would you implement this:

const array = [1, 2, 3];

function getMaxNumber(arr) {
  //code here  
  return Math.max.apply(null, arr);  
}

console.log(


    getMaxNumber(array) // should return 3

);