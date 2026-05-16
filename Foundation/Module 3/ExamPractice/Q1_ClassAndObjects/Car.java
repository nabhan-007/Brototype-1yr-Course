public class Car {
    String brand;
    String model;
    int year;
    double price;

    Car() {
        brand = "Unknown";
        model = "Unknown";
        year = 0;
        price = 0.0;
    }

    Car(String brand, String model, int year, double price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
    }

    void displayDetails() {
        System.out.println("----------------");
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("Price: " + price);
        System.out.println("----------------");
    }

    boolean isAffordable(double budget) {
        if (price <= budget) {
            return true;
        }
        return false;
    }
}
