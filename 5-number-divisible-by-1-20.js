//this js code took a lot of run-time to, so I switched to java and got the ans faster 
let num = 232700000, res;
while (true) {
    if (isDivisiblle(num, 20)) {
        res = num;
        break;
    }
    num++
}

console.log(num);

function isDivisiblle(n, k) {
    if (k > 0) {
        if (Math.floor(n % k) == 0) {
            console.log(n, k);
            console.log('yes');
            return true && isDivisiblle(n, k-1)
        } else {
            console.log(n + k + 'no');
            return false;
        }
    } else {
        return true;
    }
}