// ============================================
// Module 4 | Day 2 | Task 2 - Java
// ============================================
// Pattern: Inverted Right Triangle (Alphabets)
//
// ABCDE
// ABCD
// ABC
// AB
// A
//
// ============================================
public class Task_2 {
    public static void main(String[] args) {
        int n = 5;

        for (int i = n; i > 0; i--) {
            char alphabet = 'A';

            for (int j = 0; j < i; j++) {
                System.out.print(alphabet++);
            }
            System.out.println();
        }
    }
}
