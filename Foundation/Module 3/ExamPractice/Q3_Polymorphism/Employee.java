public class Employee {
    String name;
    double baseSalary;

    Employee(String name, double baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    double calculateSalary() {
        return baseSalary;
    }

    void display() {
        System.out.println("Name: " + name);
        System.out.println("Calculated Salary: " + calculateSalary());
    }
}
