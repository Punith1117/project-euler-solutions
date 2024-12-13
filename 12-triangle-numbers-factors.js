console.time('Execution Time');  // Start measuring time

let factCount = 0, i, num

for (i = 1, num = 0; factCount < 500; i++) {
    num += i;
    factCount = numOfFactors(num)
    //console.log(factCount, num)
}

console.log(num)
console.timeEnd('Execution Time');  // End measuring and print the time

function numOfFactors(n) {
    let factCount = 0;
    for (let i = 1; i < Math.floor(n/2); i++) {
        if (n % i == 0) {
            factCount++;
        }
    }

    return (factCount+1)
}
//Execution Time: 10:23.803 (m:ss.mmm)
