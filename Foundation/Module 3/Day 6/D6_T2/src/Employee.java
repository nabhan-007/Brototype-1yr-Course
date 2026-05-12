public class Employee {
	String name;
	int id;

	Employee(String name, int id) {
		this.name = name;
		this.id = id;
	}

	void work() {
		System.out.println(name + " (ID: " + id + ") is working");
	}
}
