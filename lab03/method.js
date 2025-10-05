//шемседінов
const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}

function method(obj) {
    const array = [];
    for (let method in obj) {
        if (typeof obj[method] === 'function') {
            array.push([method, obj[method].length]);
        }
}
    return array;
}
console.log(method(iface));
console.table(method(iface));
