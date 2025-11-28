function seq(...args) {
   const functions = [...args];
  

    function chain(...newargs) {
        if (typeof newargs[0] === "function") {
            functions.push(...newargs);
            return chain;
        } else {
            return functions.reduceRight((result, fn) => fn(result), newargs[0]);
        }
    }
    return chain;
}

console.log(seq((x) => x + 7)((x) => x * 2)(5));
console.log(seq((x) => x * 2)((x) => x + 7)(5));
console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7));
console.log(seq((x) => x * x)((x) => x + 1)(2));
console.log(seq((x) => x - 3)((x) => x * 4)((x) => x + 2)(8));
console.log(seq((x) => x * 2)(5));
