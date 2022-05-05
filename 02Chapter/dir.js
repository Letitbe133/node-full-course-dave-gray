// importing modules
const fs = require("fs");
const path = require("path");

// check if directory does not exist
if (!fs.existsSync(path.join(__dirname, "newDir"))) {
  // create directory
  fs.mkdir(path.join(__dirname, "newDir"), (err) => {
    if (err) throw err;
    console.log("Directory created");
  });
}

// remove directory
// directory will not be removed if not empty
fs.rmdir(path.join(__dirname, "newDir"), (err) => {
  if (err) throw err;
  console.log("Directory removed");
});
