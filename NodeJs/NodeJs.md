# Node.js Training 🚀

## Day 1 – Basics & HTTP Server

This repository contains introductory notes and examples from Day 1 of Node.js training, focusing on creating HTTP servers and understanding core Node.js concepts.

---

## 📖 What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment built on  **Google Chrome’s V8 JavaScript engine** . It allows developers to execute JavaScript code outside the browser, primarily on the server side.

Node.js is designed to build  **scalable, high-performance network applications** .

### Key Features

- Supports **Synchronous** and **Asynchronous** operations
- **Event‑driven** and **non‑blocking I/O**
- Lightweight and efficient
- Used for building fast and **scalable** applications
- Suitable for real-time applications
- Single-threaded with event loop architecture

---

## 🧩 Types of Operations in Node.js

Node.js mainly handles the following types of operations:

- **HTTP Server** – Handle client requests and responses, Used to build APIs and web servers
- **File Operations** – Read and write files using built-in modules(Handled using the built-in `fs` module)

---

## 🛠️ Prerequisites

Ensure Node.js is installed.

Check installation:

```bash
node -v
```

---

## 📦 Core Module Used

### HTTP Module

The `http` module is used to create web servers and handle HTTP requests and responses.

Importing the module:

```bash
var http = require('http');
```

## 🌐 Creating an HTTP Server (Port 8080)

### Important Concepts

- A server is an **object**
- We can create **multiple servers** in Node.js
- `res.write()` sends data
- `res.end()` closes the response

### Example Code

```bash
var http = require('http');

console.log("Hello World, This is first day NodeJs Course");

var server = http.createServer(function(req, res) {
    // res.end("Hello World, This is first day NodeJs Course");

    // res.end(JSON.stringify({
    //     message: "Hello World, This is first day NodeJs Course"
    // }));

    res.write("Write the message to another method, but res.end to close");
    res.end();
});

server.listen(8080, function() {
    console.log('Server is running on port 8080');
});
```

---

## 🌍 Creating Multiple Servers (Port 8081)

Node.js allows running multiple servers at the same time using different ports.

```bash
var server2 = http.createServer(function(req, res) {
    res.end("Server 2 running on port 8081");
});

server2.listen(8081, function() {
    console.log('Server2 is running on port 8081');
});
```

---

## 🧪 Running the Application

Run the app:

```bash
node app.js
```

Open in browser:

- <http://localhost:8080>
- <http://localhost:8081>

---

## 🧠 Node.js REPL

**REPL stands for:**

- Read
- Eval
- Print
- Loop

### What is REPL?

REPL allows you to execute JavaScript code directly in the terminal.

**How to Use REPL:**

```bash
node
```

**Then you can:**

- Run functions
- Print messages
- Do calculations

**Example:**

```bash
2 + 3
console.log("Hello Node.js")
```

---

## ⚡ Quick Command Execution

```bash
node -p 123-33
```

---

## ✅ Key Learnings

- Node.js supports both **sync and async** execution
- Multiple HTTP servers can run on **different ports**
- `http.createServer()` is used to create servers
- `res.end()` is mandatory to finish a response
- REPL helps test JavaScript quickly in terminal
