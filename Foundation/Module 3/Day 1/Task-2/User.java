public class User {
    String name, place, email, phoneNumber;
    int age;

    User() {
        this.name = "Unknown";
        this.age = 0;
        this.place = "Unknown";
        this.email = "Not Provided";
        this.phoneNumber = "Not Provided";
    }

    User(String name, int age, String place, String email, String phoneNumber) {
        this.name = name;
        this.age = age;
        this.place = place;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    void displayDetails() {
        System.out.println("\n--- User Details ---");
        System.out.println("Name: " + this.name);
        System.out.println("Age: " + this.age);
        System.out.println("Place: " + this.place);
        System.out.println("Email: " + this.email);
        System.out.println("Phone: " + this.phoneNumber);
        System.out.println("--------------------\n");
    }
}
