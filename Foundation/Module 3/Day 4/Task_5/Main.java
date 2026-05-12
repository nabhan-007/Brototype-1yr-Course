package Task_5;

class Student {
    private String name; // instance variable

    public Student(String name) {
        this.name = name; // 'this' differentiates instance variable from local variable
    }

    public void display() {
        System.out.println("Name: " + this.name);
    }
}

class Person {
    public Person(String role) {
        System.out.println("Role: " + role);
    }
}

class Employee extends Person {
    public Employee() {
        super("Employee"); // calls parent constructor
        System.out.println("Employee constructor called");
    }
}

class Counter {
    static int count = 0; // shared across all objects

    public Counter() {
        count++;
        System.out.println("Object created. Count = " + count);
    }
}

public class Main {
    public static void main(String[] args) {
        new Counter(); // count += 1
        new Counter(); // count += 1
        Counter.count = 99; // Only class name is required
        new Counter(); // count += 1
    }
}

class Config {
    final int MAX_USERS = 100; // constant value

    public void showLimit() {
        System.out.println("Max users allowed: " + MAX_USERS);
    }
}
