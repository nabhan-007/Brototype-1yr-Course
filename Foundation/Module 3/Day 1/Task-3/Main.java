public class Main {
    public static void main(String[] args) {
        Student student = new Student("Arjun", 21, "Commerce");
        student.displayDetails();

        Employee employee = new Employee(35, 40000, "Marketing");
        employee.displayDetails();

        Product product = new Product("KitKat", "Chocolate", 19.99);
        product.displayDetails();

        Movie movie = new Movie("24", "00:00:00", 8.5);
        movie.displayDetails();

        BankAccount bankAccount = new BankAccount("00051003564", "Raj Kumar", 868461.56);
        bankAccount.displayDetails();
    }
}