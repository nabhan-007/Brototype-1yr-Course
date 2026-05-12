/*
 * Task 2:
 * Create program using:
 * • Inheritance
 * • Method overriding
 * • Try-catch-finally
 */
public class Main {
	public static void main(String[] args) {
		Parent p = new Parent();
		p.name = "Prabhakar";
		p.goToSchool();

		Child c = new Child();
		c.name = "Raju";
		c.goToSchool();
	}
}
