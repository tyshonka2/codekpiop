const characters = 'ABCDEFGHIJKLMNOPQRTSUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters) {
    let password = '';  
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
}   
console.log(generateKey(16, characters));