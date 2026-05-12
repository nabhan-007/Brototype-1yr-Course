public class Task1 {
    /*
     * Create a class that includes:
     * • private variables
     * • constructor
     * • getter/setter
     * • static variable
     * • final variable
     */
    public String name;
    private int age;
    static int count = 0; // when an object gets created; increment
    final double pi = 3.14; // constant

    Task1() {
        name = "Unknown";
        age = 0;
        count++;
    }

    Task1(String name, int age) {
        this.name = name;
        this.age = age;
        count++;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        }
    }
}
