package ThreadsSample.RunnableInterface;

public class Hello {
    public static void main(String[] args) {
        SampleThread st1 = new SampleThread(1);
        Thread t1 = new Thread(st1);
        t1.start();

        SampleThread st2 = new SampleThread(2);
        Thread t2 = new Thread(st2);
        t2.start();
    }
}
