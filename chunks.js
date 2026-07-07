const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method); 
 if (req.url === '/home'){
   res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title> response for respected request</title></head>');
  res.write('<body><h2> hello guddu do your home ASAP</h2></body>');
   res.write('<form action="/submit-details" method="POST">');
  res.write('<input type="text" name="user name" placeholder="enter your name:>"<br>');
  res.write('<label for="male">Male</label>');
  res.write('<input type="radio" id="male"  name="gender" value="male">');
  res.write('<label for="female">Female</label>');
  res.write('<input type="radio" id="female"  name="gender" value="female"><br>');
  res.write('<input type="submit" value="submit">');
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
 } 
 else if(req.url.toLowerCase() === '/submit-details' && req.method === "POST")
  {
    const body = [];

    req.on('data',(chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end",() => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      // const BodyObject = {};
      // for (const [key,val] of params.entries()){
      //   BodyObject[key] = val;
      // }
      const BodyObject = Object.fromEntries(params);
      console.log(BodyObject);
      fs.writeFileSync('user.txt', JSON.stringify(BodyObject));
    })
    
    res.statusCode = 302;
    res.setHeader('Location','/');
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
  res.write('<body><h2> welcome </h2></body>');
 
  res.write('</html>');
  res.end();
});
server.listen(3001);
console.log('Server is listening on port 3001');