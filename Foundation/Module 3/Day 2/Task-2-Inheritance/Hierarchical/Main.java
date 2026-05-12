public class Main {
    public static void main(String[] args) {
        SavingsAccount sa = new SavingsAccount("SA101", 5000, 0.05);
        sa.showBalance();
        sa.addInterest();
        sa.showBalance();

        CurrentAccount ca = new CurrentAccount("CA202", 2000, 1000);
        ca.showBalance();
        ca.withdraw(2500);
        ca.showBalance();
    }
}