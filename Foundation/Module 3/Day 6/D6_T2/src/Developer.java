public class Developer extends Employee {
	String role;

	Developer(String name, int id, String role) {
		super(name, id);
		this.role = role;
	}

	@Override
	void work() {
		System.out.println(name + " (ID: " + id + ") is working as a " + role);
	}
}
