# Node.js Training 🚀

Important Extensions VsCode

- React Essentials Extension Pack (43)
- Office Viewer
- Mintlify Doc Writer for Python, JavaScript, TypeScript, C++, PHP

## Day 2 – Basics & HTTP Server

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

- [http://localhost:8080](http://localhost:8080)
- [http://localhost:8081](http://localhost:8081)

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

## Node.js Day 4 — CSV Handling & System (process) API

---

## 0) What you’ll learn today

- How to **read CSV** using [`csv-parser`]
- How to **write CSV** using [`fast-csv`]
- How to **append** to existing CSV files
- Brief note on reading **other formats** (e.g., PDFs) with packages like `pdf-parse`
- How to interact with Node’s **`process` object** (PID, version, argv, memory, cwd, events, signals)

> All examples are simple, callback‑based, and mirror your snippets.

---

## 1) Reading CSV files — `csv-parser`

### 🔹 What it is

`csv-parser` is a lightweight streaming parser for CSV files. It reads a CSV file line by line and emits parsed **row objects**.

### 🔹 Why streaming matters

For big files, streaming means **low memory usage**—you don’t load the entire file at once.

### 🔹 Basic syntax

```js
const fs = require('fs');
const csv = require('csv-parser');

fs.createReadStream('path/to/file.csv')
  .pipe(csv(/* optional options */))
  .on('data', (row) => { /* row is a JS object */ })
  .on('end', () => { /* done */ });
```

### 🔹 Full example — **csvread.js** (read + write + append)

```js
// csvread.js
const fs = require('fs');
const csv = require('csv-parser');
const { writeToPath } = require('fast-csv');

const employees = [];

// 1) READ: stream from an existing CSV
fs.createReadStream('C:/Users/Karthikairasu/users.csv')
  .pipe(csv())
  .on('data', row => employees.push(row))
  .on('end', () => console.log(employees));

// 2) WRITE: create a new CSV from array of objects
const data = [
  { id: '1', name: 'Karthi', age: '31', department: 'IT', salary: '70000' },
  { id: '2', name: 'user1',  age: '31', department: 'IT', salary: '70000' },
  { id: '3', name: 'user2',  age: '31', department: 'IT', salary: '70000' },
  { id: '4', name: 'user3',  age: '31', department: 'IT', salary: '70000' },
];

writeToPath('C:/Users/Karthikairasu/empolyees.csv', data, { headers: true })
  .on('error', err => console.log(err))
  .on('finish', () => console.log('Write to CSV successfully'));

// 3) APPEND: add a new CSV line (raw string)
const newEmployess = "\n5, praveen, 32, Sales, 65000";
fs.appendFile('C:/Users/Karthikairasu/empolyees.csv', newEmployess, err => {
  if (err) console.log(err);
  else console.log('New empolyee added successfully');
});
```

> ✅ **Notes**
>
> - The file name `empolyees.csv` is kept **as in your example** (misspelling included) so your output matches.
> - Appending a raw line is fine for demos. In production, prefer using `fast-csv` to append structured rows so headers and ordering stay consistent.

---

## 2) Writing CSV — `fast-csv`

### 2.1🔹 What it is

`fast-csv` can write arrays of objects to CSV and also read CSV streams. It’s convenient for **headers**, **quoting**, and **formatting**.

### 2.2🔹 Basic write syntax

```js
const { writeToPath } = require('fast-csv');

writeToPath('output.csv', rows, { headers: true })
  .on('error', console.error)
  .on('finish', () => console.log('done!'));
```

### 2.3🔹 Appending with `fast-csv` (tip)

To append rows structurally, open a **write stream** in append mode and use `format`:

```js
const fs = require('fs');
const { format } = require('@fast-csv/format');

const stream = fs.createWriteStream('output.csv', { flags: 'a' });
const csvStream = format({ headers: false });

csvStream.pipe(stream).on('end', () => process.exit());
csvStream.write({ id: '5', name: 'praveen', age: '32', department: 'Sales', salary: '65000' });
csvStream.end();
```

---

## 3) Reading **other formats** (e.g., PDFs)

CSV is just one format. You can also parse PDFs using libraries like **`pdf-parse`**:

```js
const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('path/to/file.pdf');
pdf(dataBuffer).then(data => {
  console.log(data.text); // Extracted text
});
```

> ⚠️ Output quality depends on the PDF (text vs scanned images). For scanned PDFs you’d need OCR (e.g., `tesseract.js`).

---

## 4) System details & events — the `process` object

`process` is a global object in Node.js that gives you **info about the current Node process** and methods to interact with it.

### 🔹 Common properties & methods

- `process.pid` → current process ID
- `process.version` → Node version (e.g., `v20.x`)
- `process.versions` → versions of deps (V8, uv, etc.)
- `process.argv` → command‑line arguments (index 0: node path, 1: script path)
- `process.memoryUsage()` → memory stats (rss, heapUsed, heapTotal, etc.)
- `process.cwd()` → current working directory
- `process.chdir(dir)` → change working directory
- `process.platform` → OS platform (win32, linux, darwin)
- `process.env` → environment variables
- `process.uptime()` → seconds since the process started

### 🔹 Lifecycle events

- `beforeExit` → emitted when Node’s event loop becomes empty (you can schedule more work here)
- `exit` → emitted **right before** the process exits (no async work allowed here)

### 🔹 Signals

- `SIGINT` → Ctrl+C in terminal
- `SIGTERM` → termination signal from OS/service managers
- `SIGUSR1`/`SIGUSR2` → user signals (availability varies by OS)

> ⚠️ On Windows, not all POSIX signals are supported. `SIGINT` works (Ctrl+C). Others may be ignored.

### 🔹 Full example — **ProccessObj.js** (kept filename as given)

```js
// ProccessObj.js
// System details interaction examples

// Uncomment to explore:
// console.log(process.pid);
// console.log(process.uptime());
// console.log(process.memoryUsage());
// console.log(process.cwd());
// console.log(process.argv);
// console.log(process.platform);
// console.log(process.env);

// Lifecycle events
// process.on('beforeExit', code => {
//   console.log('Process is about to exit with code:', code);
// });
// process.on('exit', code => {
//   console.log('Process exited with code:', code);
// });
// console.log('This will be logged before the process exits.');

// A demo to start a task and then abort the process
const abortProcess = () => {
  console.log('Start Process');
  setInterval(() => {
    console.log('Running....');
  }, 1000);

  setTimeout(() => {
    console.log('Abort Process....');
    return process.abort(); // Generates a core dump and exits immediately
  }, 5000);
};
// abortProcess();

// Changing directories (will throw if folder not found)
// console.log(`Starting Directory: ${process.cwd()}`);
// try {
//   process.chdir('karthik');
//   console.log(`New Directory: ${process.cwd()}`);
// } catch (err) {
//   console.log('Error changing directory:', err);
// }

// Signal handling
const pid = process.pid;
console.log(`Current Process ID: ${pid}`);

// NOTE: 'SIGNUP' is not a standard signal name. Use 'SIGUSR1' or 'SIGINT'.
process.on('SIGUSR1', () => {
  console.log('Received SIGUSR1. Exiting gracefully...');
});
process.on('SIGINT', () => {
  console.log('Received SIGINT. Exiting gracefully...');
  process.exit(0);
});

// Keep process alive for a bit
setTimeout(() => {}, 100000);

// Programmatically send SIGINT to self after 3s
setTimeout(() => {
  try {
    process.kill(pid, 'SIGINT'); // pass signal as a string
  } catch (e) {
    console.log('Error sending signal:', e);
  }
}, 3000);
```

> ✅ **Fixes applied to your snippet**
>
> - Replaced non‑standard `'SIGNUP'` with `'SIGUSR1'`.
> - In `process.kill`, the signal must be a **string**: `'SIGINT'` (not an undefined variable `SIGINT`).
> - Added `process.exit(0)` during `SIGINT` handling for a clean exit in the example.

---

## 5) How to run these files

```bash
node csvread.js
node ProccessObj.js
```

> Make sure the input paths exist (e.g., `C:/Users/Karthikairasu/users.csv`). If you’re on macOS/Linux, update the paths (e.g., `/Users/you/users.csv`).

---

## 6) Troubleshooting & Pro Tips

- **Windows signals:** Only a subset works (`SIGINT` via Ctrl+C is reliable). Others may be ignored.
- **CSV headers:** When writing with `fast-csv`, set `{ headers: true }` once. If you append raw lines later, ensure the **column order** matches the header.
- **Encoding:** CSV files are usually UTF‑8. If you see garbled characters, ensure your editor and files are saved as UTF‑8.
- **Large CSVs:** Prefer streaming readers (`csv-parser`) to avoid high memory usage.
- **Processes exiting early:** If your script ends before async work finishes, keep the event loop alive (e.g., a pending timer) or chain callbacks/promises properly.

---

## 7) Quick Reference

### CSV

- Read (stream): `fs.createReadStream(...).pipe(csv()).on('data', ...).on('end', ...)`
- Write (objects → CSV): `writeToPath('file.csv', rows, { headers: true })`
- Append (raw): `fs.appendFile('file.csv', "\n5, name, age, dept, salary", cb)`

### process

- IDs/paths: `process.pid`, `process.cwd()`, `process.chdir(path)`
- Info: `process.version`, `process.argv`, `process.memoryUsage()`, `process.uptime()`
- Events: `process.on('beforeExit', cb)`, `process.on('exit', cb)`
- Signals: `process.on('SIGINT', cb)`, `process.kill(pid, 'SIGINT')`

---

## Node.js Day 5 — **Database Connections (MySQL & MongoDB)**

*A clear, beginner‑friendly guide with the same examples/filenames you shared, plus fixed versions, explanations, and comments.*

---

## 0) Big Picture: How your app talks to a database

```bash
            connection
Node.js  -------------------->  Database
  BL (Business Logic)   obj
       <--------------------
              queries
       --------------------->
               data
       <---------------------
```

- Your Node.js code creates a **connection** to the DB.
- You send **queries** (SQL for MySQL; queries/doc ops for MongoDB).
- The DB returns **data** (or status), which you use in your **business logic**.

---

## 1) MySQL in Node.js — `mysql2`

### 🔹 Why `mysql2`?

- `mysql2` is a modern, fast MySQL client for Node.js.
- It supports callbacks **and** Promises, prepared statements, and connection pools.

### 🔹 Install prerequisites

1. **Install MySQL Server** on your machine.
2. Create a database and a table using the MySQL shell.

### 🔹 Terminal commands you listed (with minor formatting)

```sql
-- 1) Login to MySQL
mysql -u root -p

-- 2) Create a database
CREATE DATABASE mynodedata;

-- 3) Switch to it
USE mynodedata;

-- 4) Create table (based on your schema)
CREATE TABLE users (
  sno INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  pass VARCHAR(50),
  email TEXT,
  mobile CHAR(10)
);

-- 5) Describe table structure
DESC users;

-- 6) See rows
SELECT * FROM users;
```

> ✅ **Tip:** Table name must match what you insert into. Your original code inserted into `register` while selecting from `users`. Use one consistent table (e.g., `users`).

---

## 2) `mysql2` — Basic connection pattern

### 🔹 Syntax (callback style)

```js
const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mynodedata'
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected');

  const sql = 'SELECT * FROM users';
  con.query(sql, (error, results) => {
    if (error) throw error;
    console.log('Rows:', results);

    con.end();
  });
});
```

### 🔹 Use **parameterized queries** to prevent SQL injection

```js
const insert = 'INSERT INTO users (name, pass, email, mobile) VALUES (?, ?, ?, ?)';
const params = ['karthik', '123456', 'test@gmail.com', '9999999999'];
con.query(insert, params, (err, res) => {
  if (err) throw err;
  console.log('Inserted ID:', res.insertId);
});
```

---

## 3) Your file — **db.js**

### 🔹 Fixed version — **db.js** (callback style, parameterized, single connect)

```js
// db.js
const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mynodedata',
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected');

  // INSERT (parameterized)
  const insertSql = 'INSERT INTO users (name, pass, email, mobile) VALUES (?, ?, ?, ?)';
  const params = ['karthik', '123456', 'test@gmail.com', '9999999999'];

  con.query(insertSql, params, (insertErr, insertRes) => {
    if (insertErr) throw insertErr;
    console.log('Record inserted. ID =', insertRes.insertId);

    // SELECT
    const selectSql = 'SELECT * FROM users';
    con.query(selectSql, (selectErr, rows) => {
      if (selectErr) throw selectErr;
      console.log('Users:', rows);

      // Close connection after all queries complete
      con.end((endErr) => {
        if (endErr) console.error('Error closing connection:', endErr);
        else console.log('Connection closed');
      });
    });
  });
});
```

> ✅ **Tip:** For real apps, use a **connection pool** (`mysql.createPool`) to handle multiple concurrent queries efficiently.

---

## 4) MongoDB in Node.js — Native Driver

### 🔹 Two common ways

- **Native MongoDB Driver** (`mongodb` package) — what your example shows.
- **Mongoose** — ODM that adds schemas/models/validators on top of MongoDB.

### 🔹 Install & connect

```bash
npm install mongodb
```

- Local URL: `mongodb://localhost:27017`
- Atlas URL (Cloud): `mongodb+srv://<user>:<pass>@<cluster-url>/?appName=<AppName>`

### 🔹 Your file — **mongodb.js**

#### Fixed version — **mongodb.js** (ESM with `try/catch/finally`)

```js
// mongodb.js (ESM)
import { MongoClient } from 'mongodb';
import 'dotenv/config'; // npm i dotenv  (and add TYPE=module in package.json if using ESM)

// Example: put these in a .env file
// MONGO_URL=mongodb+srv://<user>:<pass>@<cluster-url>/?appName=App
// MONGO_DB=mynodedata

const url = process.env.MONGO_URL || 'mongodb://localhost:27017';
const dbname = process.env.MONGO_DB || 'mynodedata';

const client = new MongoClient(url);

try {
  await client.connect();
  console.log('Connected to MongoDB');

  const db = client.db(dbname);
  const collection = db.collection('users');

  // INSERT example
  // const result = await collection.insertOne({
  //   name: 'karthi',
  //   pass: 'karthi',
  //   email: 'test@gmail.com',
  //   mobile: '8739879879'
  // });
  // console.log('Record inserted with _id:', result.insertedId);

  // FIND example
  const users = await collection.find({}).toArray();
  console.log('Users:', users);
} catch (err) {
  console.error(err);
} finally {
  await client.close();
  console.log('MongoDB connection closed');
}
```

> ✅ **Tip:** If you prefer **CommonJS**, you can switch to:

```js
// mongodb.cjs (CommonJS)
require('dotenv/config');
const { MongoClient } = require('mongodb');
const url = process.env.MONGO_URL || 'mongodb://localhost:27017';
const dbname = process.env.MONGO_DB || 'mynodedata';

(async () => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const users = await client.db(dbname).collection('users').find({}).toArray();
    console.log(users);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
})();
```

---

## 5) (Optional) Mongoose quick peek

If you choose **Mongoose**:

```bash
npm install mongoose
```

```js
import mongoose from 'mongoose';
await mongoose.connect(process.env.MONGO_URL);

const userSchema = new mongoose.Schema({
  name: String,
  pass: String,
  email: String,
  mobile: String,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
const doc = await User.create({ name: 'karthi', pass: '123', email: 't@t.com', mobile: '9999999999' });
console.log(doc._id);
```

Mongoose gives you **schemas**, **validators**, and **middleware**—handy for larger apps.

---

## 6) Security & production tips

- **Never hardcode passwords**. Use environment variables (`dotenv`) or a secret manager.
- For MySQL, use **prepared statements** (parameterized queries) to prevent SQL injection.
- Use **connection pools** for better performance and resource usage.
- Add **error handling** and **retries** for transient failures.
- Close connections with `con.end()` (MySQL) and `client.close()` (MongoDB).

---

## 7) How to run

```bash
# MySQL example
node db.js

# MongoDB example (ESM)
node mongodb.js
```

> Ensure the DB services are running and the connection strings (host, user, password, DB name) are correct.

---

## 8) Quick Reference

### MySQL (`mysql2`)

- Create connection: `mysql.createConnection({...})`
- Connect: `con.connect(cb)` → `err`
- Query: `con.query(sql, params?, cb)` → `(err, results)`
- Close: `con.end(cb)`

### MongoDB (native driver)

- Create client: `new MongoClient(url)`
- Connect: `await client.connect()`
- DB & collection: `client.db(name).collection('users')`
- Insert: `insertOne(doc)`
- Find: `find(query).toArray()`
- Close: `await client.close()`

---

## Complete Files (ready to copy)

### **db.js** (fixed)

```js
const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mynodedata',
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected');

  const insertSql = 'INSERT INTO users (name, pass, email, mobile) VALUES (?, ?, ?, ?)';
  const params = ['karthik', '123456', 'test@gmail.com', '9999999999'];

  con.query(insertSql, params, (insertErr, insertRes) => {
    if (insertErr) throw insertErr;
    console.log('Record inserted. ID =', insertRes.insertId);

    const selectSql = 'SELECT * FROM users';
    con.query(selectSql, (selectErr, rows) => {
      if (selectErr) throw selectErr;
      console.log('Users:', rows);

      con.end((endErr) => {
        if (endErr) console.error('Error closing connection:', endErr);
        else console.log('Connection closed');
      });
    });
  });
});
```

### **mongodb.js** (ESM fixed)

```js
import { MongoClient } from 'mongodb';
import 'dotenv/config';

const url = process.env.MONGO_URL || 'mongodb://localhost:27017';
const dbname = process.env.MONGO_DB || 'mynodedata';

const client = new MongoClient(url);

try {
  await client.connect();
  console.log('Connected to MongoDB');
  const users = await client.db(dbname).collection('users').find({}).toArray();
  console.log('Users:', users);
} catch (err) {
  console.error(err);
} finally {
  await client.close();
  console.log('MongoDB connection closed');
}
```

---

## Node.js Day 6 — **HTTP Server, `req.method`, `req.url`, GET & POST**

*A beginner‑friendly, topic‑wise guide using your exact `servers.js` example (with comments, fixes, and tips).*

---

## 0) Overview

In Node.js, the built‑in **`http`** module lets you create a web server. Each incoming HTTP request is represented by the **`req`** (IncomingMessage) object, and you respond with the **`res`** (ServerResponse) object.

### Request (`req`) quick look

- `req.method` → HTTP method (e.g., `GET`, `POST`, `PUT`, `DELETE`)
- `req.url` → URL path (e.g., `/`, `/about`, `/contact`)
- `req.headers` → headers sent by the client
- Request **body** (for `POST`/`PUT`) arrives as a **stream** → you gather it using `req.on('data')` and `req.on('end')`.

### Response (`res`) quick look

- `res.writeHead(statusCode, headers)` → set status code + headers
- `res.write(data)` → write response body chunks
- `res.end([data])` → finish the response (optionally with final data)

---

## 1) Your example — **servers.js** (ESM import)

Below is your file, kept as is and annotated to explain each piece:

```js
// servers.js
import http from 'http';

const server = http.createServer((req, res) => {
  // Basic exploration during learning:
  // res.write("Hello World, This is first day NodeJs Course");
  // res.write(req.method);
  // res.end();

  // 1) Handle GET routes
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('Hello World, This is first day NodeJs Course');
      res.end();
    } else if (req.url === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('This is about page');
      res.end();
    } else if (req.url === '/contact') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('This is contact page');
      res.end();
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('Page not found');
      res.end();
    }
  }
  // 2) Handle POST routes
  else if (req.method === 'POST') {
    let body = '';

    if (req.url === '/login') {
      req.on('data', (data) => {
        body += data.toString(); // accumulate chunks as UTF-8 string
      });

      req.on('end', () => {
        console.log(body); // e.g., "username=foo&password=bar" or JSON

        // Indicate JSON in the response header
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'success', message: 'Data received' }));
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'error', message: 'Route not found' }));
    }
  }
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
```

> ✅ **Notes**
>
> - I added a `Content-Type: application/json` header in the POST response for correctness.
> - This is **ESM** (uses `import`). If your project is CommonJS, use `const http = require('http')` instead, or set `"type": "module"` in `package.json`.

---

## 2) Understanding `req.method` (GET vs POST)

### GET

- Used to **retrieve** resources.
- Query data typically goes in the **URL** (e.g., `/search?q=node`).
- No request body is expected.

### POST

- Used to **send** data to the server (e.g., login forms, JSON payloads).
- Data arrives in the **body** as a stream. You collect it via `req.on('data')` and `req.on('end')`.

**Example body formats you might receive on `/login`:**

- `application/json` → `{"username":"karthi","password":"123456"}`
- `application/x-www-form-urlencoded` → `username=karthi&password=123456`

To parse them properly, you can:

- Manually parse JSON: `JSON.parse(body)` (inside a try/catch)
- Manually parse urlencoded: `new URLSearchParams(body)`
- Or use libraries/frameworks (e.g., Express) for automatic parsing.

---

## 3) Understanding `req.url` (routing basics)

`req.url` includes the path (e.g., `/about`) and possibly a query string (e.g., `/search?q=node`).

For manual routing (as in your example):

```js
if (req.url === '/') { /* home */ }
else if (req.url === '/about') { /* about */ }
else if (req.url === '/contact') { /* contact */ }
else { /* 404 */ }
```

If you also need to read **query parameters**, you can use the standard `URL` class:

```js
const urlObj = new URL(req.url, `http://${req.headers.host}`);
const q = urlObj.searchParams.get('q');
```

---

## 4) Response basics (status codes & headers)

- **Status codes**: `200` (OK), `201` (Created), `400` (Bad Request), `401` (Unauthorized), `404` (Not Found), `500` (Server Error) …
- **Common headers**:
  - `Content-Type`: `text/html`, `application/json`, `text/plain`
  - `Location` (for redirects)

**Examples:**

```js
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write('<h1>Hello</h1>');
res.end();

res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end('Not found');

res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ ok: true }));
```

---

## 5) Starting the server — `server.listen(port, cb)`

- Binds your server to a port (e.g., `8080`).
- The callback runs once the server is listening.
- Then you can open `http://localhost:8080` in your browser or use **Postman/curl**.

