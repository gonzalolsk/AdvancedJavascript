// factory function make/create
function createElf(name, weapon) {
    //we can also have closures here to hide properties from being changed.
    return {
      name: name,
      weapon: weapon,
      atack() {
        return 'atack with ' + weapon
      }
    }
  }
  const sam = createElf('Sam', 'bow');
  const peter = createElf('Peter', 'bow');
  
  sam.atack()



  // other example 

  function createElf(name, type, weapon) {
    return {
    name: name,
    type: type,
    weapon: weapon,
    say() {
    return `Hi, my name is ${name}, I am a ${type} elf.`;
    },
    attack() {
    return `${name} attacks with ${weapon}`;
    }
    };
   }
   const dobby = createElf("Dobby", "house", "cloth");
   const legolas = createElf("Legolas", "high", "bow");
   dobby.say(); // Hi, my name is Dobby, I am a house elf.
   legolas.say(); // Hi, my name is Legolas, I am a high elf.
   dobby.attack(); // Dobby attacks with cloth.
   legolas.attack(); // Legolas attacks with bo



// PROBLEMS  Not only is the code not DRY, the attack method is being 
// created and taking up memory space for every new elf. This is not very efficient. How do 
// we solve this? Well, we could separate the methods out into a store.

const elfMethodsStore = {
    attack() {
    return `attack with ${this.weapon}`;
    },
    say() {
    return `Hi, my name is ${this.name}, I am a ${this.type} elf.`;
    }
   };
   function createElf(name, type, weapon) {
    return {
    name: name, // old way
    type, // with ES6 assignment, if they are the same name
    weapon
    };
   }
   // each method has to be assigned to the store method to
   // create the __proto__ chain
   const dobby2 = createElf("Dobby", "house", "cloth");
   dobby2.attack = elfMethodsStore.attack;
   dobby2.say = elfMethodsStore.say;
   const legolas2 = createElf("Legolas", "high", "bow");
   legolas2.attack = elfMethodsStore.attack;
   legolas2.say = elfMethodsStore.say;