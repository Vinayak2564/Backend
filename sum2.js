const sumNumber = (req,res) => {

const body = [];
req.on('data',(chunk) => body.push(chunk));
req.on("end",() => {
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      const sum = Number(bodyObject.first) + Number(bodyObject.second);
      console.log(sum);

      res.setHeader('Content-Type', 'text/html');
      res.write(`
        <html>
          <body>
            <h2> the sum ${bodyObject.first} + ${bodyObject.second} = ${sum}</h2> 
          </body>
        </html>
        `);
        return res.end();
});

};

exports.sumNumber = sumNumber;