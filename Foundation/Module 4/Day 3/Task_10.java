// ============================================
// Module 4 | Day 3 | Task 10 - Java
// ============================================
// Assignment 1.10: Write a Java program to delete all elements that come immediately AFTER an odd number in an array: {5, 10, 8, 15, 12, 7, 20}.
// ============================================
public class Task_10 {
    public static void main(String[] args) {
        int[] arr = { 5, 10, 8, 15, 12, 7, 20 };
        int size = arr.length;

        for (int i = 0; i < size; i++) {
            if (arr[i] % 2 != 0 && i + 1 < size) {
                for (int j = i + 1; j < size - 1; j++) {
                    arr[j] = arr[j + 1];
                }
                size--;
            }
        }

        System.out.print("New Array: ");
        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
