public class Student extends Person {
    String course;
    int rollNo;

    Student() {
        this.course = "Not Provided";
        this.rollNo = 0;
    }

    Student(String course, int rollNo) {
        this.course = course;
        this.rollNo = rollNo;
    }

    Student(String name, int age, String course, int rollNo) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.rollNo = rollNo;
    }

    void displayInfo() {
        super.displayInfo();
        System.out.println("Course: " + course);
        System.out.println("Roll Number: " + rollNo);
    }
}
