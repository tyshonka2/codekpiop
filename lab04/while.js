//шемседінов
const a = sum(1, 2, 3) // a === 6
const b = sum(0) // b === 0
const c = sum() // c === 0
const d = sum(1, -1, 1) // d === 1
const e = sum(10, -1, -1, -1) // e === 7

function sum(...args) {
    let sum = 0;
    while (args.length > 0) {
        sum += args.shift();
    }
    return sum;
}
console.log(a, b, c, d, e);