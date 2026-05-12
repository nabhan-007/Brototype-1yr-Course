abstract class Course {
    abstract int calculateFee();
}

class OnlineCourse extends Course {
    int fees = 10000;

    int calculateFee() {
        return fees;
    }
}

class OfflineCourse extends Course {
    int fees = 30000;

    int calculateFee() {
        return fees;
    }
}

public class Main {
    public static void main(String[] args) {
        OnlineCourse on = new OnlineCourse();
        System.out.println("Online Course Fees: " + on.calculateFee());

        OfflineCourse off = new OfflineCourse();
        System.out.println("Offline Course Fees: " + off.calculateFee());
    }
}
