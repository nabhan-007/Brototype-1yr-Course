public class Student {
    public String name;
    private int marks;

    Student() {
        name = "Unknown";
        marks = 0;
    }

    Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }

    public void setMarks(int marks) {
        if (marks <= 100) {
            this.marks = marks;
        }
    }

    public int getMarks() {
        return marks;
    }

    public void displayDetails() {
        System.out.println("Name: " + name + "\nMarks: " + marks);
    }
}
