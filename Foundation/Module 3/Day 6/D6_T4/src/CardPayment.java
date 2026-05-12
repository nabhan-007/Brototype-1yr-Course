public class CardPayment extends PaymentMethod {
	@Override
	void pay(double amount) {
		System.out.println("Paid using Card: " + amount);
	}
}