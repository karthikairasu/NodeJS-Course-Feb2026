import net from "net";
var client=net.createConnection({port:8080}, ()=>{
        console.log("Connected to server");
        client.write("Hello, Server!");
});

client.on('data', (data) => {
    console.log("Received data from server: " + data);
    client.end();
});

client.on('end', () => {
    console.log("Disconnected from server");
})