**Try these:**

```bash
# GET endpoints
curl http://localhost:8080/
curl http://localhost:8080/about
curl http://localhost:8080/contact

# POST endpoint (JSON)
curl -X POST http://localhost:8080/login \
  -H "Content-Type: application/json" \
  -d '{"username":"karthi","password":"123456"}'
```

---

## 6) Common pitfalls & pro tips

- **End every response** (`res.end()`), otherwise the connection may hang.
- Always set the **Content-Type** header that matches your body.
- For JSON input, wrap `JSON.parse(body)` in a try/catch to avoid crashing on invalid JSON.
- If you do a lot of routing/parsing, consider a framework like **Express** later (but mastering the core `http` module first is great!).
- For ESM vs CommonJS:
  - ESM: `import http from 'http'` and `"type": "module"` in `package.json`.
  - CJS: `const http = require('http')`.

---

## 7) Bonus: Minimal CommonJS version

If you prefer CommonJS syntax, here’s a minimal equivalent:

```js
// servers.cjs
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('Hello from CJS');
  }
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

server.listen(8080, () => console.log('Listening on 8080'));
```

---

## 8) Checklist (Day 6)

- [X] Created an HTTP server with `http.createServer`
- [X] Read `req.method` and `req.url` to route requests
- [X] Handled `GET` routes: `/`, `/about`, `/contact`
- [X] Handled `POST /login` and read the request body stream
- [X] Set proper status codes and `Content-Type` headers
- [X] Started the server on port `8080`

