import java.util.Scanner;

public class functons {
    static int sum(int num1, int num2) {
        int result = num1 + num2;
        return result;
    }

    public static void main(String ar[]) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter two Numbers: ");
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();

        int result = sum(num1, num2);
        System.err.println("Sum: " + result);
    }
}
