class 3-largest-prime-factor {
    public static void main(String args[]) {
        //long num = 13195;
        long num = 600851475143L;
        //long divisor = (long)Math.floor(num/2);
        long fact = primeFact(num);
        System.out.println(fact);
        
    }
    
    public static int primeFact(long num) {
        for (int div = (int)Math.floor(num/2); div > 1; div--) {
            if (num % div == 0)
                if (isPrime(div))
                    return div;
        }
        return 1;
    }
// Here too, we get maximum call-stack exceeded error with recursion. for loop works fine.       
    // public static long primeFact(long num, long div) {
    //     if (div > 1) {
    //         if (num%div == 0) {
    //             if (isPrime(div)) 
    //                 return div;
    //             else 
    //                 return primeFact(num, --div);
    //         } else
    //             return primeFact(num, --div);
    //     } else 
    //         return 1;
    // }
        
    public static boolean isPrime(long n) {
        for (int d = 2; d <=n/2; d++) {
            if (n%d == 0)
            return false;
        }
        return true;
    }
}