// ============================================
// Module 4 | Day 1 | Task 4 - Java
// ============================================
// Pattern: Butterfly Pattern
//
// *       *
// **     **
// ***   ***
// **** ****
// *********
// **** ****
// ***   ***
// **     **
// *       *
//
// ============================================
public class Task_4 {
    public static void main(String[] args) {
        int n = 4;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < (i + 1); j++) {
                System.out.print("* ");
            }

            for (int j = ((n - i) * 2 - 1); j > 0; j--) {
                System.out.print("  ");
            }

            for (int j = 0; j < (i + 1); j++) {
                System.out.print("* ");
            }
            System.out.print("\n");
        }

        for (int i = 0; i < ((n * 2) + 1); i++) {
            System.out.print("* ");
        }
        System.out.print("\n");

        for (int i = 1; i <= n; i++) {
            for (int j = 0; j <= (n - i); j++) {
                System.out.print("* ");
            }

            for (int j = 1; j <= ((i * 2) - 1); j++) {
                System.out.print("  ");
            }

            for (int j = 0; j <= (n - i); j++) {
                System.out.print("* ");
            }
            System.out.print("\n");
        }
    }
}
