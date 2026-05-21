public class SavingsAccount extends BankAccount {
    private double interestRate;
    // * - A constructor that calls super() and sets interestRate
    // * - public void addInterest() (Calculates interest and deposits it)

    SavingsAccount(double balance, double interestRate) {
        super(balance);
        this.interestRate = interestRate;
    }

    public void addInterest() {
        double interest = getBalance() * (interestRate / 100);
        deposit(interest);
    }
}
