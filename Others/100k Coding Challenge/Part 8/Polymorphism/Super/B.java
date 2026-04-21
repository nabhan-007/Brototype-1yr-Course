package Polymorphism.Super;

public class B extends A {
    B() {
        System.out.println("Constructor: B");
    }

    B(int a) {
        // super(10); // If need to call Arg. Constructor of `A`. Also, should be first line
        System.out.println("Arg. Constructor: B");
    }

    void display() {
        System.out.println("I will not run, if used `Super`");
    }

    void baseDisplay() {
        super.display();
    }
}
