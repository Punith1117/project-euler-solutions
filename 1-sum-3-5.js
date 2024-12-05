let n;
function sumOfOddMultiplesof3And5(n) {
    if (n > 2) {
        if ((n % 3 == 0) || (n % 5 == 0)) {
            return n + sumOfOddMultiplesof3And5(n-1);
        } else {
            return  0 + sumOfOddMultiplesof3And5(n-1);
        }
    } else {
        return 0;
    }
}
let max = 1000;
let res = sumOfOddMultiplesof3And5(max-1);
console.log(res);