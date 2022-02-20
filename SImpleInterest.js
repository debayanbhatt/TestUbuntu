const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("Request Received");
  console.log(req.url);

  if (req.url == "/") {
    rs = fs.createReadStream("./SimpleInterest.html");
    rs.pipe(res);
  } else {
    var q = url.parse(req.url, true);
    var princ = q.query.princ;
    var rate = q.query.rate;
    var year = q.query.year;
    var simpleIntr = (princ * rate * year) / 100;
    res.write(`<br><h1> Simple Interest = ${simpleIntr} </h1>`);
    res.end();
  }
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server Started on port 3000");
});
