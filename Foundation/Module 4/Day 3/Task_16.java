// ============================================
// Module 4 | Day 3 | Task 16 - Java
// ============================================
// Assignment 1.16: Write a Java program to count the frequency of each element in an array: {4, 5, 4, 6, 6, 7, 8}.
// ============================================
public class Task_16 {
    public static void main(String[] args) {
        int[] arr = { 4, 5, 4, 6, 6, 7, 8 };
        int size = arr.length;

        for (int i = 0; i < size; i++) {
            boolean isVisited = false;
            for (int j = 0; j < i; j++) {
                if (arr[i] == arr[j]) {
                    isVisited = true;
                }
            }
            if (isVisited) {
                continue;
            }

            int count = 0;
            for (int j = 0; j < size; j++) {
                if (arr[i] == arr[j]) {
                    count++;
                }
            }

            System.out.println(arr[i] + ": " + count);
        }
    }
}
