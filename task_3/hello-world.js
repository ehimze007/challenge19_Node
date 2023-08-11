const fs = require("fs");
const path = require("path");

// Create a file "welcome.txt" with content "Hello Node"
const filePath = path.join(__dirname, "welcome.txt");
console.log(filePath);
fs.writeFileSync(filePath, "Hello Node");

// Read and console.log data from "welcome.txt"
const data = fs.readFileSync(filePath, "utf8");
console.log(data);
