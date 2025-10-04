function fn() {
    const object1 = { name: 'Alina' };
    let object2 = { name: 'Alina' };
    console.log(object1, object2);
    object1.name = 'Dasha';
    object2.name = 'Dasha';
    console.log(object1, object2);
    //object1= 'Kate';
    object2= 'Kate';
    console.log(object1, object2);
}
//змінна object1 - константа, тому можемо змінити тільки властивість об'єкту, а не присвоїти інше значення
//змінна object2 - змінна, тому можемо змінити і властивість об'єкту, і присвоїти інше значення
fn();
function createUser(name, city) {
    return { name, city };
}
console.log(createUser('Dasha', 'Kyiv'));