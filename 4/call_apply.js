// Call
// Call is a method of an object that can substitute a different object than the one it is 
// written on


const wizard = {
    name: "Merlin",
    health: 100,
    heal(num1, num2) {
    return (this.health += num1 + num2);
    }
   };
   const archer = {
    name: "Robin Hood",
    health: 30
   };
   console.log(archer); // health: 30
   wizard.heal.call(archer, 50, 20);
   console.log(archer); // health: 100

//    In this example call is used to borrow the heal method from the wizard and is used on 
// the archer (which is actually pointing this to archer), with the optional arguments added.

// Apply
// Apply is almost identical to call, except that instead of a comma separated list of 
// arguments, it takes an array of arguments

// instead of this
// wizard.heal.call(archer, 50, 20)
// apply looks like this
wizard.heal.apply(archer, [50, 20]);
// this has the same result