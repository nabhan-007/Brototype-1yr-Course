public class Main {
    public static void main(String[] args) {
        Employee e = new Employee("Jack", 40000);
        e.calculateSalary();
        e.showSalaries();

        Manager m = new Manager("Frank", 60000);
        m.calculateSalary();
        m.showSalaries();
    }
}

class Employee {
    String name;
    int salary;

    Employee(String name, int salary) {
        this.name = name;
        this.salary = salary;
    }

    int calculateSalary() {
        return salary;
    }

    void showSalaries() {
        System.out.println("Employee salary : " + salary);
    }
}

class Manager extends Employee {
    int bonus = 20000;

    Manager(String name, int salary) {
        super(name, salary);
    }

    @Override
    int calculateSalary() {
        // Use super to call parent method
        int normalSalary = super.calculateSalary();
        salary = normalSalary + bonus;
        return salary;
    }

    @Override
    void showSalaries() {
        System.out.println("Manager salary : " + salary);
    }
}
