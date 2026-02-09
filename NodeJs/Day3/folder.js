var fs = require("fs");

var filefoldername = "c:/Users/sample.java";

fs.stat(filefoldername, (err, stats) => {
  if (err) {
    console.log("Error getting file stats:", err);
  } else {
    console.log("Is File ?:", stats.isFile());
    console.log("Is Directory?:", stats.isDirectory());
  }
});

fs.mkdir("c:/Users/test", (err) => {
  if (err) {
    console.log("Error creating Directory:", err);
  } else {
    console.log("Directory created successfully.");
  }
});

fs.readdir("c:/Users", (err, files) => {
  if (err) {
    console.log("Error reading Directory:", err);
  } else {
    console.log("Files in directory.");
    files.forEach((file) => {
      console.log(file);
    });
  }
});
