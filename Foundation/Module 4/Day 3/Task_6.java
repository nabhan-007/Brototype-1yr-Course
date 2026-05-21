// ============================================
// Module 4 | Day 3 | Task 6 - Java
// ============================================
// Assignment 1.6: Write a Java program to delete all odd numbers from an array: {12, 7, 18, 9, 24, 11, 30}.
// ============================================
public class Task_6 {
    public static void main(String[] args) {
        int[] arr = { 12, 7, 18, 9, 24, 11, 30 };
        int size = arr.length;

        for (int i = 0; i < size; i++) {
            if (arr[i] % 2 != 0) {
                for (int j = i; j < size; j++) {
                    if (j + 1 < size) {
                        arr[j] = arr[j + 1];
                    }
                }
                size -= 1;
                i--;
            }
        }

        System.out.print("New Array: ");
        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
