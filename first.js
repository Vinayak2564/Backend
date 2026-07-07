console.log("hello, vinayak");
const fs = require('fs');
fs.writeFile('output.txt', 'hello this is output file',(err) => {
  if(err) 
    console.log("error occured");
  else
    console.log('no error occured it run smoothly');

})