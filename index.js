// console.log("this is a nodejs tutorial for beginners");
// console.log("we will cover nodejs with command line");
// process.exit(0);

// process.exitCode = 1;


// const _ = require("lodash");
// const arr = [1, 4, 6, 8];
// console.log(_.chunk(arr));
// console.log(_.last(arr));

// const cowsay = require("cowsay");
// console.log(cowsay.say({
//     text: "I am learning NPM module",
//     e: "00",
//     t: "U"
// }));


const {tesla, ford} = require("./car");
console.log(JSON.stringify(tesla, null, 2));
console.log(JSON.stringify(ford, undefined, 2));
console.log(tesla);
console.log(ford);

