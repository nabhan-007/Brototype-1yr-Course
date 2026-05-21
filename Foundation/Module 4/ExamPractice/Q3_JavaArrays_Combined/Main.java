/*
 * ============================================================
 * EXAM PRACTICE - Question 3: Java Arrays Combined Operations
 * ============================================================
 *
 * TASK:
 *   Given an array of integers, write a Java program to:
 *   1. Move all even numbers to the front of the array.
 *   2. Move all odd numbers to the back of the array.
 *   The order of the even/odd numbers themselves doesn't matter.
 *   Example Input: {3, 8, 5, 2, 9, 4}
 *   Example Output: {4, 8, 2, 5, 9, 3} (or similar)
 *
 * CONCEPTS TESTED:
 *   - In-place array swapping
 *   - Two-pointer technique or conditional replacement
 * ============================================================
 */

public class Main {
    public static void main(String[] args) {
        int[] arr = { 3, 8, 5, 2, 9, 4 };
        int size = arr.length;

        int write = 0; // position where next even should go

        for (int i = 0; i < size; i++) {
            if (arr[i] % 2 == 0) {
                // Swap current even with element at 'write'
                int temp = arr[write];
                arr[write] = arr[i];
                arr[i] = temp;
                write++;
            }
        }

        System.out.print("Modified Array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}


// ==========================================
// EXAMINER REMARKS:
// Score: 10/10
// Feedback: Flawless in-place swapping technique using the 'write' pointer.
// ==========================================
