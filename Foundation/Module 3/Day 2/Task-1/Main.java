class Main {
    public static void main(String[] args) {
        Person person = new Person("Joseph", 36);
        person.displayInfo();

        Student student = new Student("Ahmed", 17, "Science", 12);
        student.displayInfo();

        Student student1 = new Student("Science", 13);
        student1.displayInfo();
    }
}