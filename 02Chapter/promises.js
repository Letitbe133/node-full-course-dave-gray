// importing fs module
const fsPromises = require("fs").promises;
// importing path module
const path = require("path");

const handleFile = async () => {
  try {
    const part1 = await fsPromises.readFile(
      path.join(__dirname, "files", "part1.txt"),
      "utf-8"
    );
    const part2 = await fsPromises.readFile(
      path.join(__dirname, "files", "part2.txt"),
      "utf-8"
    );

    await fsPromises.writeFile(
      path.join(__dirname, "files", "part3.txt"),
      part1
    );

    await fsPromises.appendFile(
      path.join(__dirname, "files", "part3.txt"),
      part2
    );

    await fsPromises.rename(
      path.join(__dirname, "files", "part3.txt"),
      path.join(__dirname, "files", "final.txt")
    );
  } catch (error) {
    console.error(error);
  }
};

handleFile();
