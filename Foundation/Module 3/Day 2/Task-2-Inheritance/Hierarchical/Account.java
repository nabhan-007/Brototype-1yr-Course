public class Account {
    String accountNumber;
    double balance;

    Account(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    void showBalance() {
        System.out.println("Account " + accountNumber + "\nBalance: " + balance + "\n");
    }
}
