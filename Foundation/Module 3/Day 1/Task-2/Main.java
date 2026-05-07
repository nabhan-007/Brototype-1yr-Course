public class Main {
    public static void main(String[] args) {
        User user1 = new User("Mohanlal Viswanathan", 65, "Kollam", "Not publicly available", "22-55-55");
        user1.displayDetails();

        User user2 = new User();
        user2.name = "Muhammad Kutty Panaparambil Ismail";
        user2.age = 74;
        user2.place = "Alappuzha";
        user2.displayDetails();
    }
}