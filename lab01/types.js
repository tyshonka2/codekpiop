const array = [5, -200, true, 'hello', null, 77, 'world', false, 'JavaScript', 0];
const typescount = {number: 0, string: 0, boolean: 0, object: 0};
function countTypes(arr) {
    for (const item of arr) {
        const type = typeof item;
        if (typescount.hasOwnProperty(type)) {
            typescount[type]++;
        }
    
    }
}
countTypes(array);
console.log(typescount);
