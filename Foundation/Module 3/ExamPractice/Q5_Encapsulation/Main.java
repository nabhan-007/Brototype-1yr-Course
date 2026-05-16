/*
 * ============================================================
 * EXAM PRACTICE - Question 5: Encapsulation
 *                 (Private fields + Getters/Setters + Validation)
 * ============================================================
 *
 * TASK:
 *   Create a class `StudentRecord` with strict encapsulation:
 *
 *   Private Properties:
 *     - name       (String)
 *     - rollNumber (int)
 *     - marks      (double)   → must be between 0 and 100
 *     - grade      (String)   → auto-calculated, NOT set by user
 *
 *   Constructor:
 *     - Parameterized constructor accepting name, rollNumber, marks.
 *     - Use setMarks() inside the constructor so validation runs.
 *
 *   Getters: getName(), getRollNumber(), getMarks(), getGrade()
 *
 *   Setters:
 *     - setName(String name)
 *     - setRollNumber(int rollNumber)
 *     - setMarks(double marks):
 *         * If marks < 0 or marks > 100 → print "Invalid marks!" and do NOT update.
 *         * Otherwise update marks AND auto-calculate grade:
 *             >= 90  → "A+"
 *             >= 80  → "A"
 *             >= 70  → "B"
 *             >= 60  → "C"
 *             below  → "F"
 *     - No setter for grade (it's auto-calculated).
 *
 *   Method: displayReport() → prints all student details including grade.
 *
 *   In main():
 *     1. Create a StudentRecord ("Rahul", 101, 85.5).
 *     2. Call displayReport().
 *     3. Try setMarks(110) — should print "Invalid marks!".
 *     4. Update marks to 92 using setMarks(92) and display again.
 *     5. Change name to "Rahul Kumar" using setName() and display.
 *
 * CONCEPTS TESTED:
 *   - Encapsulation (private fields)
 *   - Getter and Setter methods
 *   - Validation inside setters
 *   - Auto-derived/computed fields (grade)
 *   - Data hiding principle
 * ============================================================
 */

public class Main {
    public static void main(String[] args) {
        StudentRecord sr = new StudentRecord("Rahul", 101, 85.5);
        sr.displayReport();
        sr.setMarks(110);
        sr.setMarks(92);
        sr.displayReport();
        sr.setName("Rahul Kumar");
        sr.displayReport();
    }
}
