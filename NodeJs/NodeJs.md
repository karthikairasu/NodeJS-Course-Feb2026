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

---

## Node.js Day 3 — File System (`fs`) Module

## 0) Quick Intro: What is `fs`?

`fs` (File System) is a core Node.js module that lets you **read, write, open, inspect, and manage files and folders** on your computer. It provides:

- **Asynchronous APIs (callback-based)** → non-blocking (preferred for servers)
- **Synchronous APIs** → blocking (useful for quick scripts or setup tasks)

You don’t need to install anything—just `require('fs')`.

---

## 1) Read Files — `fs.readFile` (Async)

### 1.1🔹 What it does

Reads the content of a file **asynchronously** (non-blocking). You pass a **filename**, an **encoding** (like `'utf-8'` for text), and a **callback** function that gets `err` or `data`.

### 1.2🔹 Syntax

```js
fs.readFile(filename, [encoding], callback);
// callback: function(err, data) { ... }
```

### 1.3🔹 Example — **thirdDay.js** (read)

```js
// thirdDay.js
const fs = require('fs');

// Read a text file asynchronously
fs.readFile("sample.txt", "utf-8", function (err, data) {
  if (err) {
    console.log("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});
```

> ✅ **Tip:** Always use `"utf-8"` for text files so you get a string instead of a Buffer.

---

## 2) Write Files — `fs.writeFile` (Async)

### 2.1🔹 What it does

Writes text/content to a file. If the file doesn’t exist, it creates it. If it **does** exist, it **overwrites** by default.

### 2.2🔹 Syntax

```js
fs.writeFile(filename, content, [encoding], callback);
// callback: function(err) { ... }
```

### 2.3🔹 Example — **thirdDay.js** (write + then read)

```js
// thirdDay.js
const fs = require('fs');

// Write to a file asynchronously
fs.writeFile("sample.txt", "Hello, World! This is a sample file.", function (err) {
  if (err) {
    console.log("Error writing to file:", err);
  } else {
    console.log("File written successfully.");

    // Read back the file to verify
    fs.readFile("sample.txt", "utf-8", function (err, data) {
      if (err) {
        console.log("Error reading file:", err);
      } else {
        console.log("File content:", data);
      }
    });
  }
});
```

---

## 3) Open Files — `fs.open` and Low-Level `fs.write`

### 3.1🔹 What it does

`fs.open` opens a file and returns a **file descriptor (fd)**. You can then use low-level methods like `fs.write` to write to it. This gives more control (e.g., partial writes, positions, modes).

### 3.2🔹 Open Modes (common)

- `r`  → Open for reading (error if not exists)
- `r+` → Open for reading and writing (error if not exists)
- `w`  → Open for writing (create if not exists, **truncate** if exists)
- `w+` → Read + write (create if not exists, **truncate** if exists)
- `a`  → Append (create if not exists)
- `a+` → Read + append (create if not exists)

### 3.3🔹 Syntax

```js
fs.open(filename, mode, callback);
// callback: function(err, fd) { ... }

fs.write(fd, data, callback);
// callback: function(err, written, stringOrBuffer) { ... }
```

### 3.4🔹 Example — **openMethod.js** (append with `a+`)

```js
// openMethod.js
const fs = require('fs');

// Open (or create) a file in read+append mode
fs.open("sample1.txt", "a+", (err, fd) => {
  if (err) {
    console.log("Error opening file:", err);
    return;
  }

  const txt = "This is my sample content 000000 for writing to file\n";

  // Write using file descriptor
  fs.write(fd, txt, (err) => {
    if (err) {
      console.log("Error writing to file:", err);
    } else {
      console.log("File written successfully.");
    }

    // Always close the file descriptor
    fs.close(fd, (closeErr) => {
      if (closeErr) console.log("Error closing file:", closeErr);
    });
  });
});
```

> ✅ **Good practice:** Close the file after writing using `fs.close`.

---

## 4) Real-World Example: Save Orders (write → read → append)

We’ll:

1. Save an **order object** as JSON to `order.txt`
2. Read it back
3. Append a human-readable order line
4. Read again

### 4.1🔹 Example — **buyProduct.js**

