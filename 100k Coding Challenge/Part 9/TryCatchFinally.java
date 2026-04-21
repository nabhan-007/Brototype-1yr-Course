public class TryCatchFinally {
    public static void main(String[] args) {
        try {
            System.out.println("I try to run");
            int a = 1 / 0;
            System.out.println(a);
        } catch (ArithmeticException ae) {
            System.out.println("Arithmetical Error!! - " + ae);
        } catch (Exception e) {
            System.out.println("I catch the Exception and gives it here if not specifically mentioned above");
            System.out.println(e); // Printing the Exception
        } finally {
            System.out.println("I run regardless of what happened above : )");
        }
    }
}
