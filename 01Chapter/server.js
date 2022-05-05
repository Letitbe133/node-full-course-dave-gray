// 1- Node runs on server (backend)

// 2- console lives in terminal (not browser)
// run node in terminal with the "node" command which will give access to node prompt
// run any js file by typing node + file name in the terminal
console.log("Hi");

// 3- we have access to a "global" object similiar to the "window" object in the browser
console.log(global);

// 4- we have access to Common Core Modules we can use (file system...)

// 5- we can import and use them using CommonJS syntax "require"
// importing "os" module
const os = require("os");
// we now have access to methods and properties of the "os" object
// methods
console.log(`OS type is ${os.type()}`);
console.log(`OS version is ${os.version()}`);
console.log(`Home directory is ${os.homedir()}`);

// constants
console.log(__dirname);
console.log(__filename);

// importing "path" module
const path = require("path");

// importing custom module
const math = require("./math");

// get the project directory name
console.log(path.dirname(__dirname));
// get the directory where the given file lives
console.log(path.dirname(__filename));
// get the currently executed file name
console.log(path.basename(__filename));
// get the extension of the currently executed file
console.log(path.extname(__filename));

// get object with properties of the currently executed file
console.log(path.parse(__filename));

// using the imported "math" module
console.log(math.add(10, 10));
console.log(math.sub(10, 10));
console.log(math.mult(10, 10));
console.log(math.div(10, 10));

// 6- some JS APIs are missing ("fetch") but we can import packages