---

## Full file (ready to copy) — **servers.js**

```js
import http from 'http';

const server =  http.createServer((req, res) => {
  if(req.method === 'GET') {
    if(req.url === '/') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('Hello World, This is first day NodeJs Course');
      res.end();
    } else if(req.url === '/about') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('This is about page');
      res.end();
    } else if(req.url === '/contact') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('This is contact page');
      res.end();
    } else {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write('Page not found');
      res.end();
    }
  } else if(req.method === 'POST') {
    let body = '';

    if(req.url === '/login') {
      req.on('data', (data) => {
        body += data.toString();
      });

      req.on('end', () => {
        console.log('Received body:', body);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'success', message: 'Data received' }));
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'error', message: 'Route not found' }));
    }
  }
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
```

---

## Node.js Day 7 — **Network Programming (net module) & Express.js Framework**

*A simple, beginner‑friendly explanation with your examples plus complete code files.*

---

## 0) Overview of Day 7

Today you learn two important parts of backend Node.js:

### ✅ **1. Network Programming using the `net` module**

- Used for creating low-level **TCP servers/clients**.
- Works at raw socket level (not HTTP).

### ✅ **2. Express.js Framework**

- A powerful **web framework** built on top of Node.js.
- Used for routing, middleware, handling APIs.
- Follows the **MVC pattern** and proper folder structures.

