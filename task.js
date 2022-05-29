const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const multi = (num = 2) => {
    for (i = 1; i <= 9; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
};

console.log('Please enter a number.');

rl.on('line', (line) => {
    const num = Number(line);

    if (isNaN(line)) {
        console.log("It's not a number.");
        return;
    }

    multi(num);
    rl.close();
});
