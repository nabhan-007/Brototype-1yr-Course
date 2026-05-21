// ============================================
// Module 4 | Day 2 | Task 10 - Java
// ============================================
// Pattern: Variable Repeating Stars
//
// *
// **
// *
// *
// ***
// *
// *
// *
// ****
//
// ============================================
public class Task_10 {
    public static void main(String[] args) {
        int n = 3;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.println("*");
            }

            for (int j = 0; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
