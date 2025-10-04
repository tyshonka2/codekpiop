const phonebook = [
    {name: 'Sasha',phone: +380971712571},
    {name: 'Oleg',phone: +380638602382},
    {name: 'Alina',phone: +380994866972},
    {name: 'Dasha',phone: +380631112233},
    {name: 'Kolya',phone: +380501112233},
    {name: 'Vova',phone: +380671234567},
     ]
function findPhoneByName(name, phone) {
    for( const person of phonebook)
        if (person.name === name) return person.phone;
    return 'Not found';
};

console.log(findPhoneByName('Kolya'));
console.log(findPhoneByName('Illya'));
const hash = {
    Sasha: +380971712571,
    Oleg: +380638602382,
    Alina: +380994866972,
    Dasha: +380631112233,
    Kolya: +380501112233,
    Vova: +380671234567,
};
function bookhash(name) {
    return hash[name];
};
console.log(bookhash('Dasha'));
console.log(bookhash('Sasha'));

