//Day 3
var fs = require("fs");

fs.writeFile(
  "Day3/sample.txt",
  "hello, World! this is a sample file.",
  function (err) {
    if (err) {
      console.log("Error writing to file", err);
    } else {
      console.log("file written successfully.");
    }
  }
);

fs.readFile("sample.txt", "utf-8", function (err, data) {
  if (err) {
    console.log("Error reading to file", err);
  } else {
    console.log("file content:", data);
  }
});
