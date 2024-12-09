let sum = 0, sq = 0, n, res;
function recur(n) {
    sq += (n*n);
    sum += n;
    if (n > 0)
        recur(n-1)
}
recur(100);
console.log(res1 = sum*sum);
console.log(res2 = sq);
console.log(res1 - res2);