const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

console.log(format(new Date(), "yyyy/MM/dd\tHH:mm:ss"));

console.log(uuid());

const logEvent = async (msg) => {
  const date = format(new Date(), "yyyy/MM/dd\tHH:mm:ss");
  const log = `${uuid()}\t${date}\t${msg}\n`;

  try {
    // if logs directory does not exist create it
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromise.mkdir(path.join(__dirname, "logs"));
    }
    // log event to file
    await fsPromise.appendFile(path.join(__dirname, "logs", "logs.txt"), log);
  } catch (error) {
    console.error(error);
  }
};

module.exports = logEvent;
