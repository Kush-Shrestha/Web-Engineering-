const http = require("http");

const fs= require("fs");

const myServer = http.createServer( (req, res)=>{
    // console.log(req.headers);   // if we only do console.log(req) then the req here work as a object that stores info of request 
    const log = `${Date.now()}: ${req.url} New Request has been Received\n`;
    fs.appendFile("log.txt", log , (err, data)=> {
        switch(req.url){
            case'/':res.end("Thanks for your support at Homepage");
            break
            case'/about': res.end("Hey there, I am Kush");
            break
            default: res.end("Sorry,NOT Found ");
        }
    });
} );

myServer.listen(3000, ()=>{
    console.log("Server has started and is running");
} );