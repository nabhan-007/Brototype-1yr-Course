public class BankCustomer extends Person {
    String accountNumber;
    double balance;

    BankCustomer(String name, int age, String accountNumber, double balance) {
        super(name, age);
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    void showAccount() {
        System.out.println("A/c Number: " + accountNumber);
        System.out.println("Balance: " + balance);
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount + ". New balance: " + balance);
        } else {
            System.out.println("Amount should be greater than zero");
        }
    }
}
