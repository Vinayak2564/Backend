const http = require('http');

const server = http.createServer((req,res) => {
  console.log(req);
})

const PORT = 3100;
server.listen(PORT, () => {
  console.log("server running on address http://localhost:${PORT}")
});