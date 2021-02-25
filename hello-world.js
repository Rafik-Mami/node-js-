const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var sum=0
for(let i=0;i<4;i++){
    rl.question("give a number  ? ", function(number) {
    
        sum+=number
    })
}


console.log(`${number}`);
