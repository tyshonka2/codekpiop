//шемседінов 
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = compose(inc, twice, cube);
console.log(f1(5))

const f2 = compose(inc, inc);
console.log(f2(7))

const f3 = compose(inc, 7, cube)
console.log(f3(2)) //Виводить undefined


function compose(...func) {
    let comp= (x) => { 
    try {
    for(const fn of func.reverse()) {
        if (typeof fn !== "function") {
        }
            x= fn(x);
        }
        return x
    } catch (error) {
      return undefined;
    }
  };
  return comp;
};