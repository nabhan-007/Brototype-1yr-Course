// ============================================
// Module 4 | Day 1 | Task 4 — Java
// ============================================
// Pattern: Diamond (Stars)
//
// Expected Output (n = 5):
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *
//
// Rules:
//   - Upper half: centered pyramid (rows 1..n)
//   - Lower half: inverted pyramid (rows n-1..1)
// ============================================

public class Task_4 {
    public static void main(String[] args) {
        int n = 5;

        for (int i = 1; i <= n; i++) {
            for (int j = (n - i); j > 0; j--) {
                System.out.print("  ");
            }
            for (int j = 0; j < (i * 2 - 1); j++) {
                System.out.print("* ");
            }
            System.out.print("\n");
        }

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print("  ");
            }
            for (int j = ((n - i) * 2 - 1); j > 0; j--) {
                System.out.print("* ");
            }
            System.out.print("\n");
        }
    }
}
