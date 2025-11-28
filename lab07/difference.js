//шемседінов 
const array1= [7, -2, 10, 5, 0];
const array2= [0, 10];
const result= difference(array1, array2);
console.log(result);
// Результат: [7, -2, 5]




function difference(arr1, arr2) {
  const newArr=[]; 
    for (let element of arr1) {
        if (!arr2.includes(element)) {
            newArr.push(element);
        }
    }
    return newArr;
}

