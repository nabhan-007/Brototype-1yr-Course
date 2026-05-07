public class BankAccount {
    String accNo, holderName;
    double balance;

    BankAccount() {
        this.accNo = "Not Provided";
        this.holderName = "Not Provided";
        this.balance = 0;
    }

    BankAccount(String accNo, String holderName, double balance) {
        this.accNo = accNo;
        this.holderName = holderName;
        this.balance = balance;
    }

    void displayDetails() {
        System.out.println("\n--- Bank Account Details ---");
        System.out.println("Account Number: " + this.accNo);
        System.out.println("Holder Name: " + this.holderName);
        System.out.println("Balance: " + this.balance);
        System.out.println("----------------------------\n");
    }
}
