public class PetrolBike extends Vehicle {
    int engineCC;

    PetrolBike(String brand, double rentalPricePerDay, int engineCC) {
        super(brand, rentalPricePerDay);
        this.engineCC = engineCC;
    }

    @Override
    String getFuelType() {
        return "Petrol";
    }

    @Override
    void displayInfo() {
        super.displayInfo();
        System.out.println("Engine CC: " + engineCC);
    }
}
