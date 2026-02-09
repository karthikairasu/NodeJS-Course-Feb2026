var fs = require("fs");

fs.writeFileSync(
  "Day3/syncfile.txt",
  "This is a sample text for sychronous file writing."
);
try {
  const data = fs.readFileSync("Day3/syncfile.txt", "utf-8");
  console.log("File content:", data);
} catch (err) {
  console.log("Error Reading file:", err);
}
