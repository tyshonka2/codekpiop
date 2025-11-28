//шемседінов 
const read = store(5);
const value = read();
console.log(value); // Output: 5

const store = (value) => () => value;