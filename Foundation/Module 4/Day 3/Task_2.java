// ============================================
// Module 4 | Day 3 | Task 2 - Java
// ============================================
// Assignment 1.2: Write a Java program to replace all multiples of 4 with 0 in an array: {8, 15, 12, 7, 16, 20, 9}.
// ============================================
public class Task_2 {
    public static void main(String[] args) {
        int[] arr = { 8, 15, 12, 7, 16, 20, 9 };
        int size = arr.length;

        for (int i = 0; i < size; i++) {
            if (arr[i] % 4 == 0) {
                arr[i] = 0;
            }
        }

        System.out.print("New Array: ");
        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
