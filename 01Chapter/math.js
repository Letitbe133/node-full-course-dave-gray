// creating our custom module functions
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

// exporting module to make it accessible
module.exports = { add, sub, mult, div };