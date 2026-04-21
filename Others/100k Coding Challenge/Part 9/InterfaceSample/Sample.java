package InterfaceSample;

public class Sample implements InnerHello {
    Sample() {
        TextScanner ts = new TextScanner(this);
        ts.scan();
    }

    // THE FIX: You must explicitly state it is public to match the interface
    public void onText(String text) {
        System.out.println(text);
    }

    public static void main(String[] args) {
        Sample s = new Sample();
    }
}
