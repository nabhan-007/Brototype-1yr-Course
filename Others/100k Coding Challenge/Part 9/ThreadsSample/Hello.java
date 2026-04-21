package ThreadsSample;

public class Hello {
    public static void main(String[] args) {
        SampleThread st1 = new SampleThread(1);
        st1.start();

        SampleThread st2 = new SampleThread(2);
        st2.start();
    }
}
