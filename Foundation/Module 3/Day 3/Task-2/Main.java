public class Main {
    public static void main(String[] args) {
        BankAccount user1 = new BankAccount("000684835", 50000);
        user1.deposit(1000);
        System.out.println("Account Balance: " + user1.getBalance());
        user1.withdraw(100);
        user1.displayDetails();

    }
}
