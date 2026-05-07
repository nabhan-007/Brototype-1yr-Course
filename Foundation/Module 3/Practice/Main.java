import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.println("Hello World!!");

        System.out.println("Enter Two Number (less than 5): ");
        int a = s.nextInt();
        int b = s.nextInt();
        int sum = a + b;

        System.out.println("The Sum of Number you entered is: " + sum);
        if (sum % 2 == 0) {
            System.out.println("The sum is Even.");
        } else {
            System.out.println("The sum is Odd.");
        }

        int factorial = 1;
        for (int i = 1; i <= sum; i++) {
            factorial = factorial * i;
        }
        System.out.println("Factorial of " + sum + ": " + factorial);

        if (isPrime(sum) == 1) {
            System.out.println(sum + " is a Prime Number");
        } else {
            System.out.println(sum + " is NOT a Prime Number");
        }

        s.close();
    }

    static int isPrime(int num) {
        if (num <= 1) {
            return 0;
        }
        for (int i = 2; i < num; i++) {
            if (num % i == 0) {
                return 0;
            }
        }
        return 1;
    }
}