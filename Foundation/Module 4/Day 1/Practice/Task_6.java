// ============================================
// Module 4 | Day 1 | Task 6 — Java
// ============================================
// Pattern: Number Triangle (Sequential)
//
// Expected Output (n = 5):
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
//
// Rules:
//   - Row i prints numbers 1 to i
//   - Numbers separated by a space
// ============================================

public class Task_6 {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.err.print(j + " ");
            }
            System.out.print("\n");
        }
    }
}
