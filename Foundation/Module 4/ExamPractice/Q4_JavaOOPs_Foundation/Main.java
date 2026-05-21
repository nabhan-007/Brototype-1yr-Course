/*
 * ============================================================
 * EXAM PRACTICE - Question 4: Java OOPs Foundation
 * ============================================================
 *
 * TASK:
 *   Create a class `BankAccount`:
 *   - private double balance
 *   - A constructor to initialize balance
 *   - public void deposit(double amount)
 *   - public void withdraw(double amount) (Ensure balance doesn't go negative!)
 *   - public double getBalance()
 *
 *   Create a class `SavingsAccount` that inherits from `BankAccount`:
 *   - private double interestRate
 *   - A constructor that calls super() and sets interestRate
 *   - public void addInterest() (Calculates interest and deposits it)
 *
 * CONCEPTS TESTED:
 *   - Encapsulation (private fields, getters)
 *   - Inheritance (extends, super)
 *   - Method logic and state management
 * ============================================================
 */

public class Main {
    public static void main(String[] args) {
        SavingsAccount sa = new SavingsAccount(500000, 8);
        sa.deposit(100000);
        sa.getBalance();
        sa.withdraw(10000);
        sa.addInterest();
    }
}


// ==========================================
// EXAMINER REMARKS:
// Score: 2/10
// Feedback: You wrote the main method to test the classes, but you forgot to actually define the BankAccount and SavingsAccount classes! In an exam, you must write the class definitions.
// ==========================================
