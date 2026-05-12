public class UPIPayment extends PaymentMethod {
	@Override
	void pay(double amount) {
		System.out.println("Paid using UPI: " + amount);
	}
}