/*
 * ============================================================
 * EXAM PRACTICE - Question 6: Java Exception Handling
 * ============================================================
 *
 * TASK:
 *   Write a program that takes two integers as input and divides them.
 *   - Wrap the division in a try-catch block.
 *   - Specifically catch `ArithmeticException` (for division by zero).
 *   - Catch any other general `Exception`.
 *   - Use a `finally` block to print "Division operation completed."
 *   - Create a separate method `checkAge(int age)` that throws a custom Exception
 *     if age < 18, and use the `throws` keyword in its signature.
 *
 * CONCEPTS TESTED:
 *   - try, catch, finally
 *   - throw vs throws
 *   - Exception hierarchy
 * ============================================================
 */

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int num1 = s.nextInt();
        int num2 = s.nextInt();
        s.close();

        try {
            int div = num1 / num2;
            System.out.println(div);
        } catch (ArithmeticException e) {
            System.out.println("Can't divide by zero");
        } catch (Exception e) {
            System.out.println("Failed!!");
            System.out.println(e.getMessage());
        } finally {
            System.out.println("Division operation completed.");
        }

        int age = 17;
        try {
            checkAge(age);
        } catch (InvalidAgeException e) {
            System.out.println("Age check failed: " + e.getMessage());
        }
    }

    // Method that throws custom exception
    static void checkAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above");
        }
        System.out.println("Valid age: " + age);
    }
}

// Custom checked exception class
class InvalidAgeException extends Exception {
    InvalidAgeException(String message) {
        super(message);
    }
}

// ==========================================
// EXAMINER REMARKS:
// Score: 10/10
// Feedback: Perfect implementation of try-catch-finally, custom exceptions, and the 'throws' keyword. Flawless syntax.
// ==========================================
