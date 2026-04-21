package Polymorphism.Super;

public class C {
    public static void main(String[] args) {
        B b = new B();
        b.display(); // Function not using `super`
        b.baseDisplay(); // Function using `super`

        B b1 = new B(10);
        // Uncomment `B:line-09` to print `Arg. Constructor` of A
    }
}
