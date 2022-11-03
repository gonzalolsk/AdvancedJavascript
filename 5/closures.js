// Lesson 73

function a() {
    let grandpa = 'grandpa'
    return function b() {
      let father = 'father'
      return function c() {
        let son = 'son'
        return `${grandpa} > ${father} > ${son}`
      }
    }
  }
  
  console.log('a: ', a()()());
  
  
  //closures and higher order function
  function boo(string) {
    return function(name) {
      return function(name2) {
        console.log(`${string} ${name} ${name2}`)
      }
    }
  }
  
  const boo2 = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`)
  
  boo('hi')('john')('tanya');
  
  // AHH! HOW DOES IT REMEMBER THIS 5 years from now?
  booString = boo2('sing');
  booStringName = booString('John');
  booStringNameName2 = booStringName('tanya')
  

  //exercise:
function callMeMaybe() {
    const callMe = 'Hi!';
    setTimeout(function() {
        console.log(callMe);
    }, 4000);
}
callMeMaybe();

// Aqui la variable callME se debrria haber ido del callStack cuando el set Time out regresa de la web api 
// al callStack y se ejecuta el console.log, pero gracias a las closures se puede recordar esta variable.