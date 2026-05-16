/*
 * ============================================================
 * EXAM PRACTICE - Question 4: Abstraction (Abstract Class)
 * ============================================================
 *
 * TASK:
 *   You are building a vehicle rental system.
 *
 *   Create an abstract class `Vehicle`:
 *     - Properties: brand (String), rentalPricePerDay (double)
 *     - Parameterized constructor
 *     - Abstract method: getFuelType() → returns a String
 *     - Concrete method: calculateRent(int days) →
 *         returns rentalPricePerDay * days
 *     - Concrete method: displayInfo() →
 *         prints brand, fuel type, and price per day
 *
 *   Create concrete subclass `ElectricCar` extends `Vehicle`:
 *     - Additional property: batteryRange (int) in km
 *     - Implement getFuelType() → returns "Electric"
 *     - Override displayInfo() to also print battery range,
 *       then call super.displayInfo() for the base info.
 *
 *   Create concrete subclass `PetrolBike` extends `Vehicle`:
 *     - Additional property: engineCC (int)
 *     - Implement getFuelType() → returns "Petrol"
 *     - Override displayInfo() to also print engine CC.
 *
 *   In main():
 *     1. Create an ElectricCar ("Tesla", 150.0, 500) and a
 *        PetrolBike ("Yamaha", 40.0, 150).
 *     2. Call displayInfo() on both.
 *     3. Calculate and print the rent for ElectricCar for 5 days
 *        and PetrolBike for 3 days.
 *
 * CONCEPTS TESTED:
 *   - Abstract class & abstract methods
 *   - Concrete methods in abstract class
 *   - Implementing abstract methods in subclasses
 *   - Calling super methods from overriding method
 *   - Cannot instantiate abstract class directly
 * ============================================================
 */

public class Main {
    public static void main(String[] args) {
        Vehicle ec = new ElectricCar("Tesla", 150.0, 500);
        ec.displayInfo();
        System.out.println("Rent for 5 days: " + ec.calculateRent(5));

        System.out.println("");

        Vehicle pb = new PetrolBike("Yamaha", 40.0, 150);
        pb.displayInfo();
        System.out.println("Rent for 3 days: " + pb.calculateRent(3));
    }
}