```js
// buyProduct.js
const fs = require('fs');

// 1) Create an order object
const order = {
  productId: 123,
  customer: "karthi",
  product: "Laptop",
  price: 50000,
  quantity: 1,
  date: new Date()
};

// 2) Write JSON to a file
fs.writeFile("order.txt", JSON.stringify(order), function (err) {
  if (err) {
    console.log("Error writing to file:", err);
  } else {
    console.log("Order saved successfully.");

    // 3) Read the file back
    fs.readFile("order.txt", "utf-8", function (err, data) {
      if (err) {
        console.log("Error reading file:", err);
      } else {
        console.log("File content (JSON):", data);

        // Optional: parse JSON if needed
        try {
          const parsed = JSON.parse(data);
          console.log("Parsed order object:", parsed);
        } catch (parseErr) {
          console.log("Error parsing JSON:", parseErr);
        }

        // 4) Append a new order entry (human-readable)
        const newOrder = `\nOrder Details: orderID: 124, product: Mobile, price: 20000, quantity: 2, date: ${new Date()};`;
        fs.appendFile('order.txt', newOrder, (err) => {
          if (err) {
            console.log("Error appending to file:", err);
          } else {
            console.log("Order appended successfully.");

            // 5) Read again to show final content
            fs.readFile("order.txt", "utf-8", function (err, finalData) {
              if (err) {
                console.log("Error reading file:", err);
              } else {
                console.log("Final file content:\n", finalData);
              }
            });
          }
        });
      }
    });
  }
});
```

> ℹ️ You’re mixing **JSON** and **plain text** in the same file here (fine for a demo). For production, prefer one format (e.g., JSON Lines or pure JSON array).

---

## 5) Logging Activity — `fs.appendFile`

### 5.1🔹 What it does

Appends content to a file. Great for **logs** where we keep adding lines.

### 5.2🔹 Syntax

```js
fs.appendFile(filename, data, callback);
// callback: function(err) { ... }
```

### 5.3🔹 Example — **logActivity.js**

```js
// logActivity.js
const fs = require('fs');

const logActivity = (activity) => {
  // Build a log line with ISO timestamp
  const logEntry = `${new Date().toISOString()} - ${activity}\n`;

  fs.appendFile("log.txt", logEntry, (err) => {
    if (err) {
      console.log("Error writing to log file:", err);
    }
  });
};

// Log some user actions
logActivity("User logged in");
logActivity("User viewed product page");
logActivity("User added item to cart");
logActivity("User logged out");
```

---

## 6) Synchronous APIs — `fs.readFileSync` / `fs.writeFileSync`

### 6.1🔹 What it does

Synchronous versions block the event loop until the operation finishes. Use them for small scripts, CLI tools, or startup logic—not inside a live server request.

### 6.2🔹 Syntax

```js
const data = fs.readFileSync(filename, [encoding]);
fs.writeFileSync(filename, content, [encoding]);
```

### 6.3🔹 Example — **synFile.js**

```js
// synFile.js
const fs = require('fs');

// Write synchronously
fs.writeFileSync("syncfile.txt", "This is a sample text for synchronous file writing.");

// Read synchronously
try {
  const data = fs.readFileSync("syncfile.txt", "utf-8");
  console.log("File content:", data);
} catch (err) {
  console.log("Error reading file:", err);
}
```

---

## 7) File/Folder Info — `fs.stat` (`isFile()`, `isDirectory()`)

### 7.1🔹 What it does

Gets metadata about a path. From `stats` you can check if it’s a file or directory.

### 7.2🔹 Syntax

```js
fs.stat(path, callback);
// callback: function(err, stats) { stats.isFile(), stats.isDirectory(), ... }
```

### 7.3🔹 Example — **folders.js** (stat)

```js
// folders.js
const fs = require('fs');

const fileOrFolder = "c:/java-2-4/sample.java"; // Change path if needed!

fs.stat(fileOrFolder, (err, stats) => {
  if (err) {
    console.log("Error getting file stats:", err);
  } else {
    console.log("Is File?:", stats.isFile());
    console.log("Is Directory?:", stats.isDirectory());
  }
});
```

> ⚠️ The path `c:/java-2-4/...` is **Windows-specific**. Update paths according to your OS.

