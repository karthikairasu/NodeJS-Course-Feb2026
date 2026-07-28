import http from 'http';

const server =  http.createServer((req, res) => {
    // res.write("Hello World, This is first day NodeJs Course");
    // res.write(req.method);
    // res.end();
    if(req.method === "GET") {
        if(req.url === "/") {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("Hello World, This is first day NodeJs Course");
            res.end();
        }else if(req.url === "/about") {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("This is about page");
            res.end();
        }else if(req.url === "/contact") {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("This is contact page");
            res.end();
        }else {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write("Page not found");
            res.end();
        }
    }else if(req.method === "POST") {
        let body = "";
        if(req.url === "/login") {
            req.on("data", (data) => {
                body+=data.toString();
            });
            req.on('end', () => {
                console.log(body);
                res.end(JSON.stringify({stats:"success", message: "Data received"}));
            });
        }
    }
})

server.listen(8080, () => {
    console.log("Server is running on port 8080");
});
