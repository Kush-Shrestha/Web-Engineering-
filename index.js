const http = require("http");

const myServer = http.createServer( (req, res)=>{
    console.log(req.headers);
    res.end("Hello World");
} );

myServer.listen(3000, ()=>{
    console.log("Server has started and is running");
} );