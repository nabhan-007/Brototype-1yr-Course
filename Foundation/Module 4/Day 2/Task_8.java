// ============================================
// Module 4 | Day 2 | Task 8 - Java
// ============================================
// Pattern: Square with Numbers inside
//
// *****
// *123*
// *123*
// *123*
// *****
//
// ============================================
public class Task_8 {
    public static void main(String[] args) {
        int n = 5;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i == 0 || i == (n - 1)) {
                    System.out.print("*");
                } else if (j > 0 && j < (n - 1)) {
                    System.out.print(j);
                } else {
                    System.out.print("*");
                }
            }
            System.out.println();
        }
    }
}
