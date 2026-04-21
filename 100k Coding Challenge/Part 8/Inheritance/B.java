package Inheritance;

public class B extends A {
    // Constructor of A will run first because it's the `Base/Parent`
    B() {
        System.out.println("Constructor: B");
    }

    void displayB() {
        System.out.println("Displaying B");
    }
}
