public class ElectricCar extends Vehicle {
    int batteryRange;

    ElectricCar(String brand, double rentalPricePerDay, int batteryRange) {
        super(brand, rentalPricePerDay);
        this.batteryRange = batteryRange;
    }

    @Override
    String getFuelType() {
        return "Electric";
    }

    @Override
    void displayInfo() {
        super.displayInfo();
        System.out.println("Battery Range: " + batteryRange);
    }
}