---

## 1) Node.js Network Module — `net`

### Node.js includes a core built-in module called **`net`** which allows you to create

- TCP servers
- TCP clients
- Socket-based communication

### 🔹 Importing the module

```js
var net = require('net');
```

### 🔹 Creating a TCP Server

```js
var net = require('net');

var server = net.createServer((socket) => {
    console.log('Client connected');

    socket.on('data', (data) => {
        console.log('Received:', data.toString());
        socket.write("Message received: " + data);
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(5000, () => {
    console.log('TCP Server running on port 5000');
});
```

### 🔹 What this does

- Creates a raw TCP server
- Accepts socket connections
- Reads incoming raw data
- Sends back responses

This is **not HTTP**, this is raw socket communication.

---

## 2) Express.js — Node.js Web Framework

### Express.js is the most popular Node.js framework for building

- APIs
- Websites
- Servers

### 🔥 Why developers use Express

- Simple routing system
- Middleware support
- Faster than writing raw HTTP servers
- Supports MVC architecture

---

## 2.1 Installing Express.js

### Step 1 — Install express

```bash
npm install express
```

### Step 2 — Install express-generator (optional tool)

```bash
npm install -g express-generator
```

### Step 3 — Create a new project using generator

```bash
express projectname
```

This creates a full folder structure:

```bash
projectname/
 ├── app.js
 ├── package.json
 ├── routes/
 ├── views/
 ├── public/
 ├── bin/
```

### Step 4 — Install dependencies

```bash
cd projectname
npm install
```

### Step 5 — Start server

```bash
npm start
```

You can now open: `http://localhost:3000`

---

## 3) Express.js Basic Example (Without generator)

### **server.js**

