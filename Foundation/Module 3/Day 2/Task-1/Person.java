public class Person {
    String name;
    int age;

    Person() {
        this.name = "Unknown";
        this.age = 0;
    }

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}
