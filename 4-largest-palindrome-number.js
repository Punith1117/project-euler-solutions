let largest = -1, num1, num2;

function reverse( n) {
    if (n > 0) {
        let lastEle = Math.floor(n%10);
        n = Math.floor(n/10);
        let k = n, tens = 1;
        while (k > 0) {
            tens *=10;
            k = Math.floor(k/10);
        }
        return lastEle*tens + reverse(n);
    } else {
        return 0;
    }
}

for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
        let num = i*j;
        if (reverse(num) == num) {
            if ((largest == -1) || (num > largest)) {
                num1 = i;
                num2 = j;
                largest = num;
            }
        }
    }
}

console.log('Largest palindrom number is given by: ');
console.log(num1 + " X " + num2 + " = " + largest);

