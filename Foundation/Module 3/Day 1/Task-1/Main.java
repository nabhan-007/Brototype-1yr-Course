public class Main {
    public static void main(String[] args) {
        User user1 = new User();
        user1.name = "Mohanlal Viswanathan";
        user1.age = 65;
        user1.place = "Kollam";
        user1.email = "Not publicly available";
        user1.phoneNumber = "22-55-55";
        user1.displayDetails();

        User user2 = new User();
        user2.name = "Muhammad Kutty Panaparambil Ismail";
        user2.age = 74;
        user2.place = "Alappuzha";
        user2.email = "Not publicly available";
        user2.phoneNumber = "Not publicly available";
        user2.displayDetails();
    }
}