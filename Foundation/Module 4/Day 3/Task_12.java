// ============================================
// Module 4 | Day 3 | Task 12 - Java
// ============================================
// Assignment 1.12: Write a Java program to Delete TWO elements after every multiple of 5 in an array: {5, 10, 7, 8, 20, 7, 25, 12, 30}.
// ============================================
public class Task_12 {
    public static void main(String[] args) {
        int[] arr = { 5, 10, 7, 8, 20, 7, 25, 12, 30 };
        int size = arr.length;

        int write_index = 0;
        for (int i = 0; i < size; i++) {
            arr[write_index++] = arr[i];

            if (arr[i] % 5 == 0) {
                i += 2;
            }
        }
        size = write_index;

        System.out.print("New Array: ");
        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
