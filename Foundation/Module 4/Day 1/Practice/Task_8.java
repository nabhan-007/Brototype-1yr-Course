// ============================================
// Pattern: Hollow Star Diamond (Page 1, bottom-right)
//
// Expected Output (n = 5):
//     *
//   *   *
// *       *
//   *   *
//     *
//
// Wait — check pattern: borders of diamond, no fill inside
//
// ============================================
public class Task_8 {
    public static void main(String[] args) {
        int n = 5;
        int mid = n / 2;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (j == mid - i || j == mid + i || j == i - mid || j == (3 * mid) - i) {
                    System.out.print("* ");
                    // System.out.print(i + "," + j);
                } else {
                    System.out.print("   ");
                }
            }
            System.out.println();
        }
    }
}
