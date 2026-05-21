// ============================================
// Module 4 | Day 3 | Task 14 - Java
// ============================================
// Assignment 1.14: Write a Java program to sort an array in descending order. Array: {12, 5, 18, 3, 20, 8}.
// ============================================
public class Task_14 {
    public static void main(String[] args) {
        int[] arr = { 12, 5, 18, 3, 20, 8 };
        int size = arr.length;

        for (int i = 0; i < size - 1; i++) {
            for (int j = 0; j < size - 1; j++) {
                if (arr[j] < arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

        System.out.print("New Array: ");
        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
