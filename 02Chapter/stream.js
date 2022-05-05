// import modules
const fs = require("fs");
const path = require("path");

// create read stream
const rs = fs.createReadStream(path.join(__dirname, "files", "long.txt"), {
  encoding: "utf-8",
});

// create write stream
const ws = fs.createWriteStream(path.join(__dirname, "files", "new_long.txt"));

// using listener
// listen for data and write chunk to file
// rs.on("data", (chunk) => {
//   ws.write(chunk);
// });

// using pipe
rs.pipe(ws);
