//previniendo un stack overflow con setinterval
// https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13760118#overview


//fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
  var item = list.pop();

  if (item) {
    setTimeout(removeItemsFromList, 0);
  }
};

removeItemsFromList();

function consologuear() {

  if (list.length >= 0) {
    console.log(list)
    consologuear()
  }
}
setTimeout(consologuear, 0);



