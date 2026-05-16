/*
 * ============================================================
 * EXAM PRACTICE - Question 2: Single Inheritance
 * ============================================================
 *
 * TASK:
 *   Model a simple banking hierarchy using Single Inheritance.
 *
 *   Parent class `Person`:
 *     - Properties: name (String), age (int)
 *     - Parameterized constructor
 *     - Method: introduce() → prints "Hi, I am <name>, aged <age>."
 *
 *   Child class `BankCustomer` extends `Person`:
 *     - Additional properties: accountNumber (String), balance (double)
 *     - Parameterized constructor → use `super()` to pass name & age
 *     - Method: showAccount() → prints account number and balance
 *     - Method: deposit(double amount) → adds amount to balance and
 *       prints "Deposited: <amount>. New balance: <balance>"
 *
 *   In main():
 *     1. Create a BankCustomer object (e.g., "Alice", 30, "ACC001", 5000.0).
 *     2. Call introduce() — inherited from Person.
 *     3. Call showAccount().
 *     4. Deposit 1500.0 and show the updated balance.
 *
 * CONCEPTS TESTED:
 *   - Single inheritance (extends)
 *   - `super()` constructor call
 *   - Inherited method usage
 *   - Parent vs child class responsibilities
 * ============================================================
 */

public class Main {
    public static void main(String[] args) {
        BankCustomer bc = new BankCustomer("Alice", 30, "ACC001", 5000.0);
        bc.introduce();
        bc.showAccount();
        bc.deposit(1500.0);
    }
}
