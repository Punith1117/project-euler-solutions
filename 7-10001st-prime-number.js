function isPrime(n) {
    for (let i = 2; i <= Math.floor(n/2); i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}

let num = 2, div = 2, count = 0;
let res;
while (count < 10001) {
    if (isPrime(num)) {
        res = num;
        count++;
    }
    num++;
}
console.log(res);
//ans: 104743