```js
import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Express Home Page");
});

app.get('/about', (req, res) => {
    res.send("This is About Page");
});

app.post('/login', (req, res) => {
    res.json({status:"success", message:"Login success"});
});

app.listen(8000, () => {
    console.log("Express server running on port 8000");
});
```

---

## 4) Express.js Follows MVC Pattern

### **MVC = Model + View + Controller**

| Part          | Purpose                      |
|-------------- |------------------------------|
| **Model**     | Database / business data     |
| **View**      | UI templates (HTML, EJS, PUG)|
| **Controller**| Handles logic, API endpoints |

Express generator creates this pattern automatically.

---

## 5) Differences: net vs Express.js

| Feature  | `net` Module                | Express.js            |
|----------|-----------------------------|-----------------------|
| Purpose  | TCP raw network             | HTTP server framework |
| Level    | Low-level sockets           | High-level routing    |
| Use case | Chats, device communication | Web apps, APIs        |
| Protocol | TCP                         | HTTP                  |

---

## 6) Summary

- `net` → Create raw socket TCP servers
- Express → Build professional web servers
- Express generator → Generates MVC folder structure
- Express handles routing, middleware, JSON easily

---

## 7) Ready-to-Use Files

### **tcpServer.js**

```js
var net = require('net');

var server = net.createServer((socket) => {
    console.log('Client connected');

    socket.on('data', (data) => {
        console.log('Client says:', data.toString());
        socket.write("You said: " + data);
    });

    socket.on('end', () => {
        console.log("Client disconnected");
    });
});

server.listen(5000, () => {
    console.log("TCP Server running on port 5000");
});
```

### **expressServer.js**

```js
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send("Welcome to Express Home Page");
});

app.get('/about', (req, res) => {
  res.send("This is About Page");
});

app.post('/login', (req, res) => {
  res.json({status: "success", message: "Login success"});
});

app.listen(8000, () => {
  console.log("Express server running on port 8000");
});
```

---

## Node.js Day 8 — **Express Pages & Routing + React Client with Axios (GET/POST)**

*A beginner‑friendly, end‑to‑end guide that uses your examples and fills in the missing glue (Express setup, routing, CORS, React code).*

---

## 8.0) What you’ll learn today

- How to **create pages** on a Node/Express server and **route** to them
- How to connect a **React client** to the Express server
- How to use **Axios** for **GET** and **POST** requests

### We’ll keep file names close to your snippets

- Express route file: `myFirstExpressServer` (as a router module)
- React component: `GetData.js` (uses `axios.get` and `axios.post`)

---

## 1) Express: Creating pages and routing

### 1.1 Install & initialize

```bash
npm init -y
npm install express cors
```

> `cors` allows your React app (usually on `http://localhost:5173` or `http://localhost:3000`) to talk to the Node server if they run on different ports.

### 1.2 Minimal server with routes

Create **`server.js`**:

```js
// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middlewares
a pp.use(cors());
app.use(express.json());        // parse application/json bodies
app.use(express.urlencoded({ extended: true })); // parse form-encoded bodies

// Serve static pages (HTML, CSS, JS) from a /public folder
app.use(express.static(path.join(__dirname, 'public')));

// Basic pages
app.get('/', (req, res) => {
  // If you have /public/index.html this will be served automatically by express.static
  res.send('<h1>Home Page</h1><p>Welcome to Day 8 server</p>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1><p>This is the About page content</p>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Page</h1><p>Contact us at example@example.com</p>');
});

// Mount your router module (see Section 1.3)
const getdataRouter = require('./routes/getdata');
app.use('/getdata', getdataRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));
```

> **Pages** can be simple `res.send(...)`, or you can serve prebuilt HTML/CSS/JS from **`public/`**. For templating engines (EJS, Pug, Handlebars), you’d set `app.set('view engine', 'ejs')` etc.

### 1.3 Your router module (login check)

Create **`routes/getdata.js`** (this matches your idea of `myFirstExpressServer` using `express.Router()`):

```js
// routes/getdata.js
var express = require('express');
var router = express.Router();

/* POST /getdata  (login-like example) */
router.post('/', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  if (username === 'admin' && password === 'admin') {
    res.send({ result: 'success', message: 'Login successfully' });
  } else {
    res.send({ result: 'error', message: 'Invalid username or password' });
  }
});

module.exports = router;
```

> **Important:** Because we used `app.use(express.json())` and `app.use(express.urlencoded(...))`, `req.body` will be available for JSON and form‑encoded POSTs.

### 1.4 Optional: Express Generator (MVC structure)

```bash
npm install -g express-generator
express myFirstExpressServer
cd myFirstExpressServer
npm install
npm start
```

This gives you a folder structure with `routes/`, `views/`, `public/` that’s closer to **MVC**.

---

## 2) React client: Getting data and posting form data

### 2.1 Install Axios in your React app

```bash
npm install axios
```

### 2.2 React example — **GetData.js**

Below is your snippet completed into a working component. It:

- **GETs** `/about` from the Express server
- **POSTs** to `/getdata` with `username`, `password`

```jsx
// GetData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function GetData() {
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({ username: '', password: '' });

  // GET example
  useEffect(() => {
    axios
      .get('http://localhost:3000/about')
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // POST example (your snippet polished)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/getdata', formData)
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>React ↔ Express (Axios)</h2>

      <section style={{ marginBottom: 16 }}>
        <h3>GET /about</h3>
        <pre>{typeof result === 'string' ? result : JSON.stringify(result, null, 2)}</pre>
      </section>

      <section>
        <h3>POST /getdata (login demo)</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:&nbsp;</label>
            <input name="username" value={formData.username} onChange={handleChange} />
          </div>
          <div style={{ marginTop: 8 }}>
            <label>Password:&nbsp;</label>
            <input name="password" type="password" value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit" style={{ marginTop: 8 }}>Login</button>
        </form>
      </section>
    </div>
  );
}
```

> If your React app runs on a different port (e.g., Vite on **5173**, CRA on **3000**), your **Express** server needs **CORS** enabled (we already added `app.use(cors())`).

---

## 3) End‑to‑end test

1. Start Express server:

   ```bash
   node server.js
   ```

2. Start React dev server and open your React app.
3. Open the page with `GetData` component:
   - It should fetch `GET http://localhost:3000/about` and show the HTML/text.
   - Submit the form → it should `POST http://localhost:3000/getdata` and show `{ result: 'success' | 'error', message: '...' }`.

---

## 4) Folder structure (suggested)

```bash
project-root/
  server.js
  routes/
    getdata.js
  public/
    index.html
  client/              # your React app
    src/
      GetData.js
      ...
```

> If you build the React app (`npm run build`), you can serve the built files from Express by pointing `express.static` to the React `dist`/`build` folder.

---

## 5) Troubleshooting & tips

