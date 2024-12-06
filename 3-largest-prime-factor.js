// This code in javascript doesn't run as expected. 
// We get maximum call exceeded error or the code keeps on running without giving any output.
// Therefor, the code is written in java and it works fine.


// function primeFact(num, div) {
//     if (div == 1) {
//         return 1;
//     }
//     if (div > 1) {
//         if (num%div == 0) 
//             if (isPrime(div)) 
//                 return div;
//             else 
//                 return primeFact(num, --div)
//         else
//             return primeFact(num, --div);

//     } else {
//         return primeFact(num, --div);
//     }
// }

function primeFact(num) {
    let div;
    for (div = Math.floor(num/2); div > 1; div--) {
        if (num % div == 0) {
            if (isPrime(div)) {
                return div;
            }
        }
    }
    return 1;
}

function isPrime(n) {
    for (let d = 2; d <=n/2; d++) {
        if (n%d == 0)
            return false;
    }
    return true;
}

//let number = 13195, divisor = Math.floor(number/2);
let number = 600851475143, divisor = Math.floor(number/2);
let res = primeFact(number);
console.log(res);