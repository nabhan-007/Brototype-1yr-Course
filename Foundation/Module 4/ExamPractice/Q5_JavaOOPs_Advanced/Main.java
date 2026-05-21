/*
 * ============================================================
 * EXAM PRACTICE - Question 5: Java OOPs Advanced (Polymorphism & Abstraction)
 * ============================================================
 *
 * TASK:
 *   1. Create an interface `Playable` with a method `play()`.
 *   2. Create an abstract class `Instrument` with an abstract method `tune()`.
 *   3. Create a class `Guitar` that extends `Instrument` and implements `Playable`.
 *      - Provide implementations for tune() and play().
 *   4. Create a class `Piano` that extends `Instrument` and implements `Playable`.
 *      - Provide implementations for tune() and play() (make it behave differently than Guitar).
 *
 * CONCEPTS TESTED:
 *   - Interfaces vs Abstract Classes
 *   - Method Overriding (@Override)
 *   - Run-time Polymorphism (e.g., Playable p = new Guitar(); p.play();)
 * ============================================================
 */

public class Main {
    public static void main(String[] args) {
        Playable p = new Guitar();
        p.play();

        Playable p1 = new Piano();
        p1.play();
    }
}


// ==========================================
// EXAMINER REMARKS:
// Score: 2/10
// Feedback: Same issue as Q4. You demonstrated how to use Polymorphism in main(), but you didn't define the Playable interface, Instrument abstract class, or the Guitar/Piano subclasses!
// ==========================================
