
// Idempotence:

// Idempotence is another important piece of functional programming. It is the idea that 
// given the same input to a function, you will always return the same output. The function 
// could be used over and over again and nothing changes. This is how you make your code 
// predictable.



function notGood() {
    return Math.random()
    // new Date();
  }
  
  function good() {
    return 5
  }
  
  Math.abs(Math.abs(10))