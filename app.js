const http = require('http');

const requestHandler = require('./chunks');


const server = http.createServer(requestHandler);




server.listen(3001);
console.log('Server is listening on port 3001');