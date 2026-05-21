public class BankAccount {
    private double balance;

    BankAccount(double balance) {
        this.balance = balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("New Balance: " + balance);
        } else {
            System.out.println("Amount should be greater than zero");
        }
    }

    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("New Balance: " + balance);
        } else {
            System.out.println("Amount greater than balance");
        }
    }

    public double getBalance() {
        return balance;
    }
}
