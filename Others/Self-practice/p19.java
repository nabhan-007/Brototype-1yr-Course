public class p19 {
    public static void main(String[] args) {
        Car c = new Car();
        c.getEngineSpeed();
        // c.changeEngineSpeed(100); // Cannot do that
    }
}

public class Car {
    private int engineSpeed = 50;

    public int getEngineSpeed() {
        return this.engineSpeed;
    }

    void test(int a, double b) {
        System.out.println(1);
    }

    void test(double b, int a) {
        System.out.println(2);
    }

    private void changeEngineSpeed(int engineSpeed) {
        this.engineSpeed = engineSpeed;
    }
}