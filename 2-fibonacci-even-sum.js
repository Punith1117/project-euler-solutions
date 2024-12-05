let sum = 0;
let numOfTerm = 0;

function getFibonacci(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return getFibonacci(n-1) + getFibonacci(n-2);
}

while (true) {
    let term = getFibonacci(numOfTerm);
    if (term < 4000000) {
        if (term % 2 == 0) {
            sum += term;
        }
    } else {
        break;
    }
    numOfTerm++;
}

console.log(sum);
