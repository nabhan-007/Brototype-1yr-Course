public class BankAccount {
    private String accNo;
    private double balance;

    BankAccount() {
        this.accNo = "Not Provided";
        this.balance = 0;
    }

    BankAccount(String accNo, double balance) {
        this.accNo = accNo;
        this.balance = balance;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount; // Add to existing balance!
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrew: " + amount);
        } else {
            System.out.println("Invalid or insufficient funds.");
        }
    }

    public void displayDetails() {
        System.out.println("\n--- Bank Account Details ---");
        System.out.println("Account Number: " + this.accNo);
        System.out.println("Balance: " + this.balance);
        System.out.println("----------------------------\n");
    }
}