- **CORS errors**: ensure `app.use(cors())` on the Express side or configure origins specifically: `cors({ origin: 'http://localhost:5173' })`.
- **Body parsing**: for JSON/form posts, ensure: `app.use(express.json())` and `app.use(express.urlencoded({ extended: true }))`.
- **Port collisions**: if React is on 3000, run Express on 3001 (or vice versa) and update URLs.
- **Axios base URL**: in larger apps, set `axios.defaults.baseURL = 'http://localhost:3000';` or use an `.env` variable like `VITE_API_URL`.

---

## 6) Complete files (copy‑paste ready)

### `server.js`

```js
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><p>Welcome to Day 8 server</p>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1><p>This is the About page content</p>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Page</h1><p>Contact us at example@example.com</p>');
});

const getdataRouter = require('./routes/getdata');
app.use('/getdata', getdataRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));
```

### `routes/getdata.js`

```js
var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  if (username === 'admin' && password === 'admin') {
    res.send({ result: 'success', message: 'Login successfully' });
  } else {
    res.send({ result: 'error', message: 'Invalid username or password' });
  }
});

module.exports = router;
```

### `client/src/GetData.js` (React)

```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function GetData() {
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({ username: '', password: '' });

  useEffect(() => {
    axios.get('http://localhost:3000/about')
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/getdata', formData)
      .then((res) => setResult(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>React + Axios Demo</h2>
      <pre>{typeof result === 'string' ? result : JSON.stringify(result, null, 2)}</pre>

      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="username" value={formData.username} onChange={handleChange} />
        <input name="password" type="password" placeholder="password" value={formData.password} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
```

---

## Node.js Day 9 — **Angular Installation, Services, Components & JSON Response Handling**

*A complete beginner‑friendly guide based on your Day 9 class topics.*

---

## 0) What You Learn in Day 9

- Installing Angular on your system
- Creating Angular apps, components & services
- Running Angular using `ng serve`
- Using Angular services to call backend APIs
- Understanding why **Angular only accepts JSON responses**
- Using **mysql2** on server-side (Node.js + Express)

---

## 1) Angular Installation

Angular uses the **Angular CLI**, which can be executed using `npx` (without global install).

### ✅ Step 1: Check Angular availability

```bash
npx ng version
```

If Angular CLI is missing, the command will automatically download it.

---

### ✅ Step 2: Create a new Angular project

```bash
npx ng new my-app
```

This command:

- Creates Angular folder structure
- Installs required dependencies
- Generates starter app

---

### ✅ Step 3: Run Angular application

```bash
cd my-app
npx ng serve
```

Now visit:

```bash
http://localhost:4200
```

Your Angular app is running ✔

---

## 2) Angular Generate Commands (CLI)

### 🔹 Generate a **Service**

```bash
npx ng g s apidata
```

This creates:

```bash
src/app/apidata.service.ts
```

and a `.spec.ts` test file.

You use a service for:

- Calling backend API (Node/Express)
- Business logic shared across components

---

### 🔹 Generate a **Component**

```bash
npx ng g c mycomponent
```

This creates:

```bash
src/app/mycomponent/
   mycomponent.component.ts
   mycomponent.component.html
   mycomponent.component.css
   mycomponent.component.spec.ts
```

---

## 3) Angular Only Accepts JSON Response (Important)

Angular **expects API responses to be JSON** when using the HttpClient module.

### ✔ Accepted format

```json
{ "result": "success", "message": "OK" }
```

### ❌ Not accepted

- Plain string (`"hello world"`)
- Integer (`200`)
- HTML text

React accepts **any** output (string, text, HTML, number), but Angular **parses API response into JSON automatically**.

So your Node.js/Express backend must send:

```js
res.json({ status: 'success', data: ... })
```

Or:

```js
res.send({ status: 'success' })
```

NOT:

```js
res.send("success")
```

This will cause Angular error:

```bash
Unexpected token s in JSON at position 0
```

### 🎯 Conclusion

**Always return JSON from Node.js API when Angular is the client.**

---

## 4) Creating an Angular Service to Call API

Inside `apidata.service.ts`:

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApidataService {
  constructor(private http: HttpClient) {}

  getAbout() {
    return this.http.get('http://localhost:3000/about');
  }

  login(data: any) {
    return this.http.post('http://localhost:3000/getdata', data);
  }
}
```

### Use service inside a component

```ts
constructor(private api: ApidataService) {}

ngOnInit() {
  this.api.getAbout().subscribe(res => {
    console.log(res);
  });
}

loginSubmit() {
  this.api.login(this.formData).subscribe(res => {
    console.log(res);
  });
}
```

---

## 5) Important: Enable HttpClientModule in Angular

Inside `app.module.ts`:

```ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ]
})
export class AppModule {}
```

---

## 6) Backend: Node.js + Express + MySQL2

### Install mysql2

```bash
npm install mysql2
```

### Sample connection

```js
const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb'
});

con.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected');
});
```

### API must send JSON for Angular

```js
app.get('/about', (req, res) => {
  res.json({ message: 'This is about page from server' });
});
```

### POST API example

```js
app.post('/getdata', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    res.json({ result: 'success', message: 'Login ok' });
  } else {
    res.json({ result: 'error', message: 'Invalid login' });
  }
});
```

---

## 7) Summary (Day 9)

| Topic                           | Explanation                         |
|---------------------------------|-------------------------------------|
| Angular installation            | `npx ng new my-app`                 |
| Run Angular                     | `npx ng serve`                      |
| Create service                  | `npx ng g s apidata`                |
| Create component                | `npx ng g c componentName`          |
| Angular API response requirement| Must be **JSON**, unlike React      |
| Server DB                       | Install `mysql2` for Node.js backend|

---

## Node.js Day 10 — **Session Management (express-session)**

*A complete, beginner‑friendly explanation of sessions, state management, login/logout handling, and missing core concepts.*

---

## 1) What is State Management?

Web applications use **HTTP**, which is a **stateless protocol**.
This means:
➡ Every request is treated as new.
➡ Server does NOT remember user data automatically.

To maintain user information (logged‑in user, cart items, role, preferences), we use **State Management**.

### Popular State Management Options in Node.js

- **Sessions** (server-side)
- **Cookies** (client-side)
- **Tokens (JWT)** – stateless authentication
- **Local Storage / Session Storage** (browser)

In this class, we focus on **session-based authentication**.

---

## 2) Express Session — `express-session`

A session stores user data **on the server**, and sends a unique **session ID** to the browser via cookies.

### Install

```bash
npm i express-session
```

### Import

```js
var session = require('express-session');
```

---

## 3) Session Configuration

```js
app.use(session({
    secret: "secretkey",   // required
    resave: false,          // don't save if unchanged
    saveUninitialized: true,// save new sessions
    cookie: { maxAge: 1000 * 60 * 5 }  // cookie expires in 5 mins
}));
```

### Explanation of Options

| Option                | Meaning                                                             |
|-----------------------|---------------------------------------------------------------------|
| **secret**            | A private key used to encrypt/secure session ID. Must be kept safe. |
| **resave**            | Forces session to be saved even if not modified. Usually **false**. |
| **saveUninitialized** | Saves empty new sessions. Typically **true** for login systems.     |
| **cookie.maxAge**     | Defines how long the user's session will live.                      |

### Flow of express-session

```bash
Browser  →  Login Form  →  Server
Server creates session → sends sessionID cookie
Browser stores sessionID → user stays logged in
```

---

## 4) Using Session for Login / Logout

### Login Example

```js
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'admin') {
        req.session.user = username;  // Save session data
        res.send({ status: 'success', message: 'Login successful' });
    } else {
        res.send({ status: 'error', message: 'Invalid credentials' });
    }
});
```

### Check Session (Protected Route)

```js
app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.send(`Welcome ${req.session.user}`);
    } else {
        res.send('Unauthorized user. Please login.');
    }
});
```

### Logout Example

```js
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) console.log(err);
        res.send('Logged out successfully');
    });
});
```

---

## 5) Where Sessions Are Used

Express sessions are commonly used for:

- Login systems
- Admin dashboards
- Cart systems (E‑commerce)
- Tracking user navigation
- Preventing unauthorized access

---

## 6) Important Concepts Missing in Class (Added Now)

### 6.1 Session Storage Locations

By default, sessions are stored **in memory**, which is not recommended for production.

Better storage options:

- Redis (best for performance)
- MongoDB (via connect-mongo)
- MySQL (via express-mysql-session)

Example using Redis:

```bash
npm i connect-redis redis
```

### 6.2 Cookie Security Options

```js
cookie: {
  httpOnly: true,   // prevents access from JS
  secure: true,     // only works on HTTPS
  sameSite: 'strict'
}
```

### 6.3 Session Timeouts

Automatically log out inactive users using:

```js
cookie: { maxAge: 1000 * 60 * 10 } // 10 minutes
```

---

## 7) Complete Example — Node.js Session Login System

```js
const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.json());

