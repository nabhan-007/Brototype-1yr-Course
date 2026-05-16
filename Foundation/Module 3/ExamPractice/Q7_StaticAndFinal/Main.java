/*
 * ============================================================
 * EXAM PRACTICE - Question 7: static & final Keywords
 * ============================================================
 *
 * TASK:
 *   Demonstrate the use of `static` and `final` keywords
 *   in a University enrollment system.
 *
 *   Class `University`:
 *     - static final String UNIVERSITY_NAME = "Tech University"
 *       (constant — cannot be changed)
 *     - static int totalStudents = 0
 *       (shared across ALL objects — tracks enrollment count)
 *
 *   Class `Student`:
 *     - private String name
 *     - private int studentId
 *     - final String course  (set once in constructor, never changed)
 *
 *     Constructor(String name, String course):
 *       - Assigns name and course.
 *       - Auto-generates studentId as ++University.totalStudents
 *         (each new student gets next ID)
 *
 *     Method: displayInfo() → prints studentId, name, course,
 *             and University.UNIVERSITY_NAME
 *
 *     static method: getTotalStudents() → returns University.totalStudents
 *
 *   In main():
 *     1. Print University.UNIVERSITY_NAME.
 *     2. Create 3 Student objects: ("Alice","CS"), ("Bob","IT"), ("Clara","ECE").
 *     3. Call displayInfo() on each student.
 *     4. Print total enrolled students using Student.getTotalStudents().
 *     5. Try to modify the `final` variable course after creation
 *        (write the line as a comment explaining why it won't compile).
 *
 * CONCEPTS TESTED:
 *   - `static` variables shared across objects
 *   - `final` variables (constants, set once)
 *   - `static` methods
 *   - Difference between static and instance members
 *   - static final for constants
 * ============================================================
 */

public class Main {
    public static void main(String[] args) {
        // Write your solution below

    }
}
