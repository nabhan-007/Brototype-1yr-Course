package Task_2_and_Task_3;

public class Main {
    public static void main(String[] args) {
        try {
            int num = 1 / 0;
            System.out.println(num);
        } catch (ArithmeticException e) {
            System.out.println("Division by zero error!!");
        } catch (Exception e) {
            System.out.println("Unknown Exception!!");
            e.printStackTrace();
        } finally {
            System.out.println("Program execution completed");
        }
    }
}
