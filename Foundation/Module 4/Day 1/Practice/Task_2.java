// ============================================
// Module 4 | Day 1 | Task 2 — Java
// ============================================
// Pattern: Centered Pyramid (Stars)
//
// Expected Output (n = 5):
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
//
// Rules:
//   - Row i: print (n-i) spaces, then (2i-1) stars
//   - Stars separated by a space
// ============================================

public class Task_2 {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            for (int j = (n - i); j >= 0; j--) {
                System.out.print("  ");
            }
            for (int j = 0; j < (i * 2 - 1); j++) {
                System.out.print("* ");
            }
            System.out.print("\n");
        }
    }
}
