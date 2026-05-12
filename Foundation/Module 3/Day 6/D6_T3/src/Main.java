/*
Polymorphism Task: 
ReportGenerator class 
• generate(int id) 
• generate(int id, String format) 
• Override generate() in PDFReportGenerator
 */
public class Main {
	public static void main(String[] args) {
		ReportGenerator repgen = new ReportGenerator();
		repgen.generate(65);

		ReportGenerator repgen1 = new ReportGenerator();
		repgen1.generate(66, "DOCX");

		PDFReportGenerator pdfGen = new PDFReportGenerator();
		pdfGen.generate(67);
	}
}
