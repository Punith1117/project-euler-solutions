let a, b, c, t1, t2, t3

for (a = 1; a < 998; a++)
    for (b = (a+1), c = 1000 - (a+b); b < c; b++, c--) {
        t1 = a*a
        t2 = b*b
        t3 = c*c
        if ((t1+t2) === (t3)) {
            console.log(a*b*c)
            a = 1000
            b = 1000
            c = 1000
            break;
        }
    }
