// In JavaScript it is best for speed and efficiency to keep functions small and reusable. 
// Function composition is the idea that you lay out your functions like a factory assembly 
// line. The actual functions pipe() and compose() don't actually exist in JavaScript yet, but 
// there are many libraries that use them. You can however create your own versions of 
// them. The compose() function reads the functions from right to left and 
// the pipe() function will read from left to right



// create our own COMPOSE function
const compose = (fn1, fn2) => (data) => fn1(fn2(data));
// create our own PIPE function
const pipe = (fn1, fn2) => data => fn2(fn1(data));


const multiplyBy3 = num => num * 3;
const makePositive = num => Math.abs(num);
// use compose to combine multiple functions
const composeFn = compose(multiplyBy3, makePositive);
const pipeFn = pipe(multiplyBy3, makePositive);
console.log('composeFn(-50): ', composeFn(-50));
// 150
console.log('pipeFn(-50): ', pipeFn(-50));
// 150
// essentially we are doing this
// fn1(fn2(fn3(50)))
// compose(fn1, fn2, fn3)(50)
// pipe(fn3, fn2, fn1)(50)




