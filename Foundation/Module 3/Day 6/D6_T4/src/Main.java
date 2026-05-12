/*
Abstraction Task: 
Abstract class PaymentMethod 
• abstract method pay(double amount) 
• Implement in UPIPayment and CardPayment
 */
public class Main {
	public static void main(String[] args) {
		PaymentMethod gpay = new UPIPayment();
		gpay.pay(5615.35);

		PaymentMethod visa = new CardPayment();
		visa.pay(69835.65);
	}
}
