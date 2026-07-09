const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers);

  if(req.url === '/home'){
   
    res.write('<body><h2> hello welocome to home page</h2></body>');
    return res.end();
  } else if(req.url === '/men'){
    res.headers = {'Content-Type': 'text/html'};
    res.write('<body><h2> hello welocome to men page</h2></body>');
    return res.end();
  } else if(req.url === '/women'){
    res.headers = {'Content-Type': 'text/html'};
    res.write('<body><h2> hello welocome to women page</h2></body>');
    return res.end();
  }else if(req.url === '/kids'){
    res.headers = {'Content-Type': 'text/html'};
    res.write('<body><h2> hello welocome to kids page</h2></body>');
     return res.end();
  }else if(req.url === '/cart'){
    
    res.write('<body><h2>hello welcome to cart page</h2></body>');
     return res.end();
  }

  res.write(`
    <html lang="en">
<head>
  
  <title>practise set</title>
</head>
<body>
  <nav>
    <ul>
      <li>
        <a href="/home">Home</a>
        <a href="/men">men</a>
        <a href="/women">women</a>
        <a href="/kids">kids</a>
        <a href="/cart">cart</a>
      </li>
    </ul>
  </nav>
  </body>
</html>
    `);
res.end();


});
server.listen(3001);
console.log('Server is listening on port 3001');