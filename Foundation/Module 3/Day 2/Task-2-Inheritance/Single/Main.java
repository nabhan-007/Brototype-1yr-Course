public class Main {
    public static void main(String[] args) {
        Employee employee = new Employee("Ajmal", 665, 30000);
        employee.work();

        Manager manager = new Manager("Razak", 108, 90000);
        manager.work();
    }
}