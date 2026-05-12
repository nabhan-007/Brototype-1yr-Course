public class Employee {
    String name;
    int id, salary;

    Employee() {
        name = "Unknown";
        id = 0;
        salary = 0;
    }

    Employee(String name, int id, int salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    void work() {
        System.out.println(name + " (ID: " + id + ") is working.");
    }
}
