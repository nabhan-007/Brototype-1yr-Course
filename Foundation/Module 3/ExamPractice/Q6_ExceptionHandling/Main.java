/*
 * ============================================================
 * EXAM PRACTICE - Question 6: Exception Handling
 *                 (try-catch-finally + Custom Exception + throw)
 * ============================================================
 *
 * TASK:
 *   Build a simple ATM withdrawal simulation with exception handling.
 *
 *   Step 1 — Custom Exception:
 *     Create a custom exception class `InsufficientFundsException`
 *     that extends Exception.
 *     - Constructor accepts a message String and passes it to super().
 *
 *   Step 2 — ATM class:
 *     Properties: accountHolder (String), balance (double)
 *     Parameterized constructor.
 *     Method: withdraw(double amount) throws InsufficientFundsException
 *       - If amount <= 0  → throw new IllegalArgumentException(
 *                           "Withdrawal amount must be positive.")
 *       - If amount > balance → throw new InsufficientFundsException(
 *                              "Insufficient funds! Available: " + balance)
 *       - Otherwise → deduct amount, print "Withdrawn: <amount>. Remaining: <balance>"
 *     Method: getBalance() → returns balance.
 *
 *   Step 3 — In main():
 *     Create an ATM object ("John Doe", 1000.0).
 *
 *     Use try-catch-finally blocks for each of the following:
 *
 *     Test Case 1: withdraw(500.0)  → should succeed.
 *     Test Case 2: withdraw(800.0)  → should throw InsufficientFundsException.
 *     Test Case 3: withdraw(-50.0)  → should throw IllegalArgumentException.
 *     Test Case 4: Simulate an ArithmeticException by dividing balance by 0
 *                  inside a try block and catch it.
 *
 *     Each try-catch block MUST have a finally block that prints:
 *       "--- Transaction attempt complete ---"
 *
 * CONCEPTS TESTED:
 *   - Custom exception class (extends Exception)
 *   - `throw` keyword
 *   - `throws` declaration in method signature
 *   - try-catch-finally structure
 *   - Catching multiple exception types
 *   - Built-in exceptions (ArithmeticException, IllegalArgumentException)
 * ============================================================
 */

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Worrrld");
    }
}
