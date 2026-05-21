// ============================================
// Module 4 | Day 3 | Task 4 - Java
// ============================================
// Assignment 1.4: Write a Java program to replace all prime numbers with -1 in an array: {7, 12, 13, 18, 11, 20, 9}.
// ============================================
public class Task_4 {
    public static void main(String[] args) {
        int[] arr = { 7, 12, 13, 18, 11, 20, 9 };
        int size = arr.length;

        for (int i = 0; i < size; i++) {
            if (isPrime(arr[i])) {
                arr[i] = (-1);
            }
        }

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
