//шемседінов 
const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});



function iterate(object, callback) {
	for (let key in object) {
		callback(key, object[key]);
	}
}