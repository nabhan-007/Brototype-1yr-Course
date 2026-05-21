// ============================================
// Module 4 | Day 3 | Task 20 - Java
// ============================================
// Assignment 1.20: Write a Java program to delete all unique elements from an array (keep only duplicate values): {10, 15, 10, 20, 15, 30, 25}.
// ============================================
public class Task_20 {
    public static void main(String[] args) {
        int[] arr = { 10, 15, 10, 20, 15, 30, 25 };
        int size = arr.length;

        for (int i = 0; i < size; i++) {
            boolean isUnique = true;
            for (int j = 0; j < size; j++) {
                if (arr[i] == arr[j] && i != j) {
                    isUnique = false;
                    break;
                }
            }

            if (isUnique) {
                for (int j = i; j < size - 1; j++) {
                    arr[j] = arr[j + 1];
                }
                size--;
                i--;
            }
        }

        System.out.print("New Array: ");
        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + " ");
        }

    }
}
