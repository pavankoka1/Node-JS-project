var fs = require('fs');

fs.writeFileSync("text.txt", "I love Harry Potter Series!");
console.log(fs.readFileSync("text.txt").toString());

setInterval(function () {
    console.log("pavan");
},2000);

console.log(__dirname);
console.log(__filename);