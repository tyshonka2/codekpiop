//шемседінов 
const result1= unique([2, 1, 1, 3, 2]);
console.log(result1);
// Результат: [2, 1, 3]

const result2= unique(['top', 'bottom', 'top', 'left']);
console.log(result2);
// Результат: ['top', 'bottom', 'left']





function unique(arr) {
  const newArr=[];
    for (let element of arr) {
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
    }
    return newArr;
}   






