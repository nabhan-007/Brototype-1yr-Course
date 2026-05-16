// ============================================
// Module 4 | Day 1 | Task 8 - Java
// ============================================
// Pattern: Solid Hourglass
//
// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********
//
// ============================================
public class Task_8 {
    public static void main(String[] args) {
        int n = 4;

        for (int i = -n; i <= n; i++) {
            int spaces = n - ((i < 0) ? -i : i);
            int stars = (2 * (n - spaces) + 1);

            for (int j = 0; j < spaces; j++) {
                System.out.print(" ");
            }

            for (int j = 0; j < stars; j++) {
                System.out.print("*");
            }

            System.out.println();
        }
    }
}
