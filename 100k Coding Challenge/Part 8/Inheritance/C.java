package Inheritance;

public class C {
    // Constructor of A will run first because it's the `Base/Parent`
    C() {
        System.out.println("Constructor: C");
    }

    public static void main(String[] args) {
        B b = new B();
        b.displayA(); // `B` inherited `displayA()` from `A`
        b.displayB();
    }
}
