function inc(n){
    return n + 1;
}
const a = 5;
const b = inc(a);
console.log(a, b);

const obj = {value: 5};
function incobj(obj) {
  obj.value ++;
}
incobj(obj);
console.log(obj.value);
