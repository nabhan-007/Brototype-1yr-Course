// ============================================
// Module 4 | Day 1 | Task 2 - Java
// ============================================
// Pattern: Solid Inverted Pyramid
//
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *
//
// ============================================
public class Task_2 {
    public static void main(String[] args) {
        int n = 5;

        for (int i = 0; i < n; i++) {
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