app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 5 }
}));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'admin') {
        req.session.user = username;
        res.send('Login success');
    } else {
        res.send('Invalid login');
    }
});

app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.send(`Welcome ${req.session.user}`);
    } else {
        res.send('Please login');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('Logged out');
});

app.listen(3000, () => console.log('Server running'));
```

---

## 8) Summary (Day 10)

| Topic            | Explanation                           |
|------------------|---------------------------------------|
| State Management | Retain user data between requests     |
| express-session  | Server-side session storage           |
| secret           | Encrypts session ID                   |
| resave           | Save only when modified               |
| saveUninitialized| Save session on first request         |
| cookie           | Manages expiry & security options     |
| Login/Logout     | Based on session storage              |
| Security         | Add httpOnly, secure, sameSite cookies|
| Better Storage   | Redis / MongoDB for production        |

---

## Node.js Day 11 — **Cookies, Sessions, Nodemon, Jade/Pug View Engine**

*A complete Day‑11 guide with explanations, examples, and additional important concepts included.*

---

## 0) What You Learn Today

- Nodemon (auto server restart)
- Sessions → server-side state
- Cookies → client-side storage
- cookie-parser → reading/writing cookies
- Jade/Pug view engine for server‑side rendering
- `res.render()` usage with key–value passing
- Jade variables, interpolation, and conditions

---

## 1) Nodemon — Auto Restarting Server

During development, restarting the server manually is time‑consuming.

### Install Nodemon

```bash
npm install --save-dev nodemon
```

### Usage (package.json)

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

Run development mode:

```bash
npm run dev
```

Nodemon automatically reloads when files change.

---

## 2) Sessions — Server-Side Storage

Session data lives on the **server**, identified by a cookie sessionID.

Used for:

- login/logout
- dashboard access
- user authentication
- admin panels

### Session lifecycle

```bash
User login → server creates session → sessionID cookie sent → browser stores cookie → next requests include cookie → server identifies user
```

---

## 3) Cookies — Client-Side Storage

Cookies are stored in the browser.

### Cookies can be accessed in

- **request** → `req.cookies` (cookie-parser)
- **response** → `res.cookie(name, value, options)`

Cookies are used for:

- remember user preferences
- storing small data
- maintaining login status

---

## 4) cookie-parser

Install:

```bash
npm install cookie-parser
```

Use middleware:

```js
var cookieParser = require('cookie-parser');
app.use(cookieParser());
```

### Setting a cookie

```js
res.cookie('username', 'karthi', { maxAge: 1000 * 60 * 5 });
res.send('Cookie set');
```

### Getting a cookie

```js
console.log(req.cookies.username);
```

### Deleting a cookie

```js
res.clearCookie('username');
```

---

## 5) Server-Side Presentation Using View Engine (Jade/Pug)

Jade (now known as **Pug**) is a template engine used for server-side HTML rendering.

Install Pug:

```bash
npm install pug
```

Set view engine:

```js
app.set('view engine', 'pug');
app.set('views', './views');
```

---

## 6) Jade (Pug) Structure

Jade/Pug uses **indentation-based** syntax.

### Example template (views/index.pug)

```pug
html
  head
    title Page Title
  body
    h1 Welcome #{name}
```

### Interpolation

```bash
#{variable}
```

Receives variable from `res.render()`.

---

## 7) render(JFN, {})

`res.render()` is used to load a Jade/Pug file and pass key–value data.

### Example

```js
app.get('/profile', (req, res) => {
  res.render('profile', { name: 'Karthik', age: 30 });
});
```

### In Jade (profile.pug)

```pug
h1 User Profile
p Name: #{name}
p Age: #{age}
```

---

## 8) Jade Conditional Rendering

```pug
if(isLoggedIn)
  h2 Welcome Back!
else
  h2 Please Login
```

### Example1

```js
res.render('home', { isLoggedIn: true });
```

---

## 9) Complete Example — Login with Session + Cookie + Jade

### server.js

```js
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'pug');
app.set('views', './views');

app.use(session({
  secret: "secretkey",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 5 }
}));

app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    req.session.user = username;
    res.cookie('username', username, { maxAge: 1000 * 60 * 5 });
    res.redirect('/dashboard');
  } else {
    res.send('Invalid login');
  }
});

app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.render('dashboard', { name: req.session.user });
  } else {
    res.redirect('/');
  }
});

app.listen(3000, () => console.log('Server running on 3000'));
```

### login.pug

```pug
html
  body
    form(action="/login" method="POST")
      input(type="text" name="username" placeholder="Username")
      input(type="password" name="password" placeholder="Password")
      button(type="submit") Login
```

### dashboard.pug

```pug
html
  body
    h1 Welcome #{name}
