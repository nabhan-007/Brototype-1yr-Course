/*
 * ============================================================
 * EXAM PRACTICE - Question 16: Java OOPs - Runtime Polymorphism (Module 3)
 * ============================================================
 *
 * TASK:
 *   1. Predict the EXACT output of this code and explain WHY.
 *
 *      class Vehicle {
 *          void start() { System.out.println("Vehicle starting"); }
 *      }
 *      class Car extends Vehicle {
 *          @Override
 *          void start() { System.out.println("Car starting"); }
 *      }
 *      public class Main {
 *          public static void main(String[] args) {
 *              Vehicle v = new Car();
 *              v.start();
 *          }
 *      }
 *
 *   2. The variable `v` is of type `Vehicle`, but we assigned a `Car` to it.
 *      Which version of `start()` gets called — Vehicle's or Car's?
 *      This is the core of which OOP concept?
 *
 * CONCEPTS TESTED:
 *   - Runtime (Dynamic) Polymorphism
 *   - Reference type vs Object type
 *   - Method Overriding resolution at runtime
 * ============================================================
 */

// Write the code here, add a comment with your predicted output and explanation.

class Vehicle {
    void start() {
        System.out.println("Vehicle starting");
    }
}

class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car starting");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v = new Car();
        v.start();

        // Your explanation: Vehicle is the reference type. As long as there is no
        // specific mathod for car, this is acceptabel.
        // Which method is called? Car's overridden method.
        // Why? the method has been over-ridden by Car,
        // What OOP concept is this? Runtime Polymorphism or method-overriding
    }
}


// ==========================================
// EXAMINER REMARKS:
// Score: 9/10
//
// Output prediction: CORRECT ✅ — "Car starting" is printed.
// Reason: CORRECT ✅ — Car's overridden method is called at runtime.
// OOP Concept identified: CORRECT ✅ — Runtime Polymorphism / Method Overriding.
//
// Minor deduction: Your explanation "as long as there is no specific method for
// Car, this is acceptable" is slightly muddled. The cleaner explanation is:
// "The reference type is Vehicle, but the OBJECT type is Car. Java JVM resolves
// method calls based on the OBJECT type at runtime, not the reference type.
// This is called Dynamic Method Dispatch."
// ==========================================
