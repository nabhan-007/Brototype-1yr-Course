package OOPs;
public class classHello {
    public static void main(String ar[]) {
        classSample s1 = new classSample();
        classSample s2 = new classSample();

        s1.a = 100;
        s1.b = 200;
        s2.a = 300;
        s2.b = 400;

        s1.display();
        s2.display();

        s1.calcSum();
        // s2.calcSum();
        s1.displaySum();
        s2.displaySum();
    }
}