---

## 8) Create Folder — `fs.mkdir`

### 8.1🔹 What it does

Creates a directory. Add `{ recursive: true }` to create nested directories if needed.

### 8.2🔹 Syntax

```js
fs.mkdir(path, [options], callback);
// options: { recursive: true }
```

### 8.3🔹 Example — **folders.js** (mkdir)

```js
// folders.js (continued)
const dirPath = "c:/java-2-4/test"; // Change path if needed

fs.mkdir(dirPath, (err) => {
  if (err) {
    console.log("Error creating directory:", err);
  } else {
    console.log("Directory created successfully.");
  }
});
```

---

## 9) List Folder — `fs.readdir`

### 9.1🔹 What it does

Reads the **names of files and folders** inside a directory.

### 9.2🔹 Syntax

```js
fs.readdir(path, callback);
// callback: function(err, filesArray) { ... }
```

### 9.3🔹 Example — **folders.js** (readdir)

```js
// folders.js (continued)
const parentDir = "c:/java-2-4"; // Change path if needed

fs.readdir(parentDir, (err, files) => {
  if (err) {
    console.log("Error reading directory:", err);
  } else {
    console.log("Files in directory:");
    files.forEach(file => console.log(file));
  }
});
```

---

## 10) Delete Files and Folders — `fs.unlink`, `fs.rmdir`, `fs.rm`

### 10.1🔹 `fs.unlink(path, cb)`

Deletes a **file**.

### 10.2🔹 `fs.rmdir(path, cb)`

Deletes an **empty** folder. (Note: deprecated in favor of `fs.rm` in recent Node versions.)

### 10.3🔹 `fs.rm(path, { recursive: true, force: true }, cb)`

Deletes a folder **and its contents** (be careful!).

### 10.4🔹 Example snippets

```js
const fs = require('fs');

// Delete a single file
fs.unlink("c:/java-2-4/test/sample.txt", (err) => {
  if (err) console.log("Error deleting file:", err);
  else console.log("File deleted.");
});

// Delete an empty folder (legacy)
fs.rmdir("c:/java-2-4/emptyFolder", (err) => {
  if (err) console.log("Error removing folder:", err);
  else console.log("Empty folder removed.");
});

// Delete a folder and everything inside (modern & powerful)
fs.rm("c:/java-2-4/test", { recursive: true, force: true }, (err) => {
  if (err) console.log("Error removing folder recursively:", err);
  else console.log("Folder (and contents) removed.");
});
```

> ⚠️ **Danger:** `fs.rm` with `{ recursive: true, force: true }` can remove entire directories. Double-check your path!

---

## 11) Summary Table (Concepts & When to Use)

- **`readFile` / `writeFile`** → Asynchronous, recommended for servers and most cases
- **`open` + `write`** → Low-level control; useful for appending with file descriptors or partial writes
- **`appendFile`** → Quick way to add lines to logs
- **`readFileSync` / `writeFileSync`** → Blocking; ok for scripts, CLI, or setup
- **`stat`** → Inspect path metadata (file vs directory)
- **`mkdir` / `readdir`** → Create and list directories
- **`unlink` / `rmdir` / `rm`** → Delete files/folders

---

## 12) How to Run Each File

```bash
node thirdDay.js
node openMethod.js
node buyProduct.js
node logActivity.js
node synFile.js
node folders.js
```

> Ensure the input files/folders exist and your **paths are correct** for your OS.

---

## 13) Common Pitfalls & Pro Tips

- **Encoding:** Use `"utf-8"` to read/write **text**. If omitted, `readFile` returns a **Buffer**.
- **Windows vs Linux paths:**
  - Windows → `c:/users/...`
  - Linux/Mac → `/home/user/...`
  - Cross-platform: use Node’s `path` module:

    ```js
    const path = require('path');
    const fullPath = path.join(__dirname, 'data', 'file.txt');
    ```

- **Close file descriptors** after `fs.open` with `fs.close`.
- **Error-first callbacks:** Always check `if (err) { ... }`.
- **JSON storage:** If you store multiple orders in a single JSON file, consider an array or newline-delimited JSON (NDJSON).
- **Synchronous APIs:** Avoid inside web request handlers; they block the event loop.

