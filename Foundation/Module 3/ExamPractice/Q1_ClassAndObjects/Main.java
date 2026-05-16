/*
 * ============================================================
 * EXAM PRACTICE - Question 1: Class & Objects + Constructors
 * ============================================================
 *
 * TASK:
 *   Create a class called `Car` with the following:
 *
 *   Properties (instance variables):
 *     - brand   (String)
 *     - model   (String)
 *     - year    (int)
 *     - price   (double)
 *
 *   Constructors:
 *     1. Default constructor → sets brand="Unknown", model="Unknown",
 *        year=0, price=0.0
 *     2. Parameterized constructor → accepts all 4 values
 *
 *   Methods:
 *     - displayDetails() → prints all car information neatly
 *     - isAffordable(double budget) → returns true if price <= budget
 *
 *   In main():
 *     1. Create one Car using the default constructor, then print its details.
 *     2. Create another Car using the parameterized constructor
 *        (e.g., "Toyota", "Camry", 2023, 25000.0), then print its details.
 *     3. Check if the second car is affordable for a budget of 30000.0
 *        and print an appropriate message.
 *
 * CONCEPTS TESTED:
 *   - Class definition & object creation
 *   - Default vs Parameterized constructors
 *   - Instance methods & return types
 *   - `this` keyword usage
 * ============================================================
 */

public class Main {
    public static void main(String[] args) {
        Car car0 = new Car();
        car0.displayDetails();

        Car car1 = new Car("Toyota", "Camry", 2023, 25000.0);
        car1.displayDetails();
        if (car1.isAffordable(30000.0)) {
            System.out.println(car1.brand + " " + car1.model + " (" + car1.year + ")" + " is affordable");
        }
    }
}
