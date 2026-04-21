import java.util.Scanner;

public class IfSample {
    public static void main(String ar[]) {
        Scanner num = new Scanner(System.in);
        System.out.println("Enter a Number: ");
        int a = num.nextInt();

        if (a < 0) {
            System.out.println(a + " is Negative!!");
        } else {
            System.out.println(a + " is Positive : )");
        }
    }
}