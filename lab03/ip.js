const ip = '167.198.1.1';
const ip2 = '127.0.0.1 ';

//without reduce
function makeIP(ip) {
    ip=ip.split('.').map(Number);
    return (ip[0] << 24) + (ip[1] << 16) + (ip[2] << 8) + ip[3];
};
console.log(makeIP(ip));
console.log(makeIP(ip2));

//with reduce
function makeIP2(ip) {
    return ip.split('.').map(Number).reduce((acc, octet) => (acc << 8) + octet);
}
console.log(makeIP2(ip));
console.log(makeIP2(ip2));