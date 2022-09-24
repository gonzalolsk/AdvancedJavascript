// Here is this 4 ways:
// • new keyword binding - the new keyword changes the meaning of this to be the 
//   object that is being created.

// • implicit binding - "this" refers to the object that is calling it. It is implied, without 
//   doing anything it's just how the language works.

// • explicit binding - using the "bind" keyword to change the meaning of "this".

// • arrow functions as methods - "this" is lexically scoped, refers to it's current 
//   surroundings and no further. However, if "this" is inside of a method's function, it 
//   falls out of scope and belongs to the window object. To correct this, you can use a 
//   higher order function to return an arrow function that calls "this"



// new binding
function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log("new binding log: ",this);
   }
   const person1 = new Person("person1", 55);
// this = Person { name: 'person1', age: 55 }


//implicit binding
const person2 = {
    name: "person",
    age: 20,
    hi() {
    console.log("implicit binding log:  hi " + this);
    }
   };
   person2.hi();
   // this = person { name: 'person', age: 20, hi(){...}

//explicit binding
let name = "Brittney";
const person3 = {
 name: "person3",
 age: 50,
 hi: function() {
 console.log("explicit binding log:  hi " + this.name);
 }.bind(global) //o window en el navegador
};
person3.hi();
// hi Brittney
// this = window {...}

// arrow functions inside objects
const person4 = {
    name: "person4",
    age: 40,
    hi: function() {
    var inner = () => {
    console.log("with arrow function: ", this);
    };
    return inner();
    }
   };
   person4.hi();
   // this = person4 { name: 'person4', age: 40, hi() {...} }
   // if either function is changed around, it doesn't work
   

//    Lexical vs Dynamic Scope
// A big gotcha for a lot of people working with *this is when a function is ran inside of 
// another function. It gets a little confusing, but we can remember who called the 
// function

const obj = {
    name: "Billy",
    sing() {
        console.log("Dinamic scope normal functions: a ", this);

        var anotherFunc = function() {
        console.log("Dinamic scope normal functions b:  ", this);

        };
        
        anotherFunc();
    }
};
   obj.sing();
   // a {name: "Billy", sing: ƒ}
   // b Window {…}

//    In the example above, the obj called sing() and then anotherFunc() was called within the 
// sing() function. In JavaScript, that function defaults to the Window object. It happens 
// because everything in JavaScript is lexically scoped except for the this keyword. It 
// doesn't matter where it is written, it matters how it is called. Changing anotherFunc() 
// instead to an arrow function will fix this problem, as seen below. Arrow functions do not 
// bind or set their own context for this. If this is used in an arrow function, it is taken from 
// the outside. Arrow functions also have no arguments created as functions do.


const obj2 = {
    name: "Billy",
    sing() {
    console.log("Lexical scope arrow functions: a ", this);
    var anotherFunc = () => {
    console.log("Lexical scope arrow functions: b ", this);
    };
    anotherFunc();
    }
   };
   obj2.sing();
   // a {name: "Billy", sing: ƒ}
   // b {name: "Billy", sing: ƒ}





//    Okay, last example to really solidify our knowledge of this.


// var b = {
//  name: "jay",
//  say() {
//  console.log(this);
//  }
// };
// var c = {
//  name: "jay",
//  say() {
//  return function() {
//  console.log(this);
//  };
//  }
// };
// var d = {
//  name: "jay",
//  say() {
//  return () => console.log(this);
//  }
// };
b.say(); // b {name: 'jay', say()...}
// b called the function
c.say(); // function() {console.log(this)}
// returned a function that gets called later
c.say()(); // Window {...}
// c.say() gets the function and the Window runs it
d.say(); // () => console.log(this)
// returned the arrow function
d.say()(); // d {name: 'jay', say()...}
// arrow function does not rebind this and inherits this from parent