```

---

## 10) Additional Concepts (Added)

### 10.1 Cookie vs Session — Quick Comparison

| Feature  | Cookie               | Session                         |
|----------|----------------------|---------------------------------|
| Storage  | Browser              | Server                          |
| Security | Less secure          | More secure                     |
| Expiry   | Controlled via maxAge| Controlled via session timeout  |
| Best for | Preferences, tokens  | Authentication, Cart, Dashboard |

### 10.2 When to Use JWT Instead of Sessions

Use **JWT** when:

- API is stateless
- Mobile apps + multiple clients
- Microservices

Use **sessions** when:

- Traditional web apps
- Need fast server-side validation

---

## Day 11 Summary

✔ Installed nodemon
✔ Session handling
✔ Cookies (set/get/delete)
✔ cookie-parser usage
✔ Jade/Pug view engine
✔ render() with variables
✔ Jade interpolation + conditions
✔ Added best‑practice concepts

---

## Node.js Day 12 — **Pug (Jade) Array Rendering & File Uploads with Multer**

*A beginner‑friendly, code‑first guide that shows how to render array data in Pug (formerly Jade) and how to upload files (images) to a folder using Multer.*

---

## 0) What you’ll build today

1) **Server‑side rendering** of array data in a Pug view (looping, interpolation, conditionals).  
2) **Image upload** endpoint using **Multer**, saving files to a local `/uploads` folder with basic validation and error handling.

> **Note:** Jade was renamed to **Pug**. The syntax you learned for Jade works with Pug. In Express, set `view engine` to `'pug'`.

---

## 1) Pug (Jade) — Render Array Data

### 1.1 Project structure (suggested)

```js
day12-app/
  server.js
  views/
    index.pug
    products.pug
  public/
    styles.css
  uploads/            # (created at runtime for uploads)
```

### 1.2 Minimal Express setup to send array → Pug

```js
// server.js
const express = require('express');
const path = require('path');
const app = express();

// view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// static files (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Sample in-memory array (could be from DB or API)
const products = [
  { id: 1, name: 'Laptop', price: 70000, inStock: true },
  { id: 2, name: 'Mobile', price: 20000, inStock: false },
  { id: 3, name: 'Headphones', price: 5000, inStock: true }
];

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/products', (req, res) => {
  // Pass array to template under key `items`
  res.render('products', { title: 'Products', items: products });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

### 1.3 Pug templates

#### **views/index.pug**

```pug
html
  head
    title #{title}
  body
    h1 Pug Array Rendering & File Uploads (Day 12)
    p
      | Navigate to
      a(href="/products") Products
```

#### **views/products.pug**

```pug
html
  head
    title #{title}
  body
    h1 #{title}

    if items && items.length
      ul
        each item in items
          li
            strong #{item.name}
            |  — ₹#{item.price}
            if item.inStock
              span(style="color: green")  (In Stock)
            else
              span(style="color: red")  (Out of Stock)
    else
      p No products available.
```

> **Key Pug syntax reminders**
>
> - `#{key}` → interpolate variables passed from `res.render('view', { key: value })`  
> - `each item in items` → iterate over arrays  
> - `if/else` → conditional rendering

---

## 2) File Uploads with Multer

### 2.1 Install Multer

```bash
npm i multer
```

### 2.2 Basic single‑image upload (destination folder + filename)

```js
// server.js (add below existing imports)
const fs = require('fs');
const multer = require('multer');

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // timestamp-originalname pattern
    const unique = Date.now() + '-' + file.originalname.replace(/\s+/g, '_');
    cb(null, unique);
  }
});

// Validate file type (basic: images only)
function fileFilter(req, file, cb) {
  const allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  if (allowed.includes(file.mimetype)) cb(null, true);
  else cb(new Error('Only image files are allowed'));
}

// 5 MB limit example
const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });

// Route to render a simple upload form
app.get('/upload', (req, res) => {
  res.render('index', { title: 'Upload Image' });
});

// Single file field name must match form input name="photo"
app.post('/upload', upload.single('photo'), (req, res) => {
  // File info available at req.file
  // Any text fields → req.body
  if (!req.file) {
    return res.status(400).send('Please upload an image');
  }
  res.send({ status: 'success', filename: req.file.filename, path: `/uploads/${req.file.filename}` });
});

// Expose uploads folder publicly (optional)
app.use('/uploads', express.static(uploadDir));
```

### 2.3 Minimal upload form (Pug)

You can reuse **views/index.pug** and add a form:

```pug
html
  head
    title #{title}
  body
    h1 #{title}
    form(action="/upload" method="POST" enctype="multipart/form-data")
      input(type="file" name="photo" accept="image/*")
      button(type="submit") Upload
```

> **Important:** set `enctype="multipart/form-data"` on the form and ensure the field name (`photo`) matches `upload.single('photo')`.

---

## 3) Common Pitfalls & Best Practices

- **Folder permissions:** Ensure the server can create/write to `/uploads`.
- **File name collisions:** Prefix with timestamp/UUID to avoid overwriting.
- **Validation:** Check `mimetype` and **also** inspect file signatures if security is critical.
- **Size limits:** Use `limits.fileSize` to protect the server (e.g., 5–10 MB).
- **Static serving:** If you want to show uploaded images, expose `/uploads` with `express.static`.
- **Error handling:** Wrap Multer routes with try/catch or an error handler middleware.
- **Production storage:** Consider S3/Cloud Storage for scalability; store only the file path/URL in DB.

---

## 4) Bonus: Multiple Images & Different Field Names

### 4.1 Multiple images, same field

```js
app.post('/upload-multiple', upload.array('photos', 5), (req, res) => {
  // up to 5 images under input name="photos"
  const files = (req.files || []).map(f => ({ name: f.filename, url: `/uploads/${f.filename}` }));
  res.send({ status: 'success', files });
});
```

### 4.2 Different fields (e.g., avatar + gallery)

```js
const multi = upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'gallery', maxCount: 5 }
]);

app.post('/upload-mixed', multi, (req, res) => {
  res.send({
    avatar: req.files?.avatar?.[0]?.filename,
    gallery: (req.files?.gallery || []).map(f => f.filename)
  });
});
```

---

## 5) End‑to‑End Test Steps

1) Run the server: `node server.js` (or `npm run dev` if using nodemon).
2) Open `http://localhost:3000/products` → you should see a rendered list.
3) Open `http://localhost:3000/upload` → select an image and submit.
4) The server responds with JSON containing the uploaded file path.
5) Open the returned `/uploads/<filename>` URL in your browser to view the image (if static serving is enabled).

---

## 6) Summary (Day 12)

- **Pug/Jade**: Use `each` to iterate arrays; `#{key}` for interpolation; `if/else` for conditions.
- **Multer**: `upload.single('photo')` for single image; validate file type & size; serve files via `express.static`.
- **Best practices**: unique filenames, limits, error handling, consider cloud storage in production.

---
