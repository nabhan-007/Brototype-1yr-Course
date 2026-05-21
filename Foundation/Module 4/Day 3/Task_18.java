// ============================================
// Module 4 | Day 3 | Task 18 - Java
// ============================================
// Assignment 1.18: Write a Java program to identify and print all duplicate elements in an array: {10, 15, 10, 20, 15, 30, 10}.
// ============================================
public class Task_18 {
    public static void main(String[] args) {
        int[] arr = { 10, 15, 10, 20, 15, 30, 10 };
        int size = arr.length;

        for (int i = 0; i < size; i++) {
            // boolean isVisited = false;
            // for (int j = 0; j < i; j++) {
            // if (arr[i] == arr[j]) {
            // isVisited = true;
            // }
            // }
            // if (isVisited) {
            // continue;
            // }

            boolean isDuplicate = false;
            for (int j = 0; j < size; j++) {
                if (arr[i] == arr[j] && i != j) {
                    isDuplicate = true;
                }
            }

            if (isDuplicate) {
                System.out.println(arr[i]);
            }
        }
    }
}