---

## Complete Code Files (for convenience)

> You can copy-paste these into your project as is.

### **thirdDay.js**

```js
const fs = require('fs');

// Write to a file asynchronously
fs.writeFile("sample.txt", "Hello, World! This is a sample file.", function (err) {
  if (err) {
    console.log("Error writing to file:", err);
  } else {
    console.log("File written successfully.");

    // Read back the file to verify
    fs.readFile("sample.txt", "utf-8", function (err, data) {
      if (err) {
        console.log("Error reading file:", err);
      } else {
        console.log("File content:", data);
      }
    });
  }
});
```

### **openMethod.js**

```js
const fs = require('fs');

// Open (or create) a file in read+append mode
fs.open("sample1.txt", "a+", (err, fd) => {
  if (err) {
    console.log("Error opening file:", err);
    return;
  }

  const txt = "This is my sample content 000000 for writing to file\n";

  fs.write(fd, txt, (err) => {
    if (err) {
      console.log("Error writing to file:", err);
    } else {
      console.log("File written successfully.");
    }

    fs.close(fd, (closeErr) => {
      if (closeErr) console.log("Error closing file:", closeErr);
    });
  });
});
```

### **buyProduct.js**

```js
const fs = require('fs');

const order = {
  productId: 123,
  customer: "karthi",
  product: "Laptop",
  price: 50000,
  quantity: 1,
  date: new Date()
};

fs.writeFile("order.txt", JSON.stringify(order), function (err) {
  if (err) {
    console.log("Error writing to file:", err);
  } else {
    console.log("Order saved successfully.");

    fs.readFile("order.txt", "utf-8", function (err, data) {
      if (err) {
        console.log("Error reading file:", err);
      } else {
        console.log("File content (JSON):", data);

        try {
          const parsed = JSON.parse(data);
          console.log("Parsed order object:", parsed);
        } catch (parseErr) {
          console.log("Error parsing JSON:", parseErr);
        }

        const newOrder = `\nOrder Details: orderID: 124, product: Mobile, price: 20000, quantity: 2, date: ${new Date()};`;
        fs.appendFile('order.txt', newOrder, (err) => {
          if (err) {
            console.log("Error appending to file:", err);
          } else {
            console.log("Order appended successfully.");

            fs.readFile("order.txt", "utf-8", function (err, finalData) {
              if (err) {
                console.log("Error reading file:", err);
              } else {
                console.log("Final file content:\n", finalData);
              }
            });
          }
        });
      }
    });
  }
});
```

### **logActivity.js**

```js
const fs = require('fs');

const logActivity = (activity) => {
  const logEntry = `${new Date().toISOString()} - ${activity}\n`;
  fs.appendFile("log.txt", logEntry, (err) => {
    if (err) {
      console.log("Error writing to log file:", err);
    }
  });
};

logActivity("User logged in");
logActivity("User viewed product page");
logActivity("User added item to cart");
logActivity("User logged out");
```

### **synFile.js**

```js
const fs = require('fs');

fs.writeFileSync("syncfile.txt", "This is a sample text for synchronous file writing.");

try {
  const data = fs.readFileSync("syncfile.txt", "utf-8");
  console.log("File content:", data);
} catch (err) {
  console.log("Error reading file:", err);
}
```

### **folders.js**

```js
const fs = require('fs');

// 1) stat
const filefoldername = "c:/java-2-4/sample.java"; // Adjust path if needed
fs.stat(filefoldername, (err, stats) => {
  if (err) {
    console.log("Error getting file stats:", err);
  } else {
    console.log("Is File?:", stats.isFile());
    console.log("Is Directory?:", stats.isDirectory());
  }
});

// 2) mkdir
fs.mkdir("c:/java-2-4/test", (err) => {
  if (err) {
    console.log("Error creating Directory:", err);
  } else {
    console.log("Directory created successfully.");
  }
});

// 3) readdir
fs.readdir("c:/java-2-4", (err, files) => {
  if (err) {
    console.log("Error reading Directory:", err);
  } else {
    console.log("Files in directory:");
    files.forEach(file => {
      console.log(file);
    });
  }
});
```

---