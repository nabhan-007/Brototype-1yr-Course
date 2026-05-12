public class PDFReportGenerator extends ReportGenerator {
	String format = "PDF";

	@Override
	void generate(int id) {
		System.out.println("(ID: " + id + ") Report Generated in " + format + " format");
	}
}
