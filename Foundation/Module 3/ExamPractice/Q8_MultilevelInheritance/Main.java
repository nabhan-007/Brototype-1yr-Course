/*
 * ============================================================
 * EXAM PRACTICE - Question 8: Multilevel Inheritance
 *                             (Full OOP Chain)
 * ============================================================
 *
 * TASK:
 *   Model a company hierarchy using Multilevel Inheritance.
 *
 *   Class `Employee` (top-level parent):
 *     - Properties: name (String), employeeId (int), baseSalary (double)
 *     - Parameterized constructor
 *     - Method: getRole() → returns "Employee"
 *     - Method: display() → prints id, name, role, and salary
 *
 *   Class `Developer` extends `Employee`:
 *     - Additional property: programmingLanguage (String)
 *     - Use `super()` in constructor
 *     - Override getRole() → returns "Developer"
 *     - Override display() → call super.display(), then print language
 *
 *   Class `TeamLead` extends `Developer`:
 *     - Additional property: teamSize (int)
 *     - Use `super()` in constructor
 *     - Override getRole() → returns "Team Lead"
 *     - Override display() → call super.display(), then print team size
 *     - Additional method: conductMeeting() →
 *       prints "<name> is conducting a meeting with <teamSize> members."
 *
 *   In main():
 *     1. Create an Employee ("Eve", 1, 40000.0) and call display().
 *     2. Create a Developer ("Sam", 2, 60000.0, "Java") and call display().
 *     3. Create a TeamLead ("Rita", 3, 80000.0, "Python", 5)
 *        and call display() + conductMeeting().
 *     4. Use the `instanceof` operator to check if the TeamLead
 *        object is also an instance of Developer and Employee.
 *        Print the results.
 *
 * CONCEPTS TESTED:
 *   - Multilevel inheritance (3 levels deep)
 *   - super() and super.method() chaining
 *   - Method overriding at each level
 *   - `instanceof` operator
 *   - is-a relationship
 * ============================================================
 */

public class Main {
    public static void main(String[] args) {
        // Write your solution below

    }
}
