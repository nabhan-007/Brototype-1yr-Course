// ============================================
// Module 4 | Day 1 | Task 6 - Java
// ============================================
// Pattern: Hollow Inverted Pyramid
//
// *********
//  *     *
//   *   *
//    * *
//     *
//
// ============================================
public class Task_6 {
    public static void main(String[] args) {
        int n = 5;
        for (int i = n; i > 0; i--) {
            for (int j = 0; j < (n - i); j++) {
                System.out.print(" ");
            }

            for (int j = (2 * i - 1); j > 0; j--) {
                if (j == (2 * i - 1) || j == 1 || i == n) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.print("\n");
        }
    }
}
