public class ReportGenerator {
	void generate(int id) {
		System.out.println("(ID: " + id + ") Report Generated");
	}

	void generate(int id, String format) {
		System.out.println("(ID: " + id + ") Report Generated in " + format + " format");
	}
}
