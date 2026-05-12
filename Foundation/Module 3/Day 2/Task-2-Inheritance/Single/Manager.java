public class Manager extends Employee {

    Manager() {
        super("Unknown", 0, 0);
    }

    Manager(String name, int id, int salary) {
        super(name, id, salary);
    }

    @Override
    void work() {
        System.out.println(name + " (ID: " + id + ") is managing.");
    }
}
