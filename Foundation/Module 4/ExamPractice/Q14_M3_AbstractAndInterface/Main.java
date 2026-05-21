/*
 * ============================================================
 * EXAM PRACTICE - Question 14: Java OOPs - Abstract Class + Interface (Module 3)
 * ============================================================
 *
 * TASK:
 *   You are given this structure:
 *
 *   abstract class Animal {
 *       abstract void makeSound();
 *       void breathe() { System.out.println("Breathing..."); }
 *   }
 *
 *   interface Swimmable {
 *       void swim();
 *   }
 *
 *   1. Create the `Duck` class that extends `Animal` AND implements `Swimmable`.
 *      - makeSound() → prints "Quack!"
 *      - swim()      → prints "Duck is swimming."
 *   2. In main(), create a Duck object and call all 3 methods:
 *      makeSound(), breathe(), swim().
 *   3. Try writing: Animal a = new Animal(); — what happens? Add a comment explaining.
 *
 * CONCEPTS TESTED:
 *   - Abstract class cannot be instantiated
 *   - A class can extend one abstract class AND implement multiple interfaces
 *   - Overriding abstract methods is mandatory
 * ============================================================
 */

public class Main {
    public static void main(String[] args) {
        Duck duck = new Duck();
        duck.makeSound();
        duck.breathe();
        duck.swim();

        // Animal a = new Animal();
        // Cannot instantiate and abstract class
    }
}

class Duck extends Animal implements Swimmable {
    public void makeSound() {
        System.out.println("Quack!");
    }

    @Override
    public void swim() {
        System.out.println("Duck is swimming.");
    }
}

abstract class Animal {
    abstract void makeSound();

    void breathe() {
        System.out.println("Breathing...");
    }
}

interface Swimmable {
    void swim();
}


// ==========================================
// EXAMINER REMARKS:
// Score: 9/10
//
// Excellent implementation! Duck correctly extends Animal and implements Swimmable.
// makeSound() and swim() are both correctly implemented.
// The comment about Animal a = new Animal() is correct — abstract classes cannot
// be instantiated.
//
// One minor note: makeSound() in Duck is missing the @Override annotation.
// While it works without it, @Override is best practice and signals your intent
// clearly to both the compiler and the examiner. Always add it when overriding.
// ==========================================
