public class Staff extends User {
    String staffId;

    Staff(String name, String staffId) {
        super(name);
        this.staffId = staffId;
    }

    void showStaff() {
        System.out.println("Staff ID: " + staffId);
    }
}