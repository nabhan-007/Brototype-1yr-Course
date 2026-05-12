/*
Encapsulation Task: 
ATM class 
• private balance 
• deposit() 
• withdraw() with validation 
 */
public class Main {
	public static void main(String[] args) {
		ATM account1 = new ATM();
		account1.deposit(5000);
		System.out.println("Balance: " + account1.getBalance());
		account1.withdraw(2500);
		System.out.println("Balance: " + account1.getBalance());
	}
}
