class FeeCalculator {
    // Overloaded method 1
    int calculateFee(int amount) {
        return amount; // no discount
    }

    // Overloaded method 2
    int calculateFee(int amount, int discount) {
        return amount - discount; // apply discount
    }

    public static void main(String[] args) {
        FeeCalculator fc = new FeeCalculator();
        System.out.println("Fee without discount: " + fc.calculateFee(1000));
        System.out.println("Fee with discount: " + fc.calculateFee(1000, 200));
    }
}
