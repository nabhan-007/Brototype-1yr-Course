package Task_1;

public class Main {
    public static void main(String[] args) {
        /*
         * Compile‑time error
         */
        Phone p = new Phone();
        p.start();

        /*
         * Runtime exception
         */
        int a = 10;
        int b = 0;
        // ❌ Division by zero
        int result = a / b;
        System.out.println("Result: " + result);
    }
}

abstract class Device {
    abstract void start();

    abstract void stop();
}

class Phone extends Device {
    // ❌ Forgot to implement stop()
    @Override
    void start() {
        System.out.println("Phone started");
    }
}
