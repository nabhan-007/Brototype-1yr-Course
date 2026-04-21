package OOPs;
public class classSample {
    int a, b, c, calcDone = 0;

    void display() {
        System.out.println("a: " + a + "\tb: " + b);
    }

    void calcSum() {
        c = a + b;
        calcDone = 1;
    }

    void displaySum() {
        if (calcDone == 1) {
            System.out.println("Sum: " + c);
        } else {
            System.out.println("Sum Not Calculated !! Run `calcSum()` first");
        }
    }
}
