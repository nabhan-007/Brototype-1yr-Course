abstract public class Vehicle {
    String brand;
    double rentalPricePerDay;

    Vehicle(String brand, double rentalPricePerDay) {
        this.brand = brand;
        this.rentalPricePerDay = rentalPricePerDay;
    }

    abstract String getFuelType();

    double calculateRent(int days) {
        return rentalPricePerDay * days;
    }

    void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Fuel Type: " + getFuelType());
        System.out.println("Price Per Day: " + rentalPricePerDay);
    }
}
