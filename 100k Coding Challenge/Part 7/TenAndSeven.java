import java.util.Scanner;

public class TenAndSeven {
    public static void main(String ar[]) {
        Scanner num = new Scanner(System.in);
        System.out.println("Enter Messi's Jersey Number: ");
        int jersey_number = num.nextInt();
        System.out.println("Enter Ronaldo's Jersey Number: ");
        int jersey_number1 = num.nextInt();
        int sum = jersey_number + jersey_number1;

        // int jersey_number = 10;
        // int jersey_number1 = 07;

        System.out.println("Messi: " + jersey_number);
        System.out.println("Ronaldo: " + jersey_number1);
        System.out.println("Messi & Ronaldo: " + sum);
    }
}
