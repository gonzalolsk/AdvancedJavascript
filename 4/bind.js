// Bind
// Unlike call and apply, bind does not run the method it is used on, but rather returns a 
// new function that can then be called later

console.log(archer); // health: 30
const healArcher = wizard.heal.bind(archer, 50, 20);
healArcher();
console.log(archer); // health: 100

// Currying With Bind
// Currying is breaking down a function with multiple arguments into one or more 
// functions that each accept a single argument

function multiply(a, b) {
    return a * b;
   }
   let multiplyByTwo = multiply.bind(this, 2);
   multiplyByTwo(4); // 8
   let multiplyByTen = multiply.bind(this, 10);
   multiplyByTen(6); // 60