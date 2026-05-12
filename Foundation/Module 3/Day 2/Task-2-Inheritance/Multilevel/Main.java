class Main {
    public static void main(String[] args) {
        Admin admin = new Admin("Muhammed", "S101", "SuperAdmin");
        admin.showUser(); // from User
        admin.showStaff(); // from Staff
        admin.showAdmin(); // from Admin
    }
}