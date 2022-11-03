// Util things about closures:
// 2. Encapsulation


// Exercise:
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
      timeWithoutDestruction = -1;
      return '💥';
    }
  
    setInterval(passTime, 1000);
    return {totalPeaceTime}
  }
  
  const ww3 = makeNuclearButton();
  ww3.totalPeaceTime()

  //Como no retornamos la funcion lauch, esta queda encapsulada
//   por lo que no se podrá tener acceso a ella.


// Another Example:

const encapsulation = () => {
    let people = [];
    const setName = name => people.push(name);
    const getName = idx => people[idx];
    const rmName = idx => people.splice(idx, 1);
    return {
    setName,
    getName,
    rmName
    };
   };
   const data = encapsulation();
   data.setName("Brittney"); // 0
   data.getName(0); // 'Brittney'
   data.rmName(0); // ['Brittney']
   // you have no access to the array people
   // can only change it via methods provided
   