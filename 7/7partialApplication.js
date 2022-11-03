//Partial Application


// Partial application is expanding on the idea of currying and taking it a step farther by
// separating a parameter out. If you have more than 2 arguments in a functions, then you
// can bind one of them to a value to be used later


const multiply = (a, b, c) => a * b * c
const partialMultiplyBy5 = multiply.bind(null, 5)
partialMultiplyBy5(10, 20)