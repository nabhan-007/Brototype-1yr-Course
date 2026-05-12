public class Main extends AccessModifiers {
    public static void main(String[] args) {
        AccessModifiers am = new AccessModifiers();
        // Will not work: `The field PrivateClass.gmailPassword is not visible`
        // System.out.println(am.gmailPassword);
        System.out.println(am.getPrivate());

        System.out.println(am.igPassword);

        Main childClass = new Main();
        System.out.println(childClass.inheritance);
    }
}
