public class Main {
    public static void main(String[] args) {
        Student student1 = new Student("Raju", 89);
        student1.displayDetails();

        Student student2 = new Student("Manju", 99);
        student2.setMarks(100);
        student2.displayDetails();
    }
}
