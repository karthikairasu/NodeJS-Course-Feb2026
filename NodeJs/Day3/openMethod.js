var fs = require("fs");

fs.open("Day3/sample1.txt", "a+", (err, fd) => {
  if (err) {
    console.log("Error opening to file", err);
    return;
  }
  var txt = "this is my sample content 000000 for writing to file";
  fs.write(fd, txt, (err) => {
    if (err) {
      console.log("Error writing to file:", err);
    } else {
      console.log("file written successfully.");
    }
  });
});
