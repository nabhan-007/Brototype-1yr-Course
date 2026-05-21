// ============================================
// Module 4 | Day 2 | Task 4 - Java
// ============================================
// Pattern: Alphabet Diamond
//
//     A
//    ABC
//   ABCDE
//  ABCDEFG
// ABCDEFGHI
//  ABCDEFG
//   ABCDE
//    ABC
//     A
//
// ============================================
public class Task_4 {
    public static void main(String[] args) {
        int n = 4;

        for (int i = -n; i <= n; i++) {
            char alphabet = 'A';
            int space = (i < 0) ? -i : i;
            int limit = (2 * (n - space) + 1);

            for (int j = 0; j < space; j++) {
                System.out.print(" ");
            }

            for (int j = 0; j < limit; j++) {
                System.out.print(alphabet++);
            }
            System.out.println();
        }
    }
}
