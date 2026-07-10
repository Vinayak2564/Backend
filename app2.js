const express = require('express');
const http = require ('http');
const user = require('./practiceset2');

const app = express();


app.use("/home",(req, res, next) => {
  console.log("the first middlewere ", req.url, req.method);
  res.send("<h2>hello this first middlewere</h2>")
  next();

});

app.use("/result",(req, res, next) => {
  console.log("the second middlewere ", req.url, req.method);
  res.send("<p>hi guyss this second middlewere response</p>")
});

// const server = http.createServer(app);
const PORT = 3002;
app.listen(PORT , () => {
console.log(`server is running in the http://localhost:${PORT}`);
});
