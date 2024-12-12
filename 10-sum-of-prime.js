let twoMil = 2000000, prime, num = 2, sum = 0;

while (true) {
    if (num > twoMil)
        break;
    if (isPrime(num)) {
        sum += num;
    }
    num++;
}

console.log(sum);

function isPrime(n) {
    for (let i = 2; i <= Math.floor(n/2); i++) {
        if (n % i == 0)
            return false
    }
    return true
}

