package Task_4;

// Step 1: Create custom exception class
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

// Step 2: Use the exception in a class
public class AgeValidator {
    public static void checkAge(int age) throws InvalidAgeException {
        if (age < 0) {
            throw new InvalidAgeException("Invalid age");
        }
        System.out.println("Valid age: " + age);
    }

    // Step 3: Test the exception
    public static void main(String[] args) {
        try {
            checkAge(-5); // ❌ Invalid age
        } catch (InvalidAgeException e) {
            System.out.println("Caught Exception: " + e.getMessage());
        }

        try {
            checkAge(22); // ✅ Valid age
        } catch (InvalidAgeException e) {
            System.out.println("Caught Exception: " + e.getMessage());
        }
    }
}
