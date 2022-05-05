// Node JS documentation
// https://nodejs.org/dist/latest-v16.x/docs/api/

// importing "fs" module
const fs = require("fs");
// importing "parh" module
const path = require("path");

// reading file using the "readFile" method
// "readFile"is asynchronous
//   using "toString" method to convert buffer to string
fs.readFile(path.join(__dirname, "files", "part1.txt"), (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// demonstrating the asynchronous "readFile" function
// console.log(
//   "This should happen second but happens first because of the asynchronous handling by node"
// );

// using a parameter to convert to string, specifying the encoding
// "readFile" is asynchronous
fs.readFile(
  path.join(__dirname, "files", "part2.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// writing to a file
// if file doesn't exist it will be created
fs.writeFile(
  path.join(__dirname, "files", "part3.txt"),
  "This is the start of a new file\n\n",
  (err) => {
    if (err) throw err;
    console.log("Writing operation completed");
  }
);

// appending to a file
// if file doesn't exist it will be created
fs.appendFile(
  path.join(__dirname, "files", "part3.txt"),
  "This is an addition to the new file",
  (err) => {
    if (err) throw err;
    console.log("Appending operation completed");
  }
);

// listening to and catching an error
process.on("uncaughtException", (err) => {
  console.error(`Error processing file : ${err}`);
  //  stopping the application if we have an error
  process.exit(1);
});

// checking if file exists
if (fs.existsSync(path.join(__dirname, "files", "part1.txt"))) {
  console.log("File exists");
} else {
  console.log("File not found");
}

// deleting file
fs.unlink(path.join(__dirname, "files", "part3.txt"), (err) => {
  if (err) throw err;
  console.log("File deleted");
});
