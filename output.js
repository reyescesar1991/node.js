const x = "1";
const y = "2";

console.log(x,y);

//%s format variable to string
//%d
//%i
//%o

// console.log("I am %s and my age is %d" , "Cesar" , 25);
// console.clear();
// console.count("I am cesar");
// console.count("I am cesar");
// console.count("I am Cesar Augusto");
// console.countReset("I am cesar");
// console.count("I am cesar");


// const sum = () => console.log(`The sum of 2 and 3 is: ${2+3}`);
// const multiply = () => console.log(`The multiplication of 2 and 3 is: ${2*3}`);


// const measureTime = () => {

//     console.time("sum()");
//     sum();
//     console.timeEnd("sum()");
//     console.time("multiply()");
//     multiply();
//     console.timeEnd("multiply()");
// }

// measureTime();

const ProgressBar = require("progress");
const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
    total: 20,
});

const timer = setInterval(() => {
    bar.tick();
    if(bar.complete){

        clearInterval(timer);
    }
}, 100);

const chalk = require("chalk");
console.log(chalk.green("This is nodejs tutorial"));

