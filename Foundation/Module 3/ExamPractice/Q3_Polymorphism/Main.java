/*
 * ============================================================
 * EXAM PRACTICE - Question 3: Polymorphism
 *                 (Method Overloading + Method Overriding)
 * ============================================================
 *
 * TASK:
 *   Part A — Method Overloading (Compile-time Polymorphism):
 *     Create a class `Calculator` with an overloaded method `add()`:
 *       - add(int a, int b)              → returns sum of two integers
 *       - add(int a, int b, int c)       → returns sum of three integers
 *       - add(double a, double b)        → returns sum of two doubles
 *     In main(), call all three versions and print the results.
 *
 *   Part B — Method Overriding (Runtime Polymorphism):
 *     Create a parent class `Employee`:
 *       - Property: name (String), baseSalary (double)
 *       - Method: calculateSalary() → returns baseSalary
 *       - Method: display() → prints name and calculated salary
 *
 *     Create a child class `Manager` that extends `Employee`:
 *       - Additional property: bonus (double)
 *       - OVERRIDE calculateSalary() → returns baseSalary + bonus
 *       - Call the parent's calculateSalary() using `super` inside
 *         the overriding method (to show super usage), then add bonus.
 *
 *     In main():
 *       1. Create an Employee and call display().
 *       2. Create a Manager and call display().
 *       3. Show that the same method name behaves differently (polymorphism).
 *
 * CONCEPTS TESTED:
 *   - Method overloading (same name, different parameters)
 *   - Method overriding (@Override annotation)
 *   - `super` keyword to call parent method
 *   - Compile-time vs Runtime polymorphism
 * ============================================================
 */

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(5, 5));
        System.out.println(calc.add(3, 3, 4));
        System.out.println(calc.add(2.75, 7.25));

        Employee e = new Employee("Raju", 40000);
        e.display();

        Manager m = new Manager("Raj", 40000, 5000);
        m.display();
    }
}
