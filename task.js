const multi = (num = 2) => {
    for (i = 1; i <= 9; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
};

multi();