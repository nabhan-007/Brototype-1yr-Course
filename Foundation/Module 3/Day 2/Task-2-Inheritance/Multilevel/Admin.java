public class Admin extends Staff {
    String role;

    Admin(String name, String staffId, String role) {
        super(name, staffId);
        this.role = role;
    }

    void showAdmin() {
        System.out.println("Admin Role: " + role);
    }
}
