import net from "net";

var server = net.createServer((connection) => {
    console.log("Client connected");
    connection.on("data", (data) => {
        console.log("Received data from client: " + data);
        connection.write("Hello from server");
    })
    connection.on("end", () => {
        console.log("Client disconnected");
    });
    connection.on("error", (err) => {
        console.error("Error: " + err);
    });

});

server.listen(8080, () => {
    console.log("Server listening on port 8080");
});