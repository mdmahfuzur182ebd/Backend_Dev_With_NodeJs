// HTTP Module
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world");
    res.end()
  }
  if(req.url === '/students'){
    res.write(JSON.stringify([
        {name: "some"},
        {name: "Thing"}
    ]))
    res.end()
  }
});

server.listen(3000); //3000-> Port Number.
console.log("Listening on Port 3000.....")
