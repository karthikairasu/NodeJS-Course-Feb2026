var fs = require("fs");

const logActivity = (activity) => {
  const logEntry = `${new Date().toISOString()} - ${activity}\n`;
  fs.appendFile("Day3/log.txt", logEntry, (err) => {
    if (err) {
      console.log("Error writing a log file:", err);
    }
  });
};
logActivity("User Logged in");
logActivity("User viewed product page");
logActivity("User added item to cart");
logActivity("User logged out");
