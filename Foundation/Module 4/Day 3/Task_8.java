// ============================================
// Module 4 | Day 3 | Task 8 - Java
// ============================================
// Assignment 1.8: Write a Java program to delete all prime numbers from an array: {7, 12, 13, 18, 11, 20, 9}.
// ============================================
public class Task_8 {
    public static void main(String[] args) {
        int[] arr = { 7, 12, 13, 18, 11, 20, 9 };
        int size = arr.length;

        int newSize = 0;
        for (int i = 0; i < size; i++) {
            if (!isPrime(arr[i])) {
                arr[newSize++] = arr[i];
            }
        }
        size = newSize;

        System.out.print("New Array: ");
        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + " ");
        }
    }

    static boolean isPrime(int num) {
        if (num <= 1) {
            return false;
        }
        for (int i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}
