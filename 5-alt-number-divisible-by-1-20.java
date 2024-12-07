//Ran this code from the value 100million. This took about half an hour.
//ans: 232792560
public class 5-alt-number-divisible-by-1-20 {

    public static void main(String args[]) {
        long num = 232000000, res;
        while (true) {
            if (isDivisiblle(num, 20)) {
                res = num;
                break;
            }
            num++;
        }
        System.out.println(res);
    }
    public static boolean isDivisiblle(long n, int k) {
    if (k > 0) {
        if (Math.floor(n % k) == 0) {
            return true && isDivisiblle(n, k-1);
        } else {
            System.out.print(n +" " + k);
            System.out.println(" no");
            return false;
        }
    } else {
        return true;
    }
}
}