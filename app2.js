const http = require ('http');
const user = require('./practiceset2');
const server = http.createServer(user.userData);
server.listen(2000);
console.log("server is running in the http://localhost:2000");