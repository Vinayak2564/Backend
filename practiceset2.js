const {sumNumber} = require('./sum2');
const userData = ((req, res) => {
  console.log(req.url, req.method, req.headers);
  console.log("Correct anwered has been displaying , check the browse once");

  if(req.url === '/calculator'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html lang="en">
<head>
<title>Calculator</title>
</head>
<body>
  <h2>
    WELCOME TO SIMPLE BACKEND CALCULATOR PROJECT
  </h2>
  <form action="/calculator-result" method="POST">
  <input type="number" name="first" placeholder="enter the first number:"<br>
  <input type="number" name="second" placeholder="enter the second number:"<br>
  <input type="submit" value="Calculate">
  </form>
</body>
</html>
    `);
    return res.end(); 
  }
  else if(req.url.toLowerCase() === '/calculator-result' && req.method === "POST")
  {
    return sumNumber(req,res);
  }
   

  res.write(`
    <html lang="en">
<head>
<title>Calculator</title>
</head>
<body>
  <h2>
    WELCOME TO SIMPLE BACKEND CALCULATOR PROJECT
  </h2>
  <nav>
    <ul>
      <li><a href="/calculator">Calculator</a></li>
    </ul>
  </nav> 
</body>
</html>
    `);
    return res.end();
});
exports.userData= userData;