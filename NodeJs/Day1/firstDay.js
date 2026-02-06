// Node Js
var http = require('http');
console.log("Hello World, This is first day NodeJs Course");

// server is object(we create multiple server)
var server = http.createServer(function(req, res){
    // res.end("Hello World, This is first day NodeJs Course");

    // res.end(JSON.stringify({message:"Hello World, This is first day NodeJs Course"}));

    res.write("Write the message to another method, but res.end to close");
    res.end();
});

server.listen('8080', function(){
    console.log('Server is running on port 8080');
})

var server2 = http.createServer(function(req, res){
    res.end("Server 2 running on port 8081");
});

server2.listen('8081', function(){
    console.log('Server2 is running on port 8081');
})

// REPL - Read, Eval, Print, Loop - REPL is using to run code direct to the teriminal, like function, print message, caculation those.
// Cmd - node, then write function or calculation

// other way to print Cmd - node -p 123-33