const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use((req,res,next) => {
  console.log("first middlewere", req.url, req.method);
  next();
});

app.use((req,res,next) => {
  console.log("second middlewere", req.url, req.method);
 next();
});

// app.use((req,res,next) => {
//   console.log("third middlewere");
//   res.send("<h2>this reponse from third middlewere</h2>");
//  next();
// });

app.get("/",(req,res,next)=>{
  console.log(`this is from '/' `);
  res.send("<h2>`this is from '/' `</h2>")
  next();
});

app.get("/contact-us",(req,res,next)=>{
  console.log(`this is from '/contact-us' `);
  res.send(`
    <html lang="en">
<head>
<title>user-details</title>
</head>
<body>
  <h2>
    ENTER YIUR DETAILS BELOW
  </h2>
  <form action="/contact-us"  method="POST">
    <input type="text" name="name" placeholder="enter your name here" ><hr>

    <input type="text" name="email" placeholder="enter your email here" ><hr>
    <input type="submit" value="submit">
 
  </form> 
</body>
</html>`)
});

app.use(bodyParser.urlencoded());

app.post("/contact-us",(req,res,next) => {
  console.log("POST response from /contact-us", req.url, req.method, req.body);
  res.send("<h4>thanks for filling form meet you soon</h4>");
})


const PORT = 5000;
app.listen(PORT , ()=> {
  console.log(`server is running at ${PORT}`)
})