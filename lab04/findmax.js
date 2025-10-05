//шемседінов
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9



function max(array) {
     return array.flat().reduce((a, b) => Math.max(a, b));
            }   
    return max;
    
console.log(max(m));