public class Employee {
    String department;
    int id, salary;

    Employee() {
        this.id = 0;
        this.salary = 0;
        this.department = "Not Provided";
    }

    Employee(int id, int salary, String department) {
        this.id = id;
        this.salary = salary;
        this.department = department;
    }

    void displayDetails() {
        System.out.println("\n--- Employee Details ---");
        System.out.println("ID: " + this.id);
        System.out.println("Salary: " + this.salary);
        System.out.println("Department: " + this.department);
        System.out.println("------------------------\n");
    }

}
