// Most class based languages have the ability to create either public or private fields 
// within a class. Adding these to classes in JavaScript is still an experimental feature in 
// development. Support in browsers is limited, but can be implemented with systems like 
// Babel. Public declarations are set above the constructor and can be used within the 
// class, but do not get added to a new instance. The private declarations are set with 
// the # sign in front of the variable and are only accessible within that class, they cannot 
// be accessed or changed from outside.


// public declarations
class Rectangle {
    height = 0;
    width;
    constructor(height, width) {
    this.height = height;
    this.width = width;
    }
   }
   // private declarations
   class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
    this.#height = height;
    this.#width = width;
    }
   }
   