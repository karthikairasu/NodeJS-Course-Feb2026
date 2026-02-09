var fs = require("fs");

var order = {
  productId: 123,
  customer: "karthi",
  product: "Laptop",
  price: "50000",
  quqntity: 1,
  date: new Date(),
};

fs.writeFile("Day3/order.txt", JSON.stringify(order), function (err) {
  if (err) {
    console.log("Error writing to file", err);
  } else {
    console.log("Order saved successfully.");
  }
});

fs.readFile("Day3/order.txt", "utf-8", function (err, data) {
  if (err) {
    console.log("Error reading to file", err);
  } else {
    console.log("File content:", data);
  }
});

const newOrder = `\n Order Details: orderID: 124 product: Mobile price : 20000, quantity: 2, date :${new Date()}`;

fs.appendFile("Day3/order.txt", newOrder, (err) => {
  if (err) {
    console.log("Error appending to file", err);
  } else {
    console.log("Order appended successfully.");
  }
});

fs.readFile("Day3/order.txt", "utf-8", function (err, data) {
  if (err) {
    console.log("Error reading to file", err);
  } else {
    console.log("File content:", data);
  }
});
