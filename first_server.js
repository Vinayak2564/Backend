const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers); 
 if (req.url === '/home'){
   res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title> response for respected request</title></head>');
  res.write('<body><h2> hello guddu do your home ASAP</h2></body>');
  res.write('</html>');
  return res.end();
 } 
 else if(req.url === '/profile')
  {
   res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title> response for respected request</title></head>');
  res.write('<body><h2> hello sir welcome to my profile see you soon in future if you ready refer  you can immidiate refer i am hungry to work</h2></body>');
  res.write('</html>');
  return res.end();
 }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title> response for respected request</title></head>');
  res.write('<body><h2> hello my dear</h2></body>');
  res.write('</html>');
  res.end();
});
server.listen(3006);
console.log('Server is listening on port 3006');