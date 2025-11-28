//шемседінов 
const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(array1, 5);
console.log(array1);
// Результат: [1, 2, 3, 4, 6, 7]

function removeElement(arr, item) {
  for (let element of arr) {
    if (element === item) {
      arr.splice(arr.indexOf(element), 1);
    }
  }
  return arr;
}


//шемседінов 
const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array2, 'Lima'); // удалит 'Lima' из массива
removeElement(array2, 'Berlin'); // не удалит ничего
console.log(array2);
// Результат: ['Kiev', 'Beijing', 'Saratov']

function removeElements(arr, ...items) {
  for (let item of items) {
    removeElement(arr, item);
  }
}