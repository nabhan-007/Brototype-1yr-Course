// ============================================
// Module 4 | Day 2 | Task 6 - Java
// ============================================
// Pattern: Palindrome Alphabet Pyramid
//
//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA
//
// ============================================
public class Task_6 {
    public static void main(String[] args) {
        int n = 5;

        for (int i = 1; i <= n; i++) {
            char alphabet = '@';

            for (int j = (n - i); j > 0; j--) {
                System.out.print(" ");
            }

            for (int j = 1; j <= i; j++) {
                System.out.print(++alphabet);
            }

            for (int j = 1; j < i; j++) {
                System.out.print(--alphabet);
            }
            System.out.println();
        }
    }
}
