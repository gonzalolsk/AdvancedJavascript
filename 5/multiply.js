// Higher Order Functions

const multiplyBy = function (num1) {
    return function(num2){
        return num1*num2
    }
}
// O incluso, usando arrow Functions se veria mas prolijo:
// const multiplyBy= (num1) => (num2) => num1*num2;



const multiplyTwo = multiplyBy(2);
const multiplyTen = multiplyBy(10);
//Y esto se podria hacer así maás sencillo, invocando ambas funciones de una vez:
//multiplyBy(10)(5);

console.log(multiplyTen(2));