public class StudentRecord {
    private String name;
    private int rollNumber;
    private double marks;
    private String grade;

    StudentRecord(String name, int rollNumber, double marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        setMarks(marks);
    }

    void setName(String name) {
        this.name = name;
    }

    void setRollNumber(int rollNumber) {
        this.rollNumber = rollNumber;
    }

    void setMarks(double marks) {
        if (marks < 0 || marks > 100) {
            System.out.println("Invalid marks!");
        } else {
            this.marks = marks;
            this.grade = calculateGrade(marks);
        }
    }

    String calculateGrade(double marks) {
        if (marks >= 90) {
            return "A+";
        } else if (marks >= 80) {
            return "A";
        } else if (marks >= 70) {
            return "B";
        } else if (marks >= 60) {
            return "C";
        } else {
            return "F";
        }
    }

    String getName() {
        return name;
    }

    int getRollNumber() {
        return rollNumber;
    }

    double getMarks() {
        return marks;
    }

    String getGrade() {
        return grade;
    }

    void displayReport() {
        System.out.println("");
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
        System.out.println("Grade: " + grade);
        System.out.println("");
    }
}
