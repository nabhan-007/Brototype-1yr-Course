public class ExceptionHandling {
    public static void main(String[] args) {
        try {
            // will execute first and got to catch section if Exception occured
            System.out.println("Trying...");
            int num = 1 / 0;
            System.out.println(num);
        } catch (Exception e) {
            // Will only execute if an Exception occured in try section
            System.out.println("Catched - " + e);
        } finally {
            // Will execute no matter what happens above
            System.out.println("finally");
        }
    }
}
