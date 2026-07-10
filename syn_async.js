console.log("1. start of loop");

Promise.resolve().then(() => console.log("2. microtask 1"));

setTimeout(() => console.log("3. timer 1"), 0);

const fs = require("fs");
fs.readFile('user.txt', () => console.log('4. i/o operation'));

setImmediate(() => console.log("5. Immediate"));

process.on('exit', (code) => { console.log("6. exit event");

});

console.log("7. end of script");