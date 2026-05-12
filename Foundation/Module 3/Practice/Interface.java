interface Payment {
    void pay();
}

class UPI implements Payment {
    public void pay() {
        System.out.println("Payment via UPI");
    }
}

class Card implements Payment {
    public void pay() {
        System.out.println("Payment via Card");
    }
}

public class Interface {
    public static void main(String[] args) {
        Payment p1 = new UPI();
        p1.pay();

        Payment p2 = new Card();
        p2.pay();
    }
}
