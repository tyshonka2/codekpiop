function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) array.push(i);
    return array;
}
console.log(range(15, 30));

function rangeOdd(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) if(i%2) array.push(i);
    return array;
}
console.log(rangeOdd(15, 30));