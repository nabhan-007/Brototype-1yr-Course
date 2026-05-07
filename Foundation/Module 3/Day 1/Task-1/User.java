public class User {
    String name, place, email, phoneNumber;
    int age;

    void displayDetails() {
        System.out.println("\n--- User Details ---");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Place: " + place);
        System.out.println("Email: " + email);
        System.out.println("Phone: " + phoneNumber);
        System.out.println("--------------------\n");
    }
}
