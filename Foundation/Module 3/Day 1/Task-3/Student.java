public class Student {
    String name, course;
    int rollNo;

    Student() {
        this.name = "Not Provided";
        this.rollNo = 0;
        this.course = "Not Provided";
    }

    Student(String name, int rollNo, String course) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course;
    }

    void displayDetails() {
        System.out.println("\n--- Student Details ---");
        System.out.println("Name: " + this.name);
        System.out.println("Roll Number: " + this.rollNo);
        System.out.println("Course: " + this.course);
        System.out.println("-----------------------\n");
    }
}
